import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUserInfo } from "../../redux/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ScoreCard from "../../components/dashboard/scoreCard";
import PeopleIcon from "@material-ui/icons/People";
import BugReportIcon from "@material-ui/icons/BugReport";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Symtoms" stats="5" icon={<BugReportIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Users" stats="85" icon={<PeopleIcon />} />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard
            title="Type"
            stats="1"
            icon={
              <MergeTypeIcon
                style={{
                  backgroundColor: "#556cd6",
                  color: "#fff",
                }}
              />
            }
          />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <ScoreCard title="Blank" stats="0" icon={<AccountBalanceIcon />} />
        </Grid>
      </Grid>
    </div>
  );
};
Home.layout = "DashboardLayout";
export default Home;
