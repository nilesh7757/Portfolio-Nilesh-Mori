"use client";
import React, { useRef } from "react";
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from "@emailjs/browser";
import { Mail, Phone, User, MessageSquare, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Show loading toast
    const loadingToast = toast.loading('Sending message...');
    
    emailjs
      .sendForm("service_2qycq85", "template_ebfrijf", form.current, {
        publicKey: "lgyXGdU7WDqjRFTGd",
      })
      .then(
        (response) => {
          // Dismiss loading toast and show success toast
          toast.dismiss(loadingToast);
          toast.success('Message sent successfully!', {
            duration: 4000,
            icon: '🎉',
          });
          e.target.reset();
        },
        (error) => {
          // Dismiss loading toast and show error toast
          toast.dismiss(loadingToast);
          toast.error('Failed to send message. Please try again.', {
            duration: 4000,
          });
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="min-h-screen w-full px-4 py-8 md:py-12 lg:py-16">
      {/* Add Toaster component */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-6 h-6 md:w-8 md:h-8" />
          Contact <span className="bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info Card */}
          <motion.div 
            className="w-full lg:w-1/3"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Let&apos;s Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>nileshmori7757@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>7778827757</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="pl-10"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="pl-10"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="tel"
                        name="mobile_number"
                        placeholder="Your Phone Number"
                        pattern="[0-9]{10}"
                        minLength={10}
                        maxLength={10}
                        className="pl-10"
                        required
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        className="pl-10 min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full group"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;