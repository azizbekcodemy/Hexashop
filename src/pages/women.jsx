import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from "react-elastic-carousel";
import Item from "../Item";
import { FaStar, FaEye, FaShoppingCart } from "react-icons/fa"
import Link from '@mui/material/Link';
import car1 from "../pages/images/women-01.jpg"
import car2 from "../pages/images/women-02.jpg"
import car3 from "../pages/images/women-03.jpg"

import "./style.css"
const breakPoints = [
    { width: 1, itemsToShow: 1,showArrows:false },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];



function Women() {
    return (
        <>
            <Typography id="women" sx={{ borderBottom: "3px dotted #eee", marginTop: "90px", paddingBottom: "90px", marginBottom: "70px" }}>
                <Grid container justifyContent="center" spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={10.6} xl={11.2}  >
                        <Typography >
                            <Grid container justifyContent="center" spacing={0}>
                                <Grid item xs={10.2} sm={9.6} md={10.3} lg={10.5} xl={9.3}  >
                                    <Box>
                                        <Typography sx={{ fontSize: "34px", fontWeight: "700", color: "#2a2a2a" }}>
                                        Women's Latest
                                        </Typography>
                                        <Typography sx={{ fontStyle: "italic", color: "#aaa", fontWeight: "500", fontSize: "14px" }}>
                                            Details to details is what makes Hexashop different from the other themes.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Typography>
                        <Box>
                            <Grid container justifyContent="center">
                                <Grid xs={12} sm={12} md={12} lg={12} xl={10.5}>
                                    <Box sx={{
                                        marginTop:{xs: "-5%", md: "-2%", xl: "-2%",sm:"-3%"}
                                    }}>
                                        <Carousel className="lorem" pagination={false}  breakPoints={breakPoints} >

                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car1} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in"/></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        New Green Jacket
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                        $75.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car2} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        Classic Dress
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                            $45.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car3} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        Spring Collection
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                            $130.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car1} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar  className="in"/></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        New Green Jacket
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                            $75.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car2} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        Classic Dress
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                            $45.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car3} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar  className="in"/></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        Spring Collection
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                            $130.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car1} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        New Green Jacket
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                        $75.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"20%"}}>
                                                <Box className="container">
                                                    <img src={car2} alt="Avatar" class="image" />
                                                    <Typography className="overlay"  sx={{bottom:{xs:"-30px",lg:"-20px"}}}>
                                                        <Typography class="text" >
                                                            <Link className="menicon"> <FaEye className="in"/></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaStar className="in" /></Link>
                                                        </Typography>
                                                        <Typography class="text" >
                                                            <Link className="menicon"><FaShoppingCart className="in" /></Link>
                                                        </Typography>
                                                    </Typography>

                                                </Box>
                                                <Box >
                                                    <Typography sx={{ paddingTop: "25px", position: "relative", zIndex: "3", backgroundColor: "#fff", width: "93%" ,margin:"0px 10px"}}>
                                                        <Typography sx={{ fontSize: "22px", clor: "#2a2a2a", fontWeight: "700", marginBottom: "8px", marginRight: "30%" }}>
                                                        Classic Dress
                                                        </Typography>   <Typography sx={{ position: "absolute", right: "0", top: "30px", fontSize: "15px" }}>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </Typography>
                                                        <Typography sx={{ fontSize: "18px", clor: "#a1a1a1", fontWeight: 500, display: "block" }}>
                                                        $45.00
                                                        </Typography>


                                                    </Typography>

                                                </Box>
                                            </Grid>

                                           
                                        </Carousel>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>


                    </Grid>
                </Grid>
            </Typography >

        </>

    )

}

export default Women