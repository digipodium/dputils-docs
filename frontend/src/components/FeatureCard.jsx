import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, link }) => {
    return (
        <Link
            to={link}
            className="glass-card"
            style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}
        >
            <div style={{
                fontSize: '3rem',
                marginBottom: 'var(--spacing-sm)'
            }}>
                {icon}
            </div>
            <h3 style={{ color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{
                color: 'var(--text-secondary)',
                marginBottom: 0
            }}>
                {description}
            </p>
        </Link>
    );
};

export default FeatureCard;
