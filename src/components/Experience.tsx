import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Python AI/ML Developer',
      company: 'Autobits Labs',
      period: 'Aug 2024 – Present | Rajkot, India',
      description:
        'Lead developer on the core AI/ML platform. Architected and built a high-performance face recognition system. Trained and deployed ML models for spectrography analysis and predictive maintenance.',
    },
    {
      title: 'Python Developer',
      company: 'Nijitek Pvt. Ltd',
      period: 'Feb 2024 – Jul 2024 | Ahmedabad, India',
      description:
        'Developed a full-stack Django system to automate personalized book generation. Engineered an OpenCV/FFmpeg pipeline for automated video slideshows.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-16"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-950"></div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition-all">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 flex items-center space-x-2">
                      <Briefcase className="text-emerald-500" size={24} />
                      <span>{exp.title}</span>
                    </h3>
                    <p className="text-emerald-500 font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
