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
  ...delegated
}) => {
  const variant = Variants[size];

  return <Wrapper style={{
    '--width': `${width}px`,
    '--height': `${variant.height}rem`,
    '--font-size': `${variant.fontSize}rem`,
    '--underline-height': `${variant.underlineHeight}px`,
  }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputIcon id={icon} size={variant.iconSize} />
    <Input type="text" {...delegated} />
  </Wrapper>
};

const Variants = {
  small: {
    height: 24 / 16,
    iconSize: 16,
    fontSize: 14 / 16,
    underlineHeight: 1,
  },
  large: {
    height: 36 / 16,
    iconSize: 24,
    fontSize: 18 / 16,
    underlineHeight: 2,
  },
};

const Wrapper = styled.label`
  color: ${COLORS.gray700};
  position: relative;
  display: block;
  width: var(--width);
  height: var(--height);

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
`;

const Input = styled.input`
  color: inherit;
  width: 100%;
  height: 100%;
  border: 0;
  border-bottom: var(--underline-height) solid ${COLORS.black};
  font-weight: 700;
  padding-inline-start: var(--height);
  font-size: var(--font-size);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
