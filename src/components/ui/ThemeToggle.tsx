'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Evita hydration mismatch
    useEffect(() => setMounted(true), [])
    if (!mounted) return <div className="theme-toggle-placeholder" />

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="theme-toggle"
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
        >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {isDark ? (
              /* Moon icon */
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
          ) : (
              /* Sun icon */
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
          )}
        </span>
      </span>

            <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 99px;
          color: var(--text-secondary);
        }

        .theme-toggle:hover {
          color: var(--text-primary);
        }

        .theme-toggle__track {
          position: relative;
          display: flex;
          align-items: center;
          width: 44px;
          height: 24px;
          background-color: var(--bg-card);
          border: 1.5px solid var(--border-strong);
          border-radius: 99px;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .theme-toggle:hover .theme-toggle__track {
          border-color: var(--accent);
        }

        .theme-toggle__thumb {
          position: absolute;
          left: ${isDark ? 'calc(100% - 22px)' : '2px'};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background-color: var(--accent);
          border-radius: 50%;
          color: #ffffff;
          transition: left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .theme-toggle-placeholder {
          width: 52px;
          height: 32px;
        }
      `}</style>
        </button>
    )
}