import React from 'react'

import { LineChart } from './components/LineChart'
import { BarChart } from './components/BarChart';
import { CountryMeter } from './components/CountryMeter'
import { MultiLineChart } from './components/MultiLineChart';

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './App.css';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const allyProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const App = () => {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
   
  return (
    <Box sx={{ bgcolor: 'background.paper', width: '98vw' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Population of Poland" {...allyProps(0)} />
          <Tab label="Useability of currency" {...allyProps(1)} />
          <Tab label="Country counter" {...allyProps(2)} />
          <Tab label="Population of countries" {...allyProps(3)} />
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <LineChart/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <BarChart/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CountryMeter/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <MultiLineChart/>
        </TabPanel>
    </Box>
  )
}

export default App;