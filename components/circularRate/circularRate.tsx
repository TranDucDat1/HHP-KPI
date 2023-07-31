import React from 'react';
import { Progress } from 'antd';

interface CircularProps {
  percentage?: any;
}

const CircularRate: React.FC<CircularProps> = ({ percentage }) => {
  return (
    <Progress type="circle" percent={percentage} size={'small'}/>
  );
};

export default CircularRate;
