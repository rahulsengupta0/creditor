import React, { useEffect } from 'react';
import img1 from '../assets/car.jpg';
import img2 from '../assets/couple.png';
import img3 from '../assets/man.png';
import img4 from '../assets/yatch.png';
import website from '../assets/Website_banner_2(2).jpg';
import privateMerchant from '../assets/merchant (1).jpg';
import GameBanner from '../components/GameBanner.jsx';
import AboutSection from "../components/AboutSection";
import MasterclassBanner from '../components/MasterclassBanner';
import CoursesSection from '../components/CoursesSection';
import StatsSection from '../components/StatsSection';

const LandingPage = () => {
  useEffect(() => {
    const carousel = document.getElementById('hero-carousel');
    let idx = 0;
    const total = 4;
    const interval = setInterval(() => {
      idx = (idx + 1) % total;
      carousel.style.transform = `translateX(-${(idx * 100) / total}%)`;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sliderImages = [img1, img2, img3, img4];

  return (
    <>
      {/* Image Slider Only */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '90vh',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div
          id="hero-carousel"
          style={{
            display: 'flex',
            width: `${sliderImages.length * 100}%`,
            height: '100%',
            transition: 'transform 1s ease',
          }}
        >
          {sliderImages.map((bg, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${100 / sliderImages.length}%`,
                background: `url(${bg}) center/cover no-repeat`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <AboutSection />
    <MasterclassBanner />
     <CoursesSection />
      {/* Gamified Sovereignty Academy Section */}
      <section
        style={{
          padding: '80px 6%',
          background: 'linear-gradient(to bottom right, #eef5ff, #ffffff)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              color: '#0056b3',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            <span style={{ color: 'rgb(35, 111, 161)' }}>
              The First-Ever Gamified Sovereignty Academy
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#000',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            No more boring slideshows — just real simulation games, XP, documents, badges, and fun learning through action!
          </p>
        </div>

        {/* Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
          }}
        >
          {[...Array(3)].map((_, index) => {
            const content = [
              {
                title: 'Real Simulation Games',
                desc: 'Experience learning by playing with engaging, real-world legal scenarios.',
                iconPath: 'M21.94 13.06a5.69 5.69...',
              },
              {
                title: 'Earn XP & Unlock Badges',
                desc: 'Answer questions to unlock badges, contracts, docs & exclusive templates.',
                iconPath: 'M19 3H5a2 2 0...',
              },
              {
                title: 'Interactive Experience',
                desc: 'Engage with sound, effects, leaderboards, and multiplayer challenges.',
                iconPath: 'M12 3v18c-4.97...',
              },
            ][index];
            return (
              <div
                key={index}
                style={{
                  background: '#fff',
                  padding: '25px',
                  borderRadius: '14px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ marginBottom: '15px' }}>
                  <svg width="40" height="40" fill="#0056b3" viewBox="0 0 24 24">
                    <path d={content.iconPath} />
                  </svg>
                </div>
                <h3 style={{ color: '#0056b3', fontSize: '1.2rem', marginBottom: '10px' }}>{content.title}</h3>
                <p style={{ color: '#000', fontSize: '0.95rem' }}>{content.desc}</p>
              </div>
            );
          })}
        </div>
        <GameBanner />

        {/* Merged Remedy Section */}
        <section style={{ width: '100%', margin: 0, padding: 0, background: 'white', fontFamily: 'Poppins, sans-serif', boxSizing: 'border-box' }}>
          <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: 0, boxSizing: 'border-box' }}>
            <div style={{ width: '100%', margin: '0 auto' }}>
              <img src="https://creditoracademy.com/wp-content/uploads/2025/05/i-want-remedy-now-.png" alt="Book a demo" style={{ width: '100%', height: 'auto', display: 'block', border: 'none' }} />
            </div>
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                Book a session by clicking on the button
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => window.location.href = 'https://www.creditoracademy.com/page/show/153492?portal_id=14800'}
                  style={{
                    padding: '15px 25px',
                    fontSize: '16px',
                    color: 'white',
                    backgroundColor: '#5dade2',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)' }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)' }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
      <section style={{ padding: '60px 5%', background: '#f5f5f5', fontFamily: 'Poppins, sans-serif', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', boxSizing: 'border-box' }}>

          {/* Website Creation Card */}
          <div
            style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)' }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)' }}
          >
            <div>
              <img src={website} alt="Website Creation Banner" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Website Creation</h2>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
                Create sleek, responsive and stunning professional websites effortlessly—no coding needed. Empower your brand with a website that speaks volumes.!
              </p>
              <button
                onClick={() => window.location.href = 'https://www.creditoracademy.com/page/show/153520?portal_id=14800'}
                style={{ padding: '12px 24px', background: '#5DADE2', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)' }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)' }}
              >
                Explore Now
              </button>
            </div>
          </div>

          {/* Live Class Card */}
          <div
            style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)' }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)' }}
          >
            <div style={{ position: 'relative' }}>
              <img src="https://creditoracademy.com/wp-content/uploads/2025/04/Youtube-live-banner.png" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" style={{ width: '40px', height: 'auto' }} />
              </div>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Live Class</h2>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
                Join our interactive live classes every Tuesday & Thursday. Enjoy insights, Q&A and Live sessions featuring deep insights, and hands-on learning.!
              </p>
              <button
                onClick={() => window.location.href = 'https://www.creditoracademy.com/page/show/152536?portal_id=14800'}
                style={{ padding: '12px 24px', background: '#ff0000', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)' }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)' }}
              >
                Go to Live Class
              </button>
            </div>
          </div>

          {/* Private Merchant Processing Card */}
<div
  style={{
    flex: '1 1 300px',
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'scale(1.02)';
    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
  }}
>
  <div>
    <img
      src={privateMerchant}
      alt="Private Merchant Processing Banner"
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
    />
  </div>
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Private Merchant Processing</h2>
    <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
      Discover tailored payment solutions designed to empower your business with customized, seamless payment solutions.
    </p>
    <button
      onClick={() =>
        (window.location.href =
          'https://www.creditoracademy.com/page/show/152537?portal_id=14800')
      }
      style={{
        padding: '12px 24px',
        background: '#5DADE2',
        color: '#fff',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
      }}
    >
      Learn More
    </button>
  </div>
</div>

        </div>
      </section>
      </section>
           <StatsSection />
    </>
  );
};

export default LandingPage;
