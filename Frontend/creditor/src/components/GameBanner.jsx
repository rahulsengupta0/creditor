import React from 'react';

const GameBanner = () => {
  return (
    <section>
      {/* Game of the Month Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#0056b3', fontSize: '2rem', marginBottom: '10px' }}>
          <strong>
            <span style={{ color: 'rgb(0, 0, 0)' }}>Game of the Month:</span>{' '}
            <span style={{ color: 'rgb(35, 111, 161)' }}>Creditor Football</span>
          </strong>
        </h2>
        <p style={{ color: '#000000', fontSize: '1rem' }}>
          <span style={{ color: 'rgb(126, 140, 141)' }}>
            Play your way to private power with football-themed quizzes and XP boosts.
          </span>
        </p>
      </div>

      {/* Financial Football Promo Section */}
      <div
        style={{
          position: 'relative',
          background: `url('https://www.creditoracademy.com/files/8178604/new_game_hero.png?lmsauth=7720f2348a2dbb304996097a999993fc807fd090') center center / cover no-repeat`,
          padding: '100px 5%',
          fontFamily: 'Poppins, sans-serif',
          color: 'white',
          textAlign: 'left',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
        }}
      >
        {/* Dot Grid Left */}
        <div style={{ position: 'absolute', top: '40px', left: '30px', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 8px)', gap: '8px' }}>
            {[...Array(4)].map((_, idx) => (
              <div
                key={`left-dot-${idx}`}
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#a8b1c1',
                  borderRadius: '50%',
                }}
              />
            ))}
          </div>
        </div>

        {/* Dot Grid Right */}
        <div style={{ position: 'absolute', top: '40px', right: '20px', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 8px)', gap: '8px' }}>
            {[...Array(6)].map((_, idx) => (
              <div
                key={`right-dot-${idx}`}
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#00baff',
                  borderRadius: '50%',
                }}
              />
            ))}
          </div>
        </div>

        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to right, rgba(10,20,40,0.88), rgba(10,20,40,0.65), rgba(10,20,40,0.3))',
            zIndex: 1,
          }}
        ></div>

        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
          <h4
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '1px',
              color: '#ffffff',
              marginBottom: '15px',
            }}
          >
            CREDITOR
            <br />
            FOOTBALL
          </h4>

          <h2
            style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              lineHeight: '1.1',
              marginBottom: '25px',
            }}
          >
            <span style={{ color: '#00baff' }}>PLAY.</span>
            <br />
            <span style={{ color: '#ffffff' }}>LEARN.</span>
            <br />
            <span style={{ color: '#00baff' }}>POWER UP.</span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '40px',
            }}
          >
            <span style={{ color: 'rgb(255, 255, 255)' }}>
              Master private concepts through the excitement of football. Build your private
              literacy while having fun in this immersive learning experience.
            </span>
          </p>

          {/* Play Button with SVG */}
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(to right, #00baff, #007bff)',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
            }}
          >
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </a>
        </div>
      </div>

      {/* Feature Section */}
      <section
        style={{
          padding: '20px 6%',
          background: 'linear-gradient(to bottom right, #eef5ff, #ffffff)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {/* Feature Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {[
            '2D Interactive Field',
            'Football + Law Quizzes',
            'XP System & Leaderboard',
            'Sound & Effects',
            'Solo or Multiplayer',
            'Monthly Updates',
          ].map((text, idx) => (
            <div
              key={idx}
              style={{
                padding: '10px 18px',
                background: '#dbeeff',
                color: '#0056b3',
                borderRadius: '25px',
                fontSize: '0.95rem',
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default GameBanner;
