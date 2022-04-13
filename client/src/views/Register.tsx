import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../components/Title';
import Input from '../components/Input';
import FormPage from '../components/FormPage';
import TextButton from '../components/TextButton';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';

const Register : React.FC = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
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
        <FormPage>
            <form onSubmit={ handleSubmit }>
                <Title text='Create Account' />
                <Input type='text' handleChange={ handleChange } placeholder='First Name' name='firstName' isRequired />
                <Input type='text' handleChange={ handleChange } placeholder='Last Name' name='lastName' isRequired />
                <Input type='email' handleChange={ handleChange } placeholder='Email' name='email' isRequired />
                <Input type='password' handleChange={ handleChange } placeholder='Password' name='password' isRequired />

                { error && <ErrorMessage text={ error } /> }
                
                <SubmitButton text='Register' />
            </form>

            <TextButton to='/login' text='Already have an account?' />
        </FormPage>
    );
};

export default Register;
