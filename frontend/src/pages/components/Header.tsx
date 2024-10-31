import { AppBar, Toolbar, Box } from '@mui/material';
import aspectimg from '../../helpers/icons/aspect.png';

const Header = () => {
  return (
    <AppBar style={{ width: '100vw' }} position="fixed" color='default'>
      <Toolbar>
        <Box display="flex" alignItems="center" mr={2}>
         <img alt="logo" src={aspectimg} height={50} width={150}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;