import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import About from "./About";
import Life from "./Life";
import CompanyJobs from "./CompanyJobs";
import { Skeleton } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Details({
  industry,
  specialities,
  images,
  benefits,
  workType,
  website,
  about,
  companyId,
  title,
  loading,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      {loading ? (
        <Skeleton
          sx={{ width: "100%", height: "400px" }}
          variant="rectangular"
        ></Skeleton>
      ) : (
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              TabIndicatorProps={{
                style: { color: "red", background: "#4045db" },
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontSize: "15px", fontWeight: "600" }}
                label="About"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: "15px", fontWeight: "600" }}
                label="Life"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontSize: "15px", fontWeight: "600" }}
                label="Jobs"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <Box>
              <About
                industry={industry}
                benefits={benefits}
                about={about}
                specialities={specialities}
                website={website}
                images={images}
                workType={workType}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box>
              <Life images={images} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography
              fontWeight={600}
              textAlign="center"
              fontSize={14}
              sx={{
                padding: "10px",
                marginTop: "15px",
                color: "text.secondary",
                fontSize: 16,
              }}
            >
              Jobs posted by {title}
            </Typography>
            <CompanyJobs companyId={companyId} />
          </TabPanel>
        </>
      )}
    </Box>
  );
}
