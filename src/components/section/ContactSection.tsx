import { Mail } from "lucide-react";

import ContactForm from "../ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl px-5 w-full mx-auto mb-4 mt-20">
      <h1 className="text-center text-3xl font-bold mb-8">Contact Me</h1>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <div className="space-y-6">
          <h1 className="text-4xl text-center lg:text-start font-semibold leading-normal">
            Let&apos;s chat. <br /> Tell me about your <br /> project.
          </h1>
          <p className="dark:text-muted-foreground text-white text-center lg:text-start ">
            Let&apos;s create something together🤘
          </p>
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded bg-blue-100 text-blue-500 dark:bg-[#061335] inline-block ">
                  <Mail />
                </div>
                <div className="font-medium text-sm">
                  Mail me at <br />
                  <span className="text-blue-400">keanjieden@gmail.com</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-xl">Send me a message 🚀</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
