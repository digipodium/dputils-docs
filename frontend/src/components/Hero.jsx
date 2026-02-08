import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section style={{
            padding: 'var(--spacing-2xl) 0',
            textAlign: 'center',
            position: 'relative'
        }} className="fade-in">
            <div className="container">
                {/* Floating decoration */}
                <div className="float" style={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    opacity: 0.2,
                    filter: 'blur(40px)',
                    zIndex: -1
                }} />

                <div className="float" style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '150px',
                    height: '150px',
                    background: 'var(--gradient-secondary)',
                    borderRadius: '50%',
                    opacity: 0.2,
                    filter: 'blur(50px)',
                    zIndex: -1,
                    animationDelay: '1s'
                }} />

                <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
                    Welcome to <span className="gradient-text">dputils</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '700px',
                    margin: '0 auto var(--spacing-xl)',
                    lineHeight: 1.8
                }}>
                    A powerful Python library for simplified <span className="gradient-text-accent">file handling</span> and
                    advanced <span className="gradient-text-secondary">web scraping</span>
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/getting-started" className="btn btn-primary">
                        Get Started →
                    </Link>
                    <a
                        href="https://github.com/digipodium/dputils"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        View on GitHub
                    </a>
                </div>

                {/* Quick Install */}
                <div className="glass-card" style={{
                    marginTop: 'var(--spacing-2xl)',
                    maxWidth: '600px',
                    margin: 'var(--spacing-2xl) auto 0',
                    textAlign: 'left'
                }}>
                    <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.5rem'
                    }}>
                        Quick Install
                    </p>
                    <code style={{
                        display: 'block',
                        padding: '1rem',
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '1rem',
                        color: 'var(--accent-light)',
                        fontFamily: 'monospace'
                    }}>
                        pip install dputils
                    </code>
                </div>
            </div>
        </section>
    );
};

export default Hero;
