import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Rating, Typography} from "@mui/material";

const ArtCard = ({pathToImage, name, text}) => {
    const [stars, setStars] = React.useState(null);

    return (
        <Card>
            <CardMedia component={"img"} image={pathToImage} height={200} alt={"beautiful"}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size={"small"}>Share</Button>
                <Button size={"small"}>Learn More</Button>
                <Rating
                    sx={{paddingLeft: 2}}
                    value={stars}
                    onChange={(event, newValue) => {
                        setStars(newValue);
                    }}
                />
            </CardActions>
        </Card>
    );
};

export default ArtCard;