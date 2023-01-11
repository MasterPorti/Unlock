import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import './home.css';
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom';




function Home(props) {
    function cifrar(texto, clave) {
        let textodecifrado = CryptoJS.AES.decrypt(texto, clave).toString(CryptoJS.enc.Utf8)
        setText(textodecifrado)
    }
    const [text, setText] = useState('No aun')
    const { encrypted } = useParams()
    return (
        <div>
            <nav className='navbar'>
                <img src={Logo} className='logo' />
                <span className='title'>Unlock</span>
            </nav>
            <span className='subTitle'>Encriptado</span>
            <textarea className='inputEncrypt in' value={encrypted} id='textcrypt' />
            <span className='subTitle'>Clave</span>
            <input placeholder='######' className='input in' id='key'></input>
            <div className='buttonContainer'>
                <button className='buttonEncrypt' onClick={() => { cifrar(textcrypt.value, key.value) }} >Desencriptar</button>
            </div>
            <span className='subTitle' >Desencriptado</span>
            <a href='google.com'>{text}</a>
        </div>
    );
}



export default Home;