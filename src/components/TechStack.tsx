import React from 'react';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiAstro,
    SiTailwindcss,
    SiNodedotjs,
    SiNextdotjs,
    SiNestjs,
    SiPython,
    SiPostgresql,
    SiSupabase,
    SiGit,
    SiGithub,
    SiFigma,
    SiOpenai
} from 'react-icons/si';

const VscodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.245.09L.46 7.41a.98.98 0 0 0-.01 1.43l9.8 8.49c-3.17 2.76-9.8 8.49-9.8 8.49a.98.98 0 0 0 .01 1.43l1.21 1.31c.363.39.957.4 1.245.09l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.444V3.944a1.5 1.5 0 0 0-.85-1.357z" />
    </svg>
);

const stackData = [
    {
        title: "Frontend Development",
        description: "Creo interfaces de usuario rápidas, responsivas y accesibles con un enfoque en la experiencia de usuario, el SEO y el rendimiento. Especializado en arquitecturas modernas basadas en componentes.",
        icons: [
            { name: "React", Icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind", Icon: SiTailwindcss, color: "#38B2AC" },
            { name: "Astro", Icon: SiAstro, color: "#FF5D01" },
            { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", Icon: SiCss3, color: "#1572B6" }
        ]
    },
    {
        title: "Backend & Datos",
        description: "Diseño APIs robustas y esquemas de base de datos eficientes. Desarrollo lógica de servidor escalable y segura para soportar aplicaciones complejas.",
        icons: [
            { name: "Node.js", Icon: SiNodedotjs, color: "#83CD29" },
            { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
            { name: "Python", Icon: SiPython, color: "#3776AB" },
            { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
            { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" }
        ]
    },
    {
        title: "Herramientas & DevOps",
        description: "Utilizo flujos de trabajo profesionales para garantizar la calidad del código, el control de versiones y la colaboración efectiva en equipo.",
        icons: [
            { name: "Git", Icon: SiGit, color: "#F05032" },
            { name: "GitHub", Icon: SiGithub, color: "var(--github-icon-color, #181717)" },
            { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
            { name: "VS Code", Icon: VscodeIcon, color: "#007ACC" },
            { name: "AI Tools", Icon: SiOpenai, color: "#1fa3de" }
        ]
    }
];

export default function TechStack() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {stackData.map((group, index) => (
                <div key={index} className="bg-base-100 p-8 rounded-3xl border border-base-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-[#1fa3de]/10 hover:border-[#1fa3de]/30 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-base-content mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-[#1fa3de] rounded-full"></span>
                            {group.title}
                        </h3>
                    </div>

                    <p className="text-slate-500 dark:!text-slate-200 text-sm leading-relaxed mb-8 flex-grow">
                        {group.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {group.icons.map((tech) => (
                            <div key={tech.name} className="relative group/icon" title={tech.name}>
                                <div className="w-10 h-10 rounded-xl bg-base-200 dark:bg-slate-800/50 border border-base-300 dark:border-slate-700 flex items-center justify-center p-2 group-hover/icon:scale-110 group-hover/icon:border-[#1fa3de]/30 group-hover/icon:shadow-sm transition-all duration-300">
                                    <tech.Icon className="w-full h-full" style={{ color: tech.name === "GitHub" ? undefined : tech.color }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
