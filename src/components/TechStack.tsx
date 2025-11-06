const TechStack = () => {
  const stackCategories = [
    {
      title: 'AI/ML & Data',
      skills: ['PyTorch', 'TensorFlow', 'InsightFace', 'OpenCV', 'Scikit-learn', 'Pandas / NumPy'],
    },
    {
      title: 'Backend & Frameworks',
      skills: ['Python', 'FastAPI', 'Flask', 'Django', 'Celery', 'Redis', 'WebSockets'],
    },
    {
      title: 'DevOps & Databases',
      skills: ['Docker', 'Linux (Ubuntu)', 'PostgreSQL', 'Git / GitHub', 'FFmpeg', 'NVIDIA CUDA'],
    },
  ];

  return (
    <section id="tech-stack" className="min-h-screen py-20 px-6 lg:px-12 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          My Tech Stack
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition-all"
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-500 border-b border-gray-800 pb-3">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center space-x-3 text-gray-300 hover:text-emerald-500 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
