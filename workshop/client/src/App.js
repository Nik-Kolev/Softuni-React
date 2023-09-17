import './App.css';
import { useEffect, useState } from 'react';
import * as userService from './services/userService';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { UserList } from './components/UserList';

function App() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
    });
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
    });
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService
            .getAll()
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onUserCreateSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const result = await userService.createUser(data);
        setUsers((state) => [...state, result]);
    };

    const onUserDelete = async (userId) => {
        await userService.remove(userId);
        setUsers((state) => state.filter((x) => x._id !== userId));
    };

    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const updatedUser = await userService.updateUser(userId, data);
        setUsers((state) => state.map((x) => (x._id === userId ? updatedUser : x)));
    };

    const formChangeHandler = (e) => {
        e.preventDefault();
        let errors = {};
        const value = e.target.value;
        if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
            errors.firstName = 'First name should be between 3 and 20 characters!';
        }
        if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Last name should be between 3 and 20 characters!';
        }
        setFormErrors(errors);
        setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    };
    return (
        <>
            <Header />
            <main className='main'>
                <section className='card users-container'>
                    <Search />
                    <UserList
                        users={users}
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserDelete={onUserDelete}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        formValues={formValues}
                        formChangeHandler={formChangeHandler}
                        formErrors={formErrors}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
