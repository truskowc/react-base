import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography
} from '@mui/material';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = ({ dataPoints, ...rest }) => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <Card sx={{ height: '100%' }} {...rest}>
      <CardContent>
        <Typography variant="h4" align="center">Line Chart</Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};

LineChart.propTypes = {
  dataPoints: PropTypes.array
};

export default LineChart;
