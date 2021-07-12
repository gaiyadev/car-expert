import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSymptoms,
  deleteSymptoms,
} from "../../../redux/actions/carAction";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MaterialTable from "material-table";
import Head from "next/head";
import Preloader from "../../../components/default/progress/loading";
import { Notify } from "notiflix";
import { useRouter } from "next/router";

const FetchSymptoms = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const loadedData = useSelector((state) => state.car.symptoms);

  React.useEffect(() => {
    const loadedSymptoms = async () => {
      try {
        setLoading(true);
        await dispatch(fetchSymptoms());
        setLoading(false);
      } catch (err) {
        console.log("ER", err);
        setLoading(false);
      }
    };
    loadedSymptoms();
  }, [dispatch]);

  const data = loadedData;

  const columns = [
    { title: "Id", field: "id" },
    { title: "Symtoms", field: "symptoms" },
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
        <title>All symptoms</title>
      </Head>
      <Grid container>
        <Grid item sm={12} md={12} xs={12}>
          <Box style={{ maxWidth: "100%" }}>
            {loading ? (
              <Preloader />
            ) : (
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
                columns={columns}
                data={data}
                editable={{
                  // onRowUpdate: (newData, oldData) =>
                  //   new Promise((resolve, reject) => {}),
                  onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                      try {
                        dispatch(deleteSymptoms(oldData.id));
                        dispatch(fetchSymptoms());
                        Notify.success("Deleted successfully");
                        resolve();
                        // router.push('/dashboard')
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
                title="All Symptoms"
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

FetchSymptoms.layout = "DashboardLayout";

export default FetchSymptoms;
