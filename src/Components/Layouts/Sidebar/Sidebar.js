import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./logo.png" alt="https://th.bing.com/th/id/R.3fee6b6a930df30f9f1377763e0aec16?rik=kKQNyRoDAZq5aQ&riu=http%3a%2f%2fwww.stevennoble.com%2fmain.php%3fg2_view%3dcore.DownloadItem%26g2_itemId%3d904%26g2_serialNumber%3d3&ehk=poZwJHFTF4nzN6fb9db%2fWXVROed1%2f63oL7MnCV%2ba%2bO0%3d&risl=&pid=ImgRaw&r=0" className={css.logo} />

      <div className={css.menu}>
        <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink to="calender" className={css.item} title="Calender">
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink to="board" className={css.item} title="Trello board">
          <FaTasks size={30} />
        </NavLink>
        <NavLink to="users" className={css.item} title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;