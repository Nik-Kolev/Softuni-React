function App() {
    return (
        <div>
            {/* <!-- Navigation header --> */}
            <header className='navigation-header'>
                <span className='navigation-logo'>
                    <img src='/static/images/todo-icon.png' alt='todo-logo' />
                </span>
                <span className='spacer'></span>
                <span className='navigation-description'>Todo List</span>
            </header>

            {/* <!-- Main content --> */}
            <main className='main'>
                {/* <!-- Section container --> */}
                <section className='todo-list-container'>
                    <h1>Todo List</h1>

                    <div className='add-btn-container'>
                        <button className='btn'>+ Add new Todo</button>
                    </div>

                    <div className='table-wrapper'>
                        {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                        <div className='loading-container'>
                            <div className='loading-spinner'>
                                <span className='loading-spinner-text'>Loading</span>
                            </div>
                        </div>

                        {/* <!-- Todo list table --> */}
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='table-header-task'>Task</th>
                                    <th className='table-header-status'>Status</th>
                                    <th className='table-header-action'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Todo item --> */}
                                <tr className='todo is-completed'>
                                    <td>Give dog a bath</td>
                                    <td>Complete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo is-completed'>
                                    <td>Do laundry</td>
                                    <td>Complete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo'>
                                    <td>Vacuum floor</td>
                                    <td>Incomplete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo is-completed'>
                                    <td>Feed cat</td>
                                    <td>Complete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo'>
                                    <td>Change light bulbs</td>
                                    <td>Incomplete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo is-completed'>
                                    <td>Feed cat</td>
                                    <td>Complete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo'>
                                    <td>Change light bulbs</td>
                                    <td>Incomplete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo is-completed'>
                                    <td>Go to Store</td>
                                    <td>Completed</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>

                                {/* <!-- Todo item --> */}
                                <tr className='todo'>
                                    <td>Fill gas tank</td>
                                    <td>Incomplete</td>
                                    <td className='todo-action'>
                                        <button className='btn todo-btn'>Change status</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            {/* <!-- Footer --> */}
            <footer className='footer'>
                <p>Copyright © designed by Mihail Valkov</p>
            </footer>
        </div>
    );
}

export default App;
