import { Box, Tab, Tabs } from "@mui/material"
import React from "react";
import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from "@mui/lab";
import { HomeTopTab } from "./tabs/top";


const Home = () =>{
  const [value, setValue] = React.useState("map");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              <Tab label="Top" value="top" />
              <Tab label="Map" value="map" />
              <Tab label="Time Series Graph" value="timeSeries" />
              <Tab label="Data source" value="dataSource" />
            </TabList>
          </Box>
          <TabPanel value="top">
            Top
          </TabPanel>
          <TabPanel value="map">
            <HomeTopTab />
          </TabPanel>
          <TabPanel value="timeSeries">Item Three</TabPanel>
          <TabPanel value="dataSource">Item Three</TabPanel>
        </TabContext>
    </Box>
    </div>
  )
}


export default Home