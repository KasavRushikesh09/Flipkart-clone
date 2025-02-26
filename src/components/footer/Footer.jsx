import { Container, Grid, Typography, Link, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#1976D2", color: "#ffffff", py: 4, mt: "auto", position: "fixed", bottom: 0, width: "100%" }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* About Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Flipkart Clone is an e-commerce platform providing a seamless shopping experience with a wide range of products.
            </Typography>
          </Grid>

          {/* Customer Care */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Care
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Help Center</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Track Order</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Returns & Refunds</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Shipping Info</Link>
          </Grid>

          {/* Policies */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Policies
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Terms & Conditions</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Cookie Policy</Link>
          </Grid>

          {/* Social Media & Payments */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, pl: "20%" }}>
              <Link href="https://www.facebook.com/flipkart/" color="inherit" sx={{ color: "#fff", transition: "transform 0.2s", '&:hover': { transform: "scale(1.2)" } }}><FacebookIcon /></Link>
              <Link href="https://x.com/Flipkart" color="inherit" sx={{ color: "#fff", transition: "transform 0.2s", '&:hover': { transform: "scale(1.2)" } }}><TwitterIcon /></Link>
              <Link href="https://www.instagram.com/flipkart/" color="inherit" sx={{ color: "#fff", transition: "transform 0.2s", '&:hover': { transform: "scale(1.2)" } }}><InstagramIcon /></Link>
              <Link href="https://www.linkedin.com/company/flipkart/" color="inherit" sx={{ color: "#fff", transition: "transform 0.2s", '&:hover': { transform: "scale(1.2)" } }}><LinkedInIcon /></Link>
            </Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Payment Methods
            </Typography>
            <Box sx={{ display: "flex", gap: 3, pl: "15%" }}>
            <Link href="https://www.visa.com" target="_blank"><img src="https://tse1.mm.bing.net/th?id=OIP.bx7BpgvJPnC0juyyVEnWIwHaEp&pid=Api&P=0&h=220" alt="Visa" style={{ height: "30px", transition: "transform 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.2)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"} /> </Link>
            <Link href="https://www.mastercard.com" target="_blank"><img src="https://tse3.mm.bing.net/th?id=OIP.XybdBNeA81q0MhHe1KF5OAHaEb&pid=Api&P=0&h=220" alt="MasterCard" style={{ height: "30px", transition: "transform 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.2)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"} /></Link>
            <Link href="https://www.paypal.com" target="_blank"><img src="https://tse3.mm.bing.net/th?id=OIP.6aIi4IINoK8zIG1l5DSzugHaHa&pid=Api&P=0&h=220" alt="PayPal" style={{ height: "30px", transition: "transform 0.2s" }} onMouseOver={(e) => e.target.style.transform = "scale(1.2)"} onMouseOut={(e) => e.target.style.transform = "scale(1)"} /></Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: "center", borderTop: "1px solid #424242", mt: 3, pt: 2 }}>
        <Typography variant="body2">© 2025 Flipkart Clone. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
