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
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId); 
    this.props.getStatus(userId);
    
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
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
  withRouter,
 // withAuthRedirect
)(ProfileContainer);