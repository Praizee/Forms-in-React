// https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

import React from 'react';
import { useForm } from 'react-hook-form';

export const Form02 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section>
            <div className=''>
                <form
                    className='border-2 w-auto p-8 text-center'
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-8'>
                        <div className='space-y-4 space-x-4'>
                            <label className='p-2'>Email</label>
                            <input className='p-2 border rounded-md'
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
                            <label className='p-2'>Password</label>
                            <input className='p-2 border rounded-md'
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

                    <button className='m-4 bg-slate-400 hover:bg-slate-500 hover:text-slate-300 p-2 rounded-md'
                        type="submit">
                        Submit
                    </button>
                </form>

            </div>

        </section>


    );
}
