const useAuth = () => {

    return {
        isAuth: !!sessionStorage.getItem('accessToken'),
        accessToken: sessionStorage.getItem('accessToken'),
        refreshToken: sessionStorage.getItem('refreshToken')
    }
};

export default useAuth;