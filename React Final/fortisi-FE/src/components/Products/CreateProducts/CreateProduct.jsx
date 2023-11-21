import './CreateProduct.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '../../../validations/createProductValidations';
import { useNotificationContext } from '../../../context/NotificationContext';
import { useProductContext } from '../../../context/ProductContext';

export default function CreateProduct() {
    const { setNotification } = useNotificationContext();
    const { onCreateProductHandler } = useProductContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(productSchema), mode: 'onBlur' });

    const onSubmitHandler = async (data) => {
        console.log(data);
        try {
            await onCreateProductHandler(data);
        } catch (err) {
            console.log(err);
            setNotification(err.message);
        }
    };

    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    {/*TODO: to add nice background pic and style the fields*/}
                    {/* <img src='src/components/Products/CreateProducts/asd.jpg' alt='' /> */}
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-6 pb-4'>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className='row'>
                                    <h5 className='text-black'>General Information:</h5>
                                    <br />
                                    <br />
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='productType'>
                                                Product Type:
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
                                                Name:
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
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='color'>
                                                Color:
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
                                            <label className='text-black' htmlFor='quantity'>
                                                Quantity:
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
                                </div>

                                <div className='row'>
                                    <h5 className='text-black' htmlFor='email'>
                                        Details:
                                    </h5>
                                    <br />
                                    <br />
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='advantages'>
                                                Advantages:
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
                                            <label className='text-black' htmlFor='imageUrl'>
                                                Image Url:
                                            </label>
                                            <input
                                                type='text'
                                                className={`form-control ${errors?.imageUrl ? 'input-error' : ''}`}
                                                id='imageUrl'
                                                name='imageUrl'
                                                {...register('imageUrl')}
                                            />
                                            <span className={errors?.imageUrl ? 'form-error' : ''}>{errors?.imageUrl?.message}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='size'>
                                                Size:
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
                                                Materials:
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

                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='description'>
                                                Short Description:
                                            </label>
                                            <textarea className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='password'>
                                                Password
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
                                                Confirm Password
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
                                </div> */}
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
                                    Create Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
