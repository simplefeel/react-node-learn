import React from 'react'
import {Link} from 'react-router-dom'

// The Header creates links that can be used to navigate between routes.
const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <Link to='/login'>登录</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
