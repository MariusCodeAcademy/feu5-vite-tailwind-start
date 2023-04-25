import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className='bg-white mx-auto shadow-gray-400 shadow-md rounded max-w-md px-8 pt-6 pb-8 mb-4'
      onSubmit={formik.handleSubmit}
    >
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formik.touched.email && formik.errors.email ? 'border-red-500' : ''
          }`}
          placeholder='Email address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className='text-red-500 text-xs italic'>{formik.errors.email}</p>
        ) : null}
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formik.touched.password && formik.errors.password ? 'border-red-500' : ''
          }`}
          placeholder='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className='text-red-500 text-xs italic'>{formik.errors.password}</p>
        ) : null}
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default Login;
