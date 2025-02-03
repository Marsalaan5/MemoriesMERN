// const authReducer = (state ={user:null},action)=>{
//     switch(action.type){
//         case 'LOGIN' :
//             return{
//                 ...state,
//                 user:action.payload
//             };
//             case 'LOGOUT' :
//                 return{
//                     ...state,
//                     user:null}
//                 default:
//                     return state;
//     }
// };
    
// export default authReducer;

// authReducer.js
// import { LOGIN, LOGOUT } from '../constant/actionTypes' // Ensure correct path to actionTypes.js

const initialState = {
  user:null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user:null,
      };
    default:
      return state;
  }
};

export default authReducer;
