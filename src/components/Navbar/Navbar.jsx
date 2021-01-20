import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.navbar}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName = {s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/messages" activeClassName = {s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            News
        </div>
        <div className={s.item}>
            Music
        </div>
        <div className={s.item}>
            Settings
        </div>
    </nav>
}

export default Navbar;