import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Buttonn = (props) => {
  const { label } = props;
  return (
    <Box py={2}>
      <Button fullWidth size="medium" variant="contained" {...props} color="primary">
        {label}
      </Button>
    </Box>
  );
};

export default Buttonn;
