import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import ex1 from "../pages/images/explore-image-01.jpg"
import ex2 from "../pages/images/explore-image-02.jpg"
import in1 from "../pages/images/instagram-01.jpg"
import in2 from "../pages/images/instagram-02.jpg"
import in3 from "../pages/images/instagram-03.jpg"
import in4 from "../pages/images/instagram-04.jpg"
import in5 from "../pages/images/instagram-05.jpg"
import in6 from "../pages/images/instagram-06.jpg"
import con1 from "../pages/images/white-logo.png"
import Card from '@mui/material/Card';
import { FaQuoteLeft, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaTelegramPlane } from "react-icons/fa";
import { border } from "@mui/system";
import "./style.css"

function Explor() {
    return (
        <>  <Typography id="explor" sx={{ borderBottom: "3px dotted #eee", paddingTop: "50px", paddingBottom: "80px", marginBottom: "70px" }} >
            <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={12} sm={11.5} md={11.2} lg={9.7} xl={10.8}  >
                    <Typography >
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container justifyContent="center" spacing={0}>
                                <Grid item xs={12} sm={11.5} md={6} lg={6} xl={4.8}  >
                                    <CardContent sx={{ marginRight: "30px" }}>
                                        <Typography sx={{ fontSize: "34px", fontWeight: "700", color: "#2a2a2a" }}>Explore Our Products</Typography>
                                        <Typography sx={{ fontSize: "14px", color: "#aaaaaa", fontWeight: "500", marginTop: "25px", marginBottom: "25px" }}>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</Typography>
                                        <Box sx={{ display: "flex" }} >
                                            <Typography  sx={{ fontSize: "28px", marginRight: "15px", marginTop: "1px", float: "left"}}>
                                            <FaQuoteLeft />
                                            </Typography>
                                            
                                            <Typography sx={{ fontStyle: "italic", color: "#2a2a2a", fontWeight: "500" }}>
                                            
                                                You are not allowed to redistribute this template ZIP file on any other website.
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ fontSize: "14px", color: "#aaaaaa", fontWeight: "500", marginTop: "25px" }}>
                                            There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.
                                        </Typography>
                                        <Typography sx={{ fontSize: "14px", color: "#aaaaaa", fontWeight: "500", marginTop: "25px", marginBottom: "35px" }}>
                                            If this template is beneficial for your website or business, please kindly <Link rel="nofollow" >support us</Link> a little via PayPal. Please also tell your friends about our great website. Thank you.
                                        </Typography>
                                        <Box >
                                            <Link href="#" sx={{ color: "#2a2a2a", borderColor: "#2a2a2a", marginTop: "35px", fontSize: "13px", border: "1px solid #2a2a2a", padding: "12px 25px", fontWeight: "500", textDecoration: "none","&:hover":{color:"#fff",background:"black",transform: "all .3s"} }}>Discover More</Link>
                                        </Box>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={12} sm={11.5} md={6} lg={6} xl={6}  >
                                    <Box>
                                        <Grid container justifyContent="center" spacing={4}>
                                            <Grid item xs={11} sm={12} md={6} lg={6} xl={4.5}  >
                                                <Box sx={{ minHeight: "255px", backgroundColor: "#f8f8f8", textAlign: "center", width: "100%" }}>
                                                    <Typography sx={{ color: "#2a2a2a", marginBottom: "5px", fontSize: "24px", paddingTop: "90px", fontWeight: "700" }}>
                                                        Leather Bags
                                                    </Typography>
                                                    <Typography sx={{ fontStyle: "italic", color: "#aaa", fontWeight: "500", fontSize: "14px" }}>Latest Collection</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={11} sm={12} md={6} lg={6} xl={4.8}  >
                                                <Box >
                                                    <img src={ex1} alt="" width={"100%"} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={11} sm={12} md={6} lg={6} xl={4.8}  >
                                                <Box >
                                                    <img src={ex2} alt="" width={"100%"} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={11} sm={12} md={6} lg={6} xl={4.5}  >
                                                <Box sx={{ minHeight: "255px", backgroundColor: "#f8f8f8", textAlign: "center", width: "100%" }}>
                                                    <Typography sx={{ color: "#2a2a2a", marginBottom: "5px", fontSize: "24px", paddingTop: "90px", fontWeight: "700" }}>
                                                        Different Types
                                                    </Typography>
                                                    <Typography sx={{ fontStyle: "italic", color: "#aaa", fontWeight: "500", fontSize: "14px" }}>
                                                        Over 304 Products
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

            <Typography id="social" sx={{ borderBottom: "3px dotted #eee", marginTop: "90px", paddingBottom: "90px", marginBottom: "70px" }}>
                <Grid container justifyContent="center" spacing={0}>
                    <Grid item xs={12} sm={11.5} md={11.2} lg={9.7} xl={11.2}  >
                        <Typography >
                            <Grid container justifyContent="center" spacing={0}>
                                <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.6} xl={10}  >
                                    <Box>
                                        <Typography sx={{ fontSize: "34px", fontWeight: "700", color: "#2a2a2a" }}>
                                            Social Media
                                        </Typography>
                                        <Typography sx={{ fontStyle: "italic", color: "#aaa", fontWeight: "500", fontSize: "14px" }}>
                                            Details to details is what makes Hexashop different from the other themes.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box>
                                <Typography sx={{ marginTop: "60px", paddingRight: "15px", paddingLeft: "15px" }}>
                                    <Grid container justifyContent="center" spacing={0}>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={1.7}  >
                                            <Box className="containe">
                                                <img src={in1} alt="Avatar"  width={"100%"} className="imagee" />
                                                    <Typography className="middlee">
                                                        <Typography className="h6">                                                           
                                                        Fashion
                                                        </Typography>
                                                        <Typography className="icone">
                                                        <FaInstagram className="cone" />
                                                        </Typography>
                                                    </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={1.7}  >
                                        <Box className="containe">
                                                <img src={in2} alt="Avatar"  width={"100%"} className="imagee" />
                                                    <Typography className="middlee">
                                                        <Typography className="h6">                                                           
                                                        Fashion
                                                        </Typography>
                                                        <Typography className="icone">
                                                        <FaInstagram className="cone" />
                                                        </Typography>
                                                    </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={1.7}  >
                                        <Box className="containe">
                                                <img src={in3} alt="Avatar"  width={"100%"} className="imagee" />
                                                    <Typography className="middlee">
                                                        <Typography className="h6">                                                           
                                                        Fashion
                                                        </Typography>
                                                        <Typography className="icone">
                                                        <FaInstagram className="cone" />
                                                        </Typography>
                                                    </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={1.7}  >
                                        <Box className="containe">
                                                <img src={in4} alt="Avatar"  width={"100%"} className="imagee" />
                                                    <Typography className="middlee">
                                                        <Typography className="h6">                                                           
                                                        Fashion
                                                        </Typography>
                                                        <Typography className="icone">
                                                        <FaInstagram className="cone" />
                                                        </Typography>
                                                    </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={1.7}  >
                                        <Box className="containe">
                                                <img src={in5} alt="Avatar"  width={"100%"} className="imagee" />
                                                    <Typography className="middlee">
                                                        <Typography className="h6">                                                           
                                                        Fashion
                                                        </Typography>
                                                        <Typography className="icone">
                                                        <FaInstagram className="cone" />
                                                        </Typography>
                                                    </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={1.7}  >
                                        <Box className="containe">
                                                <img src={in6} alt="Avatar"  width={"100%"} className="imagee" />
                                                    <Typography className="middlee">
                                                        <Typography className="h6">                                                           
                                                        Fashion
                                                        </Typography>
                                                        <Typography className="icone">
                                                        <FaInstagram className="cone" />
                                                        </Typography>
                                                    </Typography>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Typography>
                            </Box>
                        </Typography>
                    </Grid>

                </Grid>
            </Typography>
            <Typography sx={{ marginTop: "90px", marginBottom: "100px" }}>
                <Grid container justifyContent="center" spacing={0}>
                    <Grid item xs={11.5} sm={11.5} md={11.8} lg={11.4} xl={12}  >
                        <Grid container justifyContent="center" spacing={6}>

                            <Grid item xs={12} sm={11.5} md={7} lg={6} xl={6}  >
                                <Box sx={{ marginBottom: "30px" }}>
                                    <Typography sx={{ fontSize: "34px", fontWeight: "700", color: "#2a2a2a", lineHeight: "55px" }}>
                                        By Subscribing To Our Newsletter You Can Get 30% Off
                                    </Typography>
                                    <Typography sx={{ fontStyle: "italic", color: "#aaa", fontWeight: "500", fontSize: "14px" }}>
                                        Details to details is what makes Hexashop different from the other themes.
                                    </Typography>
                                </Box>
                                <Box sx={{ gap: "30px",marginLeft:{xl:"-3%",lg:"-3%",md:"-3%"} }}>
                                    <Grid container justifyContent="center" spacing={3}>
                                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                                            <Typography>
                                                <input name="name" type="text" id="name" placeholder="Your Name" required=""
                                                />
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                                            <Typography>
                                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required="" />
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={1.2} md={1.2} lg={1.2} xl={1.2} >
                                            <Typography>
                                                <button type="submit" id="but" style={{ width: "100%" }} ><FaTelegramPlane sx={{ fontSize: "interit", marginTop: "-5px", width: "100%" }} /></button>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sm={11.5} md={4} lg={4} xl={3.5}  >
                                <Grid container justifyContent="center" spacing={0} sx={{ marginTop: {xs:"30px",sm:"30px",md:"0px",lg:"0px",xl:"0px"} }}>

                                    <Grid item xs={5.5} sm={6} md={6} lg={4} xl={5}  >
                                        <Typography id="ul">
                                            <Typography id="li">Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></Typography>
                                            <Typography id="li">Phone:<br /><span>010-020-0340</span></Typography>
                                            <Typography id="li">Office Location:<br /><span>North Miami Beach</span></Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5.5} sm={6} md={6} lg={4} xl={5} >
                                        <Typography id="ul">
                                            <Typography id="li">Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></Typography>
                                            <Typography id="li">Email:<br /><span>info@company.com</span></Typography>
                                            <Typography id="li">Social Media:<br /><span>
                                                <Link href="#" sx={{ fontSize: "14px", fontWeight: "400", color: "#aaa", textDecoration: "none" }}>Facebook</Link>, <Link href="#" sx={{ fontSize: "14px", fontWeight: "400", color: "#aaa", textDecoration: "none" }}>Instagram</Link>, <Link href="#" sx={{ fontSize: "14px", fontWeight: "400", color: "#aaa", textDecoration: "none" }}>Behance</Link>, <Link href="#" sx={{ fontSize: "14px", fontWeight: "400", color: "#aaa", textDecoration: "none" }}>Linkedin</Link></span></Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
            <Typography className="npc" sx={{ marginTop: "60px", padding: "60px 0px 30px 0px", background: "#2a2a2a" }}>
                <Box  >
                    <Grid container justifyContent="center" spacing={0} >
                        <Grid item xs={12} sm={10} md={4} lg={3.2} xl={2.5}  >
                            <Card sx={{ background: "#2a2a2a", color: "#fff", border: "0px" }}>
                                <Box sx={{ marginLeft: "5%" }} >
                                    <img src={con1} alt="" />
                                </Box>
                                <CardContent>
                                    <Typography sx={{ marginBottom: "15px", fontSize: "14px" }}>
                                        16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: "20px", fontSize: "15px" }}>
                                        hexashop@company.com
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: "20px", fontSize: "15px" }}>
                                        010-020-0340
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={12} sm={10} md={2.4} lg={2.4} xl={2.5}   >
                            <CardContent sx={{ color: "#fff" }}>
                                <Typography sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "16px", fontWeight: "700" }}>
                                    Shopping &amp; Categories
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }} >
                                    Men’s Shopping
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    Women’s Shopping
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    Kid's Shopping
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={10} md={2.4} lg={2.4} xl={2.5}   >
                            <CardContent sx={{ color: "#fff" }}>
                                <Typography sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "16px", fontWeight: "700" }}>
                                    Useful Links
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }} >
                                    Homepage
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    About Us
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    Help
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    Contact Us
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={10} md={2.4} lg={2.4} xl={2}   >
                            <CardContent sx={{ color: "#fff" }}>
                                <Typography sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "16px", fontWeight: "700" }}>
                                    Help &amp; Information
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }} >
                                    Help
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    FAQ's
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    Shipping
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px" }}>
                                    Tracking ID
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={9.5} sm={9.5} md={9.5} lg={9.5} xl={9.5}   >
                            <Box sx={{ marginTop: "30px", paddingTop: "30px", textAlign: "center", borderTop: "1px solid rgba(250,250,250,0.3)" }}>
                                <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: "300", lineHeight: "-3px", marginBottom: "15px" }}>
                                    Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. <br />
                                    "Design:" <a style={{color:"#cff",textDecoration:"none"}}>TemplateMo</a>
                                </Typography>
                                <Box>
                                    <Link href="#" sx={{ fontSize: "22px", color: "#cff", margin: "0px 10px", textDecoration: "none" }} id="icon"><FaFacebookF sx={{ fontSize: "inherit" }} /></Link>
                                    <Link href="#" sx={{ fontSize: "22px", color: "#cff", margin: "0px 10px" }} id="icon"><FaTwitter sx={{ fontSize: "inherit" }} /></Link>
                                    <Link href="#" sx={{ fontSize: "22px", color: "#cff", margin: "0px 10px" }} id="icon"><FaLinkedinIn sx={{ fontSize: "inherit" }} /></Link>
                                    <Link href="#" sx={{ fontSize: "22px", color: "#cff", margin: "0px 10px" }} id="icon"><FaBehance sx={{ fontSize: "inherit" }} /></Link>
                                </Box>
                            </Box>

                        </Grid>


                    </Grid>

                </Box>
            </Typography>
        </>




    )

}
export default Explor