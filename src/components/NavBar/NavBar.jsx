import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => {
    return isActive ? s.active : s.item;
};

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/"  className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={setActive}>Massages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" className={setActive}>Settings</NavLink>
            </div>
        </nav>
    );
}
export default NavBar;
// navData => navData.isActive ? s.active : s.item