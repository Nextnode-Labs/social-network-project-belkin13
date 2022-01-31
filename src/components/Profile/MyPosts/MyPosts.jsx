import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../components/common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';


const maxLengt10 = maxLengthCreator(10);


let AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newPostText" component={Textarea} placeholder={"Post message"}
            validate={[required, maxLengt10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}


let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

//class MyPosts extends PureComponent {

const MyPosts = React.memo(props => {
  //componentDidUpdate(prevProps, prevState, snapshot) {
   // console.log("componentDidMount");
  //}

  //shouldComponentUpdate(nextProps, nextState) { // ответит нужно ли перерисовываться - если false - то не нужно
    //return nextProps != this.props || nextState != this.state;
  //}

 // console.log("RENDER YOU");
 //render() {
    
    
    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }

    let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />);

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
          { postsElements }
        </div>
      </div>
    )
  

});




export default MyPosts;