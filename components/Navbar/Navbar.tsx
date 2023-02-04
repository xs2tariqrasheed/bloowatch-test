import classNames from "classnames";
import React from "react";
import { ReactNode } from "react";

import Button from "../Button";

interface NavbarProps {
  children?: ReactNode;
  lineThrough?: boolean;
}

const Navbar = ({ children, lineThrough }: NavbarProps) => {
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="w-[100px] h-[25px] bg-primary-blue"></div>
      <ul className="flex items-center">
        {[
          {
            title: "SHOP",
            onclick: () => {},
          },
          {
            title: "BLOG",
            onclick: () => {},
          },
          {
            title: "SEARCH",
            onclick: () => {},
          },
          {
            title: "CART",
            marginRight: false,
            onclick: () => {},
          },
        ].map((item) => (
          <li
            key={item.title}
            className={classNames(item.marginRight !== false && "mr-[158px]")}
          >
            <Button
              onClick={item.onclick}
              type="link"
              textColor="black"
              fontSize={18}
            >
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  lineThrough: false,
};
export default Navbar;
