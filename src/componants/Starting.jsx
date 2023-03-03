import React from "react";
import Print from "./Print";

function Starting() {
  return (
    <>
      <div className="px-5 pt-3 row">
        <div className="col-12 col-md-9">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="c-nav c-sky" href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
          <h4 className="fw-bold mt-5 black">Welcome</h4>
          <p className="mt-3">
            Follow these 6 steps and you’ll get your Help Scout account up and
            running in no time. If you'd like to get a full tour of Help Scout
            and all its features, attend one of our weekly live demos or take a
            video tour.
          </p>
          <div className="row mt-5 ">
            <div
              className="col-6 mx-2 border rounded p-4 gray mt-4"
              style={{
                height: 198,
                width: 300,
              }}
            >
              <h6 className="c-sky">Installation and Setup</h6>
              <p className="mt-3">
                A short decription about context of this category goes here.
              </p>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-light">6 Articles</p>
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
            <div
              className="col-6 mx-2 border rounded p-4 mt-4"
              style={{
                height: 198,
                width: 300,
              }}
            >
              <h6 className="c-sky">Installation and Setup</h6>
              <p className="mt-3">
                A short decription about context of this category goes here.
              </p>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-light">6 Articles</p>
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
            <div
              className="col-6 mx-2 border rounded p-4 mt-4"
              style={{
                height: 198,
                width: 300,
              }}
            >
              <h6 className="c-sky">Installation and Setup</h6>
              <p className="mt-3">
                A short decription about context of this category goes here.
              </p>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-light">6 Articles</p>
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
            <div
              className="col-6 mx-2 border rounded p-4 mt-4"
              style={{
                height: 198,
                width: 300,
              }}
            >
              <h6 className="c-sky">Installation and Setup</h6>
              <p className="mt-3">
                A short decription about context of this category goes here.
              </p>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-light">6 Articles</p>
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
            <div
              className="col-6 mx-2 border rounded p-4 mt-4"
              style={{
                height: 198,
                width: 300,
              }}
            >
              <h6 className="c-sky">Installation and Setup</h6>
              <p className="mt-3">
                A short decription about context of this category goes here.
              </p>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-light">6 Articles</p>
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-6 border rounded px-4 pt-3 mx-2 mb-4 mb-md-0"
              style={{
                width: 300,
              }}
            >
              <p className="float-end">Previous Post</p>
              <div className="d-flex justify-content-between mt-5">
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
                <p className="fw-light">Quck Overview</p>
              </div>
            </div>
            <div
              className="col-6 border rounded px-4 pt-3 mx-2 gray"
              style={{
                width: 300,
              }}
            >
              <p className="float-start">Next Post</p>
              <div className="d-flex justify-content-between mt-5">
                <p className="fw-light">Quck Overview</p>
                <p>
                  <i className=" bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column flex-md-row justify-content-between border rounded p-3 pt-4">
            <div>
              <p>Updated on Feb 3, 2023</p>
            </div>
            <div>
              <p>
                Was this page helpful?
                <img
                  style={{
                    height: 20,
                    width: 50,
                    marginLeft: 10,
                  }}
                  src="/imoji.svg"
                />
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-uppercase">related articles:</p>
            <p> • Theme Installation. </p>
            <p> • Working with Conversations .</p>
            <p> • Integrations. </p>
            <p> • Running a business without CRM can cost you real money. </p>
            <p> • Account Settings. </p>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-5 mt-md-0">
          <Print />
        </div>

        
      </div>
    </>
  );
}

export default Starting;
