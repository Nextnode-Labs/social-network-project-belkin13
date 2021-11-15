import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Box from '@mui/material/Box';

const App = (props) => {

  return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header"
        "sidebar main main main "
        "footer footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>
          <Header />
        </Box>
        <Box sx={{ gridArea: 'sidebar', bgcolor: 'info.main' }}>
          <Navbar />
        </Box>
        <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>
          <div class="app-wrapper-content"> 
              <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/> } />
              <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
              <Route path="/news" render={ () => <News /> } />
              <Route path="/music" render={ () => <Music /> } />
              <Route path="/settings" render={ () => <Settings /> } />
          </div>
        </Box>    
        <Box sx={{ gridArea: 'footer', bgcolor: 'warning.main' }}>React 2021</Box>
      </Box>
 );
}

export default App;