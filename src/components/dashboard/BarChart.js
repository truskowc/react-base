import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { Bar } from 'react-chartjs-2';

const BarChart = ({
  dataPoints,
  labels,
  ...rest
}) => {
  const data = {
    labels,
    datasets: dataPoints
  };

  return (
    <Card sx={{ height: '100%' }} {...rest}>
      <CardContent>
        <Typography variant="h4" align="center">Bar Chart</Typography>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
};

BarChart.propTypes = {
  dataPoints: PropTypes.array,
  labels: PropTypes.array
};

export default BarChart;
