"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { formSchema, FormSchema } from "../_schemas/form-schema";

export function ContactForm() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(values: FormSchema) {
        try {
            const res = await fetch("/contact/api", {
                method: "POST",
                body: JSON.stringify(values)
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Thanks for reaching out. I'll get back to you soon.");
                form.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.log("--- email error ---", error);
            toast.error("Failed to send message. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="sm:w-96">
                <div className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Leave me a message here..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" aria-disabled={isSubmitting} disabled={isSubmitting} className="min-w-1/3 sm:self-start">
                        {isSubmitting ? <LoaderCircleIcon className="animate-spin" /> : "Send"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
