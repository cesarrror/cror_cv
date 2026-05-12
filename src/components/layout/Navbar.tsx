'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contacts', href: '#contact' },
] as const

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('Home')
    const [menuOpen, setMenuOpen] = useState(false)

    // Scroll shadow effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Scroll spy
    useEffect(() => {
        const sections = NAV_LINKS.map(l => ({
            id: l.href.replace('#', ''),
            label: l.label,
        }))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const found = sections.find(s => s.id === entry.target.id)
                        if (found) setActive(found.label)
                    }
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )

        sections.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    // Cerrar menú en resize
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const handleNavClick = (label: string) => {
        setActive(label)
        setMenuOpen(false)
    }

    return (
        <>
            <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="container navbar__inner">
                    {/* Logo */}
                    <a href="#home" className="navbar__logo" onClick={() => handleNavClick('Home')}>
                        César Ortiz
                    </a>

                    {/* Desktop nav */}
                    <nav className="navbar__nav" aria-label="Navegación principal">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`navbar__link ${active === link.label ? 'navbar__link--active' : ''}`}
                                onClick={() => handleNavClick(link.label)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="navbar__actions">
                        <ThemeToggle />

                        {/* Hamburger */}
                        <button
                            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Abrir menú"
                            aria-expanded={menuOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <div
                className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className="mobile-menu__nav">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`mobile-menu__link ${active === link.label ? 'mobile-menu__link--active' : ''}`}
                            onClick={() => handleNavClick(link.label)}
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            <style jsx>{`
        /* ── Navbar base ─────────────────────────── */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: var(--navbar-height);
          background-color: var(--bg-navbar);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .navbar--scrolled {
          border-bottom-color: var(--border);
          box-shadow: 0 1px 24px rgba(0, 0, 0, 0.08);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 24px;
        }

        /* ── Logo ────────────────────────────────── */
        .navbar__logo {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent);
          text-decoration: none;
          letter-spacing: -0.02em;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }

        .navbar__logo:hover {
          opacity: 0.8;
        }

        /* ── Desktop nav ─────────────────────────── */
        .navbar__nav {
          display: none;
          align-items: center;
          gap: 4px;
        }

        @media (min-width: 768px) {
          .navbar__nav {
            display: flex;
          }
        }

        .navbar__link {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: 99px;
          transition: color 0.2s ease, background-color 0.2s ease;
        }

        .navbar__link:hover {
          color: var(--text-primary);
          background-color: var(--accent-subtle);
        }

        .navbar__link--active {
          color: #ffffff;
          background-color: var(--accent);
          font-weight: 500;
        }

        .navbar__link--active:hover {
          background-color: var(--accent-hover);
          color: #ffffff;
        }

        /* ── Actions ─────────────────────────────── */
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* ── Hamburger ───────────────────────────── */
        .navbar__hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .navbar__hamburger:hover {
          background-color: var(--accent-subtle);
        }

        .navbar__hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }

        .navbar__hamburger--open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__hamburger--open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar__hamburger--open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        @media (min-width: 768px) {
          .navbar__hamburger {
            display: none;
          }
        }

        /* ── Mobile menu ─────────────────────────── */
        .mobile-menu {
          position: fixed;
          top: var(--navbar-height);
          left: 0;
          right: 0;
          z-index: 99;
          background-color: var(--bg-navbar);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 16px 0;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .mobile-menu--open {
          pointer-events: auto;
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-menu__nav {
          display: flex;
          flex-direction: column;
          padding: 0 24px;
          gap: 4px;
        }

        .mobile-menu__link {
          display: block;
          padding: 12px 16px;
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.2s ease, background-color 0.2s ease;
          opacity: 0;
          animation: none;
        }

        .mobile-menu--open .mobile-menu__link {
          animation: slideIn 0.3s ease forwards;
        }

        .mobile-menu__link:hover {
          color: var(--text-primary);
          background-color: var(--accent-subtle);
        }

        .mobile-menu__link--active {
          color: var(--accent);
          font-weight: 600;
          background-color: var(--accent-subtle);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
        </>
    )
}