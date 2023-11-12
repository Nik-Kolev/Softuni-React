import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useErrorContext } from '../../../context/ErrorContext';
import { useForm } from '../../../hooks/useForm';
import { login } from '../../../services/user';
import '../Auth.css';

export default function Login() {
    const emailInputRef = useRef(null);
    const navigate = useNavigate();
    const { setError } = useErrorContext();
    const { values, handleChange, handleSubmit, errors } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, []);

    // useEffect(() => {
    //     console.log(errors);
    // }, [errors]);

    const onSubmitHandler = async (data) => {
        try {
            await login(data);

            // navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8 pb-4'>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className='form-group'>
                                    <label className='text-black' htmlFor='email'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        value={values.email || ''}
                                        onChange={handleChange}
                                        ref={emailInputRef}
                                    />
                                    {/* {errors.email && <span>{errors.email}</span>} */}
                                </div>

                                <div className='form-group'>
                                    <label className='text-black' htmlFor='password'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        name='password'
                                        value={values.password || ''}
                                        onChange={handleChange}
                                    />
                                    {/* {errors.password && <span>{errors.password}</span>} */}
                                </div>

                                <button type='submit' className='btn btn-primary-hover-outline'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
