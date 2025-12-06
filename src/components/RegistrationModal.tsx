
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, MessageCircle } from "lucide-react";
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { supabase } from "@/lib/supabase";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Por favor ingresa un correo electrónico válido.",
    }),
    whatsapp: z.string().min(10, {
        message: "Por favor ingresa un número de WhatsApp válido.",
    }),
    terms: z.boolean().default(true).refine((val) => val === true, {
        message: "Debes aceptar los términos y condiciones.",
    }),
});

interface RegistrationModalProps {
    children: React.ReactNode;
}

export function RegistrationModal({ children }: RegistrationModalProps) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            whatsapp: "",
            terms: true,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            // Parse country from phone number
            let country = "Unknown";
            try {
                // @ts-ignore - libphonenumber types can be tricky
                const parsed = parsePhoneNumber(values.whatsapp);
                if (parsed && parsed.country) {
                    country = parsed.country;
                }
            } catch (e) {
                console.error("Error parsing phone number:", e);
            }

            // 1. Save to Supabase (Attempt with Country)
            let { error } = await supabase
                .from('registrations')
                .insert([
                    {
                        full_name: values.fullName,
                        email: values.email,
                        whatsapp: values.whatsapp,
                        country: country,
                    },
                ]);

            if (error) {
                console.error("Supabase Error:", error);
                throw error;
            }

            // 2. Send Email Notification (Non-blocking / Fire-and-forget)
            // We do NOT await this to prevent blocking the user flow.
            fetch("https://formsubmit.co/ajax/elizabethvilla1306@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "Nuevo Registro - Conecta sin Pantallas",
                    nombre: values.fullName,
                    email: values.email,
                    whatsapp: values.whatsapp,
                    pais: country,
                    _template: "table"
                })
            }).catch(err => console.error("Email system error (background):", err));

            // 3. Success Actions (Immediate)
            setOpen(false);

            toast({
                title: "¡Registro exitoso!",
                description: "Redirigiendo al grupo de WhatsApp...",
                duration: 2000,
            });

            // Redirect almost immediately
            setTimeout(() => {
                window.location.href = "https://chat.whatsapp.com/J5vFmu3QD6zDTpcMbfKhY3";
            }, 500);

        } catch (error: any) {
            console.error('Error registering:', error);
            toast({
                variant: "destructive",
                title: "Error en el registro",
                description: `Error: ${error.message || "Verifica tu conexión"}`,
            });
            // Stop loading only on error. On success, we redirect, so keeping it true might be safer strictly speaking, 
            // but setting false here ensures if redirect fails user isn't stuck.
            setIsLoading(false);
        } finally {
            // In success case, we are redirecting, so mostly fine.
            // But if we want to be safe in case redirect is slow:
            if (!open) {
                setIsLoading(false);
            }
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center text-teal-dark">
                        Asegura tu cupo gratuito
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Completa tus datos para unirte al grupo exclusivo de WhatsApp y recibir el acceso a la charla.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">

                        {/* Full Name */}
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre Completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tu nombre" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo Electrónico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="tu@email.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* WhatsApp with PhoneInput */}
                        <FormField
                            control={form.control}
                            name="whatsapp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>WhatsApp (con código de país)</FormLabel>
                                    <FormControl>
                                        <PhoneInput
                                            international
                                            defaultCountry="CO"
                                            value={field.value}
                                            onChange={field.onChange}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Registrando...
                                </>
                            ) : (
                                <>
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Asegurar mi cupo
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
