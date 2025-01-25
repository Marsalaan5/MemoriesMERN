// import { useState,useEffect } from "react";
// import useStyles from "./style";
// import { TextField, Button, Typography, Paper } from "@mui/material";
// import FileBase from "react-file-base64";
// import { useDispatch, useSelector } from "react-redux";
// import { createPost,updatePost } from "../../actions/actions";
// import PropTypes from 'prop-types';
// // import { current } from "@reduxjs/toolkit";


// function Form({currentId,setCurrentId}) {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const [postData, setPostData] = useState({
//     creator: "",
//     title: "",
//     message: "",
//     tag: "",
//     selectedFile: "",
//   });
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

//   useEffect(() => {
//     if (post) setPostData(post)
//     },[post]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (currentId===0) {
//       dispatch(createPost(postData));
//       clear();
//     }else{
//       dispatch(updatePost(currentId,postData));
//       clear();
//     // console.log(postData);

//   };

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({
//       creator: "",
//       title: "",
//       message: "",
//       tag: "",
//       selectedFile: "",
//     });
//   }};

//   return (
//     <Paper className={classes.paper}>
//       <form
//         autoComplete="off"
//         noValidate
//         className={`${classes.root} ${classes.form}`}
//         onSubmit={handleSubmit}

//         >

//       <Typography variant="h6">
//         Creating a memory
//         </Typography>
//         <TextField
//           name="creator"
//           variant="outlined"
//           label="Creator"
//           fullWidth
//           value={postData.creator}
//           onChange={(e) =>
//             setPostData({ ...postData, creator: e.target.value })
//           }
//         />
//         <TextField
//           name="title"
//           variant="outlined"
//           label="Title"
//           fullWidth
//           value={postData.title}
//           onChange={(e) => setPostData({ ...postData, title: e.target.value })}
//           />
//         <TextField
//           name="message"
//           variant="outlined"
//           label="Message"
//           fullWidth
//           value={postData.message}
//           onChange={(e) =>
//             setPostData({ ...postData, message: e.target.value })
//           }
//           />
//         <TextField
//           name="tags"
//           variant="outlined"
//           label="Tags"
//           fullWidth
//           value={postData.tag}
//           onChange={(e) => setPostData({ ...postData, tag: e.target.value })}
//           />
//         <div className={classes.fileInput}>
//           <FileBase
//             type="file"
//             multiple={false}
//             onDone={({ base64 }) =>
//               setPostData({ ...postData, selectedFile: base64 })}/>
//         </div>
//         <Button
//           className={classes.buttonSubmit}
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           fullWidth
//           >
//           Submit
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="small"
//           onClick={clear}
//           type="button"
//           fullWidth
//           >
//           Clear
//         </Button>
//           </form>
//     </Paper>
//   );
// }

// Form.propTypes = {
//   currentId:PropTypes.func.isRequired,
// }

// export default Form;


import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from "./style";
import { createPost,updatePost } from "../../actions/actions";

import PropTypes from 'prop-types'


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

Form.propTypes = {
    currentId:PropTypes.number.isRequired,
    setCurrentId:PropTypes.func.isRequired,
  }

export default Form;