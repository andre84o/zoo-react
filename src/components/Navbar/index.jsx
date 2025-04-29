import { useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from '../Logo';
import { allAnimals } from '../../data/animals';
import { useEffect, useRef } from 'react';

const Navbar = ({ showNav, onClose, onAnimalClick, activeAnimal, navRef }) => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav, onClose, navRef]);

  
  const filteredAnimals = allAnimals.filter((animal) => {
    if (currentPath === '/') return true; 
    return currentPath.includes(animal.group.toLowerCase());
  });

  return (
    
    <div ref={navRef} className={`${styles.sideNav} ${showNav ? styles.active : ''}`}>
      <Logo />
      <ul className={styles.animalList}>
        {filteredAnimals.map((animal, index) => {
          const isActive = activeAnimal?.name === animal.name;

          return (
            <li
              key={index}
              className={styles.animalItem}
              onClick={() => onAnimalClick(isActive ? null : animal)}
            >
              <div className={styles.animalLink}>
                <img
                  src={`/icons/${animal.iconFilename}`}
                  alt={animal.name}
                  className={styles.icon}
                />
                <span className={styles.animalName}>{animal.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
