import { useContext, useRef } from "react";
import { LangContext } from "../../lang/context";
import { useObserver } from "../../hooks";

import { skillText } from "../../lang/data";

import { SkillCard } from "./";

export const Skills = () => {

  const { language } = useContext( LangContext );
  const { h2Text, h3Text, quote } = skillText[language];

  const quoteCard = useRef([]);
  useObserver( quoteCard );

  return (
    <section className="skills-container" id="skills">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h2>{ h2Text }</h2>

        <SkillCard />

        <h3>{ h3Text }</h3>
        <figure className="quote text-center" ref={ el => quoteCard.current[0] = el }>
          <blockquote className="blockquote">
            <p>{ quote }</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Leonardo da Vinci
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
