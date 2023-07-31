import React from 'react';
import { Progress } from 'antd';

interface ProgressProps {
  percentage?: any;
  size?: any;
}

const ProgressKPI: React.FC<ProgressProps> = ({ percentage, size }) => {
  return (
    <Progress percent={percentage} size={[size, 20]} strokeColor={'#76B51B'}/>
  );
};

export default ProgressKPI;