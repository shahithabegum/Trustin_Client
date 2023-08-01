class Authservice {
    isAuthenticated= ()=>{
        return sessionStorage.getItem("auth-token") ? true :false;
    }
    setAuthToken = (token)=>{
        return sessionStorage.setItem("auth-token",token);
    }
    getAuthToken = () =>{
        return sessionStorage.getItem("auth-token");
    }
    setCurrentUser =(user)=>{
        return sessionStorage.setItem("user",JSON.stringify(user))
    }
    getCurrentUser =()=>{
        return JSON.parse(sessionStorage.getItem("user"))
    }
    
    handleLogout =(history)=>{
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("user")
        history("/");
    }
}

export const authservice= new Authservice();