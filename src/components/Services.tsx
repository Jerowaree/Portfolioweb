
import { motion } from "framer-motion";
import { LuLayers, LuCpu, LuCloud } from "react-icons/lu";

const services = [
    {
        title: "Sistemas Core & Web",
        description: "Arquitecturas escalables y de alta velocidad. Desde intranets corporativas hasta aplicaciones web de última generación con foco en rendimiento.",
        icon: LuLayers,
    },
    {
        title: "Inteligencia Aplicada",
        description: "Integración estratégica de IA y automatización de procesos. Implemento soluciones inteligentes que optimizan la toma de decisiones.",
        icon: LuCpu,
    },
    {
        title: "Estrategia Cloud & SaaS",
        description: "Despliegue y optimización en la nube. Diseño soluciones nativas de la nube pensadas para ser seguras, robustas y globalmente accesibles.",
        icon: LuCloud,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-base-100 dark:bg-slate-950 scroll-mt-20 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
                            Soluciones Digitales<br />
                            <span className="!text-[#1fa3de]">
                                de Próxima Generación
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed"
                    >
                        Fusionando la ingeniería de software con diseño de vanguardia para crear productos que impulsan el crecimiento tecnológico de tu negocio.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                whileHover={{ y: -10 }}
                                className="group bg-base-100 dark:bg-slate-900/50 p-10 rounded-[2rem] border border-base-200 dark:border-slate-800 transition-all duration-300 hover:!border-[#1fa3de]/50 relative flex flex-col items-start h-full shadow-sm hover:shadow-xl hover:!shadow-[#1fa3de]/5"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-base-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 mb-8 group-hover:!bg-[#1fa3de] group-hover:text-white transition-all duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-base-content mb-4 transition-colors duration-300 group-hover:!text-[#1fa3de]">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-base-content">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:!text-[#1fa3de] transition-all duration-300">
                                    <span className="w-8 h-px bg-base-300 dark:bg-slate-700 group-hover:!bg-[#1fa3de] transition-all duration-300" />
                                    Saber más
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
