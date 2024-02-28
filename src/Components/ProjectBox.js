import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TodoslistDesc:"A robust task tracking system with CRUD capabilities, crafted to simplify task management.",
    TodoslistGithub:"https://github.com/MdThoufiqo1/Todos",
    TodoslistWebsite:"https://todos-a5gy.vercel.app/",
    
    wikipediaSearchDesc:"Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result.",
    wikipediaSearchGithub:"https://github.com/MdThoufiqo1/wikipedia",
    wikipediaSearchWebsite:"https://thoufiq-wikipedia.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox