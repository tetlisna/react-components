import { useRef, useState } from 'react';
import styles from './index.module.scss';
import { schema } from '../../models/yup/schema';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setFormData } from '../../store/reducers/formSliceReducer';
import { convertFileToBase64 } from '../../helpers/utils';
import { Checkbox } from './Checkbox/Checkbox';
import { Autocomplete } from './Autocomplete/Autocomplete';
import { Input } from './InputUncontrolled/Input';
import { Select } from './SelectUncontrolled/Select';

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
    const formData = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      age: Number(ageRef.current?.value) || 0,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      passwordConfirm: passwordConfirmRef.current?.value || '',
      gender: genderRef.current?.value || '',
      image: imageRef.current?.files?.[0] || undefined,
      checkbox: checkRef.current?.checked || false,
      autocomplete: autocompleteRef.current?.value || '',
    };

    try {
      await schema.validate(formData, { abortEarly: false, strict: false });
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
      age: Number(ageRef.current?.value) || 0,
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
          ref={firstNameRef}
          error={errorMessages['firstName']}
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
          ref={emailRef}
          error={errorMessages['email']}
        />
        <Input
          type={'password'}
          label={'Password'}
          placeholder={'Password'}
          id={'password'}
          ref={passwordRef}
          error={errorMessages['password']}
        />
        <Input
          type={'password'}
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          id={'passwordConfirm'}
          ref={passwordConfirmRef}
          error={errorMessages['passwordConfirm']}
        />
        <Input
          type={'age'}
          label={'Age'}
          placeholder={'Your Age'}
          id={'age'}
          ref={ageRef}
          error={errorMessages['age']}
        />
        <Select
          label={'Gender'}
          id={'gender'}
          type={'gender'}
          placeholder={'Gender'}
          ref={genderRef}
          error={errorMessages['gender']}
        />
        <Input
          type={'file'}
          label={'Upload Image'}
          placeholder={'Upload Image'}
          id={'image'}
          ref={imageRef}
          error={errorMessages['image']}
        />
        <Autocomplete
          id={'autocomplete'}
          label="Country"
          ref={autocompleteRef}
          error={errorMessages['autocomplete']}
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
