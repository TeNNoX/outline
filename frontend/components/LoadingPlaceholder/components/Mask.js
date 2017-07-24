// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { pulsate } from 'styles/animations';
import { color } from 'styles/constants';
import { randomInteger } from 'utils/random';
import Flex from 'components/Flex';

class Mask extends Component {
  width: number;

  shouldComponentUpdate() {
    return false;
  }

  constructor(props: Object) {
    super(props);
    this.width = randomInteger(75, 100);
  }

  render() {
    return <Redacted width={this.width} {...this.props} />;
  }
}

const Redacted = styled(Flex)`
  width: ${props => (props.header ? props.width / 2 : props.width)}%;
  height: ${props => (props.header ? 28 : 18)}px;
  margin-bottom: ${props => (props.header ? 18 : 12)}px;
  background-color: ${color.smokeDark};
  animation: ${pulsate} 1.3s infinite;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Mask;