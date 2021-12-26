import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {//классовая компонента рендерящая Users и пробрасывающая внутрь пропсы из контейнерной

    //constructor(props) {
        //super(props);        
    //}

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,      
    }
}

export default connect (mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } 
) (UsersContainer);  //коннектим пробрасывая в контекст пропсы и диспатчи - в класс UsersContainer, который вызовет функциональную компоненту Users