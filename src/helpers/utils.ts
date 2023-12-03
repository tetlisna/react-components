// import { schema } from '../../models/yup/schema';
// import { ValidationError } from 'yup';

export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.onerror = (error) => reject(error);
  });
};

//export const validateForm = async (formData) => {
//   const formData: FormData = {
//     firstName: firstNameRef.current?.value || '',
//     lastName: lastNameRef.current?.value || '',
//     age: Number(ageRef.current?.value) || null,
//     email: emailRef.current?.value || '',
//     password: passwordRef.current?.value || '',
//     passwordConfirm: passwordConfirmRef.current?.value || '',
//     gender: genderRef.current?.value || '',
//     image: imageRef.current?.files?.[0]?.name || '',
//     checkbox: checkRef.current?.checked || false,
//     // image: imageRef.current?.files?.[0] || null,
//     // autocomplete: countryRef.current?.value || null,
//   };

//   try {
//     await schema.validate(formData, { abortEarly: false, strict: false });
//     if (!checkRef.current?.checked) {
//       console.log('ref', checkRef.current?.checked);
//     }
//     setErrorMessages({});
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       if (error.inner.length > 0) {
//         const newErrorMessage: Record<string, string> = {};
//         error.inner.forEach((validationError) => {
//           newErrorMessage[validationError.path as string] =
//             validationError.message;
//           setErrorMessages(newErrorMessage);
//         });
//       }
//     }
//   }
// };
