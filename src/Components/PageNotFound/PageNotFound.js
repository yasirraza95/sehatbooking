import React from 'react'
import "./PageNotFound.css";
import TopBar from '../HomeTopBar/TopBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default function PageNotFound() {
    return (
        <>
            <TopBar />
            <Header />
            <div id="notfound">
                <div className="notfound-bg"></div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>we are sorry, but the page you requested was not found</h2>
                    <a href="/" className="home-btn">Go Home</a>
                </div>
            </div>
            <Footer />
        </>
    )
}
