"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, CheckCircle, Phone, MessageSquare, ArrowLeft } from 'lucide-react'
import { motion } from "framer-motion"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
}

export default function ThankYouPage() {
    // Track conversion when page loads
    useEffect(() => {
        // Ensure gtag is available
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-17439577808/qwzuCJ-U64UbENCt6_tA',
                'value': 1.0,
                'currency': 'USD'
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-weguard-dark text-white font-sans">
            {/* Header */}
            <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-weguard-red/60">
                <Link href="/" className="flex items-center gap-2" aria-label="WeGuard Home">
                    <ShieldCheck className="h-8 w-8 text-weguard-red" />
                    <span className="text-2xl font-bold text-white">WeGuard</span>
                </Link>
                <Button asChild variant="outline" className="border-weguard-red text-weguard-red hover:bg-weguard-red hover:text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </header>

            <main className="flex-1">
                {/* Thank You Section */}
                <section className="py-16 md:py-24 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,0,0,0.15),transparent_60%)] pointer-events-none" />
                    <div className="absolute top-20 left-10 w-32 h-32 bg-weguard-red/10 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-weguard-red/5 rounded-full blur-3xl animate-float-slow" />

                    <div className="container px-4 md:px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="max-w-3xl mx-auto text-center space-y-8"
                        >
                            {/* Success Icon */}
                            <motion.div variants={fadeIn} className="flex justify-center">
                                <div className="relative">
                                    <CheckCircle className="h-24 w-24 text-weguard-red" />
                                    <div className="absolute inset-0 bg-weguard-red/20 rounded-full blur-xl animate-pulse-slow" />
                                </div>
                            </motion.div>

                            {/* Main Message */}
                            <motion.div variants={fadeIn} className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                    Thank You for Choosing <span className="text-weguard-red">WeGuard</span>!
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                                    Your security consultation request has been received
                                </p>
                            </motion.div>

                            {/* Details */}
                            <motion.div variants={fadeIn} className="bg-gray-900/80 border border-weguard-red/30 rounded-lg p-8 shadow-2xl">
                                <h2 className="text-2xl font-bold mb-4 text-weguard-red">What Happens Next?</h2>
                                <div className="space-y-4 text-left">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-weguard-red rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Immediate Response</h3>
                                            <p className="text-gray-400">Our security specialist will contact you within 10 minutes during business hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-weguard-red rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Free Consultation</h3>
                                            <p className="text-gray-400">We'll discuss your specific security needs and provide expert recommendations</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-weguard-red rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Custom Quote</h3>
                                            <p className="text-gray-400">Receive a detailed, transparent quote tailored to your requirements</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Urgent Contact */}
                            <motion.div variants={fadeIn} className="bg-weguard-red/10 border border-weguard-red/50 rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-3 text-weguard-red">Need Immediate Assistance?</h3>
                                <p className="text-gray-300 mb-4">
                                    For urgent security matters or if you need to speak with someone right now:
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="tel:123-456-7890"
                                        className="inline-flex items-center justify-center gap-3 bg-weguard-red hover:bg-weguard-red/90 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03]"
                                    >
                                        <Phone className="h-5 w-5" />
                                        Call Now: (123) 456-7890
                                    </a>
                                    <Button variant="outline" className="border-weguard-red text-weguard-red hover:bg-weguard-red hover:text-white">
                                        <MessageSquare className="h-5 w-5 mr-2" />
                                        Live Chat
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Additional Info */}
                            <motion.div variants={fadeIn} className="text-center space-y-4">
                                <p className="text-gray-400">
                                    We're committed to providing you with the highest level of security services in Los Angeles & Orange County.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                    <ShieldCheck className="h-4 w-4 text-weguard-red" />
                                    <span>Licensed • Bonded • Insured • Available 24/7</span>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button asChild className="bg-weguard-red hover:bg-weguard-red/90 text-white">
                                    <Link href="/#services">View Our Services</Link>
                                </Button>
                                <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                                    <Link href="/#testimonials">Read Testimonials</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-weguard-dark py-8 border-t border-weguard-red/40">
                <div className="container px-4 md:px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <ShieldCheck className="h-6 w-6 text-weguard-red" />
                        <span className="text-xl font-bold">WeGuard Private Security</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} WeGuard Private Security. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

// Add gtag type declaration
declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: any) => void;
    }
}