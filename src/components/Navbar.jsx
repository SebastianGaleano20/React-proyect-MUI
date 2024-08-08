import styled from "@emotion/styled"
import { AppBar, Toolbar } from "@mui/material"
import Typography from "@mui/material"

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

export const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant='h6' component='h2'>PetLeon</Typography>
      </StyledToolbar></AppBar>
  )
}