import '../UserProfile.css';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-simple-toasts';

import { useUserContext } from '../../../../context/UserContext';

export default function Address() {
    const { user, onChangeUserAddress } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset,
    } = useForm({ mode: 'onBlur' });

    useEffect(() => {
        setFocus('city');
    }, [setFocus]);

    const onSubmitHandler = async (data) => {
        try {
            await onChangeUserAddress(data);
            toast('Промените са запазени успешно.');
            reset();
        } catch (err) {
            toast(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className='city-fields'>
                <div className='form-group'>
                    <label htmlFor='city' className='text-black'>
                        Град
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.city ? 'input-error' : ''}`}
                        id='city'
                        name='city'
                        {...register('city')}
                        placeholder={user.address.city}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='street' className='text-black'>
                        Улица
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.street ? 'input-error' : ''}`}
                        id='street'
                        name='street'
                        {...register('street')}
                        placeholder={user.address.street}
                    />
                </div>
                <div className='form-group short-input'>
                    <label htmlFor='streetNumber' className='text-black'>
                        Улица №
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.streetNumber ? 'input-error' : ''}`}
                        id='streetNumber'
                        name='streetNumber'
                        {...register('streetNumber')}
                        placeholder={user.address.streetNumber}
                    />
                </div>
            </div>
            <div className='specific-info '>
                <div className='form-group'>
                    <label htmlFor='block' className='text-black'>
                        Блок
                    </label>

                    <input
                        type='text'
                        className={`form-control ${errors?.block ? 'input-error' : ''}`}
                        id='block'
                        name='block'
                        {...register('block')}
                        placeholder={user.address.block}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='entrance' className='text-black'>
                        Вход
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.entrance ? 'input-error' : ''}`}
                        id='entrance'
                        name='entrance'
                        {...register('entrance')}
                        placeholder={user.address.entrance}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='floor' className='text-black'>
                        Етаж
                    </label>

                    <input
                        type='text'
                        className={`form-control ${errors?.floor ? 'input-error' : ''}`}
                        id='floor'
                        name='floor'
                        {...register('floor')}
                        placeholder={user.address.floor}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='apartment' className='text-black'>
                        Апартамент
                    </label>
                    <input
                        type='text'
                        className={`form-control ${errors?.apartment ? 'input-error' : ''}`}
                        id='apartment'
                        name='apartment'
                        {...register('apartment')}
                        placeholder={user.address.apartment}
                    />
                </div>
            </div>
            <div className='form-group'>
                <label className='text-black' htmlFor='description'>
                    Допълнителна информация:
                </label>
                <textarea
                    style={{ minHeight: '100px' }}
                    className={`form-control description ${errors?.description ? 'input-error' : ''}`}
                    {...register('description')}
                    placeholder={user.address.description}
                />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn'>
                    Запази промените
                </button>
            </div>
        </form>
    );
}
