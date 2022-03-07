import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputWrapper from './InputWrapper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ButtonComponents from '../Button';

export default function ContactInput() {
  return (
    <InputWrapper>
        <Box 
        className='flex-col w-full'
      sx={{
        border: "none",
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        id="demo-helper-text-aligned"
        label="Full Name"
        className='w-full bg-inputcolor rounded-lg'
        sx = {{borderRadius: "8px",}}
      />
      <TextField
        id="demo-helper-text-aligned"
        label="Email"
        type="email"
        className='w-full bg-inputcolor rounded-lg'
        sx = {{borderRadius: "8px",}}
      />
      <TextField
        id="demo-helper-text-aligned"
        label="Subject"
        type="text"
        className='w-full bg-inputcolor rounded-lg'
        sx = {{borderRadius: "8px",}}
      />
      <TextareaAutosize
      aria-label="minimum height"
      minRows={6}
      placeholder="Message"
      className='w-full bg-inputcolor rounded-lg p-4'
    />
    </Box>
    </InputWrapper>
  );
}
