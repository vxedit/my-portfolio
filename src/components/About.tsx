import { Code, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 lg:px-12 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-16"></div>

        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <p className="text-lg text-gray-300 leading-relaxed mb-8"> 
            I’m an Electrical Engineering graduate who switched gears into full-stack Python development after training in Bangalore. For the total of 1.5 years with Autobits Labs, I’ve been building AI/ML systems, backend services, and automation tools — mostly from scratch.

            I’m the kind of developer who can’t leave a problem half-understood; I dive deep, figure it out, and deliver something solid. My work’s been recognized for being precise, research-oriented, and hands-on. I thrive on diving deep
            into complex challenges—architecting the solution, debugging the code, and building
            the robust, production-ready system.       
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                <Code className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Architect</h3>
              <p className="text-gray-400 text-sm">
                Design scalable systems from the ground up
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Optimizer</h3>
              <p className="text-gray-400 text-sm">
                Boost performance and eliminate bottlenecks
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                <Target className="text-emerald-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
              <p className="text-gray-400 text-sm">
                Tackle complex challenges with first principles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
