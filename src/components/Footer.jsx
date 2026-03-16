const Footer = () => {
    return (
        <footer style={{
            marginTop: 'auto',
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid var(--border)',
            padding: 'var(--spacing-xl) 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                textAlign: 'center'
            }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    <span className="gradient-text">dputils</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                    A powerful Python library for file handling and web scraping
                </p>
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginTop: '0.5rem'
                }}>
                    <a
                        href="https://github.com/digipodium/dputils"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-muted)',
                            transition: 'color var(--transition-fast)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-light)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://pypi.org/project/dputils/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-muted)',
                            transition: 'color var(--transition-fast)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-light)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                        PyPI
                    </a>
                    <a
                        href="https://github.com/digipodium"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-muted)',
                            transition: 'color var(--transition-fast)',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-light)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                        Digipodium
                    </a>
                </div>
                <div style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                    width: '100%',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem'
                }}>
                    © {new Date().getFullYear()} <a
                        href="https://github.com/digipodium"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--primary-light)',
                            textDecoration: 'none',
                            fontWeight: 600
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >Digipodium</a>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
