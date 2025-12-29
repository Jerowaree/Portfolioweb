import { supabase } from './supabase';

export interface ContactMessage {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const submitContactMessage = async (data: ContactMessage) => {
    const { error } = await supabase
        .from('mensajes')
        .insert([
            {
                name: data.name,
                email: data.email,
                numero: data.phone,
                message: data.message,
                created_at: new Date().toISOString(),
            },
        ]);

    if (error) {
        console.error('Supabase error:', error);
        throw error;
    }
};





