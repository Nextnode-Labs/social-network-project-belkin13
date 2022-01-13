import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersRequest } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {//классовая компонента рендерящая Users и пробрасывающая внутрь пропсы из контейнерной

    //constructor(props) {
        //super(props);        
    //}

    componentDidMount() {
       this.props.getUsersRequest(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersRequest(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        { this.props.isFetching ? < Preloader /> : null }
        <Users totalUsersCount = {this.props.totalUsersCount} 
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}  
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      followingInProgress =  {this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        //users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),      
    }
}

//export default connect (mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } 
//) (UsersContainer);  //коннектим пробрасывая в контекст пропсы и диспатчи - в класс UsersContainer, который вызовет функциональную компоненту Users

export default compose(
    connect (mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersRequest }),
    //withAuthRedirect,
) (UsersContainer); 
