import React from 'react';
import { useForm } from 'react-hook-form';

export const Form02 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email &&
                <p className='text-red-600 italic'>
                    Email is required and must be valid
                </p>
            }

            <label>Password</label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password &&
                <p className='text-red-600 italic'>
                    Password is required
                </p>
            }

            <button type="submit">Submit</button>
        </form>
    );
}
