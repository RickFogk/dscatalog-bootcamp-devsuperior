import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-class-container">
        <ul>
            <li>
                <NavLink to="/admin/products"  className="admin-nav-item">
                    Meus Produtos
                </NavLink>
            </li>

            <li>
                <NavLink to="/admin/categories" className="admin-nav-item">
                    Minhas Categorias
                </NavLink>
            </li>

            <li>
                <NavLink to="/admin/users" className="admin-nav-item">
                    Meus Ususários
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;