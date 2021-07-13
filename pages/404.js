import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Custom404 = () => {
  return (
    <Grid container>
      <Grid item md={12} sm={12} xs={12}>
        <Box mt={4}>
          <Typography variant="h1">Oops...(&apos; _ &apos;)</Typography>
          <Typography
            style={{
              paddingTop: "23px",
              paddingBottom: "23px",
            }}
            variant="h5"
          >
            404 - Page Not Found
          </Typography>
          <Link href="/">
            <a>
              <Button variant="contained" color="primary">
                Go back home
              </Button>
            </a>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

Custom404.layout = "defaultLayout";
export default Custom404;
