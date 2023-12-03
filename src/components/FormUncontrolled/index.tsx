import { useRef, useState } from 'react';
import styles from './index.module.scss';
import { FormData } from '../../models/types/types';
import { schema } from '../../models/yup/schema';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setFormData } from '../../store/reducers/formSliceReducer';
import { convertFileToBase64 } from '../../helpers/utils';
import { Checkbox } from './Checkbox/Checkbox';
import { Autocomplete } from './Autocomplete/Autocomplete';
import { Input } from './InputUncontrolled/Input';

export default function FormUncontrolled() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [errorMessages, setErrorMessages] = useState(
    {} as { [key: string]: string }
  );

  const validateForm = async () => {
    const formData: FormData = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      age: Number(ageRef.current?.value) || null,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      passwordConfirm: passwordConfirmRef.current?.value || '',
      gender: genderRef.current?.value || '',
      image: imageRef.current?.files?.[0]?.name || '',
      checkbox: checkRef.current?.checked || false,
      autocomplete: autocompleteRef.current?.value || '',
    };
    console.log(formData, 'formData');

    try {
      await schema.validate(formData, { abortEarly: false, strict: false });
      if (!checkRef.current?.checked) {
        console.log('ref', checkRef.current?.checked);
      }
      setErrorMessages({});
    } catch (error) {
      if (error instanceof ValidationError) {
        if (error.inner.length > 0) {
          const newErrorMessage: Record<string, string> = {};
          error.inner.forEach((validationError) => {
            newErrorMessage[validationError.path as string] =
              validationError.message;
            setErrorMessages(newErrorMessage);
          });
        }
      }
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataFilled = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      age: Number(ageRef.current?.value) || null,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      passwordConfirm: passwordConfirmRef.current?.value || '',
      gender: genderRef.current?.value || '',
      image: '',
      checkbox: true || false,
      autocomplete: autocompleteRef.current?.value || '',
    };

    if (imageRef.current?.files?.[0]) {
      const imageFile = imageRef.current?.files?.[0];
      const base64String = await convertFileToBase64(imageFile);
      formDataFilled.image = base64String;
    }
    const checkForm = Object.values(formDataFilled).every(
      (value) => value !== undefined && value !== null && value !== ''
    );
    await validateForm();

    if (Object.keys(errorMessages).length === 0 && checkForm) {
      dispatch(setFormData(formDataFilled));
      navigate('/');
    }
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off" noValidate>
      <div className={styles.formControl}>
        <Input
          type={'firstName'}
          label={'First Name'}
          placeholder={'First Name'}
          id={'firstName'}
          error={errorMessages['firstName']}
          ref={firstNameRef}
        />
        <Input
          type={'lastName'}
          label={'Last Name'}
          placeholder={'Last Name'}
          id={'lastName'}
          error={errorMessages['lastName']}
          ref={lastNameRef}
        />
        <Input
          type={'email'}
          label={'Email'}
          placeholder={'Email'}
          id={'email'}
          error={errorMessages['email']}
          ref={emailRef}
        />
        <Input
          type={'password'}
          label={'Password'}
          placeholder={'Password'}
          id={'password'}
          error={errorMessages['password']}
          ref={passwordRef}
        />
        <Input
          type={'password'}
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          id={'passwordConfirm'}
          error={errorMessages['passwordConfirm']}
          ref={passwordConfirmRef}
        />

        <Input
          type={'age'}
          label={'Age'}
          placeholder={'Your Age'}
          id={'age'}
          error={errorMessages['age']}
          ref={ageRef}
        />

        <label htmlFor="gender">Gender</label>
        <select id="gender" ref={genderRef}>
          <option value="">...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <p className={styles.error}>{errorMessages['gender']}</p>

        <label htmlFor="image">
          <input id="image" type="file" ref={imageRef} />
          <small>Image</small>
        </label>
        <p className={styles.error}>{errorMessages['imageRef']}</p>
        <Autocomplete
          id={'autocomplete'}
          label="Country"
          error={errorMessages['autocomplete']}
          ref={autocompleteRef}
        />
        <Checkbox
          id={'checkbox'}
          type={'checkbox'}
          label={'Accept Terms & Conditions'}
          ref={checkRef}
          error={errorMessages['checkbox']}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
