import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateStatus, getStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;

    //console.log(this.props);
    //console.log('my id: '+userId);

    if (!userId) {
      userId = 21222;
    }

    this.props.getUserProfile(userId); 
    //setTimeout(()=>{
      this.props.getStatus(userId);
    //}, 1000);
    

  }

  render() {
    return (     
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>    
    )
  }

}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
  withRouter,
 // withAuthRedirect
)(ProfileContainer);