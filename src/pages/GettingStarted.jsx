import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
    return (
        <div style={{ padding: 'var(--spacing-2xl) 0' }} className="fade-in">
            <div className="container">
                <h1>
                    <span className="gradient-text">Getting Started</span>
                </h1>
                <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)' }}>
                    Get up and running with dputils in just a few minutes!
                </p>

                {/* Resources */}
                <div className="glass-card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2>📚 Resources</h2>
                    <p>Official links and resources for dputils:</p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-md)',
                        marginTop: 'var(--spacing-md)'
                    }}>
                        <a
                            href="https://github.com/digipodium/dputils"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                textDecoration: 'none',
                                textAlign: 'center',
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>📦</div>
                            <div style={{ color: 'var(--primary-light)', fontWeight: 600 }}>GitHub</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Source Code
                            </div>
                        </a>
                        <a
                            href="https://pypi.org/project/dputils/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'rgba(236, 72, 153, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(236, 72, 153, 0.3)',
                                textDecoration: 'none',
                                textAlign: 'center',
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🐍</div>
                            <div style={{ color: 'var(--secondary-light)', fontWeight: 600 }}>PyPI</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Python Package
                            </div>
                        </a>
                        <a
                            href="https://github.com/digipodium"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'rgba(139, 92, 246, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                textDecoration: 'none',
                                textAlign: 'center',
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🏢</div>
                            <div style={{ color: 'var(--accent-light)', fontWeight: 600 }}>Digipodium</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Created By
                            </div>
                        </a>
                    </div>
                </div>

                {/* Installation */}
                <div className="glass-card">
                    <h2>Installation</h2>
                    <p>Install dputils using pip:</p>
                    <CodeBlock
                        language="bash"
                        code="pip install dputils"
                    />
                </div>

                {/* Quick Tutorial */}
                <div className="glass-card" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <h2>Quick Tutorial</h2>

                    <h3 style={{ marginTop: 'var(--spacing-lg)' }}>1. File Handling</h3>
                    <p>Read and write files with ease:</p>
                    <CodeBlock
                        language="python"
                        code={`from dputils.files import get_data, save_data

# Read a PDF file
content = get_data("document.pdf")
print(content)

# Save content to a new file
save_data("output.txt", content)

# Read a Word document
doc_content = get_data("report.docx")
print(doc_content)`}
                    />

                    <h3 style={{ marginTop: 'var(--spacing-lg)' }}>2. Web Scraping</h3>
                    <p>Extract data from websites:</p>
                    <CodeBlock
                        language="python"
                        code={`from dputils.scrape import Scraper, Tag

# Create a scraper
scraper = Scraper("https://example.com/product")

# Extract specific data
data = scraper.get_data_from_page(
    title=Tag('h1'),
    price=Tag('span', cls='price'),
    description=Tag('div', id='desc')
)

print(data)
# {'title': 'Product Name', 'price': '$99.99', 'description': '...'}`}
                    />

                    <h3 style={{ marginTop: 'var(--spacing-lg)' }}>3. Scraping Lists</h3>
                    <p>Extract multiple items from a page:</p>
                    <CodeBlock
                        language="python"
                        code={`from dputils.scrape import Scraper, Tag

# Scrape product listings
scraper = Scraper("https://example.com/products")

products = scraper.get_repeating_data_from_page(
    target=Tag('div', id='product-grid'),
    items=Tag('div', cls='product-card'),
    name=Tag('h3'),
    price=Tag('span', cls='price'),
    link=Tag('a', output='href')
)

for product in products:
    print(f"{product['name']}: {product['price']}")`}
                    />
                </div>

                {/* Common Patterns */}
                <div className="glass-card" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <h2>Common Patterns</h2>

                    <h3 style={{ marginTop: 'var(--spacing-md)' }}>File Format Conversion</h3>
                    <CodeBlock
                        language="python"
                        code={`from dputils.files import get_data, save_data

# Convert PDF to Word
pdf_content = get_data("input.pdf")
save_data("output.docx", pdf_content)

# Convert Word to Text
doc_content = get_data("report.docx")
save_data("report.txt", doc_content)`}
                    />

                    <h3 style={{ marginTop: 'var(--spacing-lg)' }}>Scraping to File</h3>
                    <CodeBlock
                        language="python"
                        code={`from dputils.scrape import Scraper, Tag
from dputils.files import save_data
import json

# Scrape data
scraper = Scraper("https://example.com/api")
data = scraper.get_data_from_page(
    title=Tag('h1'),
    content=Tag('article')
)

# Save as JSON
json_data = json.dumps(data, indent=2)
save_data("scraped_data.txt", json_data)`}
                    />

                    <h3 style={{ marginTop: 'var(--spacing-lg)' }}>Error Handling</h3>
                    <CodeBlock
                        language="python"
                        code={`from dputils.files import get_data, save_data

try:
    content = get_data("document.pdf")
    if content:
        success = save_data("output.txt", content)
        if success:
            print("✅ File processed successfully!")
        else:
            print("❌ Failed to save file")
    else:
        print("❌ Failed to read file")
except Exception as e:
    print(f"Error: {e}")`}
                    />
                </div>

                {/* Next Steps */}
                <div className="glass-card" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <h2>Next Steps</h2>
                    <p>Now that you know the basics, dive deeper into specific modules:</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-md)',
                        marginTop: 'var(--spacing-md)'
                    }}>
                        <Link
                            to="/files"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border)',
                                textDecoration: 'none',
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📁</div>
                            <h4 style={{ color: 'var(--primary-light)' }}>Files Module →</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                Complete API reference for file handling
                            </p>
                        </Link>

                        <Link
                            to="/scraping"
                            style={{
                                padding: 'var(--spacing-md)',
                                background: 'rgba(236, 72, 153, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border)',
                                textDecoration: 'none',
                                transition: 'all var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
                            <h4 style={{ color: 'var(--secondary-light)' }}>Scraping Module →</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                                Complete guide to web scraping
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;
