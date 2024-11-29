import styles from './todo-list-item.module.scss'


const TodoListitem = () => {
    return (
        <ul className={styles.wrap}>
            <li className={styles.li}>
                <span className={styles.text}> Learn React</span>
                <span className={styles.spanFlex}>
                     <input className={styles.input} type="checkbox"/>
                     <span className={styles.span}><i className="fa-solid fa-pen"></i></span>
                     <span className={styles.span2}><i className="fa-solid fa-trash-can"></i></span>
                </span>
            </li>
            <li className={styles.li}>
                <span> Practice ReactJS</span>
                <span className={styles.spanFlex}>
                     <input className={styles.input} type="checkbox"/>
                     <span className={styles.span}><i className="fa-solid fa-pen"></i></span>
                     <span className={styles.span2}><i className="fa-solid fa-trash-can"></i></span>
                </span>
            </li>
            <li className={styles.li}>
                <span>Learn Redux</span>
                <span className={styles.spanFlex}>
                     <input className={styles.input} type="checkbox"/>
                     <span className={styles.span}><i className="fa-solid fa-pen"></i></span>
                     <span className={styles.span2}><i className="fa-solid fa-trash-can"></i></span>
                </span>
            </li>
            <li className={styles.li}>
                <span>Code porfolio in React</span>
                <span className={styles.spanFlex}>
                     <input className={styles.input} type="checkbox"/>
                     <span className={styles.span}><i className="fa-solid fa-pen"></i></span>
                     <span className={styles.span2}><i className="fa-solid fa-trash-can"></i></span>
                </span>
            </li>
            <li className={styles.li}>
                <span>Learn React Native</span>
                <span className={styles.spanFlex}>
                     <input className={styles.input} type="checkbox"/>
                     <span className={styles.span}><i className="fa-solid fa-pen"></i></span>
                     <span className={styles.span2}><i className="fa-solid fa-trash-can"></i></span>
                </span>
            </li>

            <div className={styles.end}>
                <button>Delete done tasks</button>
                <button>Delete all tasks</button>
            </div>
        </ul>
    );
};

export default TodoListitem;