import './ProductForm.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useImagePreview } from '../../../hooks/useImagePreview';
import { productSchema } from '../../../validations/createProductValidations';

export default function ProductForm({ operationType, onSubmitHandler, defaultValues }) {
    const { previewImage, handleImage } = useImagePreview();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({ resolver: yupResolver(productSchema), mode: 'onBlur', defaultValues: defaultValues });

    useEffect(() => {
        if (defaultValues) {
            Object.keys(defaultValues).forEach((key) => {
                if (key === 'imageUrl') {
                    handleImage(defaultValues[key]);
                }
                if (typeof defaultValues[key] === 'object') {
                    Object.keys(defaultValues[key]).forEach((nestedKey) => {
                        const nestedFieldName = nestedKey;
                        setValue(nestedFieldName, defaultValues[key][nestedKey]);
                    });
                } else {
                    setValue(key, defaultValues[key]);
                }
            });
        }
    }, [defaultValues, setValue, handleImage]);
    //TODO: Image check !
    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-10 pb-4'>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className='row'>
                                    <h5 className='text-black'>Основна информация за продукта:</h5>
                                    <br />
                                    <br />
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='productType'>
                                                Тип на продукта:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.productType ? 'input-error' : ''}`}
                                                id='productType'
                                                name='productType'
                                                {...register('productType')}
                                            />
                                            <span className={errors?.productType ? 'form-error' : ''}>{errors?.productType?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='name'>
                                                Име:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.name ? 'input-error' : ''}`}
                                                id='name'
                                                name='name'
                                                {...register('name')}
                                            />
                                            <span className={errors?.name ? 'form-error' : ''}>{errors?.name?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='category'>
                                                Категория:
                                            </label>
                                            <select
                                                name='category'
                                                id='category'
                                                className={`form-control ${errors?.category ? 'input-error' : ''}`}
                                                {...register('category')}>
                                                <option value='bedroom'>Спалня</option>
                                                <option value='livingroom'>Дневна</option>
                                                <option value='kitchen'>Кухня</option>
                                                <option value='children'>Детска Стая</option>
                                                <option value='entranceHall'>Антре</option>
                                                <option value='office'>Офис</option>
                                            </select>
                                            <span className={errors?.category ? 'form-error' : ''}>{errors?.category?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='quantity'>
                                                Количество:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.quantity ? 'input-error' : ''}`}
                                                id='quantity'
                                                name='quantity'
                                                {...register('quantity')}
                                            />
                                            <span className={errors?.quantity ? 'form-error' : ''}>{errors?.quantity?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='price'>
                                                Цена:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.price ? 'input-error' : ''}`}
                                                id='price'
                                                name='price'
                                                {...register('price')}
                                            />
                                            <span className={errors?.price ? 'form-error' : ''}>{errors?.price?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='discount'>
                                                Отстъпка:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.discount ? 'input-error' : ''}`}
                                                id='discount'
                                                name='discount'
                                                {...register('discount')}
                                            />
                                            <span className={errors?.discount ? 'form-error' : ''}>{errors?.discount?.message}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <h5 className='text-black' htmlFor='email'>
                                        Детайли:
                                    </h5>
                                    <br />
                                    <div className='col-12 description'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='description'>
                                                Кратко описание:
                                            </label>
                                            <textarea
                                                style={{ minHeight: '140px' }}
                                                className={`form-control description ${errors?.description ? 'input-error' : ''}`}
                                                {...register('description')}
                                            />
                                            <span className={errors?.description ? 'form-error' : ''}>{errors?.description?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='advantages'>
                                                Предимства:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.advantages ? 'input-error' : ''}`}
                                                id='advantages'
                                                name='advantages'
                                                {...register('advantages')}
                                            />
                                            <span className={errors?.advantages ? 'form-error' : ''}>{errors?.advantages?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='color'>
                                                Цвят:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.color ? 'input-error' : ''}`}
                                                id='color'
                                                name='color'
                                                {...register('color')}
                                            />
                                            <span className={errors?.color ? 'form-error' : ''}>{errors?.color?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='size'>
                                                Размер:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.size ? 'input-error' : ''}`}
                                                id='size'
                                                name='size'
                                                {...register('size')}
                                            />
                                            <span className={errors?.size ? 'form-error' : ''}>{errors?.size?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='materials'>
                                                Материали:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.materials ? 'input-error' : ''}`}
                                                id='materials'
                                                name='materials'
                                                {...register('materials')}
                                            />
                                            <span className={errors?.materials ? 'form-error' : ''}>{errors?.materials?.message}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='col-9'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='imageUrl'>
                                                Качи снимка:
                                            </label>
                                            <input
                                                type='file'
                                                className={`form-control`}
                                                id='imageUrl'
                                                name='imageUrl'
                                                accept='image/*'
                                                {...register('imageUrl')}
                                                onChange={(e) => {
                                                    handleImage(e);
                                                }}
                                            />
                                            <span className={errors?.imageUrl ? 'form-error' : ''}>{errors?.imageUrl?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-9' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div className='form-group'>
                                            {previewImage ? (
                                                <>
                                                    <img
                                                        src={previewImage}
                                                        alt='preview'
                                                        style={{
                                                            maxHeight: '250px',
                                                            maxWidth: '100%',
                                                        }}
                                                    />
                                                </>
                                            ) : (
                                                <img
                                                    src='/src/components/Products/ProductForm/imagePreview.jpg'
                                                    alt='preview'
                                                    style={{
                                                        maxHeight: '250px',
                                                        maxWidth: '100%',
                                                        border: '1px solid black',
                                                    }}></img>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' className='btn btn-primary-hover-outline'>
                                    {operationType}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
