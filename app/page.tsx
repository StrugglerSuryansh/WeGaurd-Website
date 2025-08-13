"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, ShieldCheck, Clock, MapPin, Star, MessageSquare } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

// Animation helpers
const makeFadeIn = (dm = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: dm } },
})

const slideIn = (dir: "left" | "right", dm = 0.6) => ({
  hidden: { opacity: 0, x: dir === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: dm } },
})

const stagger = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

//yaha pe maine form ka connection banaya hai bro
export default function LandingPage() {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    contactTime: ""
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwYjwZt3Aw4EHv7zw_ytQHZN0q2EVE8iX4PrfaUjdGbHxGK5i8fjL4DrN2UcGlNWA3e/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        contactTime: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  // Scroll-based parallax for hero
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 400], [0, 80])
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.0, 0.25])

  const fadeIn = useMemo(() => makeFadeIn(shouldReduceMotion ? 0 : 0.6), [shouldReduceMotion])
  const slideInLeft = useMemo(() => slideIn("left", shouldReduceMotion ? 0 : 0.6), [shouldReduceMotion])
  const slideInRight = useMemo(() => slideIn("right", shouldReduceMotion ? 0 : 0.6), [shouldReduceMotion])

  return (
    <div className="min-h-screen bg-weguard-dark text-white font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.5 } }}
        className="px-4 lg:px-6 h-16 flex items-center justify-between fixed w-full z-50 bg-weguard-dark/80 backdrop-blur-md border-b border-weguard-red/60"
        role="banner"
        aria-label="Main header"
      >
        <Link href="#top" className="flex items-center gap-2" aria-label="WeGuard Home">
          {/* <ShieldCheck className="h-8 w-8 text-weguard-red" />
          <span className="text-2xl font-bold text-white">WeGuard</span> */}
          <img src="logo.svg" alt="" height={200} width={200} />
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Primary">
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
          <Link href="#contact" aria-label="Get a Free Quote">
            Get a Free Quote
          </Link>
        </Button>
      </motion.header>

      <main id="top" className="pt-16">
        {/* Hero */}
        <section className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
          {/* Parallax background image */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : yParallax }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="securityGuard.jpg"
              alt="Professional security presence with cityscape at night"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </motion.div>

          {/* Radial vignette and subtle overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,0,0,0.12),transparent_60%)] pointer-events-none" />
          <motion.div
            style={{ opacity: shouldReduceMotion ? 0.2 : overlayOpacity }}
            className="absolute inset-0 bg-black/40 pointer-events-none"
            aria-hidden="true"
          />

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg max-w-5xl"
            >
              WeGuard Private Security: <span className="text-weguard-red">Premium Security Solutions</span> in Los
              Angeles & Orange County
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
              Trusted | Professional | 24/7 Protection
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8">
              <Button
                asChild
                className="bg-weguard-red hover:bg-weguard-red/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] red-glow"
              >
                <Link href="#contact" aria-label="Get a Free Security Consultation">
                  Get a Free Security Consultation
                </Link>
              </Button>
            </motion.div>

            {/* Decorative floating shield */}
            <motion.div
              className="mt-12 hidden md:flex items-center gap-3 text-gray-300/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <ShieldCheck className="h-6 w-6 text-weguard-red animate-float-slow" aria-hidden="true" />
              <span className="text-sm tracking-wide">Visible presence. Immediate response. Elite standards.</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Choose WeGuard */}
        <section id="why-choose-us" className="section py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12"
            >
              Why Choose <span className="text-weguard-red">WeGuard</span>?
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {[
                {
                  icon: <ShieldCheck className="h-10 w-10 text-weguard-red" />,
                  title: "Experienced, Vetted Security Guards",
                  desc: "Highly trained, licensed, and background-checked professionals for your peace of mind.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-weguard-red" />,
                  title: "Customized Security Services",
                  desc: "Tailored solutions for businesses, residences, events, construction sites, and VIPs.",
                },
                {
                  icon: <Phone className="h-10 w-10 text-weguard-red" />,
                  title: "Rapid Response, 24/7 Availability",
                  desc: "On call day and night—instant response when you need it most.",
                },
                {
                  icon: <MapPin className="h-10 w-10 text-weguard-red" />,
                  title: "Modern Technology & Surveillance",
                  desc: "Mobile patrols, CCTV monitoring, and real-time reporting integrated into your plan.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="glass-card rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 will-change-transform"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section py-16 md:py-24 bg-weguard-dark relative">
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(229,0,0,0.08),transparent_60%)]"
            aria-hidden="true"
          />
          <div className="container px-4 md:px-6 relative">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12"
            >
              Services We <span className="text-weguard-red">Offer</span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                "Armed & Unarmed Security Guards",
                "Mobile Patrol & Alarm Response",
                "Event & Venue Security",
                "Construction Site Security",
                "Executive & Personal Protection",
                "Loss Prevention & Access Control",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  variants={fadeIn}
                  className="rounded-lg p-6 bg-gray-900/70 border border-weguard-red/20 shadow-xl hover:shadow-2xl hover:border-weguard-red/40 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 will-change-transform"
                >
                  <ShieldCheck className="h-6 w-6 text-weguard-red flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-lg font-medium">{service}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="section py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12"
            >
              Our <span className="text-weguard-red">Promise</span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              <motion.div
                variants={fadeIn}
                className="glass-card rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 will-change-transform"
              >
                <ShieldCheck className="h-10 w-10 text-weguard-red mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Risk Assessment</h3>
                <p className="text-gray-400">Every client receives a tailored and effective security plan.</p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="glass-card rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 will-change-transform"
              >
                <Star className="h-10 w-10 text-weguard-red mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-400">Clear, upfront costs with no hidden fees.</p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="glass-card rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 will-change-transform"
              >
                <MapPin className="h-10 w-10 text-weguard-red mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">Local Specialists</h3>
                <p className="text-gray-400">Fully insured and bonded, experts across LA &amp; OC.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section py-16 md:py-24 bg-weguard-dark">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeIn}
              className="max-w-2xl mx-auto text-center space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Get a Free Security <span className="text-weguard-red">Consultation</span>
              </h2>
              <p className="text-lg text-gray-300">
                Ready to protect your assets, people, and property? Fill out the form and our experts will contact you
                within 10 minutes.
              </p>
            </motion.div>


            {/* yaha pe maine google form attach kiya hua hai */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 max-w-lg mx-auto space-y-6 bg-gray-900/80 border border-weguard-red/30 rounded-lg p-8 shadow-2xl"
              onSubmit={handleSubmit}
              aria-label="Get My Free Quote"
            >
              <motion.div className="text-left">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-weguard-red"
                />
              </motion.div>

              <motion.div className="text-left">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-weguard-red"
                />
              </motion.div>

              <motion.div className="text-left">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-weguard-red"
                />
              </motion.div>

              <motion.div>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                >
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-weguard-red">
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

              <motion.div>
                <Select
                  value={formData.contactTime}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, contactTime: value }))}
                >
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-weguard-red">
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

              <motion.div>
                <Button
                  type="submit"
                  className="w-full bg-weguard-red hover:bg-weguard-red/90 text-white text-lg py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] red-glow"
                  onClick={(e) => {
                    e.preventDefault();
                    // Form submission logic here
                    window.location.href = "/thank-you";
                  }}
                >
                  Get My Free Quote
                </Button>
              </motion.div>

            </motion.form>

          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="section py-16 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold text-center mb-12"
            >
              What Our Clients <span className="text-weguard-red">Say</span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              <motion.blockquote variants={slideInLeft} className="glass-card relative rounded-lg p-6">
                <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-weguard-red opacity-20" aria-hidden="true" />
                <p className="text-lg italic text-gray-300 mb-4 pt-4">
                  {
                    "“WeGuard helped us secure our business premises after hours with total professionalism and visible presence.”"
                  }
                </p>
                <footer className="text-right font-semibold">– Local Business Owner</footer>
              </motion.blockquote>

              <motion.blockquote variants={slideInRight} className="glass-card relative rounded-lg p-6">
                <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-weguard-red opacity-20" aria-hidden="true" />
                <p className="text-lg italic text-gray-300 mb-4 pt-4">
                  {"“The guards were punctual, courteous, and made our guests feel safe at our event.”"}
                </p>
                <footer className="text-right font-semibold">– Event Organizer</footer>
              </motion.blockquote>
            </motion.div>
          </div>
        </section>

        {/* Coverage */}
        <section className="section py-16 md:py-24 bg-weguard-dark text-center">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              Serving All of Los Angeles &amp; <span className="text-weguard-red">Orange County</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-gray-300"
            >
              <motion.p variants={fadeIn} className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-weguard-red" aria-hidden="true" /> Fast dispatch throughout LA &amp; OC
              </motion.p>
              <motion.p variants={fadeIn} className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-weguard-red" aria-hidden="true" /> Flexible short and long-term contracts
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section py-16 md:py-24 bg-gray-900 text-center">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              Speak With a Security <span className="text-weguard-red">Specialist Now!</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <motion.a
                variants={fadeIn}
                href="tel:123-456-7890"
                className="flex flex-col items-center justify-center gap-3  bg-weguard-red hover:bg-weguard-red/90 text-white text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] red-glow"
              >
                Call Us 24/7: (123) 456-7890
              </motion.a>
              <motion.p variants={fadeIn} className="text-lg text-gray-300">
                Or chat live with a security advisor at the bottom right
                <MessageSquare className="inline-block h-5 w-5 ml-2 text-weguard-red" aria-hidden="true" />
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-weguard-dark py-12 border-t border-weguard-red/40">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {/* <ShieldCheck className="h-8 w-8 text-weguard-red" aria-hidden="true" /> */}
            <span className="text-2xl font-bold"></span>
            <img src="logo.svg" alt="" height={400} width={200} />
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-sm">
            <Link href="#" className="hover:text-weguard-red transition-colors">
              Licenses &amp; Certifications
            </Link>
            <Link href="#" className="hover:text-weguard-red transition-colors">
              Google Reviews
            </Link>
            <Link href="#" className="hover:text-weguard-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-weguard-red transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} WeGuard Private Security. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

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
      aria-hidden="true"
    >
      <path d="M3 21c0-4.2 4-7 4-7V5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H9c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c1.1 0 2 .9 2 2" />
      <path d="M15 21c0-4.2 4-7 4-7V5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2" />
    </svg>
  )
}
