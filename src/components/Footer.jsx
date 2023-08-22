import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

function Footer() {
  return (
    <Box mt={"80px"} bgcolor={"#fff3f4"}>
      <Stack gap={"40px"} sx={{ alignItems: "center", px: "40px", pt: "24px" }}>
        <img src={Logo} alt="logo" width={"200px"} height={"40px"} />
        <Typography variant="h5" pb={"40px"} mt={"40px"}>
          Made with 💖 by{" "}
          <a
            style={{ textDecoration: "none", color: "#ff2625" }}
            href="https://www.linkedin.com/in/khaled-abdelalim-42428b260/"
          >
            Khaled Abdelalim
          </a>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
