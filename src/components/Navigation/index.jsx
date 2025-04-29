import styles from './navigation.module.css'
import NavItem from "../NavItem"

const Navigation = () => {
    const links = ["Home", "Birds", "Reptiles", "Mammals"]
    return (
        <nav className={styles.nav}>
           {links.map((item, index) => <NavItem key={index} name={item}/>)}
        </nav>
    )
}

export default Navigation