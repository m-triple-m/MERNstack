import { createContext, useState } from "react";
import app_configs from "../config";

export const UserContext = createContext();

export const UserProvider = props => {

    const api_url = app_configs.api_url + '/user';

    const addUser = userData => {

        const reqOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify(userData)
        }

        fetch(api_url+'/add', reqOptions)
        .then( res => res.json() )
        .then( data => {console.log(data)} );
    }

    const [user, setUser] = useState([]);

    return (
        <UserContext.Provider value={{user, setUser, addUser}}>
            {props.children}
        </UserContext.Provider>
    )
}