import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Milestones
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12 — CBSE</h4>
                <h5>RBPS Kulpahar, Uttar Pradesh</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Currently pursuing Class 12 education with a strong focus on Mathematics, 
              Computer Science, and foundations for Artificial Intelligence & Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Mobile App Developer</h4>
                <h5>Independent & Personal Projects</h5>
              </div>
              <h3>2023 - PRESENT</h3>
            </div>
            <p>
              Conceptualized and built projects like Health AI (AI-powered health coach & report analyzer) 
              and Voice Player (voice note manager with encrypted storage and MP4-to-MP3 processing).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python & Web Development</h4>
                <h5>Self-Learning & Open Source</h5>
              </div>
              <h3>2023 - PRESENT</h3>
            </div>
            <p>
              Developed terminal-based animation and lyric synchronization tools in Python, and built modern 
              web interfaces using React, TypeScript, and Vite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
