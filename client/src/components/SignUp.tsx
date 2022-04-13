import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const SignUp : React.FC = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        try {
            const url = 'http://localhost:8080/api/users';
            const { data: res } = await axios.post(url, data);
            navigate('/login');
        } catch (error : any) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Create Account</h1>
                <input type='text' onChange={ handleChange } placeholder='First Name' name='firstName' required />
                <input type='text' onChange={ handleChange } placeholder='Last Name' name='lastName' required />
                <input type='email' onChange={ handleChange } placeholder='Email' name='email' required/>
                <input type='password' onChange={ handleChange } placeholder='Password' name='password' required /> 

                { error && <span>{ error }</span> }

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
