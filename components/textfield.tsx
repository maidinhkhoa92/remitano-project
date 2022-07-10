import { TextField, OutlinedTextFieldProps} from "@mui/material";
import { Controller, Control } from "react-hook-form";
import React from "react";

interface Props extends OutlinedTextFieldProps {
  name: string
  control: Control
}

const HTextField: React.FC<Props> = ({ name, control, ...props}) => {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field }) => <TextField {...props} {...field} />}
      />
  )
}

export default HTextField