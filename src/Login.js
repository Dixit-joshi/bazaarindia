import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-secondary'>
        <div className='bg-white p-3 rounded w-25'>
            <form>
                <h2 className='text-center'>Sign In</h2>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter E-mail" className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password" className='form-control'/>
                </div>
                <button className='btn btn-warning'>Sign in</button>
            </form>
        </div>
    </div>
  )
}

export default Login