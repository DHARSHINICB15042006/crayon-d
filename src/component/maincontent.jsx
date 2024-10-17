import Layout from "../component/layout.jsx";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import HotelIcon from '@mui/icons-material/Hotel'; 
import BathtubIcon from '@mui/icons-material/Bathtub';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DeleteIcon from '@mui/icons-material/Delete';
import { borderRadius, color, display, fontSize, fontWeight, height, maxHeight, padding, width } from "@mui/system";

const Estate = 'https://www.houseplans.net/news/wp-content/uploads/2023/07/51550-768.jpeg';

const styles = {
    header: {},
    scrollcontent: {
        padding: '8px 0px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    rowdetails: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginLeft: '12px',
        marginBottom: '0px',
    },
    carddetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '222px',
        height: '244px',
        border: '1px solid #E4E8EE',
        borderRadius: '6px',
        marginTop: '53px',
    },
    buildingimage: {
        width: '198px',
        height: '100px',
        borderRadius: '4px',
        marginLeft: '12px',
        marginTop: '11px',
    },
    estateRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '11.25px',
        marginTop: '10px',
    },
    estatename: {
        fontSize: '14px',
        color: '#091B29',
        fontWeight: 'bold',
    },
    price1estate: {
        color: '#F39C12',
        fontSize: '14px',
        fontWeight: 'bold',
        marginLeft: '-50px',
    },
    pricesection: {
        color: '#091B29', // Adjust the color to match the image
        fontSize: '14px',
        fontWeight: 'bold',
        marginRight: '15px',
    },
    nameandsqft: {
        fontSize: '12px',
        color: '#98A0AC',
        marginLeft: '-12px',
        marginTop: '3px',
    },
    listoficons:{
        display:'flex'
    },
    boxofbed: {
        color: '#98A0AC',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '13px',
    },
    bednum: {
        marginLeft: '8px',
        fontSize:'14px'

    },
    beddot: {
        marginLeft: '8px',
        fontSize: '18px',
    },
    apartnum:{
        fontSize:'14px',
        marginTop:'2px',
    }
};

export default function MainContent() {
    return (
        <>
            <CssBaseline />
            <Box sx={styles.scrollcontent}>
                <Box sx={styles.rowdetails}>
                    {[1, 2, 3, 4].map((item, index) => {
                        const first = index === 0;
                        return (
                            <Box key={index} sx={styles.carddetails}>
                                <Box component="img" src={Estate} alt="Building" sx={styles.buildingimage} />
                                <Box sx={styles.estateRow}>
                                    <Box sx={styles.estatename}>Jumeirah Estate</Box>
                                    <Box sx={styles.pricesection}>
                                        {first ? <Box sx={styles.price1estate}>$900.00</Box> : '$1,200'}
                                    </Box>
                                </Box>
                                <Box sx={styles.nameandsqft}>
                                    Jumeirah Golf Estate • 2000 Sq.Ft
                                </Box>
                                <Box sx={styles.listoficons}>
                                    <Box sx={styles.boxofbed}><HotelIcon sx={styles.imgbed} /> <Box sx={styles.bednum}>2 </Box><Box sx={styles.beddot}>• </Box>

                                    </Box>
                                    <Box sx={styles.boxofbed}><BathtubIcon sx={styles.imgbed} /> <Box sx={styles.bednum}>2 </Box><Box sx={styles.beddot}>• </Box>

                                    </Box>
                                    <Box sx={styles.boxofbed}><ApartmentIcon sx={styles.imgbed} /> <Box sx={styles.apartnum}>2 BHK </Box>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </>
    );
}
