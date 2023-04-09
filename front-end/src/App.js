import GlobalStyle from "./style/GlobalStyle.js";
import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext.js";

import SignIn from "./pages/SignIn/SignIn.js";
import SignUp from "./pages/SignUp/SignUp.js";

export default function App(){
  const [user, setUser] = useState(null);
    return(
        <>
        <GlobalStyle/>
        <UserContext.Provider value= {{ user, setUser }}>
        <BrowserRouter>
        <Routes>
            <Route path= "/" element= {<SignIn/>}/>
            <Route path= "/sign-up" element= {<SignUp/>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </>
    )
}