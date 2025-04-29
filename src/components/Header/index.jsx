import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './header.module.css';
import Navigation from '../Navigation';
import Navbar from '../Navbar';
import MobileNav from '../MobieNav';

const Header = ({ activeAnimal, onAnimalClick, toggleNavbar }) => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
        <button onClick={toggleNavbar} className={styles.burgerBtn}>
          <GiHamburgerMenu
            className={styles.burger}
            onClick={() => setShowNav(!showNav)}
          />
          </button>
        </div>

        <div className={styles.center}>
          <Link to="/">
            <img src="/images/logo.png" className={styles.logo} alt="Logo" />
          </Link>
        </div>

        <Navigation />
        <MobileNav />
      </header>

      
    </>
  );
};

export default Header;
