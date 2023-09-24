import {Card, Container, Grid, Image} from "semantic-ui-react";
import React from "react";
import {
    alfredo1,
    alfredo10,
    alfredo11,
    alfredo12,
    alfredo13,
    alfredo2,
    alfredo3,
    alfredo4,
    alfredo5,
    alfredo6,
    alfredo7,
    alfredo8,
    alfredo9,
    bubbleTea,
    climbing,
    halfHead,
    noHead,
    oneHead,
    pinkBallHead,
    purpleBallHead,
    redBallHead
} from "./pictures";

const images = [
    {src: alfredo1, title: 'Image 1', description: 'Image 1'},
    {src: alfredo2, title: 'Image 2', description: 'Image 2'},
    {src: alfredo3, title: 'Image 3', description: 'Image 3'},
    {src: alfredo4, title: 'Image 4', description: 'Image 4'},
    {src: alfredo5, title: 'Image 5', description: 'Image 5'},
    {src: alfredo6, title: 'Image 6', description: 'Image 6'},
    {src: alfredo7, title: 'Image 7', description: 'Image 7'},
    {src: alfredo8, title: 'Image 8', description: 'Image 8'},
    {src: alfredo9, title: 'Image 9', description: 'Image 9'},
    {src: alfredo10, title: 'Image 10', description: 'Image 10'},
    {src: alfredo11, title: 'Image 11', description: 'Image 11'},
    {src: alfredo12, title: 'Image 12', description: 'Image 12'},
    {src: alfredo13, title: 'Image 13', description: 'Image 13'},
    {src: bubbleTea, title: 'Image 14', description: 'Image 14'},
    {src: climbing, title: 'Image 15', description: 'Image 15'},
    {src: halfHead, title: 'Image 16', description: 'Image 16'},
    {src: noHead, title: 'Image 17', description: 'Image 17'},
    {src: oneHead, title: 'Image 18', description: 'Image 18'},
    {src: pinkBallHead, title: 'Image 19', description: 'Image 19'},
    {src: purpleBallHead, title: 'Image 20', description: 'Image 20'},
    {src: redBallHead, title: 'Image 21', description: 'Image 21'},
]

const Gallery = () => {
   return <Container>
       <Grid  columns={3}>
        {images.map(image => (
            <Grid.Column key={image.title}>
                <Card>
                <Image src={image.src}/>
                </Card>
            </Grid.Column>
        ))}
</Grid>
        </Container>
}

export default Gallery