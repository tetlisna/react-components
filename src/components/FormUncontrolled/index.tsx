import { useRef, useState } from 'react';
import styles from './index.module.scss';
import { schema } from '../../models/yup/schema';
import { FormDataUncontrolled } from '../../models/types/types';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';

export default function FormUncontrolled() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState(
    {} as { [key: string]: string }
  );

  const validateForm = async () => {
    const formData: FormDataUncontrolled = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      age: ageRef.current?.value || null,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      image: imageRef.current?.files?.[0] || null,
    };
    console.log(formData, 'formData');

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
    const checkForm = Object.values({
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      gender: genderRef.current?.value,
      image: imageRef.current?.files?.[0]?.name,
    }).every((value) => value !== undefined && value !== null && value !== '');
    await validateForm();
    if (Object.keys(errorMessages).length === 0 && checkForm) {
      navigate('/');
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className={styles.formControl}>
        <label>First Name</label>
        <input placeholder="First Name" type="text" ref={firstNameRef} />
        <p className={styles.error}>{errorMessages['firstName']}</p>

        <br />

        <label>Last Name</label>
        <input placeholder="Last Name" ref={lastNameRef} />
        <p className={styles.error}>{errorMessages['lastName']}</p>

        <br />

        <label>Email</label>
        <input placeholder="Email" type="email" ref={emailRef} />
        <p className={styles.error}>{errorMessages['email']}</p>

        <br />

        <label>Password</label>
        <input type="password" placeholder="password" ref={passwordRef} />
        <p className={styles.error}>{errorMessages['password']}</p>

        <br />

        <label>Gender</label>
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
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
