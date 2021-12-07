import React, { useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';

const MyPosts = (props) => {

  const newPostElement = useRef('');

  let addPost = () => {
    props.addPost();
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <TextField onChange={onPostChange} value={props.newPostText} inputRef={newPostElement} id="filled-basic" label="Text post" variant="filled" multiline />
        </div>
        <div><Button variant="contained" onClick={ addPost }>Add post</Button></div>
        <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;