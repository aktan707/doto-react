import React from 'react';

import styles from './todo-list.module.scss'
import TodoListitem from "../todo-list-item/TodoListitem.jsx";

const TodoList = () => {
    return (
        <div className={styles.wrap}>
            <h2>Todo List</h2>
            <div className={styles.flexBtn}>
                {["All","Done","Todo"].map ((name,index) => {
                    return <button key={index}>{name}</button>
                })}
            </div>
            <TodoListitem/>
        </div>
    );
};

export default TodoList;