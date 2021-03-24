import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img 
          src="https://github.com/marcos-dev14.png" 
          alt="avatar"
          className="profile-picture"  
        />
        <h1>Marcos Paulo</h1>
        <h2>Developer Front-end</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu Perfil</span>
          <span className="value">1.556</span>
        </div>
        
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">526</span>
        </div>
      </Container>
    </Panel>
  );
}

export default ProfilePanel;