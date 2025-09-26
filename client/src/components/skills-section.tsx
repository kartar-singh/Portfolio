import { motion } from "framer-motion";
import { Laptop, Server, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Laptop,
      skills: [
        { name: "React", level: 90, color: "bg-blue-400" },
        { name: "JavaScript", level: 95, color: "bg-yellow-400" },
        { name: "Next.js", level: 85, color: "bg-primary" },
        { name: "Tailwind CSS", level: 90, color: "bg-accent" },
        { name: "HTML5", level: 100, color: "bg-orange-500" },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-500" },
        { name: "Express.js", level: 90, color: "bg-purple-400" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "JWT Auth", level: 85, color: "bg-red-500" },
        { name: "REST APIs", level: 95, color: "bg-gray-400" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "AWS", level: 75, color: "bg-orange-400" },
        { name: "Git", level: 90, color: "bg-red-400" },
        { name: "WordPress", level: 85, color: "bg-blue-600" },
        { name: "Docker", level: 75, color: "bg-blue-500" },
      ]
    }
  ];

  const getLevelText = (level: number) => {
    if (level >= 95) return "Expert";
    if (level >= 85) return "Advanced";
    if (level >= 75) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-center" data-testid={`skills-category-${categoryIndex}`}>
                <category.icon className="text-accent inline mr-2" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-card rounded-xl p-6 text-center shadow-lg border border-border hover:shadow-2xl transition-shadow duration-300"
                    data-testid={`skill-card-${categoryIndex}-${skillIndex}`}
                  >
                    <div className="text-4xl mb-3">
                      {/* Icon placeholder - in real app, these would be proper skill icons */}
                      <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto`}>
                        <span className="text-white font-bold text-sm">
                          {skill.name.slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2" data-testid={`skill-name-${categoryIndex}-${skillIndex}`}>
                      {skill.name}
                    </h4>
                    <div className="w-full bg-secondary rounded-full h-2 mb-2">
                      <motion.div
                        className={`${skill.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground" data-testid={`skill-level-${categoryIndex}-${skillIndex}`}>
                      {getLevelText(skill.level)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
