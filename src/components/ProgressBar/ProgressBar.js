/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const Variants = {
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8,
  },
  medium: {
    height: 12,
  },
  small: {
    height: 8,
  },
};

const Wrapper = styled.div`
  --padding: ${({ size }) => Variants[size].padding ?? 0}px;
  --progress: ${({ progress }) => progress}%;

  position: relative;
  height: ${({ size }) => Variants[size].height}px;
  border-radius: ${({ size }) => Variants[size].borderRadius ?? 4}px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  position: absolute;
  top: var(--padding);
  right: var(--padding);
  bottom: var(--padding);
  left: var(--padding);
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.span`
  position: absolute;
  width: var(--progress);
  height: 100%;
  top: 0;
  left: 0;
  background: ${COLORS.primary};
`;

const ProgressBar = ({ label, value, size }) => {
  return <Wrapper
    role="progressbar"
    aria-label={label ?? 'Progress Bar'}
    aria-valuenow={value}
    size={size}
    progress={value}
  >
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
      <Bar />
    </BarWrapper>
  </Wrapper>;
};

export default ProgressBar;
