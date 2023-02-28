import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <NativeSelect>
        {children}
      </NativeSelect>
      <Filler aria-hidden="true">{displayedValue}</Filler>
      <SelectIcon id="chevron-down" size="24" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  background: ${COLORS.transparentGray15};
  appearance: none;
  border: 0;
  border-radius: 8px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  color: inherit;

  &::-ms-expand {
    display: none;
  }
`;

const Filler = styled.span`
  pointer-events: none;
  opacity: 0;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  pointer-events: none;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export default Select;
