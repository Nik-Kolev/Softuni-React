import '../Auth.css';

export default function Register() {
    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8 pb-4'>
                            <form>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='fname'>
                                                First name
                                            </label>
                                            <input type='text' className='form-control' id='fname' />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='lname'>
                                                Last name
                                            </label>
                                            <input type='text' className='form-control' id='lname' />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='email'>
                                                Email address
                                            </label>
                                            <input type='email' className='form-control' id='email' />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='phoneNumber'>
                                                Phone Number
                                            </label>
                                            <input type='text' className='form-control' id='phoneNumber' />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='password'>
                                                Password
                                            </label>
                                            <input type='password' className='form-control' id='password' />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='form-group'>
                                            <label className='text-black' htmlFor='rePass'>
                                                Repeat Password
                                            </label>
                                            <input type='rePass' className='form-control' id='rePass' />
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
