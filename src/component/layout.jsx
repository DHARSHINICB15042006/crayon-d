import * as React from 'react';
import MainContent from './maincontent';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

  },
});




const styles = {
  fullScreenBox: {
    backgroundColor: '#FFFFFF',
    height: '690px',
    width: '1400px',
    padding: '12px',
    boxSizing: 'border-box',
    position: 'relative',
    left: '-65px',
    margin: 0,
    border: '1px ',
    borderRadius: '12px',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    border: '1px',
    borderRadius: '12px 12px 0 0',
    backgroundColor: '#FFFFFF',
    borderBottom: '2px solid #5078E11E',
    boxShadow: 'none',

  },
  addtext: {
    marginLeft: '8px',
    color: '#5078E1',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center'
  },
  arrowIcon: {
    color: '#5078E1',
    fontSize: '14px',
    marginLeft: '4px',
    marginTop: 0
  },
  text1col: {
    fontSize: '14px',
    color: '#4E5A6B',
    
  },
  profileBox: {
    border: '1px solid #E4E8EE',
    borderRadius: '4px',
    height: '80px',
    width: '351px',
    marginTop: '15px',
    padding: '10px',
    paddingLeft: '3px',
  },
  col1box: {
    borderBottom: '1px solid #E4E8EE',
    width: '351px',
    height: '140px',
    marginTop: '20px',
    marginLeft: '24px',
    paddingBottom: '16px',
  },
  picstyle: {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '10px',
  },
  txtprospectbox: {
    backgroundColor: '#5078E11E',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '10px',
    width: '52px',
    height: '19px',
    textAlign: 'center',
    lineHeight: '19px',
    fontStyle: 'Nunito Sans',
  },
  numtxt: {
    fontSize: '12px',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    color: '#98A0AC',
  },
  dotStyle: {
    fontSize: '30px',
    color: '#CED3DD',
    lineHeight: 0,
  },
  quotxt: {
    fontSize: '14px',
    color: '#4E5A6B',
    width: '351px',
    height: '140px',
    marginTop: '22px',
    marginLeft: '12px',
    textAlign: 'start',
    paddingBottom: '16px',
  },
  leasestart: {
    fontSize: '8px',
    color: '#98A0AC',
    marginBottom: '4px',
    marginLeft: '15px',
    marginTop: '12px',
    fontFamily: 'sans-serif',

  },
  startdate: {
    fontSize: '12px',
    color: '#091B29',
    marginTop: '6px',
    marginLeft: '15px',
  },
  leaseend: {
    fontSize: '8px',
    color: '#98A0AC',
    marginBottom: '4px',
    marginLeft: '47px',
    marginTop: '12px',
    fontFamily: 'sans-serif',
  },
  enddate: {
    fontSize: '12px',
    color: '#091B29',
    marginTop: '6px',
    marginLeft: '47px',
  },
  rentstart: {
    fontSize: '8px',
    color: '#98A0AC',
    marginBottom: '4px',
    marginLeft: '55px',
    marginTop: '12px',
    fontFamily: 'sans-serif',
  },
  rentstartdate: {
    fontSize: '12px',
    color: '#091B29',
    marginTop: '6px',
    marginLeft: '55px',
  },
  graceperiod: {
    fontSize: '8px',
    color: '#98A0AC',
    marginTop: '20px',
    marginLeft: '15px'
  },
  nodays: {
    fontSize: '12px',
    color: '#091B29',
    marginLeft: '15px',
    marginTop: '6px',
  },
  begintxt: {
    color: '#98A0AC',
  },
  prebtn: {
    marginTop: '250px',
    marginLeft: '10px',
    border: '1px solid #E4E8EE',
    borderRadius: '8px',
    color: '#091B29',
    fontWeight: 'bold',
  },
  col2container: {
    backgroundColor: '#F5F7FAE6',
    height: '550px',
    display:'flex',
    
  }

};

export default function Layout() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={styles.fullScreenBox}>
          <AppBar position='static' sx={styles.header}>
            <Toolbar>
              <Typography variant="h6" component="span" sx={styles.addtext}>
                Add contact<ArrowForwardIosIcon sx={styles.arrowIcon} />
              </Typography>
              <Typography variant="h6" component="span" sx={styles.addtext}>
                Lead Details<ArrowForwardIosIcon sx={styles.arrowIcon} />
              </Typography>
              <Typography variant="h6" component="span" sx={styles.addtext}>
                Preview and Create Lead<ArrowForwardIosIcon sx={styles.arrowIcon} />
              </Typography>
              <Typography variant="h6" component="span" sx={styles.addtext}>
                Quotation Details<ArrowForwardIosIcon sx={styles.arrowIcon} />
              </Typography>
              <Box sx={{ ml: '10px' }}>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: '#FFFFFF', width: '30px', height: '30px', border: '1px solid #007bff' }}>
                    <Avatar sx={{ bgcolor: '#007bff', width: '20px', height: '20px', fontSize: '15px' }}>4</Avatar>
                  </Avatar>
                </Stack>
              </Box>
              <Typography variant="h6" component="span" sx={styles.addtext}>Preview and Create</Typography>
            </Toolbar>
          </AppBar>
          <Stack direction="row" spacing={2} sx={{marginTop:'52px'}}>
            <Box component="section" >
              <Box component="section"sx={{...styles.col1box,marginTop:'30px'}} >
                <Stack direction="row" spacing={2} sx={{marginTop:'30px'}}>
                  <Typography variant="h6" component="span" sx={styles.text1col}>
                    Lead Details
                  </Typography>
                </Stack>
                <Box component="section" sx={styles.profileBox}>
                  <Stack direction="row" spacing={2} sx={styles.picstyle}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" sx={{ borderRadius: '4px' }} />
                    <Stack direction="column" spacing={0.5}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="h6" component="span" sx={{ fontSize: '12px', whiteSpace: 'nowrap', fontWeight: 'bold', fontStyle: 'Nunito Sans' }}>
                          Tom Cruise
                        </Typography>
                        <Box component="section" sx={styles.txtprospectbox}>
                          Prospect
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" component="span" sx={styles.numtxt}>
                          +91 9090808012
                        </Typography>
                        <Typography variant="h6" component="span" sx={styles.dotStyle}>
                          •
                        </Typography>
                        <Typography variant="h6" component="span" sx={styles.numtxt}>
                          Tomcruise2515@mail.com
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Box>

              <Box component="section" sx={styles.quotxt}>
                <Typography variant="h6" component="span" sx={styles.quotxt}>
                  Quotation Details
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={styles.leasestart}>LEASE START DATE</span>
                      <span style={styles.startdate}>30 Jan 22</span>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={styles.leaseend}>LEASE END DATE</span>
                      <span style={styles.enddate}>30 Jan 23</span>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={styles.rentstart}>RENT START DATE</span>
                      <span style={styles.rentstartdate}>30 Jan 23</span>
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={styles.graceperiod}>GRACE PERIOD</span>
                    <span style={styles.nodays}>90 Days <span style={styles.begintxt}>(Beginning)</span></span>
                  </Typography>
                </Box>
                <Box>
                  <Button variant="outlined" sx={styles.prebtn}>Previous</Button>
                </Box>
              </Box>
            </Box>

            <Container maxWidth="sm">
              <Box sx={styles.col2container}>
              <MainContent/>
              </Box>
             
            </Container>
          </Stack>
         
          </Box>
      </ThemeProvider>
    </React.Fragment >
  );
}
