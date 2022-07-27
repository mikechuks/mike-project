const AuthReducer = (state, action)=>{
    switch (action.type){
        case "LOGIN START" :
        return {
            user: null,
            isFetching: true,
            error: false,
        }
        case "LOGIN SUCCESS":
        return {
            user: action.payload,
            isFetching: false,
            error: false,
        }
        case "LOGIN FAILURE":
        return {
            user: null,
            isFetching: false,
            error: action.payload,
        }
        case "FOLLOW":
            return {
              ...state,
              user:{
                  ...state.user,
                  following: [...state.user.following, action.payload]
              }
            }
            case "UNFOLLOW":
                return {
                  ...state,
                  user:{
                      ...state.user,
                      following: state.user.following.filter((follows) => follows !== action.payload)
                  }
                }
        default:
            return state;
    }
};
export default AuthReducer;