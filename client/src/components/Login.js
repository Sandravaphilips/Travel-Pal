import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, CircularProgress, Card } from '@material-ui/core';

const initialFormValues = {
    username: '',
    password: ''
};

const Login = props => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [loading, setLoading] = useState(false);

    const onUsernameChange = e => {
        setFormValues({...formValues, username: e.target.value});
    }

    const onPasswordChange = e => {
        setFormValues({...formValues, password: e.target.value});
    }

    const onHandleSubmit = e => {        
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:5000/login', formValues)
        .then(response => {
            console.log(response.data)
            setLoading(false)
        })
        .catch(error => {
            alert(error);
        });
    }
    return(
        <Card>
            <div className='form-group'>
                <h1>Login</h1>
                <form className='form-content'>
                    <TextField required id="email" label="Username" placeholder="JohnDoe" onChange={onUsernameChange} />                
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        placeholder='#2password@'
                        onChange={onPasswordChange}
                    /> 
                    <Button onClick={onHandleSubmit} variant="contained" color="primary">
                        {
                            loading ? <CircularProgress color='white' /> : 'Login'
                        }
                    </Button>

                    <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p> 
                </form>
            </div>
        </Card>
    )
};

export default Login