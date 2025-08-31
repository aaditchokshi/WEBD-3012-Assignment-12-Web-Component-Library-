import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardWrapper = styled.div<{ bgColor: string; disabled?: boolean }>`
  background-color: ${props => props.disabled ? '#ccc' : props.bgColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  max-width: 300px;
  transition: transform 0.2s;
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'scale(1.03)'};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  margin: 0;
  color: #555;
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'Card description here.',
  image,
  backgroundColor = '#fff',
  disabled = false,
}) => {
  return (
    <CardWrapper bgColor={backgroundColor} disabled={disabled}>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
