import React, {Fragment, useState} from "react";

const Login = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            //get user with username and check if password matches
            /*const body ={username, password};
            const response = fetch("http://localhost:5000/campusclubs/user/add",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);*/
        } catch (error) {
            console.error(error.message);
        }
    };
    
    return(
        <Fragment>
            <h1 className="text-center mt-5">Campus Clubs</h1>
            <h2 className="text-center mt-5">Login to stay updated with campus activities!</h2>
            <form onSubmit={onSubmitForm}>
                <text>Username:</text>
                <input type="text" className="form-control" 
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}
                    />
                  <text>Password:</text>
                    <input type="text" className="form-control" 
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                    />
                <button className="btn btn-success">Login</button>
            </form>
        </Fragment>
        
    )
}

export default Login;