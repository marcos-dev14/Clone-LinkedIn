import React from 'react';

import HashtagPanel from './HashtagPanel';
import ProfilePanel from './ProfilePanel';

import { Container } from './styles';

const LeftColumn: React.FC = () => {
  return (
    <Container className="left-column">
      <ProfilePanel />
      <HashtagPanel />
    </Container>
  );
}

export default LeftColumn;