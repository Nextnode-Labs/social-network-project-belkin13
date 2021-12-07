import React from "react";
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            //debugger;
            props.setUsers(response.data.items);
        });
    }

    
  /*  if (props.users.length === 0) {
        props.setUsers( [  
            {id: 1, photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/280x420', followed: true, fullName: 'Dmitry', status: 'i am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/280x420', followed: false, fullName: 'Sasha', status: 'i am a boss too', location: {city: 'Moskow', country: 'Belarus'}},
            {id: 3, photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/280x420', followed: true, fullName: 'Anton', status: 'i am a boss too', location: {city: 'Kiev', country: 'Belarus'}},
            ]);
    }*/
    

    return <div>
        {
            props.users.map( u=> <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                        </div>
                        <div>
                            { u.followed ? <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={ () => { props.follow(u.id) }}>Follow</button> }
                            
                        </div>
                    </span>               
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>    
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;