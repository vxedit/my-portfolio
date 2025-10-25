import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      
      <div className="job">
        <div className="job-header">
          <h3>Python AI/ML Developer</h3>
          <div className="job-meta">
            <span>Autobits Labs</span>
            <span>Aug 2024 – Present | Rajkot, India</span>
          </div>
        </div>
        <ul>
          <li>
            <strong>Face Recognition System:</strong> Implemented real-time, multi-camera recognition using multithreading, FFmpeg, and WebSockets.
          </li>
          <li>
            <strong>System Re-architecture:</strong> Transitioned system from Compreface to InsightFace & PyTorch (CUDA), boosting processing efficiency by 50%.
          </li>
          <li>
            <strong>ML Model Development:</strong> Developed models (PLSR, Transformers) to predict chili powder pigmentation & capsaicinoid concentrations, improving accuracy by 20% and 15% respectively.
          </li>
          <li>
            <strong>Vibration Analysis:</strong> Extracted FFT and RMS features from acceleration data for predictive maintenance.
          </li>
          <li>
            <strong>Automation & DevOps:</strong> Built an n8n automation pipeline for blog generation; Dockerized complex Python environments; optimized GPU inference with TensorRT/ONNX.
          </li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <h3>Python Developer </h3>
          <div className="job-meta">
            <span>Nijitek Pvt. Ltd</span>
            <span>Feb 2024 – Jul 2024 | Ahmedabad, India</span>
          </div>
        </div>
        <ul>
          <li>
            Developed a Django-based system from scratch to automate personalized book generation.
          </li>
          <li>
            Engineered an OpenCV + FFmpeg pipeline for automated video slideshows.
          </li>
          <li>
            Optimized Celery and Redis for high-performance order processing under heavy workloads.
          </li>
          <li>
            Integrated mind-ar to create immersive, personalized AR experiences.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;