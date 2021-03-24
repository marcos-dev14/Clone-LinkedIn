import React from 'react';

import FeedPost from './FeedPost';
import FeedShare from './FeedShare';

import { Container } from './styles';

const MiddleColumn: React.FC = () => {
  return (
    <Container className="middle-column">
      <>
        <FeedShare />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </>
    </Container>
  );
}

export default MiddleColumn;