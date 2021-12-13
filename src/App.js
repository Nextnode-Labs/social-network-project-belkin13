import React from 'react';
import s from './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

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
          <div className={s.appwrappercontent}> 
              <Route path="/dialogs" render={ () => <DialogsContainer /> } />
              <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
              <Route path="/users" render={ () => <UsersContainer /> } />
              <Route path="/news" render={ () => <News /> } />
              <Route path="/music" render={ () => <Music /> } />
              <Route path="/settings" render={ () => <Settings /> } />
          </div>
        </Box>    
        <Box  sx={{ gridArea: 'footer', bgcolor: 'cornflowerblue' }}>React 2021</Box>
      </Box>
 );
}

export default App;