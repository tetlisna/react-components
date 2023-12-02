import { useRef, useState } from 'react';
import styles from './index.module.scss';
import { schema } from '../../models/yup/schema';
import { FormData } from '../../models/types/types';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setFormData } from '../../store/reducers/formSliceReducer';

export default function FormUncontrolled() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [errorMessages, setErrorMessages] = useState(
    {} as { [key: string]: string }
  );
  const validateForm = async () => {
    const imageFile = imageRef.current?.files?.[0];
    let base64String = '';
    if (imageFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          base64String = event.target.result as string;
        }
      };
    }
    const formData: FormData = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      age: Number(ageRef.current?.value) || null,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      image: base64String || '',
      checkbox: checkRef.current?.checked || false,
      // image: imageRef.current?.files?.[0] || null,
      // autocomplete: countryRef.current?.value || null,
    };
    console.log(base64String, 'base64String');
    console.log(formData, 'formData');

    try {
      await schema.validate(formData, { abortEarly: false, strict: false });
      if (!checkRef.current?.checked) {
        console.log(checkRef, 'checkRef');

        // throw new ValidationError(
        //   'Accept T&C is required',
        //    checkRef.current?.name,
        //   //  formData,
        //   //  null,
        //   //  checkRef.current
        // );
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
      gender: genderRef.current?.value || '',
      image: imageRef.current?.files?.[0]?.name || '',
      checkbox: true || false,
      // autocomplete: country.current?.value,
    };
    const checkForm = Object.values(formDataFilled).every(
      (value) => value !== undefined && value !== null && value !== ''
    );
    await validateForm();
    if (Object.keys(errorMessages).length === 0 && checkForm) {
      console.log(formDataFilled, 'formDataFilled');

      dispatch(setFormData(formDataFilled));
      navigate('/');
    }
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off" noValidate>
      <div className={styles.formControl}>
        <label>First Name</label>
        <input placeholder="First Name" type="text" ref={firstNameRef} />
        <p className={styles.error}>{errorMessages['firstName']}</p>

        <br />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" placeholder="Last Name" ref={lastNameRef} />
        <p className={styles.error}>{errorMessages['lastName']}</p>

        <br />

        <label htmlFor="email">Email</label>
        <input id="email" placeholder="Email" type="email" ref={emailRef} />
        <p className={styles.error}>{errorMessages['email']}</p>

        <br />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" ref={passwordRef} />
        <p className={styles.error}>{errorMessages['password']}</p>

        <br />

        <label htmlFor="gender">Gender</label>
        <select id="gender" ref={genderRef}>
          <option value="">...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <p className={styles.error}>{errorMessages['gender']}</p>

        <br />

        <label>Age</label>
        <input type="number" ref={ageRef} min="16" max="110" />
        <br />
        <p className={styles.error}>{errorMessages['age']}</p>

        <label>Upload file:</label>
        <input type="file" placeholder="file" ref={imageRef} />

        <p className={styles.error}>{errorMessages['image']}</p>

        <br />

        <label htmlFor="checkbox">
          <input type="checkbox" ref={checkRef} />
          <small>Accept Terms & Conditions</small>
        </label>
        <p className={styles.error}>{errorMessages['checkRef']}</p>

        <br />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
