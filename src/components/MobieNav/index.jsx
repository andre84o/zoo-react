import { useState } from "react";
import styles from './mobilenav.module.css'
import NavItem from "../NavItem"
import Hamburger from 'hamburger-react'

const MobileNav = () => {
        const links = ["Home", "Birds", "Reptiles", "Mammals"]
        const [isOpen, setOpen] = useState(false)
    return (
        <div className={styles.mobileNavContainer}>
        <div className={styles.hamburgerWrapper}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff"/>
        </div>
      
        {isOpen && (
          <nav className={styles.Mobnav}>
            {links.map((item, index) => (
              <NavItem key={index} name={item} onClick={() => setOpen(false)} />
            ))}
          </nav>
        )}
      </div>


    )
}

export default MobileNav