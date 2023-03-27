import {LoginStart,LoginSuccess,LoginFailure} from "./Authaction";
const AuthReducer = (state, action)=>{
    switch (action.type){
        case LoginStart:
        return {
            ...state,
            [action.fieldName]: action.payload,
        };
        case LoginFailure:
        return {};
        default:
            return state;
    }
};
export default AuthReducer;