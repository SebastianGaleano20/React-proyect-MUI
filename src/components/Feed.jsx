import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

const CardStyled = styled(Card)({
    width: {
      xs: '100%',    
      sm: '80%',     
      md: '60%',   
      lg: '45%'
    },
    height: {
      xs: 'auto', 
      sm: 'auto',   
      md: '400px',  
      lg: '500px' 
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const ImageStyled = styled(CardMedia)({
  height: {
    xs: '150px',  
    sm: '200px',  
    md: '250px', 
    lg: '300px'  
  },
  width: '100%',
  objectFit: 'cover',
});
export const Feed = () => {
  return (
    <Grid container spacing={3} p={2} justifyContent='center' alignContent='center' alignItems='center'  bgcolor={'background.default'} color={'text.primary'}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardStyled>
          <ImageStyled
          component='img'
            image="https://veaargentina.vtexassets.com/arquivos/ids/817921/Alimento-Cat-Chow-Gatitos-Pescado-Carne-Vegetales-1-882637.jpg?v=638481881015700000"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CATPRO Premium
            </Typography>
            <Typography variant="body2" >
            Gato barato comida para gato
            </Typography>
          </CardContent>
        </CardStyled>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardStyled>
          <ImageStyled
          component='img'
            image="https://ardiaprod.vtexassets.com/arquivos/ids/290803/Alimento-Para-Gato-Pescado-y-Salmon-Gati-x-3-Kg-_1.jpg?v=638430138597500000"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gati PURINA
            </Typography>
            <Typography variant="body2" >
              Bolsa de 10kg sabor carne para gatos adultos
            </Typography>
          </CardContent>
        </CardStyled>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardStyled>
          <ImageStyled
            image="https://jumboargentina.vtexassets.com/arquivos/ids/586411/Alimento-Para-Gatos-Whiskas-Pasta-Salmon-85-Gr-1-22182.jpg?v=637265784197070000"
            component='img'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Alimento Para Gatos Whiskas
            </Typography>
            <Typography variant="body2" >
              Sobre de 85gr sabor Salmon
            </Typography>
          </CardContent>
        </CardStyled>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardStyled>
          <ImageStyled
            image="https://jumboargentina.vtexassets.com/arquivos/ids/586411/Alimento-Para-Gatos-Whiskas-Pasta-Salmon-85-Gr-1-22182.jpg?v=637265784197070000"
            component='img'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Alimento Para Gatos Whiskas
            </Typography>
            <Typography variant="body2" >
              Sobre de 85gr sabor Salmon
            </Typography>
          </CardContent>
        </CardStyled>
      </Grid>
    </Grid>
  )
}