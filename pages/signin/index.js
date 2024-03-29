import React from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../../components/default/form/input";
import Button from "../../components/default/form/button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import { Email } from "@material-ui/icons";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { signIn } from "../../redux/actions/authActions";
import ProgressLoader from "../../components/default/progress/loading";
import { useRouter } from "next/router";
import ErrorAlert from "../../components/default/form/errorAlert";
import SuccessAlert from "../../components/default/form/successAlert";
// regex
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    padding: "36px",
    marginTop: "19px",
  },
}));

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showComfirmPassword: false,
    showPassword: false,
  });
  const [checked, setChecked] = React.useState(false);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <div className={classes.root}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}></Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Card className={classes.card}>
            <Box py={5}>
              <Typography variant="h4" color="primary" align="left">
                Sign In
              </Typography>
            </Box>
            <Box py={3}>
              {error ? (
                <ErrorAlert title={error} />
              ) : message ? (
                <SuccessAlert title={message} />
              ) : (
                ""
              )}
            </Box>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Email is invalid")
                  .matches(emailRegex, "Email is invalid ")
                  .required("Email is required"),
                password: Yup.string()
                  .min(6, "Password must be atleast 6 characters")
                  .matches(
                    passwordRegex,
                    "Password should contain atleast one number and one uppercase"
                  )
                  .required("Password is required"),
              })}
              onSubmit={async (values) => {
                try {
                  setIsLoading(true);
                  setError("");
                  await dispatch(signIn(values));
                  setIsLoading(false);
                  setMessage("Login successfully... redirecting");
                  router.push("/dashboard");
                } catch (err) {
                  setMessage("");
                  setError(err.message);
                  setIsLoading(false);
                }
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  {/* email */}
                  <Input
                    type="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    label="Email"
                    name="email"
                    error={props.errors.email ? true : false}
                    errortext={props.errors.email}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <Email
                                color={props.errors.email ? "error" : "primary"}
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Password */}
                  <Input
                    type={values.showPassword ? "text" : "password"}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    label="Password"
                    name="password"
                    error={props.errors.password ? true : false}
                    errortext={props.errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility
                                color={
                                  props.errors.password ? "error" : "primary"
                                }
                              />
                            ) : (
                              <VisibilityOff
                                color={
                                  props.errors.password ? "error" : "primary"
                                }
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={() => {
                          setChecked(!checked);
                          console.log(checked);
                        }}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    }
                    label="Remember me"
                  />

                  <Button
                    label={isLoading ? <ProgressLoader /> : "Sign In"}
                    type="submit"
                  />
                </form>
              )}
            </Formik>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} sm={12}></Grid>
      </Grid>
    </div>
  );
};

SignIn.layout = "defaultLayout";
export default SignIn;
