
import React from "react";


const TodoList = ({todos, handleDelete, handleEdit, handleCheckMark}) => {
    return (
        <ul className="list-group">
            {todos.map((t, index) => (
                <li key={t.id} className="mt-3 list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <span className="todo-text">{t.todo}</span> */}
                        <span className={`todo-text ${t.completed ? 'completed' : ''} fw-bolder`}><span className="fw-bold">{index+1})</span> {t.todo}</span>
                        <div>
                            <input
                                className="form-check-input ms-2"
                                type="checkbox"
                                checked={t.completed}
                                onChange={() => handleCheckMark(t.id)}
                            />
                            <button className="btn btn-dark btn-sm ms-2" onClick={() => handleEdit(t.id)}>Edit</button>
                            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(t.id)}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};






export default TodoList;

