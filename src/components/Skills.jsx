import React from 'react';

const skills = {
  "AI/ML": [
    "TensorFlow", "PyTorch", "InsightFace", "Scikit-learn", "OpenCV", 
    "MediaPipe", "ONNX", "TensorRT", "NumPy", "Pandas"
  ],
  "Backend": [
    "Python", "FastAPI", "Flask", "Django", "REST APIs", "WebSockets",
    "Celery", "Asynchronous Programming"
  ],
  "Databases & Tools": [
    "PostgreSQL", "Redis", "SQL", "Docker", "Git", "Linux (Ubuntu)",
    "FFmpeg", "Raspberry Pi", "NAS"
  ],
  "Frontend": ["JavaScript", "React", "HTML/CSS", "mind-ar"]
};

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h4>{title}</h4>
    <div className="skills-list">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">{skill}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <SkillCategory title="AI / ML & Data" skills={skills["AI/ML"]} />
        <SkillCategory title="Backend & Frameworks" skills={skills["Backend"]} />
        <SkillCategory title="Databases & DevOps" skills={skills["Databases & Tools"]} />
        <SkillCategory title="Frontend & Web" skills={skills["Frontend"]} />
      </div>
    </section>
  );
};

export default Skills;