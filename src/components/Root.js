import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Header/>
            <main className="flex-grow mb-20 mt-20">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}