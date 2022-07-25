import { Button } from "@mui/material"
import { useContext } from "react";
import { Context } from "../../..";


const LogoutButton:React.FC = () => {
  const { store } = useContext(Context);
  const logout = (): void => {
    store.logout();
  }

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={logout}
      sx={{
        borderRadius: '0px',
        mt: '3%',
        width: '98px',
        height: '44px',
        background: '#B2D0AD',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '155%',
        textTransform: 'capitalize'
      }}
    >see you</Button>
  )
}

export default LogoutButton