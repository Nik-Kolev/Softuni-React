import { useState } from 'react';
import { register } from '../../../services/user';
import '../Auth.css';

export default function Register() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        rePass: '',
    });

    const onChangeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await register(values);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8 pb-4'>
                            <form onSubmit={onSubmitHandler}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='firstName'>
                                                First name
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='firstName'
                                                name='firstName'
                                                value={values.firstName}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='lastName'>
                                                Last name
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='lastName'
                                                name='lastName'
                                                value={values.lastName}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='email'>
                                                Email address
                                            </label>
                                            <input
                                                type='email'
                                                className='form-control'
                                                id='email'
                                                name='email'
                                                value={values.email}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='phoneNumber'>
                                                Phone Number
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='phoneNumber'
                                                name='phoneNumber'
                                                value={values.phoneNumber}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='password'>
                                                Password
                                            </label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                id='password'
                                                name='password'
                                                value={values.password}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='rePass'>
                                                Repeat Password
                                            </label>
                                            <input
                                                type='rePass'
                                                className='form-control'
                                                id='rePass'
                                                name='rePass'
                                                value={values.rePass}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* TODO : Terms of use perhaps with checkbox ? To be decided*/}
                                {/* 
                                <div className='form-group'>
                                    <label className='text-black' htmlFor='password'>
                                        Password
                                    </label>
                                    <input type='password' className='form-control' id='password' />
                                </div>

                                <div className='form-group'>
                                    <label className='text-black' htmlFor='rePass'>
                                        Repeat Password
                                    </label>
                                    <input type='rePass' className='form-control' id='rePass' />
                                </div> */}
                                <button type='submit' className='btn btn-primary-hover-outline'>
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
