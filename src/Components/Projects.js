import React from "react";

function Projects() {
  return (
    <>
      <section className="section project-sec" id="projects">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="hero is-halfheight">
            <p
              className="has-text-centered has-text-weight-bold is-size-4-desktop pb-6"
              style={{ color: "white" }}
            >
              PROJECTS / FEATURED PROJECTS
            </p>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child box tiles">
                  <p class="title is-size-5-mobile">An Adventure Website</p>
                  <div class="content">
                    <p>
                      This is a very random website I coded for no particular
                      reason. But it helped me hone my skills in HTML, CSS,
                      javascript and Bulma CSS. Have a look at it.
                    </p>
                  </div>
                  <button className="button">
                    <a
                      target="_blank"
                      href="https://xtraadventure.netlify.app/"
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box tiles">
                  <p class="title is-size-5-mobile">Rixrod</p>
                  <div class="content">
                    <p>
                      I worked with my Senior Developer to update this website.
                      Have a look at it.
                    </p>
                  </div>
                  <button className="button">
                    <a
                      target="_blank"
                      href="https://rixrod.com/"
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box tiles">
                  <p class="title is-size-5-mobile"> Prime Video Clone</p>
                  <div class="content">
                    <p>
                      This is a clone of the front-end of the Prime Video
                      website I coded from scratch with HTML and CSS, just to
                      hone my skills.
                    </p>
                  </div>
                  <button className="button">
                    <a
                      target="_blank"
                      href="https://primevideoclone.netlify.app/"
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
