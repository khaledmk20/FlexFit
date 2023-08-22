import { Box, Button, Typography } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
      }}
    >
      <Typography color={"#ff2625"} fontWeight={600} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweet, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Check out the most effective exercises
      </Typography>

      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ bgcolor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize={"200px"}
        sx={{ opacity: 0.1, display: { lg: "block", sx: "none" } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banners" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
