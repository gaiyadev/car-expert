import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const TextArea = (props) => {
  const { label, error, errortext, InputProps } = props;
  return (
    <Box py={1}>
      <TextField
        {...props}
        InputProps={InputProps}
        label={label}
        fullWidth
        rows={4}
        multiline
        variant="outlined"
        size="small"
        error={error}
        helperText={errortext}
      />
    </Box>
  );
};

export default TextArea;
