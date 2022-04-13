import { useState } from 'react';
import axios from 'axios';

const Login : React.FC = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        try {
            const url = 'http://localhost:8080/api/auth';
            const { data: res } = await axios.post(url, data);
            localStorage.setItem('token', res.data);
            window.location = '/';
        } catch (error : any) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Login</h1>
                <input type='email' onChange={ handleChange } placeholder='Email' name='email' required />
                <input type='password' onChange={ handleChange } placeholder='Password' name='password' required /> 

                { error && <span>{ error }</span> }

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
