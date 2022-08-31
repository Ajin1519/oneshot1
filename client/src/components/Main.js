import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CollegeList from './CollegeList';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Main(){
    return(
            <div className='login'>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <CollegeList/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    )
}
export default Main;