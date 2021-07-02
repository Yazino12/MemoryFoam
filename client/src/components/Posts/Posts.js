import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
<<<<<<< HEAD
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
=======
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}  setCurrentId={setCurrentId}/>
>>>>>>> parent of eb89913... pushing PART_3
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;
