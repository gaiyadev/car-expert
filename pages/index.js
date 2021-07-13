import React, { useEffect, useState } from "react";
import { Notify } from "notiflix";
import Head from "next/head";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import styles from "../styles/Home.module.css";
import MaterialTable from "material-table";
const baseUrl = "http://localhost:5000/api/v1/cars";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/car`);
  const data = await res.json();
  const carsList = data.cars;
  return {
    props: { cars: carsList },
  };
};

const Home = ({ cars }) => {
  const loadedData = cars.data;
  const router = useRouter();
  const columns = [
    { title: "Fault", field: "symptoms" },
    { title: "Solution", field: "solution" },
    { title: "Causes", field: "causes" },
    { title: "CarType", field: "carType" },
    { title: "Type", field: "type" },
    // { title: "year Of Manufacture", field: "yearOfManufacture" },
  ];
  useEffect(() => {
    Notify.success("Welcome to Car Expert");
  }, []);

  return (
    <Box>
      <Head>
        <title>Car Expert App</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>All issues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Box my={5}>
              <Typography color="primary" variant="h4" align="center" paragraph>
                TOYOTA KNOWLEDGEBASE
              </Typography>
            </Box>
            <Box my={5}>
              <Typography variant="body1" align="center">
                Diagnose your car without pains or stress at your comfort
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12} md={1} xs={12}></Grid>
          <Grid item sm={12} md={10} xs={12}>
            <Box style={{ maxWidth: "100%" }}>
              <Paper elevation={12} py={5} px={5}>
                <MaterialTable
                  options={{
                    actionsColumnIndex: -1,
                    // filtering: true,
                    search: true,
                    sorting: true,
                    headerStyle: {
                      backgroundColor: "#01579b",
                      color: "#FFF",
                      fontSize: "17px",
                      padding: "13px",
                    },
                  }}
                  actions={[
                    {
                      icon: "visibility",
                      tooltip: "Read More",
                      onClick: (event, rowData) =>
                        router.push("/fault/" + rowData.id),
                    },
                  ]}
                  columns={columns}
                  data={loadedData}
                  title="Search car Issues"
                />
              </Paper>
            </Box>
          </Grid>
          <Grid item sm={12} md={1} xs={12}></Grid>
        </Grid>
      </main>
    </Box>
  );
};
Home.layout = "defaultLayout";
export default Home;
