import styles from "./Button.module.css";

const Button = ({text}) => {
  return (
    <button 
      className={styles.button} 
      // onClick={onClick} 
      // style={style}
    >
      {text}
    </button>
  );
};

export default Button;