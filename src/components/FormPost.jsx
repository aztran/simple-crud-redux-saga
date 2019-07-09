import React, { useState } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import compose from 'recompose/compose';
import { createPost, getPosts, reqCrePost } from '../actions';

import PropTypes from 'prop-types';


const FormPost = ({ insertPost, classes }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [post, setPost] = useState('');

  const onSubmit = e => {
    const newPost = {
      title,
      author,
      post,
      date: new Date()
    }

    console.log(newPost);

    insertPost(newPost);
    setTitle('');
    setAuthor('');
    setPost('');
    // alert('berhasil'); /

  }
  return (
    <div>
      <h2>Add New Post</h2>
      <div className={classes.formWrapper}>
        <div className={classes.inputList}>
          <input type="text"
            name="title"
            value={title}
            placeholder="Insert the Title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.inputList}>
          <textarea
            name="post"
            value={post}
            placeholder="Your Post"
            onChange={e => setPost(e.target.value)}
          >
          </textarea>
        </div>
        <div className={classes.inputList}>
          <select
            name='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}

          >
            <option value='' disabled>
              Select author
              </option>
            <option value='andra'>Andra</option>
            <option value='riztyan'>Riztyan</option>
          </select>
        </div>
        <div className="footer">
          <button onClick={onSubmit} className={classes.btn} >Post</button>
        </div>
      </div>
    </div>
  );
};


FormPost.prototype = {
  insertPost: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
  insertPost: formData => dispatch(reqCrePost(formData))
})

const style = () => ({
  formWrapper: {
    display: 'block',
    marginBottom: 50

  },
  inputList: {
    padding: [[5, 10]],
    fontSize: 14,
    // width: 500

    '& input,  & textarea, & select': {
      padding: [[5, 20]],
      width: 300,
      fontSize: 14

    },
    '& textarea': {
      padding: [[5, 20]],
      width: 300,
      height: 100,
      fontSize: 14
    },
    '& select': {
      padding: [[5, 20]],
      width: 300,
      fontSize: 14
    }
  },

  btn: {
    width: 100,
    padding: 5,
    backgroundColor: '#8282ff',
    color: 'white',
    fontSize: 15
  }

})

export default compose(injectSheet(style), connect(null, mapDispatchToProps))
  (FormPost);