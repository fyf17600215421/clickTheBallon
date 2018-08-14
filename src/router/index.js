import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from "react-router-dom";

import Main from "../components/main"
import Header from "../components/common/header"

export default () => ( <Router>
            <div className = "wrap" >
                <Header ></Header> 
                <Main>
                </Main> 
            </div>
     </Router>
)