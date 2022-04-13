import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../components/Title';
import Input from '../components/Input';
import FormPage from '../components/FormPage';
import TextButton from '../components/TextButton';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';

const Login : React.FC = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange : (e : any) => void = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        try {
            const url = 'http://localhost:8080/api/auth';
            const { data: res } = await axios.post(url, data);
            localStorage.setItem('token', res.data);
            navigate('/');
            window.location.reload();
        } catch (error : any) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <FormPage>
            <form onSubmit={ handleSubmit }>
                <Title text="Login" />
                <Input type='email' handleChange={ handleChange } placeholder='Email' name='email' isRequired />
                <Input type='password' handleChange={ handleChange } placeholder='Password' name='password' isRequired />

                { error && <ErrorMessage text={ error } /> }

                <SubmitButton text="Login" />
            </form>

            <TextButton to='/register' text='Not have an account yet?' />
        </FormPage>
    );
};

export default Login;
