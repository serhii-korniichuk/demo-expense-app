import style from './Home.module.scss'
import Header from "../header/Header"
import congrat from '../../assets/congrat.svg'
import main from '../../assets/main.svg'
import {useEffect} from "react"
import {Navigate, useNavigate} from "react-router"
import Auth from "../auth/Auth"
import {useDispatch, useSelector} from "react-redux"
import {deleteUserTC} from "../../bll/app-reducer"

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.app)
    const navigate = useNavigate()

    useEffect(() => {
        if (data.username) {
            navigate(`/user/${data.username}`)
            window.document.body.style.background = '#5D5D67'
        }
    }, [])

    const onClickHandler = () => {
        dispatch(deleteUserTC())
    }

    if (!data.username) {
        return <Navigate to={`/*`}/> && <Auth/>
    }

    return (
        <div className={style.home}>
            <Header/>
            <div className={style.main}>
                <div className={style.congratulations}>
                    <span className={style.title}>Congratulations</span>
                    <img src={congrat} alt=""/>
                </div>
                <div className={style.description}>Now you are on the main page. Soon we will provide<br/> you with
                    detailed feedback on the result of your work
                </div>
                <button onClick={onClickHandler}>See You</button>
                <img className={style.mainIcon} src={main} alt=""/>
            </div>
        </div>
    );
}

export default Home;