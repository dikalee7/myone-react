import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MainContent = ({ ctInfo, fnGoPage }) => {
  return (
    <Card style={{ marginTop: '15px' }}>
      {ctInfo.title ? <Card.Header>{ctInfo.title}</Card.Header> : ''}

      <Card.Body>
        <Card.Title>{ctInfo.subtitle}</Card.Title>
        <Card.Text>{ctInfo.text}</Card.Text>
        {ctInfo.actions.map((act, idx) => (
          <Button
            key={idx}
            variant='warning'
            size='sm'
            style={{ marginRight: '10px' }}
            onClick={fnGoPage.bind(this, act.empr)}
          >
            {act.name}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default MainContent;
