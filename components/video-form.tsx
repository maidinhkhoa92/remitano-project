import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import TextField from "./textfield";
import { useForm } from "react-hook-form";
import { insertVideo } from "../services/api";
import { useAppState } from "../provider";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Form = ({ setIsOpen }) => {
  const { control, handleSubmit } = useForm();
  const { setAlert } = useAppState()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: { url: string }) => {
    try {
      setLoading(true)
      await insertVideo(data.url)
    } catch (error) {
      setAlert({ status: true, message: "Can't share this video", type: "error" })
    } finally {
      setIsOpen(false)
      setLoading(false)
    }
  };

  return (

    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Share a Youtube movie
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="row" mt={2}>
          <Box mt={1} mr={2}>
            <Typography>Youtube URL:</Typography>
          </Box>
          <Box flex={1}>
            <Box mb={2}>
              <TextField fullWidth name="url" control={control} size="small" variant="outlined" required />
            </Box>
            <Button variant="outlined" type="submit" fullWidth disabled={loading}>Share</Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default Form;
