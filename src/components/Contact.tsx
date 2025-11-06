import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ee.irfansmail@gmail.com',
      value: 'ee.irfansmail@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/irfansipai',
      value: 'linkedin.com/in/irfansipai',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/irfansipai',
      value: 'github.com/irfansipai',
    },
    {
      icon: FileText,
      label: 'Resume',
      href: 'https://flowcv.com/resume/your-link',
      value: 'View Live CV',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 lg:px-12 flex items-center pb-24 lg:pb-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>

        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I'm currently seeking new opportunities. The best way to reach me is via email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-emerald-500 transition-all transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="text-emerald-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-100 mb-1">
                      {link.label}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-emerald-500 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Irfan Sipai. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
