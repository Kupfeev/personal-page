import { useContext, useRef } from 'react';
import { LangContext } from '../../lang/context';
import { useObserver } from '../../hooks';

import { projectsList, projectsText } from '../../lang/data';


export const ProjectCard = () => {

    const { language } = useContext( LangContext );
    const { button1, button2 } = projectsText[language];

    const projectCards = useRef([]);
    useObserver( projectCards );

  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center mb-5">
        {
            projectsList.map( (project , i) => (
                <div className="project-card card" key={ project.appName } ref={ el => projectCards.current[i] = el }>
                    <img src={`/img/${project.appName}.png`} className="project-img card-img-top" alt={ project.appTitle } />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div className="card-desc">
                            <h5 className="card-title">{ project.appTitle }</h5>
                            <p className="card-text">{ project[language] }</p>
                        </div>
                        <div className="card-links d-flex flex-column">
                            {
                                project.gitLink && 
                                    <a href={ project.gitLink } target='_blank' className="btn btn-primary">{ button2 }</a>
                            }
                            <a href={ project.appLink } target='_blank' className="btn btn-primary">{ button1 }</a>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
