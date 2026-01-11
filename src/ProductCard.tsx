import React from 'react';

interface Product {
  id: number;
  title: string;
}

interface ProductCardProps {
  product: Product;
  images: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleBuyClick = () => {
    console.log(`ID: ${product.id}, Название: ${product.title}`);
  };

  return (
    <div style={cardStyle}>
      <div style={imageWrapper}>
        <img src={randomImage} alt={product.title} style={imgStyle} />
      </div>
      
      <h3 style={titleStyle}>{product.title}</h3>
      
      <button onClick={handleBuyClick} style={buttonStyle}>
        Buy now
      </button>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '16px',
  padding: '20px',
  width: '240px',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.2s'
};

const imageWrapper: React.CSSProperties = {
  width: '100%',
  height: '180px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  marginBottom: '15px'
};

const imgStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain' 
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  margin: '10px 0 20px 0',
  color: '#222',
  fontWeight: 'bold'
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#646cff',
  color: 'white',
  border: 'none',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
  width: '100%'
};