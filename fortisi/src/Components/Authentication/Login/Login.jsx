import '../Auth.css';

export default function Login() {
    return (
        <div className='untree_co-section'>
            <div className='container'>
                <div className='block'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8 pb-4'>
                            <form>
                                <div className='form-group'>
                                    <label className='text-black' htmlFor='email'>
                                        Email address
                                    </label>
                                    <input type='email' className='form-control' id='email' />
                                </div>

                                <div className='form-group'>
                                    <label className='text-black' htmlFor='password'>
                                        Password
                                    </label>
                                    <input type='password' className='form-control' id='password' />
                                </div>

                                <button type='submit' className='btn btn-primary-hover-outline'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
