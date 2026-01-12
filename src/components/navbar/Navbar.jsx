import React from "react";
import "../navbar/navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const icons = [
  {
    id: 1,
    icon: <IoHomeOutline />,
    href:"#home",
    classname :"active",
  },
  {
    id: 2,
    icon: <LuUserRound />,
    href:"#about",
  },
  {
    id: 3,
    icon: <BiBook />,
    href:"#projects",
  },
  {
    id: 4,
    icon: <RiServiceLine />,
    href:"#service",
  },
  {
    id: 5,
    icon: <BiMessageSquareDetail />,
    href:"#contact",
  },
];
function Navbar() {
  return (
    <div className="nav">
      {icons.map(({ id, classname, icon ,href}) => (
        <div key={id}>
          <a className={classname} href={href}>{icon}</a>
        </div>
      ))}
    </div >
  );
}

export default Navbar;
