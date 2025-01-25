import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE} from '../constant/actionTypes';


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

