const experiences = [
    {
        period: "2026 - Present",
        role: "AI & Robotics Enthusiast",
        company: "Current Focus",
        description:
            "Exploring machine learning, LLMs, and intelligent systems while pursuing a degree in Robotics and AI. Building AI-powered applications and developing expertise in computer vision and intelligent systems through hands-on projects.",
        technologies: [
            "Python",
            "PyTorch",
            "Transformers",
            "LLMs",
            "Flask"
        ],
        current: true,
    },
    {
        period: "2025",
        role: "Machine Learning & Computer Vision",
        company: "Learning Through Projects",
        description:
            "Built practical AI projects including face detection systems, object detection models, and a movie recommendation system. Gained experience in data preprocessing, model development, and computer vision techniques.",
        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "OpenCV",
            "Scikit-Learn"
        ],
        current: false,
    },
    {
        period: "2024",
        role: "Full-Stack Development",
        company: "Expanding Technical Skills",
        description:
            "Built responsive web applications using React and explored backend development. Learned how complete systems are designed and developed while improving problem-solving and software engineering skills.",
        technologies: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js"
        ],
        current: false,
    },
    {
        period: "2023",
        role: "Programming Foundations",
        company: "Beginning the Journey",
        description:
            "Started learning programming and web development fundamentals while building small projects. Developed strong problem-solving skills and gained experience with JavaScript and modern development tools.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git"
        ],
        current: false,
    }
];


export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        My Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building Experience<span className="font-serif italic font-normal text-white">
                            {" "}Through Projects.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        From building websites to developing machine learning models, each project has been a step toward creating intelligent systems that solve real-world problems.
                    </p>
                </div>
                {/* timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                    {/* experience item */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>

                                {/* timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />)}
                                </div>

                                {/* content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 == 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 == 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}