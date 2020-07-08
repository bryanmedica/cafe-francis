import React from "react";
import $ from "jquery"
import './css/MenuImporter.css';

function clickOnImport() {
    $('#uploadFile').click();
}

function importFile() {
    console.log("Upload!");
}

function MenuImporter(props) {
    if (window.localStorage.getItem("pass") !== "") {
        window.localStorage.setItem("pass", "");
    } else {
        window.location.href = "/mdp";
    }
    return (
        <div className="menuImporterContainer">
            <h1>Importez la suggestion</h1>
            <button onClick={clickOnImport}>Importer</button>
            <input id="uploadFile" type="file" accept="image/*" name="photo" onChange={importFile}></input>
        </div>
    )
}

export default MenuImporter;