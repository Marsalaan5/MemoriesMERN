import Post from "./Post/Post"
// import useStyles from './style';
import { Grid,CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

function Posts({setCurrentId}) {
  const posts = useSelector((state)=>state.posts);
  // const classes = useStyles();
  // console.log(posts);
  return (

!posts.length ? <CircularProgress/> : (
  <Grid container alignItems="stretch" spacing={4}>
  {posts.map((post) => (
    <Grid key={post._id} item xs={12} sm={8} md={4}>
      <Post post={post} setCurrentId={setCurrentId} />
    </Grid>
))}
      </Grid>
   )
   
  );
}

Posts.propTypes={
  setCurrentId:PropTypes.func.isRequired,
}


export default Posts;

