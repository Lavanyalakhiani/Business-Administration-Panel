import React from "react";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import css from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      <Sidebar/>

      {pathname === "/" && <Navigate to="/Dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd,Do MMM YYYY")}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Enter here" />
          </div>
          <div className={css.profile}>
            <img src="./profile.jpg" alt="https://www.bing.com/images/search?view=detailV2&ccid=pDguZ3i3&id=1A0C85F5DDB437154FEDDDBA4E0987F36A273DB3&thid=OIP.pDguZ3i3S6Z-4AsCJd8XPAHaFs&mediaurl=https%3a%2f%2fwww.pngmart.com%2ffiles%2f22%2fMoney-Heist-Dp-PNG-Isolated-HD.png&exph=1478&expw=1920&q=dp+png&simid=608009684387765035&FORM=IRPRST&ck=605945D86CCB7DA89E11E3EA6E62D580&selectedIndex=10&itb=1" />

            <div className={css.details}>
              <span>Lavanya Lakhiani</span>
              <span>lavanyalakhiani03@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;