import GlobalStyle from "./style/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/SignIn.js";

export default function App(){
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}