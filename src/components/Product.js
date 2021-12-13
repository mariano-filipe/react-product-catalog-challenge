import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

export default function Product(props) {
    let imageId = (props.product.imageUrl.split("images/"))[1];
    let imageName = require(`../assets/images/${imageId}`);

    return (
        <Card 
            style={{
                marginTop: '32px',
                width: '13.8vw',
                height: '35.1vh',
                background: '#FFF',
                borderRadius: '8px',
                boxShadow: '2px 3px 12px rgba(0, 0, 0, 0.1)'
            }}
        >
            <CardActionArea>
                <Box>
                    <CardMedia
                        component="img"
                        image={imageName.default}
                        alt={props.product.name}
                        style={{height: '24.3vh', zIndex: 1}}
                    />

                    {props.countSelected ?
                        <Box
                            style={{
                                borderRadius: '50%',
                                background: '#0079E6',
                                color: '#FFFFFF',
                                fontSize: '14px',
                                fontFamily: 'Roboto',
                                textAlign: 'center',
                                height: '40px',
                                width: '40px',
                                marginTop: '-23vh',
                                marginRight: '0.6vw',
                                position: 'relative',
                                float: 'right',
                                lineHeight: '40px'
                            }}
                        >
                            {props.countSelected}
                        </Box>
                    :
                        null
                    }
                    

                    <Box
                        style={{
                            borderRadius: '16px',
                            background: '#0079E6',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            fontFamily: 'Roboto',
                            textAlign: 'center',
                            marginTop: '-4.3vh',
                            marginRight: '0.6vw',
                            position: 'relative',
                            padding: '0.5vh 0.5vw',
                            float: 'right'
                        }}
                    >
                        R$ {props.product.price}
                    </Box>
                </Box>
                <CardContent>
                    <Typography
                        gutterBottom
                        component="div"
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Roboto'
                        }}
                    >
                        {props.product.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}