import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import styles from './layout.module.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Navbar from '../../components/Navbar';

const Layout = ({ activeAnimal, onAnimalClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const shouldShowMain = ['/', '/birds', '/reptiles', '/mammals'].includes(currentPath);
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const getGroupFromPath = (path) => {
    if (path === "/birds") return "Birds";
    if (path === "/reptiles") return "Reptiles";
    if (path === "/mammals") return "Mammals";
    return "Zoo";
  };

  const toggleNavbar = () => {
    setShowNav(prev => !prev);
  };

  useEffect(() => {
    onAnimalClick(null);
  }, [location.pathname]);

  return (
    <>
    <div className={styles.layout}>
      <Header
        activeAnimal={activeAnimal}
        onAnimalClick={onAnimalClick}
        toggleNavbar={toggleNavbar}
      />
      <div className={styles.contentArea}>
      <Navbar
        showNav={showNav}
        onClose={() => setShowNav(false)}
        activeAnimal={activeAnimal}
        onAnimalClick={onAnimalClick}
        navRef={navRef}/>

      <div className={styles.main}>
        <Outlet />
        {shouldShowMain && (
          <Main
          group={getGroupFromPath(currentPath)}
          activeAnimal={activeAnimal}
          setActiveAnimal={onAnimalClick}
          />
        )}
        </div>
      </div>
      
      <Footer />
      </div>
    </>
  );
};

export default Layout;
