import styles from './todo-input.module.scss'
const TodoInput = () => {
    return (
        <div className={styles.card}>
                <h2>To do list</h2>
            <div className={styles.wrap}>
                <input className={styles.input} type='text' placeholder='New Todo'/>
                <button className={styles.btn}> add new task</button>
            </div>
        </div>
    );
};

export default TodoInput;