import * as yup from 'yup';
import { useRef } from 'react';
import styles from './index.module.scss';

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
  age: string | null;
  gender: string;
  email: string;
  password: string;
  image: File | null;
};

export default function FormUncontrolled() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const formData: FormData = {
    firstName: firstNameRef.current?.value || '',
    lastName: lastNameRef.current?.value || '',
    age: ageRef.current?.value || null,
    email: emailRef.current?.value || '',
    password: passwordRef.current?.value || '',
    gender: genderRef.current?.value || '',
    image: imageRef.current?.files?.[0] || null,
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, schema);
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className={styles.formControl}>
        <label>First Name</label>
        <input name="lastName" placeholder="Password" type="text" required />

        <label>Last Name</label>
        <input name="lastName" placeholder="First Name" required />

        <br />
        <label>Email</label>
        <input name="email" placeholder="Email" type="email" required />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <label>Gender</label>
        <select name="gender" id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <label>Age</label>
        <input name="age" type="number" required />
        <label>
          Upload file:
          <input name="file" type="file" placeholder="file" required />
        </label>
        <br />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
