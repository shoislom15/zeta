import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'white',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails className='text-footerText flex flex-col flex-wrap gap-3 max-h-24'>
          <Typography><a>Landing</a></Typography>
          <Typography><a>Services</a></Typography>
          <Typography><a>Case Studies</a></Typography>
          <Typography><a>Case Study</a></Typography>
          <Typography><a>Blog Posts</a></Typography>
          <Typography><a>Blog Post</a></Typography>
          <Typography><a>About</a></Typography>
          <Typography><a>Contact</a></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Career</Typography>
        </AccordionSummary>
        <AccordionDetails className='text-footerText flex flex-col flex-wrap gap-3 max-h-24'>
            <Typography><a>Landing</a></Typography>
            <Typography><a>Services</a></Typography>
            <Typography><a>Case Studies</a></Typography>
            <Typography><a>Case Study</a></Typography>
            <Typography><a>Blog Posts</a></Typography>
            <Typography><a>Blog Post</a></Typography>
            <Typography><a>About</a></Typography>
            <Typography><a>Contact</a></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Common</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetails className='text-footerText flex flex-col flex-wrap gap-3 max-h-24'>
            <Typography><a>Landing</a></Typography>
            <Typography><a>Services</a></Typography>
            <Typography><a>Case Studies</a></Typography>
            <Typography><a>Case Study</a></Typography>
            <Typography><a>Blog Posts</a></Typography>
            <Typography><a>Blog Post</a></Typography>
            <Typography><a>About</a></Typography>
            <Typography><a>Contact</a></Typography>
        </AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Common</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetails className='text-footerText flex flex-col flex-wrap gap-3 max-h-24'>
            <Typography><a>Landing</a></Typography>
            <Typography><a>Services</a></Typography>
            <Typography><a>Case Studies</a></Typography>
            <Typography><a>Case Study</a></Typography>
            <Typography><a>Blog Posts</a></Typography>
            <Typography><a>Blog Post</a></Typography>
            <Typography><a>About</a></Typography>
            <Typography><a>Contact</a></Typography>
        </AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Common</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDetails className='text-footerText flex flex-col flex-wrap gap-3 max-h-24'>
            <Typography><a>Landing</a></Typography>
            <Typography><a>Services</a></Typography>
            <Typography><a>Case Studies</a></Typography>
            <Typography><a>Case Study</a></Typography>
            <Typography><a>Blog Posts</a></Typography>
            <Typography><a>Blog Post</a></Typography>
            <Typography><a>About</a></Typography>
            <Typography><a>Contact</a></Typography>
        </AccordionDetails>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
