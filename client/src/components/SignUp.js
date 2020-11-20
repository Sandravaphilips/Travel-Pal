import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, CircularProgress, Card } from '@material-ui/core';

const initialFormValues = {
    password: '',
    username: ''
};

const SignUp = props => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onPasswordChange = e => {
        setFormValues({...formValues, password: e.target.value});
    }

    const onUsernameChange = e => {
        setFormValues({...formValues, username: e.target.value});
    }

    const onConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }

    const onHandleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        if(formValues.password !== confirmPassword) {
            alert('Passwords must match!!')
        } else {
            axios.post('http://localhost:5000/register', formValues)
            .then(response => {
                console.log(response.data)
                setLoading(false)
            })
            .catch(error => {
                alert(error);
            });
        }        
    }

    return(
        <Card>
            <div className='form-group'>
                <h1>Sign Up</h1>
                <form className='form-content'>
                    <TextField
                        onChange={onUsernameChange} 
                        required 
                        id="username" 
                        label="Username" 
                        placeholder="JohnSmith" 
                    />          
                    <TextField
                        onChange={onPasswordChange}
                        required
                        id="password"
                        label="Password"
                        type="password"
                        placeholder='#2password@'
                    /> 
                    <TextField
                        onChange={onConfirmPasswordChange}
                        required
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder='#2password@'
                    />
                    <Button onClick={onHandleSubmit} variant="contained" color="primary">
                        {
                            loading ? <CircularProgress color='white' /> : 'Sign Up'
                        }
                    </Button>

                    <p>Already have an account? <Link to='/login'>Log In</Link></p> 
                </form>
            </div>
        </Card>
    )
};

export default SignUp