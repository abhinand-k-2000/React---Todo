
    const TodoForm = (props) => {
        const {submitForm, todo, editId, setTodo} = props;
        return (
            <form className="form-group todoForm" onSubmit={submitForm}>
                <input className=" mt-4 input-todo" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter todo..."/>
                <button className= { editId? "btn-primary btn" : "btn-success btn" } > {editId ? "Update" : "Add"}</button>
            </form>

        )
    }


    export default TodoForm;


