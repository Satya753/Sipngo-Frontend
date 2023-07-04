import React from "react";
import './EmailAdd.css';
import AddEmail from "./AddEmail";
function EmailAdd(){

    return <div className="EmailHeading">
        <div className="block">
        <h1 className="heading content">Get your daily dose of organic juice with JuiceGo</h1>
        <AddEmail></AddEmail>
        <h3 className="content">JuiceGo is here to make it easy for you to get your daily dose of organic, natural and healthy juice right at your doorstep.</h3>
        </div>
        <div className="block">
        </div>
    </div>
}

export default EmailAdd;