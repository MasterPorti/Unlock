import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import "./encriptar.css"


function Encriptar(props) {
    function encrypt(texto, clave) {
        let textoCifrado = CryptoJS.AES.encrypt(texto, clave).toString()
        setText(textoCifrado)
        settitle(title.value)
        setImagen(imagen.value)
        setUuid(uuidv4())
    }
    const [text, setText] = useState('No aun')
    const [newtitle, settitle] = useState('No aun')
    const [imagene, setImagen] = useState(null)
    const [uuid, setUuid] = useState(null)
    const [theme01, setTheme01] = useState(null)
    const [theme02, setTheme02] = useState(null)
    function theme(tema) {
        if (theme01 == null) {
            setTheme01(tema)
        } else {
            setTheme02(tema)
        }
    }

    return (
        <div>
            <span className='subTitle'>ADMIN</span>
            <input className='title' placeholder='Titulo' id='title' ></input>
            <input className='title' placeholder='URL' id='texto'></input>
            <input className='title' placeholder='imagen.jpg' id='imagen'></input>
            <input className='title' placeholder='clave' value="cursall" id='clave'></input>
            <div className='containerButton'>
                <div className='colum'>
                    <button className={theme01 == "Python" || theme02 == "Python" ? "blue theme" : "theme"} onClick={() => { theme("Python") }}>Python</button>
                    <button className={theme01 == "HTML" || theme02 == "HTML" ? "blue theme" : "theme"} onClick={() => { theme("HTML") }}>HTML</button>
                    <button className={theme01 == "CSS" || theme02 == "CSS" ? "blue theme" : "theme"} onClick={() => { theme("CSS") }}>CSS</button>
                    <button className={theme01 == "JavaScript" || theme02 == "JavaScript" ? "blue theme" : "theme"} onClick={() => { theme("JavaScript") }}>JavaScript</button>
                    <button className={theme01 == "Desing" || theme02 == "Desing" ? "blue theme" : "theme"} onClick={() => { theme("Desing") }}>Desing</button>
                    <button className={theme01 == "UI" || theme02 == "UI" ? "blue theme" : "theme"} onClick={() => { theme("UI") }}>UI</button>
                    <button className={theme01 == "Web" || theme02 == "Web" ? "blue theme" : "theme"} onClick={() => { theme("Web") }}>Web</button>
                </div>
                <div className='colum'>
                    <button className={theme01 == "UX" || theme02 == "UX" ? "blue theme" : "theme"} onClick={() => { theme("UX") }}>UX</button>
                    <button className={theme01 == "Idiomas" || theme02 == "Idiomas" ? "blue theme" : "theme"} onClick={() => { theme("Idiomas") }}>Idiomas</button>
                    <button className={theme01 == "Electronica" || theme02 == "Electronica" ? "blue theme" : "theme"} onClick={() => { theme("Electronica") }}>Electronica</button>
                    <button className={theme01 == "WordPress" || theme02 == "WordPress" ? "blue theme" : "theme"} onClick={() => { theme("WordPress") }}>WordPress</button>
                    <button className={theme01 == "Angular" || theme02 == "Python" ? "blue theme" : "theme"} onClick={() => { theme("Angular") }}>Angular</button>
                    <button className={theme01 == "NodeJS" || theme02 == "NodeJS" ? "blue theme" : "theme"} onClick={() => { theme("NodeJS") }}>NodeJS</button>
                    <button className={theme01 == "React" || theme02 == "React" ? "blue theme" : "theme"} onClick={() => { theme("React") }}>React</button>
                    <button className={theme01 == "Hacking" || theme02 == "Hacking" ? "blue theme" : "theme"} onClick={() => { theme("Hacking") }}>Hacking</button>
                </div>
            </div>
            <div className='buttonContainer'>
                <button onClick={() => { window.location.reload() }}>🔃Refres 🔃</button>
                <button className='buttonEncrypt' onClick={() => { encrypt(texto.value, clave.value) }} >Encriptar</button>

            </div>
            <span>{`
            {
            uuid: "${uuid}",
            name:"${newtitle}",
            image: "${imagene}",
            cursall:"${text}",
            theme01:"${theme01}",
            theme02:"${theme02}",
            },`}</span>
        </div>
    );
}



export default Encriptar;