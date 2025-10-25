import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="project">
        <div className="project-header">
          <h3>Real-Time Face Recognition & Surveillance Platform</h3>
        </div>
        <p>
          Designed and built a high-performance, scalable platform for real-time face
          recognition across multiple IP cameras. Features include live monitoring,
          subject management, access control, and analytics via a web dashboard.
        </p>
        <p>
          <strong>Skills:</strong> Microservices, FastAPI, InsightFace/ONNX, GPU Acceleration, FFmpeg/CUDA, 
          WebSockets, PostgreSQL, Docker, Asynchronous Programming.
        </p>
        <div className="project-links">
          <a href="https://github.com/vxedit/face-rec-services" target="_blank" rel="noopener noreferrer">
            [ View on GitHub ]
          </a>
        </div>        
        <div className="project-note">
          Developed professionally at Autobits Labs. Source code is proprietary.
        </div>
      </div>

      <div className="project">
        <div className="project-header">
          <h3>Real-Time Indian Sign Language Recognition</h3>
        </div>
        <p>
          An application that uses a webcam to detect hand gestures (ISL for 0-9, A-Z) in
          real-time via MediaPipe, classifies them using a TensorFlow/Keras model, and
          provides spoken feedback using asynchronous text-to-speech.
        </p>
        <p><strong>Skills:</strong> Computer Vision, TensorFlow, MediaPipe, OpenCV, Concurrency (Threading).</p>
        <div className="project-links">
          <a href="https://github.com/vxedit/isl-sign-recognition" target="_blank" rel="noopener noreferrer">
            [ View on GitHub ]
          </a>
        </div>
      </div>

      <div className="project">
        <div className="project-header">
          <h3>Chili Powder Quality Analysis (ML Model)</h3>
        </div>
        <p>
          Developed machine learning models (PLSR, Transformers) using TensorFlow to
          predict pigmentation and capsaicinoid concentrations in chili powder from
          spectrography data.
        </p>
        <p>
          <strong>Skills:</strong> Machine Learning, TensorFlow, Data Analysis (Pandas, NumPy), 
          Regression, Feature Engineering.
        </p>        
      </div>
    </section>
  );
};

export default Projects;