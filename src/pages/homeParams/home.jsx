import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom';




function HomeParams(props) {
    function cifrar(texto, clave) {
        let textodecifrado = CryptoJS.AES.decrypt(texto, clave).toString(CryptoJS.enc.Utf8)
        setText(textodecifrado)
    }
    const [text, setText] = useState("")
    const { encrypted } = useParams()
    const encryt = encrypted.replace(/[{]/g, '/')
    return (
        <div>
            <nav className='navbar'>
                <img src={Logo} className='logo' />
                <span className='titleLogo'>Unlock</span>
            </nav>
            <div className='introContainer'>
                <div className='textareaContainer'>
                    <span className='subTitle'>Encriptado</span>
                    <textarea className='inputEncrypt in' value={encryt} id='textcrypt' />
                </div>
                <div className='claveContainer'>
                    <span className='subTitle'>Clave</span>
                    <input placeholder='######' className='input in' id='key'></input>
                </div>
            </div>
            <div className='buttonContainer'>
                <button className='buttonEncrypt' onClick={() => { cifrar(textcrypt.value, key.value) }} >Desencriptar</button>
            </div>
            <div className='desencryptContainer'>
                <span className='subTitle' >Desencriptado</span>
                <div className={text ? "linkContainer" : "linkContainer hide"} >
                    <a href={text} target="_blank"> <span className='link'>Ir al enlace</span></a>
                </div>
            </div>
        </div>
    );
}



export default HomeParams;