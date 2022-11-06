import { makeObservable, action, runInAction } from "mobx";
import axios, { publicAxios } from "config/axios";
import { privatePaths, publicPaths } from "config/path";
import { toast } from "react-toastify";

class AuthStore {
  constructor() {
    makeObservable(this, {
      login: action,
      logout: action,
    });
  }

  login = ({ payload, navigate }) => {
    runInAction(() => {
      this.isLoadingLogin = true;
    });

    publicAxios
      .post("/auth/login", payload)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.accessToken);
        localStorage.setItem("refresh_token", data.refreshToken);
        navigate &&
          navigate(privatePaths.home, {
            replace: true,
          });
      })
      .catch(() => {
        toast.error("Login was failed");
      });
  };

  registration = ({ payload, changeFormStatus }) => {
    runInAction(() => {
      this.isLoadingLogin = true;
    });
    publicAxios
      .post("/auth/register", payload)
      .then(() => {
        runInAction(() => {
          toast.success("You was succesfully registered");
        });
        changeFormStatus && changeFormStatus();
      })
      .catch(() => {
        toast.error("Registration was failed");
      });
  };

  logout = ({ navigate }) => {
    axios
      .get("/auth/logout")
      .then(() => {
        localStorage.clear();
        navigate && navigate(publicPaths.auth, { replace: true });
      })
      .catch(() => {
        toast.error("Logout was failed");
      });
  };
}

export default new AuthStore();
