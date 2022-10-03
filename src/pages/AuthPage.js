import React, { useEffect } from "react";
import { observer } from "mobx-react";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import store from "../stores/store";
import Layout from "../layout";
import errorStore from "../stores/errorStore";

const AuthPage = () => {
  useEffect(() => {
    errorStore.clearAllErrors();
  }, [store.isSignIn]);

  return (
    <Layout
      onlyPublicRoute
      seo={{
        metaTitle: "Login page",
        metaDescription: "Sign in or sign up to InCode!",
      }}
    >
      {store.isSignIn ? <SignIn /> : <SignUp />}
    </Layout>
  );
};

export default observer(AuthPage);
