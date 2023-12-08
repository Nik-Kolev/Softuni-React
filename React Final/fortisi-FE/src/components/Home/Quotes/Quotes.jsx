import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast from 'react-simple-toasts';

import { createQuote } from '../../../services/quote';
import { quoteSchema } from '../../../validations/quoteValidations';

export default function CreateQuote() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(quoteSchema),
        mode: 'onBlur',
    });

    const onSubmitHandler = async (data) => {
        const { quoteTitle: title, text } = data;
        try {
            await createQuote({ title, text });
            reset();
            toast('Цитатът е създаден.');
        } catch (err) {
            console.error('Error creating quote:', err);
            toast(err.message);
        }
    };

    return (
        <div className='main-content'>
            <div className='untree_co-section'>
                <div className='container'>
                    <div className='block'>
                        <div className='row justify-content-center'>
                            <div className='col-md-8 col-lg-8 pb-4'>
                                <form onSubmit={handleSubmit(onSubmitHandler)}>
                                    <div className='form-group'>
                                        <label className='text-black' htmlFor='quoteTitle'>
                                            Заглавие
                                        </label>
                                        <input
                                            type='text'
                                            className={`form-control ${errors?.quoteTitle ? 'input-error' : ''}`}
                                            id='quoteTitle'
                                            name='quoteTitle'
                                            {...register('quoteTitle')}
                                        />
                                        <span className={errors?.quoteTitle ? 'form-error' : ''}>{errors?.quoteTitle?.message}</span>
                                    </div>

                                    <div className='form-group'>
                                        <label className='text-black' htmlFor='text'>
                                            Текст
                                        </label>
                                        <input
                                            type='text'
                                            className={`form-control ${errors?.text ? 'input-error' : ''}`}
                                            id='text'
                                            name='text'
                                            {...register('text')}
                                        />
                                        <span className={errors?.text ? 'form-error' : ''}>{errors?.text?.message}</span>
                                    </div>

                                    <button type='submit' className='btn btn-primary-hover-outline'>
                                        Създай цитат
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
