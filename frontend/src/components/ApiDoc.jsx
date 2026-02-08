import { useState } from 'react';

const ApiDoc = ({ name, signature, description, parameters = [], returns, example }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="glass-card" style={{ marginBottom: 'var(--spacing-lg)' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: 'var(--spacing-md)'
            }}>
                <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>
                        <span className="gradient-text">{name}</span>
                    </h3>
                    <code style={{
                        display: 'block',
                        padding: '0.75rem',
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                        marginBottom: '1rem'
                    }}>
                        {signature}
                    </code>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        transition: 'transform var(--transition-fast)'
                    }}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                    {isExpanded ? '−' : '+'}
                </button>
            </div>

            {isExpanded && (
                <>
                    {/* Description */}
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>{description}</p>

                    {/* Parameters */}
                    {parameters.length > 0 && (
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}>
                                Parameters
                            </h4>
                            <div style={{
                                background: 'rgba(0, 0, 0, 0.2)',
                                borderRadius: 'var(--radius-sm)',
                                overflow: 'hidden'
                            }}>
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse'
                                }}>
                                    <thead>
                                        <tr style={{
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            borderBottom: '1px solid var(--border)'
                                        }}>
                                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Name</th>
                                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Type</th>
                                            <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {parameters.map((param, idx) => (
                                            <tr
                                                key={idx}
                                                style={{
                                                    borderBottom: idx < parameters.length - 1 ? '1px solid var(--border)' : 'none'
                                                }}
                                            >
                                                <td style={{ padding: '0.75rem' }}>
                                                    <code style={{ background: 'transparent', padding: 0 }}>
                                                        {param.name}
                                                    </code>
                                                </td>
                                                <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>
                                                    {param.type}
                                                </td>
                                                <td style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>
                                                    {param.description}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Returns */}
                    {returns && (
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem' }}>
                                Returns
                            </h4>
                            <p style={{ marginBottom: 0 }}>{returns}</p>
                        </div>
                    )}

                    {/* Example */}
                    {example && (
                        <div>
                            <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}>
                                Example
                            </h4>
                            {example}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ApiDoc;
