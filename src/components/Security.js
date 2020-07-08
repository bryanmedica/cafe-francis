import React from "react";
import './css/Security.css';
import { Redirect } from 'react-router-dom';
import securityData from "../securityData.json";

function checkSecurity() {
    console.log(window.localStorage.getItem("pass"));
    if (window.localStorage.getItem("pass") === securityData.password) {
        window.location.href = "/import"
    }
}

function changePassword(e) {
    window.localStorage.setItem("pass", e.target.value);
}

function Security(props) {
    return (
        <div className="securityContainer">
            <h1>Mot de passe</h1>
            <form>
                <input type="password" placeholder=" Entrez le mot de passe ici" onChange={changePassword}></input>
                <button onClick={checkSecurity()}>Valider</button>
            </form>
        </div>
    )
}

export default Security;