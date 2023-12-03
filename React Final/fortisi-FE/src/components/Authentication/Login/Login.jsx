import '../Auth.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useUserContext } from '../../../context/UserContext';
import { loginSchema } from '../../../validations/loginValidations';

export default function Login() {
    const { onLoginHandler } = useUserContext();
    const navigateTo = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onBlur',
    });

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);

    const onSubmitHandler = async (data) => {
        const redirectPath = new URLSearchParams(window.location.search).get('redirect');
        try {
            await onLoginHandler(data);
            toast('Влизането успешно.');
            navigateTo(redirectPath || '/');
        } catch (err) {
            toast(err.message);
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
                                        Имейл
                                    </label>
                                    <input
                                        type='email'
                                        className={`form-control ${errors?.email ? 'input-error' : ''}`}
                                        id='email'
                                        name='email'
                                        {...register('email')}
                                    />
                                    <span className={errors?.email ? 'form-error' : ''}>{errors?.email?.message}</span>
                                </div>

                                <div className='form-group'>
                                    <label className='text-black' htmlFor='password'>
                                        Парола
                                    </label>
                                    <input
                                        type='password'
                                        className={`form-control ${errors?.password ? 'input-error' : ''}`}
                                        id='password'
                                        name='password'
                                        {...register('password')}
                                    />
                                    <span className={errors?.password ? 'form-error' : ''}>{errors?.password?.message}</span>
                                </div>

                                <button type='submit' className='btn btn-primary-hover-outline'>
                                    Вход
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
