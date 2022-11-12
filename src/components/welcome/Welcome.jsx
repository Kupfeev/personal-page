import { useContext } from 'react';
import { LangContext } from '../../lang/context';

import { welcomeData } from '../../lang/data';
import { SocialLinks } from '../SocialLinks';

import img from '../../assets/photo3.png';
import cvES from '../../assets/cvES.pdf';
import cvEN from '../../assets/cvEN.pdf';


export const Welcome = () => {

  const { language } = useContext( LangContext );

  const { address, phone, email } = welcomeData.personalInfo;
  const { h4Text, h3Text, h1Text } = welcomeData[language];

  return (
    <section className="welcome d-flex align-items-end" id="welcome">
      <div className="welcome-container container-fluid row flex-nowrap">
        <div className="info-container col-7 d-flex flex-column justify-content-center align-items-end">
          <div className="row">
            <h4 className="welcome-h4">{ h4Text }</h4>
          </div>
          <div className="row">
            <h3>{ h3Text }</h3>
          </div>
          <div className="row">
            <h1>{ h1Text }</h1>
          </div>
          <div className="p-info row">
            <div className="col-1">
              <ul>
                <li><i className="fa-solid fa-location-dot"></i></li>
                <li><i className="fa-solid fa-phone"></i></li>
                <li><i className="fa-solid fa-envelope"></i></li>
              </ul>
            </div>
            <div className="col-11">
              <ul>
                <li>{ address }</li>
                <li>{ phone }</li>
                <li>{ email }</li>
              </ul>
            </div>
          </div>
          <div className="download row">
            <div className="col-12">
              <a 
                className="btn btn-primary" 
                href={ language === "english" ? cvEN : cvES } 
                download="Enzo Tassi CV"
              >
                <i className="fa-solid fa-file-arrow-down"></i> Curriculum
              </a>
            </div>
          </div>
          
          <div className="social-links row">
            <div className="col-12 d-flex justify-content-around">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="ph-container col-5 d-flex">
          <img className="welcome-ph" src={ img } alt="Enzo Tassi" />
        </div>
      </div>
    </section>
  )
}
