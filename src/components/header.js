import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
const styles = muiBaseTheme => ({
  card: {
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  },
  media: {
    paddingTop: "56.25%"
  },
});
function Header({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={"https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"}
      />
    </Card>
  );
}

export default withStyles(styles)(Header);
