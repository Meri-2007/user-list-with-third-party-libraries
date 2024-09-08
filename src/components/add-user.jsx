import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

//Վալիդացիացիա նոր ավելացող user ների համար Yup ով
const validate = yup.object().shape({
    name: yup
        .string()
        .matches(/^[a-zA-Zа]+$/, "fill in the correct name")
        .required('Name is required to fill in'),
    surname: yup
        .string()
        .required('Surname is required to fill in')
        .matches(/^[a-zA-Zа]+$/, "fill in the correct surname"),
    login: yup
        .string()
        .email('enter a vaild email')
        .required('email is required to fill in'),
    age: yup
        .number("age must be number")
        .required('Age is required to fill in')
        .positive("age must be positive")
        .integer(),
    password: yup
        .string()
        .required('Password is required to fill in')
        .min(8, 'Password must be min 8 symbols')
});

//Նոր User ավելացնելու ֆունկցիա  UseForm  ով և որպես վալիդացիա  օգտագործելով  Yup ը
export const AddUser = ({ onAddUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validate),
    });
    //Sumbit ֆունկցիան  toastify    հաղորդագրությամբ
    const onSubmit = (data) => {
        onAddUser(data);
        toast.success('User added successfully!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder='name' {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <input placeholder='surname' {...register('surname')} />
                {errors.surname && <p>{errors.surname.message}</p>}
            </div>
            <div>
                <input placeholder='login' {...register('login')} />
                {errors.login && <p>{errors.login.message}</p>}
            </div>
            <div>
                <input placeholder='age' {...register('age')} />
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div>
                <input placeholder='password' type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button>Add User</button>
        </form>
    );
};

