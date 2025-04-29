import { useState } from 'react';
import styles from './main.module.css';
import { Link, useLocation  } from 'react-router-dom';
import PageTitle from '../PageTitle';

const Main = ({ activeAnimal, setActiveAnimal, group }) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => { setShowFullDescription(prev => !prev);
  };

    const groupPaths = {
        Mammals: "/mammals",
        Reptiles: "/reptiles",
        Birds: "/birds",
  };
 

  return (
    <section className={styles.Main}>
      
      {!activeAnimal && group && <PageTitle name={group} />}
     


      {activeAnimal && isHomePage && (
        <div className={styles.overlay}>
            <button className={styles.closeBtn} onClick={() => setActiveAnimal(null)}>✖</button>
        <div className={styles.container}>

          <h2>{activeAnimal.name}</h2>
          <img className={styles.animalImage} src={`/images/${activeAnimal.imageFilename}`} alt={activeAnimal.name}/>
          
          <p>{showFullDescription
              ? activeAnimal.description
              : activeAnimal.description.split(' ').slice(0, 50).join(' ') + '...'}</p>
          <p>Food: {activeAnimal.food}</p>
          <p> Group:{" "} <Link  className={styles.groupLink} to={`/${activeAnimal.group.toLowerCase()}`}> {activeAnimal.group} </Link> </p>
          <button 
            className={styles.readMoreBtn} onClick={toggleDescription}> {showFullDescription ? 'Show less ⬆️' : 'Show more ⬇️'}
          </button>

          </div>
        </div>
      )}

      {/*Animal Page*/}

        {activeAnimal && !isHomePage && (
          <div className={styles.overlay}>
            <button className={styles.closeBtn} onClick={() => setActiveAnimal(null)}>✖</button>
          
            <div className={styles.container}>
            <h2>{activeAnimal.name}</h2>
            <img className={styles.animalImage} src={`/images/${activeAnimal.imageFilename}`} alt={activeAnimal.name} />
            <p>{activeAnimal.description}</p>
            <p>Food: {activeAnimal.food}</p>
            <p>
          Group:{" "}
          <Link className={styles.groupLink} to={`/${activeAnimal.group.toLowerCase()}`}>
            {activeAnimal.group}
          </Link>
        </p>
        </div>
      </div>
    )}

    </section>
  );
};

export default Main;
