import { useContext } from 'react';
import { LangContext } from '../lang/context/LangContext';
import { useScrollPosition } from '../hooks';

import { navData } from '../lang/data';

import esLang from '../assets/espana.png';
import enLang from '../assets/uk.png';


export const NavBar = () => {

  const { language, onEnglish, onSpanish } = useContext( LangContext );

  const { scrollPosition } = useScrollPosition();
  
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-sm">
        <div className="container-fluid nav-container">
          <a className="navbar-brand" href="#">Enzo Tassi Ferrari</a>
          <ul className="navbar-nav">
            {
              navData.map( link => (
                <li className="nav-item" key={ link.english }>
                  <a className="nav-link" href={ link.section }>{ link[language] }</a>
                </li>
              ))
            }
          </ul>
          <div className="lang-switch">
            <button className="btn-lang" onClick={ onEnglish }>
              <img src={ enLang } alt="English" width={30}/>
            </button>
            <button className="btn-lang" onClick={ onSpanish }>
              <img src={ esLang } alt="Spanish" width={30}/>
            </button>
          </div>
        </div>
      </nav>
      <a 
        href="#welcome" 
        className={`btn btn-return-hidden ${ scrollPosition >= 150 && "btn-return-show"}`}
      >
        <i className="fa-solid fa-circle-chevron-up"></i>
      </a>
    </>
  )
}
