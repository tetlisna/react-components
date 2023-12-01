import { Controller, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../models/yup/schema';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { FormDataControlled } from '../../models/types/types';
import { Gender } from '../../models/constants';

export default function Form() {
  const form = useForm<FormDataControlled>({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      email: '',
      password: '',
      image: '',
    },
    resolver: yupResolver(schema) as Resolver<FormDataControlled, object>,
  });
  const {
    register,
    // setValue,
    handleSubmit,
    formState,
    control,
    reset,
  } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  // const fileInput = useRef(null);

  const onSubmit = handleSubmit(() => {
    reset();
    navigate('/');
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2>React Hook Form</h2>
      <div className={styles.formControl}>
        <label>First Name</label>
        <input
          {...register('firstName')}
          placeholder="First Name"
          type="text"
        />
        <p className={styles.error}>{errors.firstName?.message}</p>

        <label>Last Name</label>
        <input {...register('lastName')} placeholder="Last Name" type="text" />
        <p className={styles.error}>{errors.lastName?.message}</p>

        <br />
        <label>Email</label>
        <input {...register('email')} placeholder="Email" type="email" />
        <p className={styles.error}>{errors.email?.message}</p>

        <label>Password</label>
        <input
          {...register('password')}
          placeholder="password"
          type="password"
        />
        <p className={styles.error}>{errors.password?.message}</p>
        <label>Age</label>
        <input {...register('age', { valueAsNumber: true })} />
        <p>{errors.age?.message}</p>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          rules={{ required: 'Please select a gender' }}
          render={({ field, fieldState }) => (
            <div>
              <label>Select Gender:</label>
              <select {...field}>
                {/* <option value="" disabled hidden>
                  Select an option
                </option> */}
                <option value="">...</option>
                <option value={Gender.Female}>Female</option>
                <option value={Gender.Male}>Male</option>
              </select>
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          )}
        />
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
