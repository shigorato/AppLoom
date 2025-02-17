import { JSX } from "react";
import MainPage from "../../pages/main-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default App;