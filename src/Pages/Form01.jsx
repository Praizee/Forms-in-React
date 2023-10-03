import React from 'react';
import { useForm } from 'react-hook-form';

export const Form01 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <section>

            <div>

                {/* <span className="relative inline-block px-10">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black w-1/4"></span>
                    <span className="mx-2 text-gray-600">OR</span>
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-black w-1/4"></span>
                </span> */}

                <form className=''
                    onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="First name"
                        {...register("First name", { required: true, maxLength: 80 })}
                        className='p-4 input rounded-md'
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        {...register("Last name", { required: true, maxLength: 100 })}
                        className='p-4 input rounded-md'
                    />
                    <input
                        type="text" placeholder="Email"
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                        className='p-4 input rounded-md'
                    />
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
                        className='p-4 input rounded-md'
                    />
                    <select {...register("Title", { required: true })}
                    >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>

                    <input
                        {...register("Developer", { required: true })}
                        type="radio"
                        value="Yes"
                        className='radio'
                    />
                    <input
                        {...register("Developer", { required: true })}
                        type="radio"
                        value="No"
                        className='radio'
                    />

                    <input type="submit" className='btn' />
                </form>
            </div>
        </section>
    );
}
