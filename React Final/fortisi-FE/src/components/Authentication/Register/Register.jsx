import '../Auth.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useUserContext } from '../../../context/UserContext';
import { registerSchema } from '../../../validations/registerValidations';

export default function Register() {
    const { onRegisterHandler } = useUserContext();
    const navigateTo = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm({ resolver: yupResolver(registerSchema), mode: 'onBlur' });

    useEffect(() => {
        setFocus('firstName');
    }, [setFocus]);

    const onSubmitHandler = async (data) => {
        try {
            await onRegisterHandler(data);
            toast('Регистрацията успешна.');
            navigateTo('/');
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
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='firstName'>
                                                Име
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.firstName ? 'input-error' : ''}`}
                                                id='firstName'
                                                name='firstName'
                                                {...register('firstName')}
                                            />
                                            <span className={errors?.firstName ? 'form-error' : ''}>{errors?.firstName?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='lastName'>
                                                Фамилия
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.lastName ? 'input-error' : ''}`}
                                                id='lastName'
                                                name='lastName'
                                                {...register('lastName')}
                                            />
                                            <span className={errors?.lastName ? 'form-error' : ''}>{errors?.lastName?.message}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
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
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='phoneNumber'>
                                                Телефонен Номер
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.phoneNumber ? 'input-error' : ''}`}
                                                id='phoneNumber'
                                                name='phoneNumber'
                                                {...register('phoneNumber')}
                                            />
                                            <span className={errors?.phoneNumber ? 'form-error' : ''}>{errors?.phoneNumber?.message}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
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
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='rePass'>
                                                Потвърди Паролата
                                            </label>
                                            <input
                                                type='password'
                                                className={`form-control ${errors?.rePass ? 'input-error' : ''}`}
                                                id='rePass'
                                                name='rePass'
                                                {...register('rePass')}
                                            />
                                            <span className={errors?.rePass ? 'form-error' : ''}>{errors?.rePass?.message}</span>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' className='btn btn-primary-hover-outline'>
                                    Регистрация
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
