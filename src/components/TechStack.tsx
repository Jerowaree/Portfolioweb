import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, type Lang } from '../utils/i18n';
import { 
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAstro,
    SiNodedotjs, SiNestjs, SiPostgresql, SiPrisma, SiDocker,
    SiOpenai, SiPython, SiGit, SiFigma
} from 'react-icons/si';

export default function TechStack({ lang }: { lang: Lang }) {
    const t = useTranslations(lang);
    const files = [
        {
            id: "product_engineering.json",
            title: t('stack.frontend.title'),
            icon: "JS",
            color: "#f7df1e",
            content: {
                category: t('stack.frontend.category'),
                status: "Mastered",
                stack: [
                    { name: "React", Icon: SiReact, color: "#61DAFB" },
                    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
                    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
                    { name: "Tailwind", Icon: SiTailwindcss, color: "#38B2AC" },
                    { name: "Astro", Icon: SiAstro, color: "#FF5D01" }
                ]
            }
        },
        {
            id: "systems_arch.py",
            title: t('stack.backend.title'),
            icon: "PY",
            color: "#3776ab",
            content: {
                category: t('stack.backend.category'),
                status: "High Scale",
                stack: [
                    { name: "Node.js", Icon: SiNodedotjs, color: "#83CD29" },
                    { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
                    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
                    { name: "Prisma", Icon: SiPrisma, color: "#ffffff" },
                    { name: "Docker", Icon: SiDocker, color: "#2496ED" }
                ]
            }
        },
        {
            id: "ai_intelligence.ts",
            title: t('stack.ai.title'),
            icon: "TS",
            color: "#3178c6",
            content: {
                category: t('stack.ai.category'),
                status: "Optimized",
                stack: [
                    { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
                    { name: "Python", Icon: SiPython, color: "#3776AB" },
                    { name: "Git", Icon: SiGit, color: "#F05032" },
                    { name: "Figma", Icon: SiFigma, color: "#F24E1E" }
                ]
            }
        }
    ];

    const [activeFile, setActiveFile] = useState(files[0]);

    return (
        <div className="w-full bg-[#0d1117] rounded-3xl border border-white/10 overflow-hidden shadow-2xl font-mono transition-all duration-500 hover:shadow-[#1fa3de]/10 hover:border-[#1fa3de]/30">
            {/* IDE Header */}
            <div className="bg-[#161b22] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-lg shadow-red-500/20"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-lg shadow-amber-500/20"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-lg shadow-emerald-500/20"></div>
                </div>
                <div className="text-[11px] text-white/50 font-black uppercase tracking-[0.3em]">
                    JEROWARE_IDE — EDITOR
                </div>
                <div className="w-12"></div>
            </div>

            <div className="flex h-[550px]">
                {/* Sidebar Explorer */}
                <div className="hidden lg:flex w-72 bg-[#0d1117] border-r border-white/5 flex-col py-6">
                    <span className="px-8 text-[11px] font-black text-white/40 uppercase tracking-[0.4em] mb-6">{t('stack.explorer')}</span>
                    {files.map(file => (
                        <button
                            key={file.id}
                            onClick={() => setActiveFile(file)}
                            className={`px-8 py-3.5 flex items-center gap-4 text-[12px] font-bold transition-all relative ${activeFile.id === file.id ? 'bg-[#1fa3de]/10 text-[#1fa3de] border-r-2 border-r-[#1fa3de]' : 'text-white/50 hover:text-white/80 hover:bg-white/[0.02]'}`}
                        >
                            <span style={{ color: file.color }} className="font-black text-[10px] w-4">{file.icon}</span>
                            {file.id}
                        </button>
                    ))}
                </div>

                {/* Editor Area */}
                <div className="flex-grow flex flex-col bg-[#0d1117]/50 backdrop-blur-xl">
                    {/* Tabs */}
                    <div className="flex bg-[#161b22] overflow-x-auto no-scrollbar">
                        {files.map(file => (
                            <button
                                key={file.id}
                                onClick={() => setActiveFile(file)}
                                className={`px-6 py-3 text-[11px] font-black flex items-center gap-3 border-r border-white/5 whitespace-nowrap transition-all ${activeFile.id === file.id ? 'bg-[#0d1117] text-[#1fa3de] border-t-2 border-t-[#1fa3de]' : 'text-white/40 hover:text-white/60 hover:bg-white/5'}`}
                            >
                                <span style={{ color: file.color }} className="font-black text-[9px]">{file.icon}</span>
                                {file.id}
                            </button>
                        ))}
                    </div>

                    {/* Content View */}
                    <div className="p-10 overflow-y-auto flex-grow relative custom-scrollbar">
                        <div className="absolute left-0 top-0 bottom-0 w-14 bg-white/[0.01] border-r border-white/5 flex flex-col items-center py-10 text-[11px] text-white/20 select-none font-mono">
                            {Array.from({ length: 25 }).map((_, i) => <div key={i} className="h-6 leading-6">{i + 1}</div>)}
                        </div>
                        
                        <div className="ml-10 space-y-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFile.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-sm leading-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-[#ff7b72] font-black italic underline decoration-white/10 underline-offset-4">export</span> 
                                            <span className="text-[#ff7b72]">const</span> 
                                            <span className="text-[#d2a8ff] font-bold">{activeFile.title.replace(' ', '_').toUpperCase()}</span> 
                                            <span className="text-white/60">=</span> 
                                            <span className="text-[#79c0ff]">{"{"}</span>
                                        </div>

                                        <div className="pl-8 space-y-4">
                                            <div className="flex items-center gap-3 group/line">
                                                <span className="text-[#79c0ff]">category:</span> 
                                                <span className="text-[#a5d6ff] transition-all group-hover/line:text-white">"{activeFile.content.category}"</span>,
                                            </div>
                                            <div className="flex items-center gap-3 group/line">
                                                <span className="text-[#79c0ff]">core_status:</span> 
                                                <span className="text-[#a5d6ff] transition-all group-hover/line:text-white">"{activeFile.content.status}"</span>,
                                            </div>
                                            
                                            <div className="pt-6">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-[#79c0ff]">deployment_stack:</span> 
                                                    <span className="text-[#79c0ff]">[</span>
                                                </div>
                                                
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pl-4">
                                                    {activeFile.content.stack.map((tech) => (
                                                        <div key={tech.name} className="flex flex-col items-center gap-3 group/tech cursor-pointer">
                                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3.5 group-hover/tech:scale-110 group-hover/tech:border-[#1fa3de]/40 group-hover/tech:bg-[#1fa3de]/10 transition-all duration-500 shadow-xl group-hover/tech:shadow-[#1fa3de]/10">
                                                                <tech.Icon style={{ color: tech.color }} className="w-full h-full grayscale group-hover/tech:grayscale-0 transition-all duration-500" />
                                                            </div>
                                                            <span className="text-[10px] text-white/50 uppercase tracking-widest font-black group-hover/tech:text-white transition-colors">{tech.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-6 text-[#79c0ff]">]</div>
                                            </div>
                                        </div>
                                        <div className="mt-6 text-[#79c0ff]">{"};"}</div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Footer */}
            <div className="bg-[#1fa3de] px-6 py-1.5 flex items-center justify-between text-[11px] text-white font-black uppercase tracking-tight">
                <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2 bg-white/10 px-2 py-0.5 rounded">
                         <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                         MAIN_BRANCH
                    </div>
                    <span className="opacity-80">UTF-8</span>
                </div>
                <div className="flex gap-6 items-center">
                    <span className="opacity-80">Ln {activeFile.content.stack.length}, Col 12</span>
                    <div className="flex items-center gap-1.5 opacity-80">
                         <SiTypescript size={10} />
                         TYPESCRIPT_REACT
                    </div>
                </div>
            </div>
        </div>
    );
}
