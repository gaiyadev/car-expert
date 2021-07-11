import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUserInfo,
  deleteUser,
} from "../../../redux/actions/authActions";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Notify } from "notiflix";
import MaterialTable from "material-table";
import Head from "next/head";

const Users = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.users);

  const [data, setData] = useState(user);
  const [columns, setColumns] = useState([
    { title: "Id", field: "id" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Created_at", field: "created_at" },
  ]);

  React.useEffect(() => {
    const loadedUser = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchAllUserInfo());
        setIsLoading(false);
      } catch (err) {
        console.log("ER", err);
        setIsLoading(false);
      }
    };
    loadedUser();
  }, [dispatch]);

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
                      dispatch(fetchAllUserInfo());
                      resolve();
                      Notify.success("Account deleted successfully");
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
