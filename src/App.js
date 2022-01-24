import React, { Component } from 'react';
import s from './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store';

//const App = (props) => {
class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
        return <Preloader/>
    }


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
          <HeaderContainer />
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
              <Route path="/login" render={() => <LoginPage />} />
          </div>
        </Box>    
        <Box  sx={{ gridArea: 'footer', bgcolor: 'cornflowerblue' }}>React 2021</Box>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


//export default compose(
  //withRouter,
  //connect(mapStateToProps, {initializeApp})) (App);

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App); 

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
          <Provider store={store}>
            <AppContainer/>
          </Provider>
        </BrowserRouter>  
}  

export default SamuraiJSApp;