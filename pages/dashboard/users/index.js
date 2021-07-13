import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/actions/authActions";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Notify } from "notiflix";
import MaterialTable from "material-table";
import Head from "next/head";
import { useRouter } from "next/router";
const baseUrl = "http://localhost:5000/api/v1/users";

export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/`);
  const data = await res.json();
  const carsList = data.users;
  return {
    props: { users: carsList },
  };
};

const Users = ({ users }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const data = users.data;
  const columns = [
    { title: "Id", field: "id" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Created_at", field: "created_at" },
  ];

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
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    try {
                      dispatch(deleteUser(oldData.id));
                      resolve();
                      Notify.success("Account deleted successfully");
                      router.push("/dashboard/users");
                    } catch (error) {
                      reject(error);
                    }
                  }),
              }}
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
