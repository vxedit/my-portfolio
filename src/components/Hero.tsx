import { ArrowDown, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Irfan Sipai
          </h1>
          <h2 className="text-2xl lg:text-4xl text-emerald-500 font-semibold mb-6">
            Python AI/ML Developer
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto">
            I build and scale robust, real-time AI systems from scratch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={scrollToProjects}
            className="group flex items-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold rounded-lg transition-all transform hover:scale-105"
          >
            <span>View My Projects</span>
            <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>

          <a
            href="https://flowcv.com/resume/13sqbugpfm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold rounded-lg border border-gray-700 transition-all"
          >
            <FileText size={20} />
            <span>My Resume (Live CV)</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-emerald-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
