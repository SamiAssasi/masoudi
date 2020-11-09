import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const Landingpage = () => {
  return (
    <div>
      <Container>
        <Grid container alignItems="center" spacing={4}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h2">
                <Box fontWeight="fontWeightBold">Some lovely slogan here</Box>
            </Typography>
            <Typography>More text about what we do and stuff</Typography>

          </Grid>
          <Grid item sm={6} xs={12}>
            <img src="https://megaone.acrothemes.com/seo-agency/img/slider-img.png"/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Landingpage;
