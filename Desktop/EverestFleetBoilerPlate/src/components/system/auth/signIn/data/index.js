import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().trim().required('Password is required.'),
});

export const userLoginStructure = {
  username: '',
  password: '',
};
