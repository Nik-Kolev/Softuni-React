import { useNavigate } from 'react-router-dom';
import { useNotificationContext } from '../../../context/NotificationContext';
import { useUserContext } from '../../../context/UserContext';
import { useFieldSelector } from '../../../hooks/useFieldSelector';
import { useForm } from '../../../hooks/useForm';
import '../Auth.css';

export default function Register() {
    const { selectorRef } = useFieldSelector();
    const { setNotification } = useNotificationContext();
    const { onRegisterHandler } = useUserContext();
    const navigateTo = useNavigate();
    const { values, handleChange, handleSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        rePass: '',
    });

    const onSubmitHandler = async (data) => {
        try {
            await onRegisterHandler(data);
            setNotification('Successfully registered!');
            navigateTo('/');
        } catch (err) {
            console.log(err);
            console.log(err.message);
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
                                                value={values.firstName || ''}
                                                onChange={handleChange}
                                                ref={selectorRef}
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
                                                onChange={handleChange}
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
                                                onChange={handleChange}
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
                                                onChange={handleChange}
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
                                                onChange={handleChange}
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
                                                onChange={handleChange}
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
