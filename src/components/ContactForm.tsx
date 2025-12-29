import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactMessage } from '../lib/contactService';

const contactSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Por favor ingresa un email válido'),
    phone: z.string().min(9, 'El teléfono debe tener al menos 9 caracteres'),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    React.useEffect(() => {
        console.log('ContactForm Hydrated');
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus('sending');
        try {
            await submitContactMessage(data);
            setStatus('success');
            reset();
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-12 animate-in fade-in duration-500 bg-base-100 dark:bg-slate-900/50 p-8 rounded-3xl">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-base-content mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Gracias por contactarme. Te responderé lo antes posible.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 rounded-full bg-[#1fa3de] text-white hover:bg-[#1fa3de]/90 transition-colors text-sm font-medium"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6 w-full">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-base-content/80 ml-1">
                        Nombre
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-xl border-none bg-base-200/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-[#1fa3de]/20 focus:bg-base-100 dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-base-content ${errors.name ? 'ring-2 ring-red-100 dark:ring-red-900/50 bg-red-50 dark:bg-red-900/20' : 'hover:bg-base-200 dark:hover:bg-slate-800/80'}`}
                        placeholder="Tu nombre"
                    />
                    {errors.name && <p className="text-red-500 text-xs pl-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium text-base-content/80 ml-1">
                        Número de Teléfono
                    </label>
                    <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className={`w-full px-4 py-3 rounded-xl border-none bg-base-200/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-[#1fa3de]/20 focus:bg-base-100 dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-base-content ${errors.phone ? 'ring-2 ring-red-100 dark:ring-red-900/50 bg-red-50 dark:bg-red-900/20' : 'hover:bg-base-200 dark:hover:bg-slate-800/80'}`}
                        placeholder="+51 ..."
                    />
                    {errors.phone && <p className="text-red-500 text-xs pl-1">{errors.phone.message}</p>}
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-base-content/80 ml-1">
                    Email
                </label>
                <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-xl border-none bg-base-200/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-[#1fa3de]/20 focus:bg-base-100 dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-base-content ${errors.email ? 'ring-2 ring-red-100 dark:ring-red-900/50 bg-red-50 dark:bg-red-900/20' : 'hover:bg-base-200 dark:hover:bg-slate-800/80'}`}
                    placeholder="hola@ejemplo.com"
                />
                {errors.email && <p className="text-red-500 text-xs pl-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-base-content/80 ml-1">
                    Mensaje
                </label>
                <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border-none bg-base-200/50 dark:bg-slate-800/50 focus:ring-2 focus:ring-[#1fa3de]/20 focus:bg-base-100 dark:focus:bg-slate-800 outline-none transition-all placeholder:text-slate-400 text-base-content resize-none ${errors.message ? 'ring-2 ring-red-100 dark:ring-red-900/50 bg-red-50 dark:bg-red-900/20' : 'hover:bg-base-200 dark:hover:bg-slate-800/80'}`}
                    placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && <p className="text-red-500 text-xs pl-1">{errors.message.message}</p>}
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group w-full bg-[#1fa3de] text-white hover:bg-[#1fa3de]/90 rounded-full py-4 px-6 font-bold text-base shadow-lg shadow-[#1fa3de]/20 disabled:shadow-none disabled:opacity-70 transition-all active:scale-[0.99] flex items-center justify-between"
                >
                    <span className="pl-2">
                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </span>
                    <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                        {status === 'sending' ? (
                            <span className="loading loading-spinner loading-xs text-white block"></span>
                        ) : (
                            <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        )}
                    </div>
                </button>
            </div>

            {status === 'error' && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center gap-2 border border-red-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Error al enviar. Inténtalo de nuevo o contáctame por WhatsApp.
                </div>
            )}
        </form>
    );
}
