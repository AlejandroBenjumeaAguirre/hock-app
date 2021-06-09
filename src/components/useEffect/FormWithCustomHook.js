import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    return (
        <>

            <h3>FormWithCustomHook</h3>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

        </>
    )
}
