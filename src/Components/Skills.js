import React from "react";

function Skills() {
  return (
    <section className="section skills-sec">
      <div
        className="container"
        id="skills"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="hero is-halfheight">
          <div className="hero-body">
            <div className="columns is-0">
              <div className="column is-half">
                <h3 className="title" style={{ color: "white" }}>
                  Skills
                </h3>
                <p class="is-size-5"style={{ color: "white" }}>
                 I first started my coding journey with Python. Then, I moved on to learn HTML, CSS and javascript. I began with React and Bulma CSS not long ago, and C++ which I learnt in school.
                 However, I currently use HTML, CSS, javascript, React and Bulma Css only.
                </p>
              </div>

              <div className="column is-2">
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2">
                    <p className="content has-text-centered">
                      <img
                        className="img"
                        src={require("../Assets/images/html5.png").default}
                        alt=""
                        width="50"
                      />
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2">
                    <p className="content has-text-centered">
                      <img
                        className="img"
                        src={require("../Assets/images/css.png").default}
                        alt=""
                        width="50"
                      />
                    </p>
                  </article>
                </div>
              </div>

              <div className="column is-2">
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2">
                    <p className="content has-text-centered">
                      <img
                        className="img"
                        src={require("../Assets/images/javascript.png").default}
                        alt=""
                        width="50"
                      />
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2">
                    <p className="content has-text-centered">
                      <img
                        className="img"
                        src={require("../Assets/images/atom.png").default}
                        alt=""
                        width="50"
                      />
                    </p>
                  </article>
                </div>
              </div>

              <div className="column is-2">
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2">
                    <p className="content has-text-centered">
                      <img
                        className="img"
                        src={require("../Assets/images/b.png").default}
                        alt=""
                        width="50"
                      />
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2">
                    <p className="content has-text-centered">
                      <img
                        className="img"
                        src={require("../Assets/images/python.png").default}
                        alt=""
                        width="50"
                      />
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
