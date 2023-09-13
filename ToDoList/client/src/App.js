import { useEffect } from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import Loading from './components/Loading';
import ToDoTableList from './components/ToDoTableList';

function App() {
    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <div>
            {/* <!-- Navigation header --> */}
            <Header />

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
                        {/* <Loading /> */}

                        {/* <!-- Todo list table --> */}
                        <ToDoTableList />
                    </div>
                </section>
            </main>

            {/* <!-- Footer --> */}
            <Footer />
        </div>
    );
}

export default App;
