import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";

const ScoreCard = (props) => {
  const { title, stats, icon } = props;
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {stats}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "#556cd6",
                color: "#fff",
              }}
            >
              {icon}
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
