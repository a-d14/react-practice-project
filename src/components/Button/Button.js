import styles from './Button.module.css';

function Button(props) {
    return (
        <button onClick={props.onClick} className={styles.btn} type={props.type || 'button'}>{props.msg}</button>
    );
}

export default Button;