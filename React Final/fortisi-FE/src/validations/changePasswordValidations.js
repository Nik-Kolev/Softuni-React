import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
    password: yup.string().trim().required('Настоящата парола е задължителна.'),
    newPassword: yup.string().trim().required('Новата парола е задължителна.').min(3, 'Новата парола трябва да бъде минимум 3 символа.')
        .notOneOf([yup.ref('password'), null], 'Новата парола не трябва да съвпада с настоящата.'),
    reNewPassword: yup.string().required('Потвърждението на новата паролата е задължително.')
        .oneOf([yup.ref('newPassword'), null], 'Паролите трябва да съвпадат.'),
});