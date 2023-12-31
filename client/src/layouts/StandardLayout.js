// IMPORT: React
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useRef } from 'react';

// IMPORT: Styles
import '../assets/App.css';

// IMPORT: Components
import Header from "../components/Navbars/Header";
import Footer from "../components/Navbars/Footer";
import Subheader from "../components/Navbars/Subheader";

// IMPORT: Routes
import routes from "../util/routes.js";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.layout === "StandardLayout") {
            return (
                <Route path={prop.path} element={prop.component} key={key} exact />
            );
        } else {
            return null;
        }
    });
};

function StandardLayout() {

    const mainPanelRef = useRef(null);

    /*     const newPopup = (msg) => {
            console.log("StandardLayout.js: newPopup() called");
            console.log("StandardLayout.js: msg: " + msg);
            PopupAlert({ props: { msg: msg } });
        } */

    return (
        <div className="App">
            <Header />
            {/* <Subheader /> */}
            <Footer />
            <div className="main-panel" ref={mainPanelRef}>
                <Routes>

                    {/* This adds all possible routes & views */}
                    {getRoutes(routes)}

                    {/* Catch-all non-declared routes*/}
                    <Route path="/*" element={<Navigate to="/" replace />} />

                </Routes>
            </div>

        </div>
    );
}

export default StandardLayout;
