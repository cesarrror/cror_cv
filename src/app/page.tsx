import { Navbar } from '@/components/layout/Navbar'

export default function Home() {
  return (
      <>
        <Navbar />

        <main style={{ paddingTop: 'var(--navbar-height)' }}>
          {/* Secciones placeholder — se irán reemplazando una a una */}
          <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Hero section — próximamente
            </p>
          </section>

          <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              About section — próximamente
            </p>
          </section>

          <section id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Projects section — próximamente
            </p>
          </section>

          <section id="contact" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Contact section — próximamente
            </p>
          </section>
        </main>
      </>
  )
}