import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='border w-full max-w-md my-20'>
        {/* header of the form */}
        <div className='flex items-center justify-center flex-col'>
          <img src="./Group.png" alt="logo image"  className='object-cover '/>
          <h2 className='font-semibold text-lg'>create a wallet flow account</h2>
          <p>By signing up, you agree to our privacy policy and terms of use.</p>
        </div>
      </div>
    </div>
  )
}

export default Register