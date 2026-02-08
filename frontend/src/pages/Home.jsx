import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* About Section */}
            <section style={{
                padding: 'var(--spacing-xl) 0',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                borderBottom: '1px solid var(--border)'
            }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem'
                    }}>
                        Open Source Python Library
                    </p>
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1rem'
                    }}>
                        Created by <a
                            href="https://github.com/digipodium"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-text"
                            style={{
                                textDecoration: 'none',
                                fontWeight: 700
                            }}
                            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                        >Digipodium</a>
                    </h3>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 'var(--spacing-md)'
                    }}>
                        <a
                            href="https://github.com/digipodium/dputils"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--primary-light)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            ⭐ Star on GitHub
                        </a>
                        <a
                            href="https://pypi.org/project/dputils/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(236, 72, 153, 0.1)',
                                border: '1px solid rgba(236, 72, 153, 0.3)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--secondary-light)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            📦 View on PyPI
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }} className="fade-in">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        Powerful Features
                    </h2>

                    <div className="grid grid-2">
                        <FeatureCard
                            icon="📁"
                            title="File Handling"
                            description="Read and write files of any format including PDF, DOCX, TXT, and more with a simple unified API."
                            link="/files"
                        />
                        <FeatureCard
                            icon="🌐"
                            title="Web Scraping"
                            description="Extract data from websites with ease using our powerful Scraper class and Tag system."
                            link="/scraping"
                        />
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        dputils vs <span className="gradient-text-accent">Traditional Methods</span>
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto var(--spacing-xl)',
                        fontSize: '1.1rem'
                    }}>
                        See how dputils simplifies your code
                    </p>

                    {/* File Handling Comparison */}
                    <div className="glass-card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-md)' }}>📁 File Handling</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: 'var(--spacing-lg)',
                            marginTop: 'var(--spacing-md)'
                        }}>
                            {/* Traditional Method */}
                            <div>
                                <div style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: 'var(--spacing-sm)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'rgba(248, 113, 113, 1)'
                                }}>
                                    ❌ Traditional Python
                                </div>
                                <code style={{
                                    display: 'block',
                                    padding: '1.5rem',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}># Reading a PDF file</span><br />
                                    <span style={{ color: 'var(--text-muted)' }}>import</span> PyPDF2<br />
                                    <br />
                                    <span style={{ color: 'var(--text-muted)' }}>with</span> open(<span style={{ color: 'var(--secondary-light)' }}>'file.pdf'</span>, <span style={{ color: 'var(--secondary-light)' }}>'rb'</span>) <span style={{ color: 'var(--text-muted)' }}>as</span> f:<br />
                                    &nbsp;&nbsp;reader = PyPDF2.PdfReader(f)<br />
                                    &nbsp;&nbsp;text = <span style={{ color: 'var(--secondary-light)' }}>''</span><br />
                                    &nbsp;&nbsp;<span style={{ color: 'var(--text-muted)' }}>for</span> page <span style={{ color: 'var(--text-muted)' }}>in</span> reader.pages:<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;text += page.extract_text()<br />
                                    <br />
                                    <span style={{ color: 'var(--text-muted)' }}># Reading a DOCX file</span><br />
                                    <span style={{ color: 'var(--text-muted)' }}>import</span> docx<br />
                                    <br />
                                    doc = docx.Document(<span style={{ color: 'var(--secondary-light)' }}>'file.docx'</span>)<br />
                                    text = <span style={{ color: 'var(--secondary-light)' }}>''</span><br />
                                    <span style={{ color: 'var(--text-muted)' }}>for</span> para <span style={{ color: 'var(--text-muted)' }}>in</span> doc.paragraphs:<br />
                                    &nbsp;&nbsp;text += para.text
                                </code>
                                <p style={{
                                    marginTop: 'var(--spacing-sm)',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    fontStyle: 'italic'
                                }}>
                                    📊 15+ lines • Multiple libraries • Format-specific code
                                </p>
                            </div>

                            {/* dputils Method */}
                            <div>
                                <div style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: 'var(--spacing-sm)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'rgba(74, 222, 128, 1)'
                                }}>
                                    ✅ With dputils
                                </div>
                                <code style={{
                                    display: 'block',
                                    padding: '1.5rem',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-primary)'
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>from</span> dputils.files <span style={{ color: 'var(--text-muted)' }}>import</span> get_data<br />
                                    <br />
                                    <span style={{ color: 'var(--text-muted)' }}># Works with any format!</span><br />
                                    text = get_data(<span style={{ color: 'var(--secondary-light)' }}>'file.pdf'</span>)<br />
                                    <span style={{ color: 'var(--text-muted)' }}># or</span><br />
                                    text = get_data(<span style={{ color: 'var(--secondary-light)' }}>'file.docx'</span>)
                                </code>
                                <p style={{
                                    marginTop: 'var(--spacing-sm)',
                                    fontSize: '0.85rem',
                                    color: 'var(--primary-light)',
                                    fontWeight: 600
                                }}>
                                    ⚡ 3 lines • One library • Universal API
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Web Scraping Comparison */}
                    <div className="glass-card">
                        <h3 style={{ marginBottom: 'var(--spacing-md)' }}>🌐 Web Scraping</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: 'var(--spacing-lg)',
                            marginTop: 'var(--spacing-md)'
                        }}>
                            {/* Traditional Method */}
                            <div>
                                <div style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: 'var(--spacing-sm)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'rgba(248, 113, 113, 1)'
                                }}>
                                    ❌ Traditional Python
                                </div>
                                <code style={{
                                    display: 'block',
                                    padding: '1.5rem',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>import</span> requests<br />
                                    <span style={{ color: 'var(--text-muted)' }}>from</span> bs4 <span style={{ color: 'var(--text-muted)' }}>import</span> BeautifulSoup<br />
                                    <br />
                                    url = <span style={{ color: 'var(--secondary-light)' }}>'https://example.com'</span><br />
                                    response = requests.get(url)<br />
                                    soup = BeautifulSoup(response.content, <span style={{ color: 'var(--secondary-light)' }}>'html.parser'</span>)<br />
                                    <br />
                                    title = soup.find(<span style={{ color: 'var(--secondary-light)' }}>'h1'</span>).text.strip()<br />
                                    price = soup.find(<span style={{ color: 'var(--secondary-light)' }}>'span'</span>, class_=<span style={{ color: 'var(--secondary-light)' }}>'price'</span>).text.strip()<br />
                                    desc = soup.find(<span style={{ color: 'var(--secondary-light)' }}>'div'</span>, id=<span style={{ color: 'var(--secondary-light)' }}>'desc'</span>).text.strip()<br />
                                    <br />
                                    data = {'{'}title, price, desc{'}'}
                                </code>
                                <p style={{
                                    marginTop: 'var(--spacing-sm)',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    fontStyle: 'italic'
                                }}>
                                    📊 12+ lines • Verbose selectors • Manual text cleanup
                                </p>
                            </div>

                            {/* dputils Method */}
                            <div>
                                <div style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: 'var(--spacing-sm)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'rgba(74, 222, 128, 1)'
                                }}>
                                    ✅ With dputils
                                </div>
                                <code style={{
                                    display: 'block',
                                    padding: '1.5rem',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-primary)'
                                }}>
                                    <span style={{ color: 'var(--text-muted)' }}>from</span> dputils.scrape <span style={{ color: 'var(--text-muted)' }}>import</span> Scraper, Tag<br />
                                    <br />
                                    scraper = Scraper(<span style={{ color: 'var(--secondary-light)' }}>'https://example.com'</span>)<br />
                                    <br />
                                    data = scraper.get_data_from_page(<br />
                                    &nbsp;&nbsp;title=Tag(<span style={{ color: 'var(--secondary-light)' }}>'h1'</span>),<br />
                                    &nbsp;&nbsp;price=Tag(<span style={{ color: 'var(--secondary-light)' }}>'span'</span>, cls=<span style={{ color: 'var(--secondary-light)' }}>'price'</span>),<br />
                                    &nbsp;&nbsp;desc=Tag(<span style={{ color: 'var(--secondary-light)' }}>'div'</span>, id=<span style={{ color: 'var(--secondary-light)' }}>'desc'</span>)<br />
                                    )
                                </code>
                                <p style={{
                                    marginTop: 'var(--spacing-sm)',
                                    fontSize: '0.85rem',
                                    color: 'var(--primary-light)',
                                    fontWeight: 600
                                }}>
                                    ⚡ 6 lines • Clean syntax • Auto text cleanup
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why dputils Section */}
            <section style={{
                padding: 'var(--spacing-2xl) 0',
                background: 'rgba(0, 0, 0, 0.2)'
            }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        Why <span className="gradient-text">dputils</span>?
                    </h2>

                    <div className="grid grid-3">
                        <div className="glass-card">
                            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>⚡</div>
                            <h4>Simple & Fast</h4>
                            <p style={{ marginBottom: 0 }}>
                                Intuitive API that gets you started in minutes, not hours
                            </p>
                        </div>

                        <div className="glass-card">
                            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                            <h4>Type Safe</h4>
                            <p style={{ marginBottom: 0 }}>
                                Full type hints and dataclasses for better IDE support
                            </p>
                        </div>

                        <div className="glass-card">
                            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🔧</div>
                            <h4>Flexible</h4>
                            <p style={{ marginBottom: 0 }}>
                                Handle various file formats and web scraping scenarios
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Example */}
            <section style={{ padding: 'var(--spacing-2xl) 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>
                        Get Started in Seconds
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-xl)'
                    }}>
                        Zero configuration required. Just import and use.
                    </p>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="glass-card">
                            <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Read Any File</h4>
                            <code style={{
                                display: 'block',
                                padding: '1.5rem',
                                background: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.95rem',
                                lineHeight: 1.8
                            }}>
                                <span style={{ color: 'var(--text-muted)' }}>from</span> dputils.files <span style={{ color: 'var(--text-muted)' }}>import</span> get_data<br /><br />
                                <span style={{ color: 'var(--text-muted)' }}># Works with PDF, DOCX, TXT, and more!</span><br />
                                content = get_data(<span style={{ color: 'var(--secondary-light)' }}>"document.pdf"</span>)<br />
                                <span style={{ color: 'var(--primary-light)' }}>print</span>(content)
                            </code>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
