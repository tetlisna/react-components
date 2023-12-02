import { Controller, Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../models/yup/schema';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../../models/types/types';
import { Gender } from '../../models/constants';
import styles from './index.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {
  resetFormData,
  setFormData,
} from '../../store/reducers/formSliceReducer';

export default function Form() {
  const form = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      email: '',
      password: '',
      checkbox: false,
      // automplete: '',
      image: '',
    },
    resolver: yupResolver(schema) as unknown as Resolver<FormData, object>,
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(() => {
    const result = form.getValues();
    dispatch(setFormData(result));
    console.log(form.getValues(), 'form.getValues()');

    dispatch(resetFormData());
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
        <p className={styles.error}>{errors.age?.message}</p>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          rules={{ required: 'Please select a gender' }}
          render={({ field, fieldState }) => (
            <div>
              <label>Select Gender:</label>
              <select {...field}>
                <option value="">...</option>
                <option value={Gender.Female}>Female</option>
                <option value={Gender.Male}>Male</option>
              </select>
              {fieldState.error && (
                <p className={styles.error}>{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
        <div>
          <label>Image</label>
          <input
            type="file"
            {...register('image')}
            // onChange={(e) => {
            //   setValue('image', e.target.files);
            // }}
          />
          {/* <p className={styles.error}>{errors.automplete?.message}</p> */}
        </div>

        {/* <div>
          <label>Country</label>
          <input type="text" {...register('autocomplete')} />
          <p className={styles.error}>{errors.automplete.message}</p>
        </div> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
