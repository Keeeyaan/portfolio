"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Full name is required.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
  email: z.string().email().min(1, "Email is required."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must not be longer than 500 characters."),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "This feature is currently unavailable.",
      description: (
        <p>
          You can reach out to me directly via email at{" "}
          <span className="text-blue-500">keanjieden@gmail.com</span>.
        </p>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your Name*"
                  className="resize-none bg-[#ecf3ff] dark:bg-[#08122b]"
                  {...field}
                />
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
              <FormControl>
                <Input
                  placeholder="Email Address*"
                  className="resize-none bg-[#ecf3ff] dark:bg-[#08122b]"
                  {...field}
                />
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
              <FormLabel className="text-xs font-semibold">
                Tell me more about your project*
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none bg-[#ecf3ff] dark:bg-[#08122b]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white p-7 text-xs font-semibold"
          type="submit"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
