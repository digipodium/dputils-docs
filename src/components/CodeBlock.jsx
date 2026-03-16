import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

const CodeBlock = ({ code, language = 'python', title }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="glass-card" style={{
            padding: 0,
            overflow: 'hidden',
            marginBottom: 'var(--spacing-md)'
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                borderBottom: '1px solid var(--border)'
            }}>
                <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: 600
                }}>
                    {title || language}
                </span>
                <button
                    onClick={handleCopy}
                    style={{
                        background: copied ? 'var(--gradient-accent)' : 'rgba(99, 102, 241, 0.2)',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        fontWeight: 500
                    }}
                    onMouseEnter={(e) => {
                        if (!copied) e.target.style.background = 'rgba(99, 102, 241, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        if (!copied) e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                    }}
                >
                    {copied ? '✓ Copied!' : 'Copy'}
                </button>
            </div>

            {/* Code */}
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: 'rgba(0, 0, 0, 0.2)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                }}
                showLineNumbers
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
