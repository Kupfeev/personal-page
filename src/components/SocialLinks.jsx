import { socialLinks } from "../lang/data"

export const SocialLinks = () => {

  return (
    <>
      {
        socialLinks.map( link => <a 
            key={ link.name }
            href={ link.url } 
            target="_blank"
            className="social-link"
          ><i className={link.socialIcon}></i></a>)
      }
    </>
  )
}