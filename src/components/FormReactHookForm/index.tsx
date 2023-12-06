import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserSchema, schema } from '../../models/yup/schema';
import { useNavigate } from 'react-router-dom';
import { Gender } from '../../models/constants';
import styles from './index.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setFormData } from '../../store/reducers/formSliceReducer';
import { convertFileToBase64 } from '../../helpers/utils';
import { Autocomplete } from './Autocomplete';

export default function Form() {
  const form = useForm<UserSchema>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors, isValid } = formState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: UserSchema) => {
    if (data.image) {
      const file = data.image[0];
      const base64String = await convertFileToBase64(file);
      const newData = { ...data, image: base64String };
      dispatch(setFormData(newData));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <label>Confirm Password</label>
        <input
          {...register('passwordConfirm')}
          placeholder="passwordConfirm"
          type="password"
        />
        <p className={styles.error}>{errors.passwordConfirm?.message}</p>

        <label>Age</label>
        <input {...register('age')} />
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
          <label htmlFor="image">Upload Image</label>
          <input id="image" type="file" {...register('image')} />
          {errors.image && (
            <p className={styles.error}>{errors.image.message}</p>
          )}
        </div>
        <Controller
          name="autocomplete"
          control={control}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Autocomplete onChange={onChange} errors={error?.message} />
          )}
        />
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
