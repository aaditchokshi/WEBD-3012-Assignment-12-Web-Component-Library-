import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean; width?: string; height?: string }>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  object-fit: cover;
  filter: ${props => (props.disabled ? 'grayscale(80%)' : 'none')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: transform 0.2s;
  &:hover {
    transform: ${props => (props.disabled ? 'none' : 'scale(1.03)')};
  }
`;

const Img: React.FC<ImgProps> = ({ src, alt = '', width, height, disabled = false }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
