import React from "react";
import { useState } from "react";
import LeftMenu from "./LeftMenu";
import Starting from "./Starting";

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="">
        <LeftMenu isOpen={isOpen} openMenu={openMenu} />

        <div className="rightCol">
          <div>
            <div className="d-flex justify-content-between align-items-center mx-5 mt-3 mb-4 d-block d-md-none">
              <div>
                <button className=" c-btn" onClick={openMenu}>
                  <i className="bi bi-list"></i>
                </button>
              </div>
              <div className="black">AsuJS Docs</div>
              <div>
              <button className=" c-btn" onClick={openMenu}>
                <i className="  bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="navbar navbar-light d-flex border-bottom mb-5 d-none d-md-block">
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
          </div>
          <Starting />
        </div>
      </div>
    </section>
  );
}

export default Home;
