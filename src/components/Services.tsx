
import { motion } from "framer-motion";

const services = [
    {
        title: "Desarrollo Web de Alto Impacto",
        description: "Creo experiencias digitales rápidas y escalables que no solo se ven bien, sino que convierten visitantes en clientes.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "text-[#1fa3de]",
        bgColor: "bg-blue-50",
    },
    {
        title: "Poténciate con IA",
        description: "Automatiza lo aburrido y toma mejores decisiones. Integro chatbots y sistemas predictivos para que tu negocio trabaje por ti.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "text-cyan-500",
        bgColor: "bg-cyan-50",
    },
    {
        title: "Software a tu Medida",
        description: "Tu negocio es único, tu software también debería serlo. Arquitectura limpia y escalable pensada para crecer contigo.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: "text-indigo-500",
        bgColor: "bg-indigo-50",
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

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function Services() {
    return (
        <section id="services" className="py-16 bg-base-100 dark:bg-slate-950 scroll-mt-20 relative z-20">
            <div className="container mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-10"
                >
                    <span className="text-[#1fa3de] text-sm font-bold tracking-wider uppercase mb-2 block">
                        Lo que ofrezco
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Mis Servicios
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="bg-base-100 dark:bg-base-100 p-6 rounded-xl border border-base-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#1fa3de]/40 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="flex flex-col h-full relative z-10">
                                <div
                                    className={`w-12 h-12 ${service.bgColor} dark:bg-opacity-10 rounded-lg flex items-center justify-center ${service.color} mb-5 group-hover:scale-105 transition-transform duration-300`}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-base-content mb-2 group-hover:text-[#1fa3de] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 dark:!text-slate-200 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-base-200 dark:to-slate-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
