import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE,LIKE,DELETE} from '../constant/actionTypes';
// import { LOGIN, LOGOUT } from '../constant/actionTypes';


export const getPosts = () => async(dispatch)=> {

try {
    const {data} = await api.fetchPosts();
dispatch({type:FETCH_ALL,payload:data});

} catch (error) {
    console.log("Error fetching posts:", error.message);

}
};

export const createPost =(post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log("Error creating post:", error.message);
    }
};

export const updatePost =(id,post) => async(dispatch)=>{
    try {
        const {data} =  await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log("Error creating post:", error.message);        
}
};


export const likePost = (id) => async(dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        dispatch({type:LIKE,payload:data});
    } catch (error) {
        console.log(error.message);
    }
};


export const deletePost =(id)=> async(dispatch)=>{
try {
    await api.deletePost(id);
    dispatch({type:DELETE,payload:id});
} catch (error) {
    console.log(error.message);
}
}

// actions/actions.js
export const login = (user) => {
    localStorage.setItem("token", user.token); // Store token in localStorage
    return {
      type: 'LOGIN',
      payload: { user, isAuthenticated: true },  // Ensure payload contains both user and isAuthenticated flag
    };
  };
  
  
    export const logout = () => {
        localStorage.removeItem("token"); // Clear the token from localStorage
        return {
          type: 'LOGOUT',
        };
      };
      