import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Showmore from './Showmore';

export default function ProductCard() {

    const [cardData, setcardData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(apidata => {
            setcardData(apidata.data)
        })
        console.log(cardData)
    }, [])
    return (
        <>
            <Stack
                flexWrap='wrap'
                direction={{ xs: 'column', sm: 'row' }}
                backgroundColor='lightgrey'
                justifyContent='center'
                alignItems='center'
            >
                {
                    cardData.map((value) => {
                        return (

                            <Card sx={{ maxWidth: 275, m: 1, padding:"10px"}} >
                                <CardMedia
                                    sx={{ height: 250, width: '100%', padding:"10px",objectFit:'cover' }}
                                    image={value.image}
                                />
                                <CardContent>
                                    <Typography  variant="subtitle" component="div">
                                        <strong>Category:</strong> {value.category}
                                    </Typography>
                                    <Typography  variant="h6" component="div">
                                        <Showmore readmore={value.title} />
                                    </Typography>
                                    <Typography  variant="body" component="div">
                                        <Showmore readmore={value.description} />
                                    </Typography>

                                    <Typography variant="h6" color="text.secondary">
                                        <strong>Price:</strong>{value.price} Rs.
                                    </Typography>

                                    <Typography variant="body" color="text.secondary">
                                        Rating: {value.rating.rate}⭐
                                        Reviews: {value.rating.count}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small">Add to cards</Button>
                                    <Button variant="contained" size="small">Buy Now</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }



            </Stack>


        </>
    )
}
