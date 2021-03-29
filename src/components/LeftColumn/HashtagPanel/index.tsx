import React from 'react';

import { Container, HashtagIcon } from './styles';

import Panel from '../../Panel';

const tags = ['rocketseat', 'next-level', 'node', 'react', 'developer'];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Hashtags Seguida</span>

        {tags.map((item) => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
}

export default HashtagPanel;