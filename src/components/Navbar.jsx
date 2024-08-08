import { AppBar, Toolbar, Typography, styled, InputBase, Avatar } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

//Created styled foir toolbar
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('section')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled('section')(({ theme }) => ({
  display: 'none', 
  gap: '10px', 
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  }
}))

const UserBox = styled('Box')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]:{
    display: 'none'
  }
}))
export const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant='h6' component='h2' sx={{ display: { xs: 'none', sm: 'block' } }}>PetLeon</Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} alt="Dracode" src="https://sebastiang.netlify.app/logo.svg" />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} alt="Dracode" src="https://sebastiang.netlify.app/logo.svg" />
        </UserBox>
      </StyledToolbar></AppBar>
  )
}