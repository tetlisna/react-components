import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
// import { useRef } from 'react';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  age: yup.number().positive().integer().required('Age is required'),
  gender: yup.string().required('Gender is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).max(32).required('Password is required'),
  image: yup.mixed().test('fileSize', 'File size is too large', (value) => {
    return value ? (value as FileList)[0].size <= 1024 * 1024 : true;
  }),
});

type FormData = {
  firstName: string;
  lastName: string;
  age: number | null;
  gender: string;
  email: string;
  password: string;
  image: '' | undefined;
};

export default function Form() {
  const form = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      email: '',
      password: '',
      image: '',
    },
    resolver: yupResolver(schema) as Resolver<FormData, object>,
  });
  const {
    register,
    // setValue,
    handleSubmit,
    formState,
    reset,
  } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  // const fileInput = useRef(null);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
    navigate('/');
  });

  // function setValue(name: string, value: React.UIEvent) {
  //   console.log('setValue', name, value);
  // }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2>React Hook Form</h2>
      <div className={styles.formControl}>
        <label>First Name</label>
        <input
          {...register('firstName')}
          placeholder="First Name"
          type="text"
          required
        />
        <p className={styles.error}>{errors.firstName?.message}</p>

        <label>Last Name</label>
        <input
          {...register('lastName')}
          placeholder="Last Name"
          type="text"
          required
        />
        <p className={styles.error}>{errors.lastName?.message}</p>

        <br />
        <label>Email</label>
        <input
          {...register('email')}
          placeholder="Email"
          type="email"
          required
        />
        <p className={styles.error}>{errors.email?.message}</p>

        <label>Password</label>
        <input
          {...register('password')}
          placeholder="password"
          type="password"
          required
        />
        <p className={styles.error}>{errors.password?.message}</p>
        <label>Age</label>
        <input {...register('age', { valueAsNumber: true })} />
        <p>{errors.age?.message}</p>

        <div>
          <label>Image</label>
          <input
            // name="image"
            type="file"
            accept="image/*"
            {...register('image')}
            // ref={fileInput}
            // onChange={(e) => {
            //   setValue('image', e.target.files);
            // }}
          />
          <p className={styles.error}>{errors.image?.message}</p>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
