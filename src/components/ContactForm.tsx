import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, type Lang } from '../utils/i18n';

export default function ContactForm({ lang }: { lang: Lang }) {
    const t = useTranslations(lang);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [logs, setLogs] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
        setLogs([t('contact.logs.init'), t('contact.logs.ready')]);
    }, [lang]);

    const steps = [
        { key: 'name', label: 'ENTER_NAME', prompt: t('contact.prompts.name') },
        { key: 'email', label: 'ENTER_EMAIL', prompt: t('contact.prompts.email') },
        { key: 'message', label: 'ENTER_SCOPE', prompt: t('contact.prompts.message') }
    ];

    const addLog = (msg: string) => {
        setLogs(prev => [...prev.slice(-4), msg]);
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        const currentVal = formData[steps[step].key as keyof typeof formData];
        
        if (!currentVal) {
            addLog(`${t('contact.logs.error')}: ${steps[step].key.toUpperCase()}`);
            return;
        }

        if (step < steps.length - 1) {
            addLog(`${t('contact.logs.validated')}: ${steps[step].key.toUpperCase()}`);
            setStep(step + 1);
        } else {
            addLog(t('contact.logs.sending'));
            setStep(step + 1);
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [step]);

    return (
        <div className="w-full bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-10 font-mono relative overflow-hidden shadow-2xl min-h-[550px] flex flex-col transition-all duration-500">
            <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                <div className="flex gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
                </div>
                <div className="text-[10px] text-white/60 font-black tracking-[0.3em] uppercase tracking-widest">Connect_Interface_v1.0</div>
                <div className="text-[10px] text-[#1fa3de] font-black uppercase tracking-tighter">STATUS: {step > 2 ? t('contact.status.completed') : t('contact.status.idle')}</div>
            </div>

            <div className="space-y-1.5 mb-10 h-20 overflow-hidden">
                {logs.map((log, i) => (
                    <div key={i} className="text-[11px] tracking-tight text-white/50 font-bold">{log}</div>
                ))}
            </div>

            <div className="flex-grow flex flex-col justify-center max-w-2xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    {step <= 2 ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-10"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#1fa3de] font-black text-sm">/</span>
                                    <span className="text-white/70 text-[10px] font-black tracking-[0.4em] uppercase">{steps[step].label}</span>
                                </div>
                                <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none italic">
                                    {steps[step].prompt}
                                </h4>
                            </div>

                            <form onSubmit={handleNext} className="relative group">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#1fa3de] font-black text-2xl animate-pulse">{">"}</span>
                                {step < 2 ? (
                                    <input
                                        ref={inputRef as any}
                                        type={steps[step].key === 'email' ? 'email' : 'text'}
                                        value={formData[steps[step].key as keyof typeof formData]}
                                        onChange={(e) => setFormData({...formData, [steps[step].key]: e.target.value})}
                                        className="w-full bg-transparent border-none text-white text-2xl md:text-4xl font-black pl-10 focus:outline-none placeholder:text-white/5"
                                        placeholder="TYPE_HERE..."
                                        autoComplete="off"
                                    />
                                ) : (
                                    <textarea
                                        ref={inputRef as any}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full bg-transparent border-none text-white text-2xl md:text-4xl font-black pl-10 focus:outline-none placeholder:text-white/5 resize-none h-40"
                                        placeholder="TYPE_HERE..."
                                    />
                                )}
                                
                                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
                                     <span className="text-[10px] text-white/50 uppercase font-black tracking-widest italic">Press [ENTER] to validate_packet</span>
                                     <button type="submit" className="text-[11px] font-black text-white bg-[#1fa3de] px-8 py-3 rounded-xl hover:bg-blue-600 transition-all uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">Execute</button>
                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-10"
                        >
                            <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(16,185,129,0.2)]">
                                <svg className="w-12 h-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">{t('contact.logs.success')}</h4>
                                <p className="text-white/70 text-sm font-medium max-w-sm mx-auto font-sans italic">{t('contact.logs.successSub')}</p>
                            </div>
                            <button 
                                onClick={() => setStep(0)}
                                className="text-[11px] font-black text-white/50 hover:text-[#1fa3de] transition-colors uppercase tracking-[0.3em] border-b border-white/10 pb-1"
                            >
                                Re-initialize Protocol
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
                <div className="flex gap-6 italic">
                    <span>Thread_ID: 0x932KJ</span>
                    <span className="text-[#1fa3de]">Node: {lang === 'es' ? 'LATAM_SUR' : 'LATAM_SOUTH'}</span>
                </div>
                <span>Status: {t('contact.status.encrypted')}</span>
            </div>
        </div>
    );
}
