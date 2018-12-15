import React from "react";

function PictureGallery() {
  return (
    <div className="gallery-container">
      <div className="column">
        <figure data-aos-delay="200" data-aos="fade-in" data-aos-offset="50">
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="https://source.unsplash.com/random/704x700"
            />
            <source
              media="(max-width: 465px)"
              srcSet="https://source.unsplash.com/random/304x300"
            />
            <img src="https://source.unsplash.com/random/704x700" alt="" />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div data-rh-at="top" data-rh="Github" className="icon">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="view-site">
              <button>View Site</button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Project Name</h3>
                <span className="sub-heading">Technology Used</span>
              </div>
            </div>
          </div>
        </figure>
        <figure data-aos-delay="200" data-aos="fade-up" data-aos-offset="500">
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="https://source.unsplash.com/random/709x700"
            />
            <source
              media="(max-width: 465px)"
              srcSet="https://source.unsplash.com/random/309x300"
            />
            <img src="https://source.unsplash.com/random/709x700" alt="" />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div data-rh-at="top" data-rh="Github" className="icon">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="view-site">
              <button>View Site</button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Project Name</h3>
                <span className="sub-heading">Technology Used</span>
              </div>
            </div>
          </div>
        </figure>
        <figure
          data-aos-delay="200"
          data-aos="fade-up"
          data-aos-offset="500"
          className="grow"
        >
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="https://source.unsplash.com/random/705x700"
            />
            <source
              media="(max-width: 465px)"
              srcSet="https://source.unsplash.com/random/305x300"
            />
            <img src="https://source.unsplash.com/random/705x700" alt="" />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div data-rh-at="top" data-rh="Github" className="icon">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="view-site">
              <button>View Site</button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Project Name</h3>
                <span className="sub-heading">Technology Used</span>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <div className="column">
        <figure
          data-aos-delay="200"
          data-aos="fade-in"
          data-aos-offset="50"
          className="grow"
        >
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="https://source.unsplash.com/random/702x700"
            />
            <source
              media="(max-width: 465px)"
              srcSet="https://source.unsplash.com/random/302x300"
            />
            <img src="https://source.unsplash.com/random/702x700" alt="" />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div data-rh-at="top" data-rh="Github" className="icon">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="view-site">
              <button>View Site</button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Project Name</h3>
                <span className="sub-heading">Technology Used</span>
              </div>
            </div>
          </div>
        </figure>
        <figure data-aos-delay="200" data-aos="fade-up" data-aos-offset="500">
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="https://source.unsplash.com/random/701x700"
            />
            <source
              media="(max-width: 465px)"
              srcSet="https://source.unsplash.com/random/301x300"
            />
            <img src="https://source.unsplash.com/random/701x700" alt="" />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div data-rh-at="top" data-rh="Github" className="icon">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="view-site">
              <button>View Site</button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Project Name</h3>
                <span className="sub-heading">Technology Used</span>
              </div>
            </div>
          </div>
        </figure>
        <figure data-aos-delay="200" data-aos="fade-up" data-aos-offset="500">
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="https://source.unsplash.com/random/706x700"
            />
            <source
              media="(max-width: 465px)"
              srcSet="https://source.unsplash.com/random/306x300"
            />
            <img src="https://source.unsplash.com/random/706x700" alt="" />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div data-rh-at="top" data-rh="Github" className="icon">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="view-site">
              <button>View Site</button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Project Name</h3>
                <span className="sub-heading">Technology Used</span>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default PictureGallery;
