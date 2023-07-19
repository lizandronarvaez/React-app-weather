import React from 'react';
import iconReact from "../assets/react.svg";
import iconGit from "../assets/git.svg";
import iconVercel from "../assets/vercel.svg";
import iconVite from "../assets/vite.svg"

const FooterWeather = () => {
  return (
    <div className='footer'>
        <p className='footer_text'>Proyecto realizado por Lizandro Narvaez</p>
        <div className='footer_tecnologies'>
            <p>Tecnologias Usadas</p>
            <img src={iconVite} alt="vite" />
            <img src={iconReact} alt="react" />
            <img src={iconGit} alt="git" />
            <img src={iconVercel} alt="vercel" />
        </div>
    </div>
  )
}

export default FooterWeather