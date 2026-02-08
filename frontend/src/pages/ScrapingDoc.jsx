import CodeBlock from '../components/CodeBlock';
import ApiDoc from '../components/ApiDoc';

const ScrapingDoc = () => {
    return (
        <div style={{ padding: 'var(--spacing-2xl) 0' }} className="fade-in">
            <div className="container">
                <h1>
                    <span className="gradient-text">Scraping Module</span>
                </h1>
                <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)' }}>
                    The scraping module provides powerful tools for extracting data from websites using BeautifulSoup and httpx with intelligent user-agent rotation.
                </p>

                {/* Quick Start */}
                <div className="glass-card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Quick Start</h3>
                    <CodeBlock
                        language="python"
                        code={`from dputils.scrape import Scraper, Tag

# Create a scraper instance
scraper = Scraper("https://example.com")

# Extract data from the page
data = scraper.get_data_from_page(
    title=Tag('h1'),
    price=Tag('span', cls='price'),
    description=Tag('div', id='description')
)

print(data)`}
                    />
                </div>

                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Core Classes</h2>

                {/* Tag Dataclass */}
                <ApiDoc
                    name="Tag"
                    signature="Tag(name='div', output='text', cls=None, id=None, attrs=None)"
                    description="Dataclass for defining HTML elements to extract. Provides a clean way to specify what data to scrape."
                    parameters={[
                        {
                            name: 'name',
                            type: 'str',
                            description: 'HTML tag name (e.g., "div", "span", "a", "img") (default: "div")'
                        },
                        {
                            name: 'output',
                            type: 'str',
                            description: 'Type of data to extract: "text", "href", "src", "object", "title", "alt", "value" (default: "text")'
                        },
                        {
                            name: 'cls',
                            type: 'str',
                            description: 'CSS class name to match (default: None)'
                        },
                        {
                            name: 'id',
                            type: 'str',
                            description: 'Element ID to match (default: None)'
                        },
                        {
                            name: 'attrs',
                            type: 'dict',
                            description: 'Additional attributes to match (default: None)'
                        }
                    ]}
                    returns="Tag instance for use in scraper methods"
                    example={
                        <>
                            <CodeBlock
                                language="python"
                                code={`from dputils.scrape import Tag

# Extract text content
title_tag = Tag('h1', output='text')

# Extract link href
link_tag = Tag('a', cls='product-link', output='href')

# Extract image source
image_tag = Tag('img', cls='product-image', output='src')

# Extract with custom attributes
custom_tag = Tag('div', attrs={'data-id': '123', 'role': 'content'})

# Get the BeautifulSoup object itself
element_tag = Tag('article', output='object')`}
                            />
                        </>
                    }
                />

                {/* Scraper Class */}
                <ApiDoc
                    name="Scraper"
                    signature="Scraper(webpage_url: str, user_agent: str = None, cookies: dict = None, clean: bool = False)"
                    description="Main class for web scraping. Handles HTTP requests, user-agent rotation, and HTML parsing."
                    parameters={[
                        {
                            name: 'webpage_url',
                            type: 'str',
                            description: 'URL of the webpage to scrape'
                        },
                        {
                            name: 'user_agent',
                            type: 'str',
                            description: 'Custom user agent string (default: random rotation)'
                        },
                        {
                            name: 'cookies',
                            type: 'dict',
                            description: 'Browser cookies to include in requests (default: None)'
                        },
                        {
                            name: 'clean',
                            type: 'bool',
                            description: 'Remove query parameters from URL (default: False)'
                        }
                    ]}
                    returns="Scraper instance with parsed HTML content"
                    example={
                        <>
                            <CodeBlock
                                language="python"
                                code={`from dputils.scrape import Scraper

# Basic usage
scraper = Scraper("https://example.com")

# With custom user agent
scraper = Scraper(
    "https://example.com",
    user_agent="Mozilla/5.0 ..."
)

# With cookies
scraper = Scraper(
    "https://example.com",
    cookies={"session": "abc123"}
)

# Clean URL (remove query params)
scraper = Scraper(
    "https://example.com?ref=google",
    clean=True  # URL becomes https://example.com
)`}
                            />
                        </>
                    }
                />

                <h2 style={{ marginBottom: 'var(--spacing-lg)', marginTop: 'var(--spacing-2xl)' }}>
                    Scraper Methods
                </h2>

                {/* get_data_from_page */}
                <ApiDoc
                    name="get_data_from_page()"
                    signature="get_data_from_page(errors=False, **tags) -> dict"
                    description="Extract single values from a webpage using Tag objects."
                    parameters={[
                        {
                            name: 'errors',
                            type: 'bool',
                            description: 'Print error messages for failed extractions (default: False)'
                        },
                        {
                            name: '**tags',
                            type: 'Tag',
                            description: 'Named Tag objects for data extraction'
                        }
                    ]}
                    returns="Dictionary with extracted data"
                    example={
                        <>
                            <CodeBlock
                                language="python"
                                code={`from dputils.scrape import Scraper, Tag

url = "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/..."
scraper = Scraper(url)

data = scraper.get_data_from_page(
    title=Tag('h1'),
    price=Tag('div', cls='Nx9bqj CxhGGd'),
    description=Tag('div', cls='yN+eNk w9jEaj'),
    image=Tag('img', cls='_53J4C-', output='src'),
    errors=True  # Show any extraction errors
)

print(data)
# {
#     'title': 'Apple iPhone 14 (Blue, 128 GB)',
#     'price': '₹58,999',
#     'description': 'Experience amazing...',
#     'image': 'https://...'
# }`}
                            />
                        </>
                    }
                />

                {/* get_repeating_data_from_page */}
                <ApiDoc
                    name="get_repeating_data_from_page()"
                    signature="get_repeating_data_from_page(target=None, items=None, errors=False, info=False, **tags) -> list"
                    description="Extract multiple items from a list or grid on a webpage."
                    parameters={[
                        {
                            name: 'target',
                            type: 'Tag',
                            description: 'Tag identifying the container section (default: Tag("body"))'
                        },
                        {
                            name: 'items',
                            type: 'Tag',
                            description: 'Tag identifying individual items (default: Tag("div"))'
                        },
                        {
                            name: 'errors',
                            type: 'bool',
                            description: 'Print error messages (default: False)'
                        },
                        {
                            name: 'info',
                            type: 'bool',
                            description: 'Print progress information (default: False)'
                        },
                        {
                            name: '**tags',
                            type: 'Tag',
                            description: 'Named Tag objects for data extraction from each item'
                        }
                    ]}
                    returns="List of dictionaries, one for each item found"
                    example={
                        <>
                            <CodeBlock
                                language="python"
                                code={`from dputils.scrape import Scraper, Tag

url = "https://www.flipkart.com/search?q=mobiles"
scraper = Scraper(url)

products = scraper.get_repeating_data_from_page(
    target=Tag('div', cls='DOjaWF gdgoEp'),  # Container
    items=Tag('div', cls='_75nlfW'),          # Each product
    title=Tag('div', cls='KzDlHZ'),
    price=Tag('div', cls='Nx9bqj _4b5DiR'),
    rating=Tag('div', cls='XQDdHH'),
    link=Tag('a', cls='CGtC98', output='href'),
    info=True  # Show progress
)

for product in products:
    print(f"{product['title']}: {product['price']}")
    
# Output:
# Found 24 items
# Extracting data for element 1...
# Extracting data for element 2...
# ...
# Samsung Galaxy S23: ₹74,999
# iPhone 15: ₹79,900
# ...`}
                            />
                        </>
                    }
                />

                {/* Complete Example */}
                <div className="glass-card" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>
                        Complete Example: E-commerce Scraper
                    </h3>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        Scrape product listings and save to a file:
                    </p>
                    <CodeBlock
                        language="python"
                        title="ecommerce_scraper.py"
                        code={`from dputils.scrape import Scraper, Tag
from dputils.files import save_data
import json

# Scrape product listings
url = "https://www.flipkart.com/search?q=laptops"
scraper = Scraper(url, clean=True)

products = scraper.get_repeating_data_from_page(
    target=Tag('div', cls='_1YokD2 _3Mn1Gg'),
    items=Tag('div', cls='_1AtVbE'),
    name=Tag('div', cls='_4rR01T'),
    price=Tag('div', cls='_30jeq3 _1_WHN1'),
    rating=Tag('div', cls='_3LWZlK'),
    specs=Tag('ul', cls='_1xgFaf'),
    link=Tag('a', cls='_1fQZEK', output='href'),
    image=Tag('img', cls='_396cs4', output='src'),
    errors=True,
    info=True
)

# Save to JSON file
data_json = json.dumps(products, indent=2)
success = save_data("laptops.txt", data_json)

if success:
    print(f"\\n✅ Scraped {len(products)} products!")
    print("📁 Saved to laptops.txt")
else:
    print("\\n❌ Failed to save data")`}
                    />
                </div>

                {/* Best Practices */}
                <div className="glass-card" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Best Practices</h3>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
                        <li>Always inspect the website's HTML structure before creating Tag objects</li>
                        <li>Use <code>errors=True</code> during development to debug extraction issues</li>
                        <li>Be respectful of websites - add delays between requests for large scraping jobs</li>
                        <li>Use <code>clean=True</code> to normalize URLs and avoid duplicate requests</li>
                        <li>Test with small samples before running large-scale scraping operations</li>
                        <li>Handle exceptions appropriately in production code</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ScrapingDoc;
