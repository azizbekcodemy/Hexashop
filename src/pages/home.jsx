import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import img1 from "../pages/images/left-banner-image.jpg"
import img2 from "../pages/images/baner-right-image-01.jpg"
import img3 from "../pages/images/baner-right-image-02.jpg"
import img4 from "../pages/images/baner-right-image-03.jpg"
import img5 from "../pages/images/baner-right-image-04.jpg"
import CardContent from '@mui/material/CardContent';
import "./style.css"

function Home() {
    return (
        <>
            <Typography sx={{ borderBottom: "3px dotted #eee", paddingTop: "10px", paddingBottom: "80px", marginBottom: "-140px" }} >

            </Typography>
            <Typography id="home" sx={{ borderBottom: "3px dotted #eee", paddingTop: "200px", paddingBottom: "80px", marginBottom: "70px" }} >
                <Grid container justifyContent="center" spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
                        <Typography >
                            <Box sx={{ flexGrow: 1 }} >
                                <Grid container justifyContent="center" spacing={0}>
                                    <Grid item xs={12} sm={12} md={6.2} lg={6.1} xl={6}  >
                                        <CardContent sx={{ marginTop: "-15px", position: "relative",textAlign:{xs:"center",sm:"start"},left:{xl:"7px",lg:"-10px",md:"-10px"} }} >
                                            <Typography sx={{ left: "200px", left: { xs: "10px", xl: "100px",lg:"100px",md:"100px",sm:"100px" }, transform: { translateY: "50%" }, position: "absolute", top: { md: "25%", sm: "40%", xs: "10%", xl: "33%" ,lg:"35%"} }}>
                                                <Typography sx={{ color: "#fff", marginTop: "-10px", fontSize: "54px", fontWeight: 700, marginBottom: "15px" }}>
                                                    We Are Hexashop
                                                </Typography>
                                                <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: 400, marginBottom: "30px", display: "block", fontStyle: "italic" }}>
                                                    Awesome, clean &amp; creative HTML5 Template
                                                </Typography>
                                                <Typography >
                                                    <Link href="#" underline="none" sx={{ color: "#fff", fontSize: "13px", fontWeight: "500", display: "inline-block", border: "1px solid #fff", padding: "12px 25px", transform: "all .3s", textDecoration: "none","&:hover":{color:"black",background:"#fff",transform: "all .3s"} }}>
                                                        Purchase Now!
                                                    </Link>
                                                </Typography>
                                            </Typography>
                                            <img src={img1} alt="" style={{ width:"99%"  }} />
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} sm={11.5} md={5.7} lg={5.8} xl={6}  >
                                        <Box >
                                            <Grid container justifyContent="center" spacing={4}>
                                                <Grid item xs={11} sm={12} md={6} lg={6} xl={5.7}  >
                                                    <Box  >
                                                        <Typography className="hom"  sx={{ position: "relative" }}>
                                                            <Typography sx={{ textAlign: "center", width: "100%", top: "40%", transform: { translateY: "-50%" }, position: "absolute" }}>
                                                                <Typography sx={{ 
                                                                    color: "#fff", fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
                                                                    Women
                                                                </Typography>
                                                                <Typography sx={{ color: "#fff", fontSize: "16px", fontStyle: "italic" }}>
                                                                    Best Clothes For Women
                                                                </Typography>
                                                            </Typography>
                                                            <Box className="hom1" >
                                                                <Typography className="hom2">
                                                                    <Typography   sx={{ color: "#fff",fontWeight: "700",fontSize:"24px", marginBottom: "15px",
                                                                 }}>Women</Typography>
                                                                    <Typography sx={{ color: "#fff", padding: "0px 20px ", marginBottom: "20px",fontSize:{md:"0px",lg:"18px",xl:"18px"}}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</Typography>
                                                                    <Box >
                                                                        <Link href="#" sx={{ color: "#fff", fontSize: "13px", fontWeight: "500", display: "inline-block", border: "1px solid #fff", padding: "12px 25px", transform: "all .3s", textDecoration: "none","&:hover":{color:"black",background:"#fff",transform: "all .3s"} }}>
                                                                            Discover More
                                                                        </Link>
                                                                    </Box>
                                                                </Typography>
                                                               
                                                            </Box>
                                                             <img src={img2} alt="" style={{overflow:"hidden", width: "100%" }} />
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={11} sm={12} md={6} lg={6} xl={5.7}  >
                                                    <Box >
                                                        <Typography className="hom" sx={{ position: "relative" }}>
                                                            <Typography sx={{ textAlign: "center", width: "100%", top: "40%", transform: { translateY: "-50%" }, position: "absolute" }}>
                                                                <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
                                                                    Men
                                                                </Typography>
                                                                <Typography sx={{ color: "#fff", fontSize: "16px", fontStyle: "italic" }}>
                                                                    Best Clothes For Men
                                                                </Typography>
                                                            </Typography>
                                                            <Box className="hom1" >
                                                                <Typography className="hom2">
                                                                    <Typography   sx={{ color: "#fff",fontWeight: "700",fontSize:"24px", marginBottom: "15px",
                                                                 }}>Men</Typography>
                                                                    <Typography sx={{ color: "#fff", padding: "0px 20px ", marginBottom: "20px",fontSize:{md:"0px",lg:"18px",xl:"18px"}}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</Typography>
                                                                    <Box >
                                                                        <Link href="#" sx={{ color: "#fff", fontSize: "13px", fontWeight: "500", display: "inline-block", border: "1px solid #fff", padding: "12px 25px", transform: "all .3s", textDecoration: "none","&:hover":{color:"black",background:"#fff",transform: "all .3s"} }}>
                                                                            Discover More
                                                                        </Link>
                                                                    </Box>
                                                                </Typography>
                                                               
                                                            </Box>
                                                            <img src={img3} alt="" style={{ width: "100%" }} />
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={11} sm={12} md={6} lg={6} xl={5.7}  >
                                                    <Box >
                                                        <Typography sx={{ position: "relative" }}>
                                                            <Typography sx={{ textAlign: "center", width: "100%", top: "40%", transform: { translateY: "-50%" }, position: "absolute" }}>
                                                                <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
                                                                    Kids
                                                                </Typography>
                                                                <Typography sx={{ color: "#fff", fontSize: "16px", fontStyle: "italic" }}>
                                                                    Best Clothes For Kids
                                                                </Typography>
                                                            </Typography>
                                                            <Box className="hom1" >
                                                                <Typography className="hom2">
                                                                    <Typography   sx={{ color: "#fff",fontWeight: "700",fontSize:"24px", marginBottom: "15px",
                                                                 }}>Kids</Typography>
                                                                    <Typography sx={{ color: "#fff", padding: "0px 20px ", marginBottom: "20px",fontSize:{md:"0px",lg:"18px",xl:"18px"}}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</Typography>
                                                                    <Box >
                                                                        <Link href="#" sx={{ color: "#fff", fontSize: "13px", fontWeight: "500", display: "inline-block", border: "1px solid #fff", padding: "12px 25px", transform: "all .3s", textDecoration: "none","&:hover":{color:"black",background:"#fff",transform: "all .3s"} }}>
                                                                            Discover More
                                                                        </Link>
                                                                    </Box>
                                                                </Typography>
                                                               
                                                            </Box>
                                                            
                                                            <img src={img4} alt="" style={{ borderStyle: "none", width: "100%" }} />
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={11} sm={12} md={6} lg={6} xl={5.7}  >
                                                    <Box >
                                                        <Typography sx={{ position: "relative" }}>
                                                            <Typography sx={{ textAlign: "center", width: "100%", top: "40%", transform: { translateY: "-50%" }, position: "absolute" }}>
                                                                <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
                                                                    Accessories
                                                                </Typography>
                                                                <Typography sx={{ color: "#fff", fontSize: "16px", fontStyle: "italic" }}>
                                                                    Best Trend Accessories
                                                                </Typography>
                                                            </Typography>
                                                            <Box className="hom1" >
                                                                <Typography className="hom2">
                                                                    <Typography   sx={{ color: "#fff",fontWeight: "700",fontSize:"24px", marginBottom: "15px",
                                                                 }}>Accessories</Typography>
                                                                    <Typography sx={{ color: "#fff", padding: "0px 20px ", marginBottom: "20px",fontSize:{md:"0px",lg:"18px",xl:"18px"}}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</Typography>
                                                                    <Box >
                                                                        <Link href="#"  sx={{ color: "#fff", fontSize: "13px", fontWeight: "500", display: "inline-block", border: "1px solid #fff", padding: "12px 25px", transform: "all .3s", textDecoration: "none","&:hover":{color:"black",background:"#fff",transform: "all .3s"} }}>
                                                                            Discover More
                                                                        </Link>
                                                                    </Box>
                                                                </Typography>
                                                               
                                                            </Box>
                                                            <img src={img5} alt="" style={{ borderStyle: "none", width: "100%" }} />
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Typography>
           

        </>


    )

}
export default Home