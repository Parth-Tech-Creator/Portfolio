import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
const reflections = [
    {
        quote:
            "I believe the best way to learn is by building projects and embracing the mistakes made along the way.",
        author: "My Philosophy",
        role: "Continuous Learning"
    },
    {
        quote:
            "Artificial intelligence becomes meaningful when it solves real-world problems and improves human experiences.",
        author: "Current Focus",
        role: "Machine Learning & Robotics"
    },
    {
        quote:
            "Curiosity has always been the driving force behind every project I build.",
        author: "Growth Mindset",
        role: "Lifelong Learner"
    },
    {
        quote:
            "Every project is an opportunity to experiment, improve, and understand systems more deeply.",
        author: "Engineering Principles",
        role: "Hands-on Development"
    },
    {
        quote:
            "The future belongs to those who are willing to learn, build, and imagine what does not yet exist.",
        author: "Vision",
        role: "AI & Robotics"
    }
];

export const Reflection = () => {

    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % reflections.length);
    }
    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + reflections.length) % reflections.length);
    }




    return (

        <section id="Reflection" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* container */}
                <div className=" text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Reflections
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Principles That<span className="font-serif italic font-normal text-white">
                            {" "}Shape My Journey.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Thoughts, principles, and ideas that continue to inspire my journey in artificial intelligence, robotics, and software engineering.
                    </p>
                </div>
                {/* testimonial carousel */}

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* main testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(32,178,166,0.6)]">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{reflections[activeIdx].quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">


                                <div>

                                    <div className="font-semibold">
                                        {reflections[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {reflections[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* testimonials navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                <ChevronLeft />

                            </button>
                            <div className="flex gap-2">
                                {reflections.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx == activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
                                ))}
                            </div>
                            <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <ChevronRight />

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}