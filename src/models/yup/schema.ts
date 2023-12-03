import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First Name must be more then one character')
    .max(25, 'First Name must be less then 25 characters')
    .matches(
      /^[A-Z][a-zA-Z]*(?:-[A-Z][a-zA-Z]*)*$/,
      'Use only characters with the first letter uppercase'
    )
    .required('First Name is required'),
  lastName: yup
    .string()
    .min(2, 'Last Name must be more then one character')
    .max(25, 'First Name must be less then 25 characters')
    .matches(/^[A-Za-z]+(?:-[A-Za-z]+)*$/, 'Use only characters')
    .required('Last Name is required'),
  age: yup.number().positive().integer().required('Age is required'),
  gender: yup.string().required('Gender is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
      'Password must contain at least one special character'
    )
    .min(8, 'Password must be more then 8 characters')
    .max(16, 'Password must be less then 16 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Password confirm is required'),
  image: yup
    .mixed()
    .test('fileType', 'Only JPEG and PNG are allowed', (value) => {
      if (Array.isArray(value)) {
        value && ['image/jpeg', 'image/png'].includes(value[0].type);
      }
      return true;
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (Array.isArray(value)) {
        return value[0].size <= 1024 * 1024;
      }
      return true;
    }),
  checkbox: yup.boolean().oneOf([true], 'Please accept terms and conditions'),
  autocomplete: yup.string().required('Country is required'),
});
