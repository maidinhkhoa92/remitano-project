import TextField from "@mui/material/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  
`

const HTextField = (props) => {
  return (
    <StyledTextField {...props} />
  )
}

export default HTextField