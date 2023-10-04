// https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

import React from 'react';
import { useForm } from 'react-hook-form';

export const Form02 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className=''>
            <form className='p-8 text-center'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-8'>
                    <div className='space-y-4 space-x-4'>
                        <label>Email</label>
                        <input className='px-2'
                            type="text"
                            name="email"
                            {...register("email", {
                                required: "Email is required.",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is not valid."
                                }
                            })}
                        />
                        {errors.email &&
                            <p className="text-red-600 italic">
                                {errors.email.message}
                            </p>}
                    </div>

                    <div className='space-y-4 space-x-4'>
                        <label>Password</label>
                        <input className='px-2'
                            type="password"
                            name="password"
                            {...register("password", {
                                required: true,
                                validate: {
                                    checkLength: (value) => value.length >= 6,
                                    matchPattern: (value) =>
                                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                                            value
                                        )
                                }
                            })}
                        />
                        {errors.password?.type === "required" && (
                            <p className='text-red-600 italic'>Password is required.</p>
                        )}
                        {errors.password?.type === "checkLength" && (
                            <p className='text-red-600 italic'>
                                Password should be at least 6 characters.
                            </p>
                        )}
                        {errors.password?.type === "matchPattern" && (
                            <p className='text-red-600 italic'>
                                Password should contain at least one uppercase letter, lowercase
                                letter, digit, and special symbol.
                            </p>
                        )}
                    </div>
                </div>

                <button className='mx-4 bg-slate-400 p-2 rounded-md'
                    type="submit">Submit</button>
            </form>

        </div>


    );
}
