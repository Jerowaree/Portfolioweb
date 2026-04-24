import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, type Lang } from '../utils/i18n';
import { SiReact, SiOpenai, SiFigma } from 'react-icons/si';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metric: string;
  tags: string[];
}

export default function Services({ lang }: { lang: Lang }) {
    const t = useTranslations(lang);
    const services: ServiceProps[] = [
        {
            id: "MOD_01",
            title: t('stack.frontend.title'),
            description: t('stack.frontend.description'),
            icon: SiReact,
            metric: "99.9% UPTIME DESIGN",
            tags: ["SaaS", "Fintech", "Scalability"]
        },
        {
            id: "MOD_02",
            title: t('stack.ai.title'),
            description: t('stack.ai.description'),
            icon: SiOpenai,
            metric: "-60% MANUAL OVERHEAD",
            tags: ["OpenAI", "Automation", "NLP"]
        },
        {
            id: "MOD_03",
            title: t('stack.backend.title'),
            description: t('stack.backend.description'),
            icon: SiFigma,
            metric: "+40% USER RETENTION",
            tags: ["UI/UX", "Design Systems", "Prototyping"]
        }
    ];

    return (
        <section id="services" className="py-32 bg-[#050505] relative overflow-hidden font-mono border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mb-24 space-y-6">
                    <div className="flex items-center gap-4 text-[#1fa3de]">
                        <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-70">SERVICE_CATALOG // SOLUTIONS</span>
                        <div className="flex-grow h-[1px] bg-white/10"></div>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                        {t('services.title')} <br/>
                        <span className="text-white/40 italic">{t('services.subtitle')}</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#1fa3de]/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full relative"
                        >
                            {/* Service Header */}
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-12 h-12 rounded-xl bg-[#1fa3de]/10 border border-[#1fa3de]/20 flex items-center justify-center text-[#1fa3de] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(31,163,222,0.1)]">
                                    <service.icon size={24} />
                                </div>
                                <span className="text-[11px] font-black text-white/50 tracking-widest">{service.id}</span>
                            </div>

                            <h3 className="text-xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-[#1fa3de] transition-colors uppercase">
                                {service.title}
                            </h3>

                            <p className="text-xs text-white/60 leading-relaxed mb-10 font-sans font-medium flex-grow">
                                {service.description}
                            </p>

                            {/* Impact Metric */}
                            <div className="bg-black/40 border border-white/5 p-4 rounded-xl mb-8 flex flex-col gap-1 group-hover:border-[#1fa3de]/20 transition-all">
                                <span className="text-[9px] font-black text-white/50 uppercase tracking-widest">{t('services.outcome')}</span>
                                <span className="text-sm font-black text-[#1fa3de] tracking-tighter">{service.metric}</span>
                            </div>

                            {/* Tags & CTA */}
                            <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-black text-white/50 uppercase tracking-tighter px-2 py-1 bg-white/5 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <button className="w-full py-4 bg-[#1fa3de] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/10">
                                    {t('services.cta')}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Engagement Bar / Lead Magnet */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 bg-white/[0.01] border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fa3de]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="space-y-4 text-center md:text-left relative z-10">
                        <h4 className="text-white font-black text-3xl md:text-4xl tracking-tighter leading-none uppercase">{t('services.lead.title')}</h4>
                        <p className="text-white/60 text-sm font-medium font-sans max-w-md italic">{t('services.lead.subtitle')}</p>
                    </div>
                    <a href="#contact" className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-[#1fa3de] hover:text-white transition-all shadow-2xl shadow-white/5 active:scale-95 relative z-10">
                        {t('services.lead.cta')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
