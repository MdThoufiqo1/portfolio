import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="wikipediaSearch" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Todoslist" />
        
      </div>

    </div>
  )
}

export default Projects