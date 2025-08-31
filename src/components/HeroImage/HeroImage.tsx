import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<{
  bgImage: string;
  overlayColor: string;
  height: string;
  disabled?: boolean;
}>`
  position: relative;
  width: 100%;
  height: ${props => props.height};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  filter: ${props => (props.disabled ? 'grayscale(80%)' : 'none')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const Overlay = styled.div<{ overlayColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.overlayColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  margin: 10px 0 0;
  font-size: 1.2rem;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  image,
  title = '',
  subtitle = '',
  overlayColor = 'rgba(0,0,0,0.5)',
  height = '400px',
  disabled = false,
}) => {
  return (
    <HeroWrapper
      bgImage={image}
      overlayColor={overlayColor} // ✅ Pass overlayColor here
      height={height}
      disabled={disabled}
    >
      {(title || subtitle) && (
        <Overlay overlayColor={overlayColor}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Overlay>
      )}
    </HeroWrapper>
  );
};

export default HeroImage;
