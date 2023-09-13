import ToDo from './ToDo';
export default function ToDoTableList({ todos, toggleToDoStatus }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='table-header-task'>Task</th>
                    <th className='table-header-status'>Status</th>
                    <th className='table-header-action'>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <ToDo key={todo._id} {...todo} toggleToDoStatus={toggleToDoStatus} />
                ))}
            </tbody>
        </table>
    );
}
