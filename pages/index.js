import React, { useEffect, useState } from "react";
import { Notify } from "notiflix";
import Head from "next/head";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import styles from "../styles/Home.module.css";
import MaterialTable from "material-table";

const Home = () => {
  const [data, setData] = useState([
    {
      username: "Mehmet",
      email: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      username: "Mehmet",
      email: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      username: "Mehmet",
      email: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      username: "Mehmet",
      email: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      username: "Mehmet",
      email: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      username: "Mehmet",
      email: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
  ]);
  const [columns, setColumns] = useState([
    { title: "UserName", field: "username" },
    { title: "EMail", field: "email" },
    { title: "RegOn", field: "birthYear", type: "numeric" },
  ]);
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
                    filtering: true,
                    search: true,
                    sorting: true,
                    headerStyle: {
                      backgroundColor: "#01579b",
                      color: "#FFF",
                      fontSize: "17px",
                      padding: "13px",
                    },
                  }}
                  columns={columns}
                  data={data}
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
