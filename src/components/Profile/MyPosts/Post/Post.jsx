import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;