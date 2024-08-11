import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material"

export const Feed = () => {
  return (
    <Box p={2}>
      <Card>
        <Container sx={{
          width: '200px',
          height: '200px'
        }} >
        <CardMedia sx={{
          width: '100%',
          height: "100%",
          objectFit: "contain"
        }}
          image="https://static.vecteezy.com/system/resources/previews/005/601/776/non_2x/pet-shop-logo-vector.jpg"
        />
        </Container>
         <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </Card>
    </Box>
  )
}