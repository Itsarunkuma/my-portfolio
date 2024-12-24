import React from "react";
import { headerData } from "./common/Helper";

const Header = () => {
  return (
    <div>
      <div className="container flex justify-between mx-auto py-4">
        <a href=""> LOGO</a>
        <ul className="flex gap-5">
          {headerData.map((obj, i) => (
            <li key={i}>
              <a href={obj.url}>{obj.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
