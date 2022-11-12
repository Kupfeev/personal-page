import { useContext } from 'react';
import { LangContext } from '../../lang/context';

import { projectsText } from '../../lang/data';

import { ProjectCard } from './';


export const Projects = () => {

  const { language } = useContext( LangContext );
  const { h2Text } = projectsText[language];

  return (
    <section className="projects-container" id="projects">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h2>{ h2Text }</h2>

        <ProjectCard />

      </div>
    </section>
  )
}
