import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div><div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl text-white">DevQuizLet</Link >
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-white">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/statistics'>Statistics</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Header;