import React from "react";
import { Box, Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { CacheLoad } from "../../infrastructure/cache-manager";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/store/auth";
import { useAppDispatch } from "../../redux/store/store.hooks";

export const HomePage: React.FC = () => {
  const token = CacheLoad('accessToken');

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    console.log('Log Out');

    try {
      await dispatch(logoutUser());
      await navigate('/signin')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Box
      className="mainContainer smallSizeMainContainer"
    >
        <h3 className="nameCompany">InCode</h3>  
        <p className="companyType">Finance</p>
        <h1 className="mainHeader textCenter"
          style={{
            margin: '100px 0 0 0',
          }}
        >Congratulations</h1>
        <p className="mainText textCenter">Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</p>
        <div style={{
          width: '100px',
          margin: 'auto',
        }}>
          <Button 
              variant="contained"
              type="submit"
              onClick={handleClick}
              sx={{
                backgroundColor: '#539713',
                height: 44,
                borderRadius: 0,
                marginTop: '8px',
                '&:hover': {backgroundColor: '#3c6b10'}
              }}
            >
              Log Out
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '70px',
            }}
          >
            <img src='img/home.png' alt="home img" />
          </div>
    </Box>
  );
}