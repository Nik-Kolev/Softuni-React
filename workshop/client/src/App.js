import './App.css';
import { useEffect, useState } from 'react';
import * as userService from './services/userService';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { UserList } from './components/UserList';

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService
            .getAll()
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Header />
            <main className='main'>
                <section className='card users-container'>
                    <Search />
                    <UserList users={users} />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
