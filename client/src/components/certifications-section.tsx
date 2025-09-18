import { motion } from "framer-motion";
import { Award, Plus, Book, GitBranch, Users, Headphones } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certification",
      status: "In Progress",
      description: "AWS Certified Developer - Associate",
      progress: 75,
      color: "bg-orange-400",
      icon: "aws",
    },
    {
      title: "Future Certification",
      status: "Planning Phase",
      description: "More certifications coming soon",
      progress: 0,
      color: "bg-muted",
      icon: "plus",
    },
  ];

  const learningItems = [
    {
      icon: Book,
      title: "Online Courses",
      description: "Udemy, Coursera",
    },
    {
      icon: GitBranch,
      title: "Open Source",
      description: "GitHub Projects",
    },
    {
      icon: Users,
      title: "Communities",
      description: "Stack Overflow, Reddit",
    },
    {
      icon: Headphones,
      title: "Tech Podcasts",
      description: "Industry Updates",
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text" data-testid="certifications-title">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-card rounded-xl p-6 shadow-lg border border-border text-center ${
                  cert.progress === 0 ? 'opacity-60' : ''
                }`}
                data-testid={`certification-card-${index}`}
              >
                <div className={`w-16 h-16 ${cert.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {cert.icon === "aws" ? (
                    <Award className={`text-2xl ${cert.color.replace('bg-', 'text-')}`} />
                  ) : (
                    <Plus className={`text-2xl text-muted-foreground`} />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2" data-testid={`cert-title-${index}`}>
                  {cert.title}
                </h3>
                <p className={`font-semibold mb-2 ${cert.progress > 0 ? 'text-accent' : 'text-muted-foreground'}`}>
                  {cert.status}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>
                <div className="bg-secondary rounded-full h-2 mb-2">
                  <motion.div
                    className={`${cert.color} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cert.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-sm text-muted-foreground" data-testid={`cert-progress-${index}`}>
                  {cert.progress > 0 ? `${cert.progress}% Complete` : cert.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8" data-testid="continuous-learning-title">
              Continuous Learning
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-4 text-center shadow border border-border hover:shadow-lg transition-shadow duration-300"
                  data-testid={`learning-item-${index}`}
                >
                  <item.icon className={`${index % 2 === 0 ? 'text-primary' : 'text-accent'} text-2xl mb-2 mx-auto`} />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
