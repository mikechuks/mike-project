import axios from "axios";

export const loginCall = async(userCredentials, dispatch) => {
    dispatch({type:"LOGIN START"});
    try {
    const res = await axios.post("auth/login", userCredentials);
    dispatch({type:"LOGIN SUCCESS", payload:res.data});
    }catch(err){
    dispatch({type:"LOGIN FAILURE", payload:err});
    }
};