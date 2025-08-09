"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, ShieldCheck, Clock, MapPin, Star, MessageSquare } from 'lucide-react'
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-weguard-dark text-white font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 lg:px-6 h-16 flex items-center justify-between fixed w-full z-50 bg-weguard-dark/90 backdrop-blur-sm border-b border-weguard-red"
      >
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-weguard-red" />
          <span className="text-2xl font-bold text-white">WeGuard</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#why-choose-us" className="text-sm font-medium hover:text-weguard-red transition-colors">
            Why Choose Us
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-weguard-red transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-weguard-red transition-colors">
            Contact
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-weguard-red transition-colors">
            Testimonials
          </Link>
        </nav>
        <Button asChild className="bg-weguard-red hover:bg-weguard-red/80 text-white hidden md:inline-flex">
          <Link href="#contact">Get a Free Quote</Link>
        </Button>
        {/* Mobile menu toggle would go here */}
      </motion.header>

      <main className="pt-16"> {/* Adjust padding for fixed header */}
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/images/hero-background.png"
            alt="Security Guard Patrolling"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-weguard-dark to-transparent z-10"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 max-w-4xl px-4 space-y-6"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
              WeGuard Private Security: <span className="text-weguard-red">Premium Security Solutions</span> in Los Angeles & Orange County
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
              Trusted | Professional | 24/7 Protection
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button asChild className="bg-weguard-red hover:bg-weguard-red/80 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link href="#contact">Get a Free Security Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Choose WeGuard? Section */}
        <section id="why-choose-us" className="py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
            >
              Why Choose <span className="text-weguard-red">WeGuard</span>?
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 hover:shadow-2xl transition-all duration-300">
                <ShieldCheck className="h-10 w-10 text-weguard-red mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Experienced, Vetted Security Guards</h3>
                <p className="text-gray-400">Our team consists of highly trained, licensed, and background-checked professionals, ensuring your safety and peace of mind.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 hover:shadow-2xl transition-all duration-300">
                <Clock className="h-10 w-10 text-weguard-red mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Customized Security Services</h3>
                <p className="text-gray-400">We offer tailored solutions for businesses, residential communities, events, construction sites, and VIP clients.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 hover:shadow-2xl transition-all duration-300">
                <Phone className="h-10 w-10 text-weguard-red mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Rapid Response, 24/7 Availability</h3>
                <p className="text-gray-400">Always on call—our security experts respond instantly to your needs, day or night.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 hover:shadow-2xl transition-all duration-300">
                <MapPin className="h-10 w-10 text-weguard-red mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Modern Technology & Surveillance</h3>
                <p className="text-gray-400">We integrate advanced technology, including mobile patrols, CCTV monitoring, and real-time reporting.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services We Offer Section */}
        <section id="services" className="py-16 md:py-24 bg-weguard-dark">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
            >
              Services We <span className="text-weguard-red">Offer</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                "Armed & Unarmed Security Guards",
                "Mobile Patrol & Alarm Response",
                "Event & Venue Security",
                "Construction Site Security",
                "Executive & Personal Protection",
                "Loss Prevention & Access Control",
              ].map((service, index) => (
                <motion.div variants={fadeIn} key={index} className="bg-gray-900 p-6 rounded-lg shadow-xl border border-weguard-red/30 flex items-start gap-4 hover:shadow-2xl transition-all duration-300">
                  <ShieldCheck className="h-6 w-6 text-weguard-red flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-white">{service}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
            >
              Our <span className="text-weguard-red">Promise</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 text-center hover:shadow-2xl transition-all duration-300">
                <ShieldCheck className="h-10 w-10 text-weguard-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive Risk Assessment</h3>
                <p className="text-gray-400">For every client, ensuring tailored and effective security plans.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 text-center hover:shadow-2xl transition-all duration-300">
                <Star className="h-10 w-10 text-weguard-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Transparent Pricing</h3>
                <p className="text-gray-400">No hidden fees, clear and upfront costs for all our services.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 text-center hover:shadow-2xl transition-all duration-300">
                <MapPin className="h-10 w-10 text-weguard-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Local Specialists</h3>
                <p className="text-gray-400">Fully insured and bonded, with deep knowledge of LA & OC areas.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 md:py-24 bg-weguard-dark">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="max-w-2xl mx-auto text-center space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Get a Free Security <span className="text-weguard-red">Consultation</span>
              </h2>
              <p className="text-lg text-gray-300">
                Ready to protect your assets, people, and property? Fill out the form below and our security experts will contact you within 10 minutes.
              </p>
            </motion.div>
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="mt-12 max-w-lg mx-auto space-y-6 bg-gray-900 p-8 rounded-lg shadow-2xl border border-weguard-red/50"
            >
              <motion.div variants={fadeIn}>
                <Input type="text" placeholder="Name" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-weguard-red" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-weguard-red" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Input type="tel" placeholder="Phone" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-weguard-red" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <Select>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-weguard-red">
                    <SelectValue placeholder="Type of Service Needed" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Select>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-weguard-red">
                    <SelectValue placeholder="Preferred Contact Time" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (6 PM - 9 PM)</SelectItem>
                    <SelectItem value="any">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Button type="submit" className="w-full bg-weguard-red hover:bg-weguard-red/80 text-white text-lg py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Get My Free Quote
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
            >
              What Our Clients <span className="text-weguard-red">Say</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <motion.div variants={slideInLeft} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 relative">
                <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-weguard-red opacity-20" />
                <p className="text-lg italic text-gray-300 mb-4 pt-4">
                  “WeGuard helped us secure our business premises after hours with total professionalism and visible presence.”
                </p>
                <p className="text-right font-semibold text-white">– Local Business Owner</p>
              </motion.div>
              <motion.div variants={slideInRight} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-weguard-red/30 relative">
                <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-weguard-red opacity-20" />
                <p className="text-lg italic text-gray-300 mb-4 pt-4">
                  “The guards were punctual, courteous, and made our guests feel safe at our event.”
                </p>
                <p className="text-right font-semibold text-white">– Event Organizer</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Serving All of Los Angeles & Orange County */}
        <section className="py-16 md:py-24 bg-weguard-dark">
          <div className="container px-4 md:px-6 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-white mb-8"
            >
              Serving All of Los Angeles & <span className="text-weguard-red">Orange County</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-gray-300"
            >
              <motion.p variants={fadeIn} className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-weguard-red" /> Fast dispatch throughout LA & OC
              </motion.p>
              <motion.p variants={fadeIn} className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-weguard-red" /> Flexible short and long-term contracts
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gray-900 text-center">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-white mb-8"
            >
              Speak With a Security <span className="text-weguard-red">Specialist Now!</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <motion.a
                variants={fadeIn}
                href="tel:123-456-7890" // Replace with actual phone number
                className="inline-flex items-center justify-center gap-3 bg-weguard-red hover:bg-weguard-red/80 text-white text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Phone className="h-6 w-6" /> Call Us 24/7: (123) 456-7890
              </motion.a>
              <motion.p variants={fadeIn} className="text-lg text-gray-300">
                Or chat live with a security advisor at the bottom right
                <MessageSquare className="inline-block h-5 w-5 ml-2 text-weguard-red" />
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-weguard-dark py-12 border-t border-weguard-red/50">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-weguard-red" />
            <span className="text-2xl font-bold text-white">WeGuard</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-sm">
            <Link href="#" className="hover:text-weguard-red transition-colors">Licenses & Certifications</Link>
            <Link href="#" className="hover:text-weguard-red transition-colors">Google Reviews</Link>
            <Link href="#" className="hover:text-weguard-red transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-weguard-red transition-colors">Terms of Service</Link>
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} WeGuard Private Security. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Simple Quote Icon component for testimonials
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c0-4.2 4-7 4-7V5c0-1.1 0.9-2 2-2h1c1.1 0 2 0.9 2 2v7c0 1.1-0.9 2-2 2H9c-1.1 0-2 0.9-2 2v3c0 1.1 0.9 2 2 2h1c1.1 0 2 0.9 2 2v0" />
      <path d="M15 21c0-4.2 4-7 4-7V5c0-1.1 0.9-2 2-2h1c1.1 0 2 0.9 2 2v7c0 1.1-0.9 2-2 2h-2c-1.1 0-2 0.9-2 2v3c0 1.1 0.9 2 2 2v0" />
    </svg>
  )
}
