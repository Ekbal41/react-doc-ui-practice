import React from "react";

function Print() {
  return (
    <>
      <div className="">
        <p className="text-uppercase  text-gray p-title">
          <img
            style={{
              height: 15,
              marginRight: 10,
            }}
            src="/print.svg"
          />
          print
        </p>

        <div className="mt-4">
          <p className="text-uppercase text-gray p-title">
            <img
              style={{
                height: 15,
                marginRight: 10,
              }}
              src="/menu.svg"
            />
            Contants
          </p>
          <div
            className="border-start border-1 "
            style={{
              paddingLeft: 20,
              fontSize: 13,
            }}
          >
            <p className=" line text-gray">Parent Theme Installation</p>
            <p className=" line text-gray">Child Theme Installation</p>
            <p className=" line text-gray">Bundled Plugins</p>
            <p className=" line text-gray">Recommended 3rd Party Plugins</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Print;
