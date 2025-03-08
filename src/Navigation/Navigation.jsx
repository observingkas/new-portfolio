//Import necessary dependencies

import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            {/* NavLink automatically handles the active state */ }
            <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                About Me
                </NavLink>

                <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                
                Portfolio
                </NavLink>

                <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >

                    Contact
                    </NavLink>

                    <NavLink
                    to="/resume"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        Resume
                    </NavLink>
                    </nav>
    );
}

                  export default Navigation;