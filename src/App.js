import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>
          DUOYE
          <br /> TUNGBULU
        </h1>
        <p>Software Developer</p>
      </header>
      <div className='container'>
        <div className='left'>
          <div>
            <h4>WORK EXPERIENCE</h4>
            <div className='xp-card'>
              <h5>Frontend Developer &#x2022; Guavar</h5>
              <p>JULY 2021 - JULY 2022</p>
              <p>
                Built responsive user interfaces meeting technical and consumer
                needs with ReactJS, TypeScript, and Redux
              </p>
              <span></span>
            </div>
            <div className='xp-card'>
              <h5>Engineering Lead &#x2022; Stacklent</h5>
              <p>APRIL 2021–April 2023</p>
              <p>
                Led both Frontend and Backend teams, ensuring timely project
                delivery while maintaining system architecture.
                <br />
                <br />
                Promoted collaboration, implemented quality standards, optimized
                performance, and drove continuous improvement.
              </p>
              <span></span>
            </div>
            <div className='xp-card'>
              <h5>Frontend Developer &#x2022; TexhNext (Contract)</h5>
              <p>SEP 2022 - OCT 2022</p>
              <p>
                Built a responsive and immersive landing page with ReactJS, SCSS
                and GSAP.
              </p>
              <span></span>
            </div>
            <div className='xp-card'>
              <h5>Frontend Developer &#x2022; SaharaViewPoint (Contract)</h5>
              <p>MARCH 2023 - JUN 2023</p>
              <p>
                Built a responsive and immersive landing page with ReactJS, SCSS
                and GSAP.
                <br />
                <br />
                Developed a user-friendly ReactJS dashboard with SCSS and Redux
                Toolkit, collaborating with design, conducting testing, and
                ensuring code quality.
              </p>
              <span></span>
            </div>
            <div className='xp-card'>
              <h5>Frontend Developer &#x2022; NOTI (Seasonal)</h5>
              <p>APRIL 2023 - PRESENT</p>
              <p>
                Liaise with multidisciplinary team to develop user-facing
                features and responsive web interfaces.
              </p>
              <span></span>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='card'>
            <h5>PROFILE</h5>
            <p>
              I work as a developer in Lagos, Nigeria, and I specialise in
              building interactive online experiences.
            </p>
          </div>
          <div className='card'>
            <h5>SKILLS</h5>
            <p>
              HTML, CSS, SASS, JavaScript, TailwindCSS, ReactJS, TypeScript,
              NextJS, Redux Toolkit, GSAP, WebGL, GraphQL.
            </p>
          </div>
          <div className='card'>
            <h5>PROJECTS</h5>
            <a
              href='https://aleruchi.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Aleruchi’s Portfolio
            </a>
            <a
              href='https://uxwade.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              UXwade
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Online Hostel Management System
            </a>
          </div>
          <div className="card">
            <h5>EMAIL</h5>
            <a href="mailto:tungbulupaul@gmail.com">tungbulupaul@gmail.com</a>
          </div>
          <div className="card">
            <h5>LINKEDIN</h5>
            <a href="https://www.linkedin.com/in/douye-tungbulu-939ab4182/">linkedin.com/in/douye-tungbulu</a>
          </div>
          <div className="card">
            <h5>GITHUB</h5>
            <a href="https://github.com/Tun-Dev">github.com/Tun-Dev</a>
          </div>
          <div className="card">
            <h5>WEBSITE</h5>
            <a href="https://www.tunz.dev">www.tunz.dev</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
