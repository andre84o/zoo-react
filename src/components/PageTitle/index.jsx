import styles from './pagetitle.module.css';

const PageTitle = ({name }) => {
  if (!name) return null;
  
  return (
    <h2 className={styles.pageTitle}>
        Welcome to the {name}!
    </h2>
  );
};

export default PageTitle;
