import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {

    const [email, setEmail] = useState('')

        async function handleSubmit(event) {

            event.preventDefault();

            const response = await api.post('/sessions', { email });

            const { _id, __v } = response.data;
            const er = response.data.email;

            localStorage.setItem('userid', _id);

            console.log(`${_id} - ${__v} - ${er}`);

            history.push('/dashboard');
            //console.log(response)
            //console.log(email);

        }

    return (

        <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="Seu melhor email" onChange={event => setEmail(event.target.value)} value={email}/>

          <button className="btn" type="submit">Entrar</button>

        </form>
        </>
    )

}