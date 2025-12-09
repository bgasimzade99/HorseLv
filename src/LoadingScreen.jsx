import { useState, useEffect } from 'react'
import './LoadingScreen.css'
import logoEmblem from './assets/bgfree.jpg'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState('initial') // initial -> smoke -> logo -> text -> complete
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Phase 1: Initial smoke (immediate)
    setPhase('smoke')

    // Phase 2: Logo emerges from smoke (0.8s)
    const timer1 = setTimeout(() => {
      setPhase('logo')
    }, 800)

    // Phase 3: Logo text appears (2.2s)
    const timer2 = setTimeout(() => {
      setPhase('text')
    }, 2200)

    // Phase 4: Welcome text appears (3.5s)
    const timer3 = setTimeout(() => {
      setPhase('welcome')
    }, 3500)

    // Phase 5: Fade out and complete (5.5s total)
    const timer4 = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onLoadingComplete()
      }, 900)
    }, 5500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onLoadingComplete])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Smoke particles - elegant background */}
      <div className="loading-smoke-container">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="smoke-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Logo - centered with coin spin, emerges from smoke */}
      <div className={`loading-logo-wrapper ${phase !== 'initial' ? 'active' : ''}`}>
        <div className={`loading-logo-container ${phase === 'logo' || phase === 'text' || phase === 'welcome' ? 'logo-emerge' : ''} ${phase === 'text' || phase === 'welcome' ? 'logo-spinning' : ''}`}>
          <div className="loading-logo-badge">
            <img
              className="loading-logo-emblem"
              src={logoEmblem}
              alt="Asnates JSK Emblem"
              loading="eager"
              decoding="sync"
            />
          </div>
          
          {/* Logo title */}
          <div className={`loading-logo-title ${phase === 'text' || phase === 'welcome' ? 'visible' : ''}`}>
            ASNATES JSK
          </div>
        </div>
      </div>

      {/* Subtitle text */}
      <div className={`loading-subtitle-container ${phase === 'welcome' ? 'visible' : ''}`}>
        <div className="loading-subtitle-text">
          Šeit sākas ceļš uz draudzība ar zirgiem
        </div>
      </div>

      {/* Loading bar */}
      <div className="loading-progress-container">
        <div className="loading-progress-track">
          <div 
            className={`loading-progress-bar ${phase !== 'initial' ? 'active' : ''}`}
          />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

