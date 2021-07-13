import React from "react";
import { useDispatch } from "react-redux";
import { deleteSymptoms } from "../../../redux/actions/carAction";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MaterialTable from "material-table";
import Head from "next/head";
import { Notify } from "notiflix";
import { useRouter } from "next/router";
const baseUrl = "http://localhost:5000/api/v1/cars";

export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/car`);
  const data = await res.json();
  const carsList = data.cars;
  return {
    props: { cars: carsList },
  };
};

const FetchSymptoms = ({ cars }) => {
  const dispatch = useDispatch();
  const loadedData = cars.data;
  const router = useRouter();

  const columns = [
    { title: "Id", field: "id" },
    { title: "Fault", field: "symptoms" },
    { title: "Solution", field: "solution" },
    { title: "Causes", field: "causes" },
    { title: "CarType", field: "carType" },
    { title: "Type", field: "type" },
    { title: "year Of Manufacture", field: "yearOfManufacture" },
    { title: "Created_at", field: "created_at" },
  ];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>All Faults</title>
      </Head>
      <Grid container>
        <Grid item sm={12} md={12} xs={12}>
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
              data={loadedData}
              editable={{
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    try {
                      dispatch(deleteSymptoms(oldData.id));
                      Notify.success("Deleted successfully");
                      router.push("/dashboard/allSymptoms");
                      resolve();
                    } catch (error) {
                      console.log(error);
                      reject(error);
                    }
                  }),
              }}
              actions={[
                {
                  icon: "visibility",
                  tooltip: "Edit",
                  onClick: (event, rowData) =>
                    router.push("/dashboard/editSymptom/" + rowData.id),
                },
              ]}
              title="All Faults"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

FetchSymptoms.layout = "DashboardLayout";

export default FetchSymptoms;
