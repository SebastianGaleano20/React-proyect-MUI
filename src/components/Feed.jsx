import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

const cardStyle = {
  width:'280px', 
  height:'400px', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
const imageStyle = {
  height: '300px',  // Altura fija para la imagen
  width: '100%',
  objectFit: 'cover', // Mantiene la proporción de la imagen
};
export const Feed = () => {
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            image="https://veaargentina.vtexassets.com/arquivos/ids/817921/Alimento-Cat-Chow-Gatitos-Pescado-Carne-Vegetales-1-882637.jpg?v=638481881015700000"
            sx={imageStyle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CATPRO Premium
            </Typography>
            <Typography variant="body2" >
            Gato barato comida para gato
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card sx={cardStyle}>
          <CardMedia
            component="img"
            image="https://ardiaprod.vtexassets.com/arquivos/ids/290803/Alimento-Para-Gato-Pescado-y-Salmon-Gati-x-3-Kg-_1.jpg?v=638430138597500000"
            sx={imageStyle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gati PURINA
            </Typography>
            <Typography variant="body2" >
              Bolsa de 10kg sabor carne para gatos adultos
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card sx={cardStyle}>
          <CardMedia
            component="img"
            image="https://jumboargentina.vtexassets.com/arquivos/ids/586411/Alimento-Para-Gatos-Whiskas-Pasta-Salmon-85-Gr-1-22182.jpg?v=637265784197070000"
            sx={imageStyle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Alimento Para Gatos Whiskas
            </Typography>
            <Typography variant="body2" >
              Sobre de 85gr sabor Salmon
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card sx={cardStyle}>
          <CardMedia
            component="img"
            image="https://jumboargentina.vtexassets.com/arquivos/ids/586411/Alimento-Para-Gatos-Whiskas-Pasta-Salmon-85-Gr-1-22182.jpg?v=637265784197070000"
            sx={imageStyle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Alimento Para Gatos Whiskas
            </Typography>
            <Typography variant="body2" >
              Sobre de 85gr sabor Salmon
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}