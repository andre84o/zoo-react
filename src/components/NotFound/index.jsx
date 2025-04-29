import styles from './notfound.module.css'

const NotFound = () => {
    return (
      <div className={styles.error}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
    );
  };
  
  export default NotFound;
  