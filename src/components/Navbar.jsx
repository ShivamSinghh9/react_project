import { RiAppleFill, RiWifiLine } from "@remixicon/react";
import React from "react";
import Timedate from "./Timedate";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <RiAppleFill />
        </div>
        <div className="nav-item">
          <p>Shivam Singh</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="wifi">
            <RiWifiLine />
        </div>
        <div className="timedate">
            <Timedate />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
