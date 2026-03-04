import ContactDetails from '@/components/contact/ContactDetails'
import ContactForm from '@/components/contact/ContactForm'
import Hero from '@/components/general/Hero'
import { Space_Grotesk } from 'next/font/google'
import React from 'react'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Hero 
            title='Contact Me' 
            // subtitle='A showcase of my work and accomplishments.' 
            subtitle='Your requests and feedbacks are welcome!'
            action={[{"title": "About Me", "location": "/about"}, {"title": "My Blogs", "location": "/blogs"}]} 
            bgImage='hero-bg.jpg' 
        />
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
                <h3 className='font-semibold text-xs dark:text-white'>Blogs Snapshot</h3>
                <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-white`}>
                    Contact Us
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hover to view details and tech stack
                </p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
            <ContactDetails />
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactPage