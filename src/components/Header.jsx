import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/files', label: 'Files' },
        { path: '/scraping', label: 'Scraping' },
        { path: '/getting-started', label: 'Getting Started' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)'
        }}>
            <nav className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem var(--spacing-md)'
            }}>
                {/* Logo */}
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span className="gradient-text">dputils</span>
                </Link>

                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                color: isActive(link.path) ? 'var(--primary-light)' : 'var(--text-secondary)',
                                fontWeight: isActive(link.path) ? 600 : 400,
                                transition: 'color var(--transition-fast)',
                                fontSize: '0.95rem',
                                position: 'relative',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-light)'}
                            onMouseLeave={(e) => {
                                if (!isActive(link.path)) e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            {link.label}
                            {isActive(link.path) && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-0.5rem',
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'var(--gradient-primary)',
                                    borderRadius: '2px'
                                }} />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="mobile-nav" style={{
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(10px)',
                    borderTop: '1px solid var(--border)',
                    padding: '1rem',
                    display: 'none'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                display: 'block',
                                padding: '0.75rem 1rem',
                                color: isActive(link.path) ? 'var(--primary-light)' : 'var(--text-secondary)',
                                fontWeight: isActive(link.path) ? 600 : 400,
                                borderRadius: 'var(--radius-sm)',
                                background: isActive(link.path) ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                marginBottom: '0.5rem',
                                textDecoration: 'none'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
