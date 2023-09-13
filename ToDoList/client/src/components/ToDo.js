export default function ToDo({ _id, text, isCompleted, toggleToDoStatus }) {
    return (
        <tr className={`todo ${isCompleted ? 'is-completed' : ''}`.trim()}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
            <td className='todo-action'>
                <button className='btn todo-btn' onClick={() => toggleToDoStatus(_id)}>
                    Change status
                </button>
            </td>
        </tr>
    );
}
