import {
  Grid,
  Container
} from '@mui/material';
import {
  Chair,
  FlashOn,
  AirplanemodeActive,
  Equalizer
} from '@mui/icons-material';
import {
  Page,
  PageBody,
} from '../components/layout/PageLayout';
import {
  DoughnutChartData,
  LineChartData,
  RadarChartData,
  BarChartData
} from '../__mocks__/chartData';
import StatBox from '../components/dashboard/StatBox';
import LineChart from '../components/dashboard/LineChart';
import DoughnutChart from '../components/dashboard/DoughnutChart';
import RadarChart from '../components/dashboard/RadarChart';
import BarChart from '../components/dashboard/BarChart';

const testLabels = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
const barchartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const Dashboard = () => (
  <Page title="Dashboard" py={3}>
    <PageBody>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={3}>
            <StatBox icon={Chair} label="Testing" value="1,350" />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <StatBox
              icon={FlashOn}
              iconColor="success.main"
              label="Interesting"
              value="400 W/s"
              valueColor="success.main"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <StatBox
              icon={AirplanemodeActive}
              iconColor="error.main"
              label="More things!"
              value="$150,000"
              valueColor="error.main"
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <StatBox icon={Equalizer} label="Careful with the length" value="..." />
          </Grid>
          <Grid item xs={12} md={6}>
            <LineChart
              dataPoints={LineChartData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart
              dataPoints={BarChartData}
              labels={barchartLabels}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RadarChart
              dataPoints={RadarChartData}
              labels={testLabels}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DoughnutChart
              dataPoints={DoughnutChartData}
              labels={testLabels}
            />
          </Grid>
        </Grid>
      </Container>
    </PageBody>
  </Page>
);

export default Dashboard;
