import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { Radar } from 'react-chartjs-2';

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

const RadarChart = ({
  dataPoints,
  labels,
  ...rest
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card sx={{ height: '100%' }} {...rest}>
      <CardContent>
        <Typography variant="h4" align="center">Radar Chart</Typography>
        <Radar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

RadarChart.propTypes = {
  dataPoints: PropTypes.array,
  labels: PropTypes.array
};

export default RadarChart;
