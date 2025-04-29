import { NavLink } from "react-router-dom";
import styles from './navitem.module.css';

const NavItem = ({ name, onClick }) => {
  return (
    <NavLink
      to={name.toLowerCase() === "home" ? "/" : `/${name.toLowerCase()}`}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ''}`
      }
      onClick={onClick}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
