import React from "react";
import Head from "next/head";
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
import { Person, Email } from "@material-ui/icons";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

// regex
const usernameRegex = /^[A-Za-z]+$/;
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

const SignUp = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    showComfirmPassword: false,
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickComfirmPassword = () => {
    setValues({
      ...values,

      showComfirmPassword: !values.showComfirmPassword,
    });
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}></Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Card className={classes.card}>
            <Box py={5}>
              <Typography variant="h4" color="primary" align="left">
                Sign Up
              </Typography>
            </Box>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                comfirmPassword: "",
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .min(3, "Username must be atleast 3 characters")
                  .max(20, "Username is too Long!")
                  .matches(
                    usernameRegex,
                    "Only alphabets are allowed for this field "
                  )
                  .required("Username is required"),
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
                comfirmPassword: Yup.string()
                  .oneOf(
                    [Yup.ref("password"), null],
                    "Password comfirmation fail"
                  )
                  .required("Comfirm password is required"),
              })}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.username}
                    label="Username"
                    name="username"
                    error={props.errors.username ? true : false}
                    errortext={props.errors.username}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <Person
                                color={
                                  props.errors.username ? "error" : "primary"
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

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

                  {/* Retype password */}
                  <Input
                    type={values.showComfirmPassword ? "text" : "password"}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.comfirmPassword}
                    label="Retype Password"
                    name="comfirmPassword"
                    error={props.errors.comfirmPassword ? true : false}
                    errortext={props.errors.comfirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            onClick={handleClickComfirmPassword}
                            edge="end"
                          >
                            {values.showComfirmPassword ? (
                              <Visibility
                                color={
                                  props.errors.comfirmPassword
                                    ? "error"
                                    : "primary"
                                }
                              />
                            ) : (
                              <VisibilityOff
                                color={
                                  props.errors.comfirmPassword
                                    ? "error"
                                    : "primary"
                                }
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button label="Sign Up" type="submit" />
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

SignUp.layout = "defaultLayout";
export default SignUp;
