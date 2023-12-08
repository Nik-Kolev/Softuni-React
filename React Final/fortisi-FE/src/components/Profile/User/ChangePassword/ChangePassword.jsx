import '../UserProfile.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-simple-toasts';

import { useUserContext } from '../../../../context/UserContext';
import { changePasswordSchema } from '../../../../validations/changePasswordValidations';

export default function ChangePassword() {
    const { user, onChangePassword } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(changePasswordSchema), mode: 'onBlur' });

    const onSubmitHandler = async (data) => {
        const enhancedData = {
            password: data.password,
            newPassword: data.newPassword,
            email: user.email,
        };
        try {
            await onChangePassword(enhancedData);
            toast('Промените са запазени успешно.');
            reset();
        } catch (err) {
            toast(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className='password-fields'>
                <div className='form-group'>
                    <label htmlFor='password' className='text-black'>
                        Настояща парола
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
                <div className='password-fields'>
                    <div className='form-group'>
                        <label htmlFor='newPassword' className='text-black'>
                            Нова парола
                        </label>
                        <input
                            type='password'
                            className={`form-control ${errors?.newPassword ? 'input-error' : ''}`}
                            id='newPassword'
                            name='newPassword'
                            {...register('newPassword')}
                        />
                        <span className={errors?.newPassword ? 'form-error' : ''}>{errors?.newPassword?.message}</span>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='reNewPassword' className='text-black'>
                            Потвърди новата парола
                        </label>
                        <input
                            type='password'
                            className={`form-control ${errors?.reNewPassword ? 'input-error' : ''}`}
                            id='reNewPassword'
                            name='reNewPassword'
                            {...register('reNewPassword')}
                        />
                        <span className={errors?.reNewPassword ? 'form-error' : ''}>{errors?.reNewPassword?.message}</span>
                    </div>
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
