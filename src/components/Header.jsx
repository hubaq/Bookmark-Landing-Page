/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import Button from './Button';

const Header = ({ setIsOpen }) => {
  return (
    <header>
      <div className='logo'>
        <NavLink to={'/'}>
          <img src='logo-bookmark.svg' alt='logo' />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <a href='#'>FEATURES</a>
          </li>
          <li>
            <a href='#'>PRICING</a>
          </li>
          <li>
            <a href='#'>CONTACT</a>
          </li>
        </ul>
        <Button Class='btn__header' name='Login' />
      </nav>
      <img onClick={() => setIsOpen(true)} src='icon-hamburger.svg' className='openBar' alt='' />
    </header>
  );
};

export default Header;
