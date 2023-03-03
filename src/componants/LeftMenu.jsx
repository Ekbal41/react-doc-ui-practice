import React from "react";

function LeftMenu({ isOpen, openMenu }) {
  return (
    <div>
      <div
        className="p-4 leftCol d-md-block "
        style={{
          backgroundColor: " #f9fafb",
          display: isOpen ? "block" : "none",
          zIndex: 1,
        }}
      >
        <div className="d-flex justify-content-between">
          {" "}
          <h6>AsuJS Documentation</h6>
          <button className="" style={{
            border: "none",
            backgroundColor: " #f9fafb",
          }} onClick={openMenu}>
            <i className=" d-md-none bi bi-arrow-left"></i>
          </button>
        </div>
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
        <div className=" w-100 gray p-2 mt-4 black small">Welcome</div>

        <div>
          <div className="mt-4 fw-bold">
            <a
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              href="#more"
              className="c-collapse-link black small"
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
              className="c-collapse-link black small"
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
              className="c-collapse-link black small"
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
          <div className="mt-4  small black">
            Elements (4)
            <i className=" float-end bi bi-caret-up-fill"></i>
          </div>
        </div>
        <div>
          <div className="mt-4  small black">
            Dummy Content (8)
            <i className=" float-end bi bi-caret-up-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
