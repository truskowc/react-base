import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Typography
} from '@mui/material';
import {
  Doughnut
} from 'react-chartjs-2';

const DoughnutChart = ({ dataPoints, labels, ...rest }) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  return (
    <Card sx={{ height: '100%' }} {...rest}>
      <CardContent>
        <Typography variant="h4" align="center" mb={1}>Doughnut Chart</Typography>
        <Box p={3}>
          <Doughnut data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

DoughnutChart.propTypes = {
  dataPoints: PropTypes.array,
  labels: PropTypes.array
};

export default DoughnutChart;
