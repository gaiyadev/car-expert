import React from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Input from "../../../components/default/form/input";
import Textarea from "../../../components/default/form/textarea";
import Button from "../../../components/default/form/button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Person, PermDeviceInformation, Label } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { addSymptom } from "../../../redux/actions/carAction";
import ProgressLoader from "../../../components/default/progress/loading";
import ErrorAlert from "../../../components/default/form/errorAlert";
import SuccessAlert from "../../../components/default/form/successAlert";
// regex
const usernameRegex = /^[A-Za-z '' 0-9]+$/;

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

const Symptoms = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [values, setValues] = React.useState({
    showComfirmPassword: false,
    showPassword: false,
  });

  return (
    <div className={classes.root}>
      <Head>
        <title>Add Car Fault</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}></Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Card className={classes.card}>
            <Box py={3}>
              <Typography variant="h4" color="primary" align="left">
                Add Car Fault
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
                causes: "",
                solutions: "",
                carType: "",
                yearOfManufacture: "",
                type: "",
                symptoms: "",
              }}
              validationSchema={Yup.object({
                causes: Yup.string()
                  .matches(usernameRegex, "Causes is invalid ")
                  .required("Causes is required"),
                solutions: Yup.string()
                  .matches(usernameRegex, "solutions is invalid ")
                  .required("Solutions is required"),
                carType: Yup.string()
                  .matches(usernameRegex, "car type is invalid ")
                  .required("Car type is required"),
                yearOfManufacture: Yup.string()
                  .matches(usernameRegex, "Year of Manufacture is invalid ")
                  .required("Year of Manufacture is required"),
                type: Yup.string()
                  .matches(usernameRegex, "Car type is invalid ")
                  .required("Car type is required"),
                symptoms: Yup.string()
                  .matches(usernameRegex, "Car Fault is invalid ")
                  .required("Car Fault is required"),
              })}
              onSubmit={async (values, actions) => {
                try {
                  setIsLoading(true);
                  setError("");
                  await dispatch(addSymptom(values));
                  setIsLoading(false);
                  setMessage("Added successfully");
                } catch (err) {
                  setMessage("");
                  setError(err.message);
                  setIsLoading(false);
                }
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  {/* Car type */}
                  <Input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.carType}
                    label="Car  Type"
                    name="carType"
                    error={props.errors.carType ? true : false}
                    errortext={props.errors.carType}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <Person
                                color={
                                  props.errors.carType ? "error" : "primary"
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Car name */}
                  <Input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.type}
                    label="Car  Name"
                    name="type"
                    error={props.errors.type ? true : false}
                    errortext={props.errors.type}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <Person
                                color={props.errors.type ? "error" : "primary"}
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Year of Manufacture */}
                  <Input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.yearOfManufacture}
                    label="year of manufacture"
                    name="yearOfManufacture"
                    error={props.errors.yearOfManufacture ? true : false}
                    errortext={props.errors.yearOfManufacture}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <Person
                                color={
                                  props.errors.yearOfManufacture
                                    ? "error"
                                    : "primary"
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* symtoms */}
                  <Textarea
                    label="Fault"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <PermDeviceInformation
                                color={
                                  props.errors.causes ? "error" : "primary"
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    name="symptoms"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.symptoms}
                    error={props.errors.symptoms ? true : false}
                    errortext={props.errors.symptoms}
                  />

                  {/* causes */}
                  <Textarea
                    label="Causes"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <PermDeviceInformation
                                color={
                                  props.errors.causes ? "error" : "primary"
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    name="causes"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.causes}
                    error={props.errors.causes ? true : false}
                    errortext={props.errors.causes}
                  />

                  {/*solutions  */}
                  <Textarea
                    label="Solutions"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="end">
                            {
                              <Label
                                color={
                                  props.errors.solutions ? "error" : "primary"
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    name="solutions"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.solutions}
                    error={props.errors.solutions ? true : false}
                    errortext={props.errors.solutions}
                  />

                  <Button
                    label={isLoading ? <ProgressLoader /> : "Submit"}
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

Symptoms.layout = "DashboardLayout";
export default Symptoms;
