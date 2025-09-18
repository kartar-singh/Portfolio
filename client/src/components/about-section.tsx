import { motion } from "framer-motion";
import { Code, Users, Search, Cloud, Download } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Projects" },
    { value: "10+", label: "Technologies" },
    { value: "5+", label: "Happy Clients" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development",
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Complete project lifecycle management",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization expertise",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS cloud services integration",
    },
  ];

  const handleDownloadResume = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Kartar_Singh_Resume.pdf';
    // In a real implementation, this would point to an actual PDF file
    alert('Resume download would start here. Please provide the actual PDF file.');
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text" data-testid="about-title">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and experience
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border transform hover:scale-105 transition-all duration-300"
              data-testid="profile-card"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Modern coding workspace with laptop and multiple monitors"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
                data-testid="workspace-image"
              />

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Professional Journey</h3>
                <p className="text-accent font-semibold mb-4">3+ Years Experience</p>
                <div className="flex justify-center space-x-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4" data-testid="about-who-i-am">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-bio">
                  I'm a MERN Stack Developer with 3 years of experience, skilled in MongoDB, Express.js, React, Node.js, Next.js, WordPress, and SEO. I also have experience in full project management from start to finish.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary/50 rounded-lg p-4"
                    data-testid={`highlight-${index}`}
                  >
                    <item.icon className="text-accent w-5 h-5 mb-2" />
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={handleDownloadResume}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  data-testid="button-download-resume"
                >
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download Resume (PDF)
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
