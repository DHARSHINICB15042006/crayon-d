import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../component/layout.jsx";
import MainContent from "../component/maincontent.jsx";
import { Router } from "./routers";


export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Router.Home} element={<Layout />}>
                    <Route index element={<MainContent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}