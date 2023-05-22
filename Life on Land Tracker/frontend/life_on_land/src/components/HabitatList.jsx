import React from 'react';
import { Card, Col, Row } from 'antd';
import HabitatModal from '../modals/HabitatModal';

const HabitatList = ({ habitats }) => {
  
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {habitats.map((habitat) => (
          <HabitatModal habitat={habitat} />
        ))}
      </Row>
    </div>
  );
};

export default HabitatList;
