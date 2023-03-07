import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const variant = Variants[size];

  return <Wrapper style={{
    '--width': `${width}px`,
    '--height': `${variant.height}px`,
    '--font-size': `${variant.fontSize}px`,
    '--line-height': `${variant.lineHeight}px`,
    '--padding-start': `${variant.paddingStart}px`,
    '--underline-height': `${variant.underlineHeight}px`,
  }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputIcon id={icon} size={variant.iconSize} />
    <Input type="text" placeholder={placeholder} />
    <Underline />
  </Wrapper>
};

const Variants = {
  small: {
    height: 24,
    iconSize: 16,
    fontSize: 14,
    lineHeight: 16,
    paddingStart: 24,
    underlineHeight: 1,
  },
  large: {
    height: 35,
    iconSize: 24,
    fontSize: 18,
    lineHeight: 21,
    paddingStart: 32,
    underlineHeight: 2,
  },
};

const Wrapper = styled.label`
  --color: ${COLORS.gray700};

  position: relative;
  display: block;
  width: var(--width);
  height: var(--height);
  isolation: isolate;

  &:hover {
    --color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  color: var(--color);
  pointer-events: none;
`;

const Underline = styled.span`
  position: absolute;
  bottom: 2px;
  right: 2px;
  left: 2px;
  height: var(--underline-height);
  background: ${COLORS.black};
  pointer-events: none;
  z-index: 1;
`;

const Input = styled.input`
  color: var(--color);
  width: 100%;
  height: 100%;
  border: 0;
  font-weight: 700;
  padding-inline-start: var(--padding-start);
  font-size: var(--font-size);
  line-height: var(--font-size);

  &:hover {
    color: var(--color);
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
