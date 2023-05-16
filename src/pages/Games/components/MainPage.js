import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BgAnimation from "./BgAnimation";
import Menu from "../../../components/BurgerMenu/Menu";

const GamePage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", href: "/main" },
    { value: "Главная", href: "/main" },
  ];
  return (
    <>
      <Header setMenuActive={setMenuActive} menuActive={menuActive}></Header>
      <Outlet></Outlet>
      <BgAnimation></BgAnimation>
      <Menu header={"Burger menu"} items={items} setMenuActive={setMenuActive} menuActive={menuActive}></Menu>
    </>
  );
};

export default GamePage;
