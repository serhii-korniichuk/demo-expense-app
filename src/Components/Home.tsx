import {AppRootStateType, store} from "../Reducers/store";
import {logoutThunk} from "../Reducers/authReducer";
import {Navigate} from "react-router-dom";
import React, {CSSProperties} from "react";
import {useSelector} from "react-redux";
import styles from "../Main/Main.module.scss"
import classes from "../Components/Home.module.scss"
import Button from "@mui/material/Button";

type InCodeType = {
    style: CSSProperties
}

export const Home = (props: InCodeType) => {
    const {style} = props
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.authReducer.isRegistered)
    const dispatch = store.dispatch

    const onClickHandler = () => {
        dispatch(logoutThunk() as any)
    }

    if (!isRegistered) {
        return <Navigate to={"/"}/>
    }
    return (
        <div className={`${styles.mainBlock} ${classes.block}`}>
            <div className={classes.inCodeLogo}>
                <div className={`${classes.inCodeLogoText} ${classes.gapHeader}`}>InCode</div>
                <div className={`${classes.finance} ${classes.gapHeader}`}>Finance</div>
            </div>
            <div>
                <div className={classes.congratulations}>
                    <h1>CONGRATULATIONS</h1>
                    <p> Now you are on the main page. Soon we will provide <br/> you with detailed feedback on the
                        result of
                        your work</p>
                    <div>
                        <Button size="small" variant="contained" className={classes.seeYouButton}  color={'success'} onClick={onClickHandler}>See you</Button>
                    </div>

                </div>
                <div className={classes.photo} style={style}></div>
            </div>
        </div>
    )
}