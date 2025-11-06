// src/components/Projects.tsx
import { ExternalLink, Github } from 'lucide-react';
import faceRecImage from '/src/assets/face-rec-featured.jpg';
import islImage from '/src/assets/isl-demo.gif';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Face Recognition Platform',
      description:
        'Architected a scalable, multi-camera surveillance system from scratch. Re-engineered the AI pipeline to boost processing efficiency by 50%.',
      tags: ['FastAPI', 'Docker', 'PyTorch', 'Microservices', 'ONNX'],
      image: faceRecImage,
      links: {
        readme: 'https://github.com/irfansipai/face-rec-services',
      },
      featured: true,
    },
    {
      title: 'Indian Sign Language Recognition',
      description:
        'Built a real-time app to detect and classify ISL gestures using MediaPipe, TensorFlow, and asynchronous Python for live speech output.',
      tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Concurrency'],
      image: islImage,
      links: {
        github: 'https://github.com/irfansipai/isl-sign-recognition',
      },
      featured: true,
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-6xl text-gray-700">
                  {project.title.includes('Face') ? '🔍' : '👋'}
                </div>
              </div> */}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-emerald-500 text-sm rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.readme && (
                    <a
                      href={project.links.readme}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>View README</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
