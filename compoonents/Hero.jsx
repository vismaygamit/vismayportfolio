import Typed from 'react-typed';

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{ backgroundImage: "url(img/hero-bg.jpg)" }}
    >
      <div className="overlay-itro" />
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Morgan Freeman</h1>
            <p className="hero-subtitle">
            <Typed
                    strings={['Full Stack Developer', 'Freelancer', 'Software Developer', 'Youtuber', 'Video Editor']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /><br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
