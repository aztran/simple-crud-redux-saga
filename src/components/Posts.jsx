import React, { useState, useEffect, Fragment } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { loadPosts } from '../actions';

const style = () => ({
  wrapper: {
    margin: 0
  },
  red: {
    color: 'red'
  },
  item: {
    margin: 50,
    padding: [[18, 20]],
    border: '1px solid #eee'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bodyWrapper: {
    marginTop: 20
  }
})


const Posts = ({ post: { posts, loading }, classes, getPost }) => {




  useEffect(() => {
    getPost();
    // console.log(post);
  }, [getPost]);



  // const getPosts = async () => {
  //   const res = await fetch('http://localhost:5000/posts');
  //   const data = await res.json();
  //   setPosts(data);
  //   console.log(data);
  // }

  if (loading || posts === null) {
    return (
      <div className='progress blue lighten'>
        <div className='intdeterminate blue' />
      </div>
    );
  }
  return (
    <Fragment>
      {/* {posts} */}
      <h2 className={classes.wrapper}>List Posts</h2>
      {posts.length === 0 ? (<p>No post to show</p>
      ) :
        (posts.map(p => (
          <div key={p.id} className={classes.item}>
            <div className={classes.header}>
              <h2>{p.title}</h2>
              <h4><i>{p.author}</i></h4>
            </div>
            <div className={classes.bodyWrapper}>
              <p>{p.post}</p>
            </div>
          </div>
        )))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  post: state.postReducer
})

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(loadPosts())
})

export default compose(
  injectSheet(style),
  connect(mapStateToProps, mapDispatchToProps)
)
  (Posts);