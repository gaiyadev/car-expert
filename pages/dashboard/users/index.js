import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MaterialTable from "material-table";
import Head from "next/head";

const Users = () => {
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

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>All User</title>
      </Head>
      <Grid container>
        <Grid item sm={12} md={1} xs={12}></Grid>
        <Grid item sm={12} md={8} xs={12}>
          <Box style={{ maxWidth: "100%" }}>
            <MaterialTable
              options={{
                actionsColumnIndex: -1,

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
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      setData([...data, newData]);

                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setData([...dataUpdate]);

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...data];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setData([...dataDelete]);

                      resolve();
                    }, 1000);
                  }),
              }}
              //   actions={[
              //     {
              //       icon: "save",
              //       tooltip: "Save User",
              //       onClick: (event, rowData) =>
              //         alert("You saved " + rowData.name),
              //     },
              //   ]}
              title="All Users"
            />
          </Box>
        </Grid>
        <Grid item sm={12} md={1} xs={12}></Grid>
      </Grid>
    </>
  );
};

Users.layout = "DashboardLayout";

export default Users;
