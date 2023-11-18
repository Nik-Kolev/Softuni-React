import { useContext } from 'react';
import { useFieldSelector } from '../../../hooks/useFieldSelector';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { NotificationContext } from '../../../context/NotificationContext';
import { useUserContext } from '../../../context/UserContext';
import '../Auth.css';

export default function Login() {
    //TODO Handle form errors !
    const { setNotification } = useContext(NotificationContext);
    const { onLoginHandler } = useUserContext();
    const { selectorRef } = useFieldSelector();
    const navigateTo = useNavigate();
    const { values, handleChange, handleSubmit } = useForm({
        email: '',
        password: '',
    });

    const onSubmitHandler = async (data) => {
        try {
            await onLoginHandler(data);
            setNotification('Logged in successfully!');
            navigateTo('/');
        } catch (err) {
            setNotification(err.message);
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
                                        ref={selectorRef}
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
