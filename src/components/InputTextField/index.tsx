import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";

export const InputTextField = styled(TextField)({
  width: '100%',
  marginBottom: 24,

  '&:after': {
    color: 'white',
    borderBottomColor: 'white',
  },

  '& .MuiInput-root': {
    '&:before': {
      borderColor: 'white',
    },
  },

  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

