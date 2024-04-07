import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function SigninForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const formSubmit = (data) => {
        console.log('Form Submitted', data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <button type="submit">Log In</button>
            </form>
            <Link to='/signup'>Don't have an account? Sign Up</Link>
        </>
    );
}

export default SigninForm;


