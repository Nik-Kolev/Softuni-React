import '../UserProfile.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-simple-toasts';

import { useUserContext } from '../../../../context/UserContext';
import { changeInformationSchema } from '../../../../validations/changeInformation';

export default function UserProfile() {
    const { user, onChangeUserInfo } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(changeInformationSchema), mode: 'onBlur' });

    const onSubmitHandler = async (data) => {
        const enhancedData = {
            ...data,
            email: user.email,
        };
        try {
            await onChangeUserInfo(enhancedData);
            toast('Промените са запазени успешно.');
            reset();
        } catch (err) {
            toast(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className='name-fields'>
                <div className='form-group'>
                    <label htmlFor='firstName' className='text-black'>
                        Име
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.firstName ? 'input-error' : ''}`}
                        id='firstName'
                        name='firstName'
                        {...register('firstName')}
                        placeholder={user.firstName}
                    />
                    <span className={errors?.firstName ? 'form-error' : ''}>{errors?.firstName?.message}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName' className='text-black'>
                        Фамилия
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.lastName ? 'input-error' : ''}`}
                        id='lastName'
                        name='lastName'
                        {...register('lastName')}
                        placeholder={user.lastName}
                    />
                    <span className={errors?.lastName ? 'form-error' : ''}>{errors?.lastName?.message}</span>
                </div>
            </div>
            <div className='contact-fields'>
                <div className='form-group'>
                    <label htmlFor='phone' className='text-black'>
                        Телефонен Номер
                    </label>

                    <input
                        type='tel'
                        className={`form-control ${errors?.phoneNumber ? 'input-error' : ''}`}
                        id='phoneNumber'
                        name='phoneNumber'
                        {...register('phoneNumber')}
                        placeholder={user.phoneNumber}
                    />
                    <span className={errors?.phoneNumber ? 'form-error' : ''}>{errors?.phoneNumber?.message}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor='email' className='text-black'>
                        Имейл
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        disabled
                        value={user.email}
                        style={{ cursor: 'not-allowed' }}
                    />
                    <span></span>
                </div>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn'>
                    Запази промените
                </button>
            </div>
        </form>
    );
}
