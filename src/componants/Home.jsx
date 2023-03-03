import React from "react";
import { useState } from "react";
import Starting from "./Starting";

function Home() {

    const [isOpen, setIsOpen] = useState(true )


    const openMenu = () => {
       
        setIsOpen(!isOpen)
    }


  return (
    <section>
      <div className="">
        <div
          className="p-4 leftCol d-md-block "
          style={{
            backgroundColor: " #f9fafb",
            display: isOpen ? "block" : "none",
            zIndex: 1,
          }}
        >
          <h6>AsuJS Documentation</h6>
          <div className="input-group flex-nowrap mt-4">
            <span
              className="input-group-text bg-white border-end-0 "
              id="addon-wrapping"
            >
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className=" w-100 gray fw-bold p-2 mt-4">Welcome</div>

          <div>
            <div className="mt-4 fw-bold">
              <a
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                href="#more"
                className="c-collapse-link"
                style={{
                  color: "black",
                }}
              >
                {" "}
                Installation and setup (6){" "}
                <i className=" float-end bi bi-caret-down-fill"></i>
              </a>
            </div>
            <div className="mt-3 mx-4 collapse" id="more">
              <p>Introduction</p>
              <p>Quick Overview</p>
              <p>Theme Installation</p>
              <p>Plugin Installation</p>
              <p>Demo Setup</p>
              <p>Post-Installation Setup</p>
            </div>
          </div>
          <div>
            <div className="mt-4 fw-bold">
              <a
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                href="#more2"
                className="c-collapse-link"
                style={{
                  color: "black",
                }}
              >
                Contant Editing (3)
                <i className=" float-end bi bi-caret-down-fill"></i>
              </a>
            </div>
            <div className="mt-3 mx-4 collapse" id="more2">
              <p>Standard Posts and Pages</p>
              <p>Knowledge Base</p>
              <p>FAQ</p>
            </div>
          </div>
          <div>
            <div className="mt-4 fw-bold">
              <a
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                href="#more3"
                className="c-collapse-link"
                style={{
                  color: "black",
                }}
              >
                Customization (6)
                <i className=" float-end bi bi-caret-down-fill"></i>
              </a>
            </div>
            <div className="mt-3 mx-4 collapse" id="more3">
              <p>Front Page</p>
              <p>Menus</p>
              <p>Sidebars & Widgets</p>
              <p>Colors</p>
              <p>Translation</p>
            </div>
          </div>
          <div>
            <div className="mt-4 fw-bold">
              Elements (4)
              <i className=" float-end bi bi-caret-up-fill"></i>
            </div>
          </div>
          <div>
            <div className="mt-4 fw-bold">
              Dummy Content (8)
              <i className=" float-end bi bi-caret-up-fill"></i>
            </div>
          </div>
        </div>

        <div className="rightCol">
          <div className="navbar navbar-light d-flex border-bottom">
            <div>
            <ul className=" c-nav me-auto mb-2 mb-lg-0 d-flex py-2  w-100">
              <li className="nav-item">
                <a className="nav-link c-sky" aria-current="page" href="#">
                  Visite Website
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link c-sky" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link c-sky " href="#">
                  Contact
                </a>
              </li>
            </ul>
            </div>
            <button className="mx-5 c-btn" onClick={openMenu}><i className="bi bi-list"></i></button>
          </div>
          <Starting />
        </div>
      </div>
    </section>
  );
}

export default Home;
