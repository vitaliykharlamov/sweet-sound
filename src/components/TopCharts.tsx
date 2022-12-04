import { Box, List, ListItem, Typography } from "@mui/material";
import { TopChartsTrack } from "./TopChartsTrack";
import { worldChart } from "../axios/worldChart";

export const TopCharts = () => {
  return (
    <Box>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Top Charts
      </Typography>
      <List>
        {worldChart.map((track) => (
          <ListItem key={track.key}>
            <TopChartsTrack
              cover={track.share.image}
              name={track.title}
              artist={track.subtitle}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
