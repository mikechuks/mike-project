export const LoginStart = (userCredentials)=> ({
    type:"LOGIN START"
});

export const LoginSuccess = (user)=> ({
    type:"LOGIN SUCCESS",
    payload:user
});

export const LoginFailure = (user)=> ({
    type:"LOGIN FAILURE",
    payload:error
});
export const Follow =(userId)=>({
    type:"FOLLOW",
    payload:userId
});
export const Unfollow =(userId)=>({
    type:"UNFOLLOW",
    payload:userId
});