export default function CreateProduct() {
    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8 pb-4'>
                            {/* <form onSubmit={handleSubmit(onSubmitHandler)}> */}
                            <form>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='firstName'>
                                                First name
                                            </label>
                                            <input
                                                type='text'
                                                // className={`form-control ${errors?.firstName ? 'input-error' : ''}`}
                                                id='firstName'
                                                name='firstName'
                                                // {...register('firstName')}
                                            />
                                            {/* <span className={errors?.firstName ? 'form-error' : ''}>{errors?.firstName?.message}</span> */}
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='lastName'>
                                                Last name
                                            </label>
                                            <input
                                                type='text'
                                                // className={`form-control ${errors?.lastName ? 'input-error' : ''}`}
                                                id='lastName'
                                                name='lastName'
                                                // {...register('lastName')}
                                            />
                                            {/* <span className={errors?.lastName ? 'form-error' : ''}>{errors?.lastName?.message}</span> */}
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
                                                // className={`form-control ${errors?.email ? 'input-error' : ''}`}
                                                id='email'
                                                name='email'
                                                // {...register('email')}
                                            />
                                            {/* <span className={errors?.email ? 'form-error' : ''}>{errors?.email?.message}</span> */}
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='phoneNumber'>
                                                Phone Number
                                            </label>
                                            <input
                                                type='text'
                                                // className={`form-control ${errors?.phoneNumber ? 'input-error' : ''}`}
                                                id='phoneNumber'
                                                name='phoneNumber'
                                                // {...register('phoneNumber')}
                                            />
                                            {/* <span className={errors?.phoneNumber ? 'form-error' : ''}>{errors?.phoneNumber?.message}</span> */}
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
