import { motion } from "framer-motion";

const achievements = [
  {
    title: "IBM Certified AI Developer",
    issuer: "IBM",
    year: "2025",
    image: "\src\assets\certificate.jpg",
    link: "https://coursera.org/share/6b5d23e2c89d665b0714b1bd6dfdcc84",
    description: "AI development covering ML, NLP, and Generative AI.",
    skills: ["Machine Learning", "NLP", "Python"],
  },
  {
    title: "IBM AI Engineering Certificate",
    issuer: "IBM",
    year: "2025",
    image: "/certificates/ibm-ai-engineer.png",
    link: "#",
    description: "Deep learning, TensorFlow, and AI pipelines.",
    skills: ["TensorFlow", "Deep Learning", "Keras"],
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    year: "2024",
    image: "/certificates/meta-frontend.png",
    link: "#",
    description: "Frontend mastery with React and modern UI.",
    skills: ["React", "JavaScript", "CSS"],
  },

];




export const Achievements = () => {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-primary font-medium">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Certifications that{" "}
            <span className="italic font-serif text-white">
              stand out.
            </span>
          </h2>

          <p className="text-muted-foreground mt-4">
            A showcase of my certifications in AI and Frontend Development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative"
            >
              <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500 h-full flex flex-col">
                
                {/* Certificate Image */}
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Year */}
                <span className="text-xs text-primary font-medium">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2">
                  {item.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-muted-foreground">
                  {item.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mt-3 flex-grow">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-surface rounded-full text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={item.link}
                  target="_blank"
                  className="mt-6 inline-block text-sm text-primary hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};