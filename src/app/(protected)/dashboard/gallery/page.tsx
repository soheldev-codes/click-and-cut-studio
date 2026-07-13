import React from 'react';

// প্রপসের জন্য ইন্টারফেস ডিফাইন করা
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const SimpleButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{ padding: '10px 20px', cursor: 'pointer' }}
    >
      {label} Hello Gallary
    </button>
  );
};

export default SimpleButton;