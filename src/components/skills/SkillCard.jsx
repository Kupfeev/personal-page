import { useContext, useRef } from "react"
import { LangContext } from "../../lang/context"
import { useObserver } from "../../hooks";

import { skillList } from "../../lang/data";

export const SkillCard = () => {

  const { language } = useContext(LangContext);

  const skillCards = useRef([]);
  useObserver( skillCards );

  return (
    <div className="container-sm">
      {
        skillList.map( (skill, i) => (
          <div className="skill-card card mb-3" key={ skill.english }>
            <div className={ skill.cardClass } ref={ el => skillCards.current[i] = el }>
              <div className="skill-icon col-md-4">
                <i className={ skill.skillIcon }></i>
              </div>
              <div className="skill-desc col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{ skill[language] ? skill[language] : skill["english"] }</h5>
                  <ul className="list-group">
                    {
                      skill.list.map( item => (
                        <li className="list-item" key={ item.english }>
                          <h6><i className={ item.skillIcon }></i> { item[language] ? item[language] : item["english"]}</h6>
                          <span><i>{ item.span[language] }</i></span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}