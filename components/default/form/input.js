import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const Input = (props) => {
  const { label, errortext, error, InputProps } = props;
  return (
    <Box py={1}>
      <TextField
        InputProps={InputProps}
        id={label}
        fullWidth
        size="small"
        {...props}
        label={label}
        variant="outlined"
        error={error}
        helperText={errortext}
      />
    </Box>
  );
};

export default Input;
