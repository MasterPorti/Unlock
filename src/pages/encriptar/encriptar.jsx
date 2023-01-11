import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import CryptoJS from 'crypto-js';




function Encriptar(props) {
    function encrypt(texto, clave) {
        let textoCifrado = CryptoJS.AES.encrypt(texto, clave).toString()
        setText(textoCifrado)
        settitle(title.value)
    }
    const [text, setText] = useState('No aun')
    const [newtitle, settitle] = useState('No aun')
    return (
        <div>
            <span className='subTitle'>ADMIN</span>
            <textarea className='inputEncrypt in' id='texto' />
            <input placeholder='######' className='input in' id='clave' value='cursall' ></input>
            <input placeholder='title' className='input in' id='title'  ></input>
            <div className='buttonContainer'>
                <button className='buttonEncrypt' onClick={() => { encrypt(texto.value, clave.value) }} >Encriptar</button>
            </div>
            <a href='#'> {text}</a>
            <span>{"{uuid:'f63c7bf8-87d0-48fa-98ea-2c6caa7d4799',name:'" + newtitle + "',imagen:'example',cursall:'" + text + "'},"}</span>
        </div>
    );
}



export default Encriptar;