import React from 'react';
import './SideDrawer.css';
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>


            <ul>
                <li>
                    <a href="/"> Home </a>
                </li>

                <li>
                    <a href="/">View Applications</a>
                </li>
                <li>
                    <a href="/"> New  Entry </a>
                </li>
                <li>
                    <a href="/"> Log out </a>
                </li>
            </ul>
        </nav>

    );
};
export default sideDrawer;