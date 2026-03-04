import React from 'react';
import { PageTransition } from '../../utils/animations.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  Hero, 
  BuildWith3D,
  ContactForm,
  BuildSmarter 
} from './index';

const ContactUsPage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white overflow-x-hidden"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1'
      }}
    >
      <Navbar hideContactForm={true} />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Hero />
        <BuildWith3D />
        <ContactForm />
        <BuildSmarter />
      </div>
      
      <Footer hideContactForm={true} />
    </PageTransition>
  );
};

export default ContactUsPage;