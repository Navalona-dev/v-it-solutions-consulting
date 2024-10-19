"use client";
import { useEffect } from 'react';
import "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/style.css';

import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

import Header from "@/partials/header";
import Hero from "@/pages/hero";
import Customer from "@/pages/customer";
import About from "@/pages/about";
import Why from '@/pages/why-us';
import Skill from '@/pages/skill';
import Service from '@/pages/service';
import Cta from '@/pages/cta';
import Portfolio from '@/pages/portfolio';
import Team from '@/pages/team';
import Faq from '@/pages/faq';
import Contact from '@/pages/contact';
import Footer from '@/partials/footer';

export default function Home() {
  useEffect(() => {
    AOS.init(); // Initialiser AOS

    // Gestion du préchargeur
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    // Gestion du bouton "Retour en haut"
    const backtotop = document.querySelector('.back-to-top');

    const toggleBacktotop = () => {
      if (backtotop) {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }
    };

    if (backtotop) {
      window.addEventListener('load', toggleBacktotop);
      window.addEventListener('scroll', toggleBacktotop);
    }

    // Nettoyage des écouteurs d'événements lors du démontage
    return () => {
      window.removeEventListener('scroll', toggleBacktotop);
    };
  }, []);

  return (
    <div className="">
      <Header />
      <main className="">
        <Hero />
        <Customer />
        <About />
        <Why />
        <Skill />
        <Service />
        <Cta />
        <Portfolio />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />

      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}
