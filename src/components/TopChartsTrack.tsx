import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface TopChartsTrackType {
  cover: string;
  name: string;
  artist: string;
}

export const TopChartsTrack = ({ cover, name, artist }: TopChartsTrackType) => {
  return (
    <Card sx={{ minWidth: "500px", display: "flex", p: "10px" }}>
      <CardMedia
        component="img"
        image={cover}
        alt=""
        sx={{ display: "block", width: "80px", hight: "80px" }}
      />
      <CardContent>
        <Typography component="div" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
};
