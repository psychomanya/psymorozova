import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methods from './components/Methods';
import About from './components/About';
import Diplomas from './components/Diplomas';
import Tests from './components/Tests';
import TelegramBlog from './components/TelegramBlog';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col bg-[#fafaf9] text-slate-900 antialiased font-sans">
      <Header onOpenBooking={() => setBookingModalOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />
        <Services onOpenBooking={() => setBookingModalOpen(true)} />
        <Methods onOpenBooking={() => setBookingModalOpen(true)} />
        <About onOpenBooking={() => setBookingModalOpen(true)} />
        <Diplomas />
        <Tests />
        <TelegramBlog />
        <Pricing />
        <FAQ />
      </main>

      <Footer onOpenBooking={() => setBookingModalOpen(true)} />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
