import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenuSite(props) {

    return (
        <menu className="container-fluid mt-0 bg-app">
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand link-light me-5 d-flex flex-row align-items-end"
                        href="/"
                    >
                        <Image width={60} height={60} src="/img/logo.png" alt="Logo empresa"/>
                        <p className="link-light">FÉRIAS & LAZER</p>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link link-light fs-5" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light fs-5" href="/destino">
                                    Destino
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light fs-5" href="/promocoes">
                                    Promoções
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light fs-5" href="/contato">
                                    Contato
                                </Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
        </menu>
    );
}

export default MenuSite;
