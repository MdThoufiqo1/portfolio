import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by mohamed thoufiq</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/MdThoufiqo1" target='_blank'><FaGithub/></a>
        <a href="http://www.linkedin.com/in/%20mohamed-thoufiq-t" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:thoufiq07.t@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer