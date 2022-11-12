import { SocialLinks } from "../SocialLinks"

export const Footer = () => {
  return (
    <section className="footer-container pb-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="mt-4">Enzo Tassi Ferrari</h3>
          <div className="social-links row mb-1">
            <div className="col-12 d-flex justify-content-evenly">
              <SocialLinks />
            </div>
          </div>
        </div>
    </section>
  )
}
