import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./faqs.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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
      : 'rgba(0, 0, 0, .03)',
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
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const FAQ = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div className="faqs">
    <div className="faq" >
    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='faqdetails'>
    <AccordionSummary style={{backgroundColor:"#16956C"}}
      expandIcon={<ExpandMoreIcon style={{color:"#fff"}}/>}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography style={{color:"white",fontSize:"18px"}}>What is Pace App?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography style={{width:"100%",textAlign:"justify"}}>
      Pace App is a non-profit organization with the goal of enabling students, especially those in senior secondary schools, to experience the rewards of acquiring knowledge at an early stage. This is in response to the rising issue of fraud among secondary school students, we are addressing this by introducing incentives for learning. 
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      style={{backgroundColor:"#16956C"}}
      className="faqdetails"
      expandIcon={<ExpandMoreIcon style={{color:"#fff"}}/>}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography style={{color:"white",fontSize:"18px"}}>How does the Pace App work?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography style={{width:"100%",textAlign:"justify"}} >
      The Pace App offers students the opportunity to practice 
      questions and engage in friendly competition with other learners through
       a leaderboard. We've gamified this experience so you can have fun while at it. 
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
  <AccordionSummary
    style={{backgroundColor:"#16956C"}}
    className="faqdetails"
    expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
    aria-controls="panel2a-content"
    id="panel2a-header"
  >
    <Typography style={{color:"white",fontSize:"18px"}}>Is there a fee to use the app?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{width:"100%",textAlign:"justify"}}>
    No, the app is completely free for everyone.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary
    style={{backgroundColor:"#16956C"}}
    className="faqdetails"
    expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
    aria-controls="panel2a-content"
    id="panel2a-header"
  >
    <Typography style={{color:"white",fontSize:"18px"}}>How can i qualify for rewards?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{width:"100%",textAlign:"justify"}}>
      We will organize scheduled live quizzes where learners can participate and compete.
       The top three winners will receive rewards. 
       We will provide detailed criteria for qualification soon.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary
    style={{backgroundColor:"#16956C"}}
    className="faqdetails"
    expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
    aria-controls="panel2a-content"
    id="panel2a-header"
  >
    <Typography style={{color:"white",fontSize:"18px"}}>Is the Pace App a Ponzi scheme?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{width:"100%",textAlign:"justify"}}>
    Absolutely not. The Pace App is not and will never be a Ponzi scheme.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary
  style={{backgroundColor:"#16956C"}}
  className="faqdetails"
  expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography style={{color:"white",fontSize:"18px"}}>How does the app fund learner rewards?</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography style={{width:"100%",textAlign:"justify"}}>
  We seek donations from well-meaning Nigerians, brands that focus on 
  Corporate Social Responsibility (CSR) in Education and Economic Empowerment,
   as well as advertising revenue generated from user activities on the platform.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary
  style={{backgroundColor:"#16956C"}}
  className="faqdetails"
  expandIcon={<ExpandMoreIcon style={{color:"#fff"}}/>}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography style={{color:"white",fontSize:"18px"}}>How can I get involved?</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography style={{width:"100%",textAlign:"justify"}}>
  There are several ways to contribute:
  <br />
  <strong>-</strong> You can make a donation.
  <br />
  <strong>-</strong> Share the community link to anyone that'll benefit from it. 
  <br />
  <strong>-</strong> Volunteer as a creator to help formulate questions for the platform.
  <br />
  <strong>-</strong> Volunteer as a tutor, which may involve teaching once a month or every two months.
  <br />

<strong>*Kindly reach out to Yusuf on 09032565436 for more enquiries.</strong> 

  </Typography>
</AccordionDetails>
</Accordion>
    </div>
    </div>
  )
}

export default FAQ
