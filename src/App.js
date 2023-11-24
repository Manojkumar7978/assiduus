import './App.css';
import Sidebar from './components/sidebar';
import { Box, chakra } from '@chakra-ui/react';
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <chakra.div w={'1440px'} m={'auto'} 
    // border={'1px solid green'}
    display={'flex'}
    className="App">
        <Sidebar/>
        <Box w={'1200px'}>
          <Header/>
          <Content/>
        </Box>
    </chakra.div>
  );
}

export default App;
