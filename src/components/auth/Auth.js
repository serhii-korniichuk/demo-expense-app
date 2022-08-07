import style from './Auth.module.scss'
import Header from "../header/Header"
import InputBase from "./facades/InputBase"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setAuthModelAC, setErrorMessageAC, submittingTC} from "../../bll/app-reducer"
import {Navigate, useNavigate} from "react-router"
import Home from "../home/Home"

const Auth = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.app)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        if (!data.username) {
            navigate('/')
            window.document.body.style.background = '#FFF'
        }
    }, [])

    useEffect(() => {
        if (!data.errorMessage) return
        setTimeout(() => {
            dispatch(setErrorMessageAC(''))
        }, 3000)
    }, [data.errorMessage])

    const onClickHandler = () => {
        data.authModel === 'sing-up'
            ? dispatch(setAuthModelAC('sing-in'))
            : dispatch(setAuthModelAC('sing-up'))
    }


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(submittingTC({
            name,
            login,
            password,
            confirmPassword,
            authModel: data.authModel
        }))
    }

    if (data.token) {
        return <Navigate to={`/user/${data.username}`}/> && <Home/>
    }

    return (
        <div className={style.auth}>
            <Header/>
            <span className={style.title}>{data.authModel === 'sing-up' ? 'sing up' : 'sing in'}</span>
            <form>
                {data.authModel === 'sing-up' &&
                    <InputBase title={'Full Name'}
                               placeholder={'Example Name'}
                               type={'text'}
                               setValue={(name) => setName(name.target.value)}
                               value={name}/>}
                <InputBase title={'User Name'}
                           placeholder={'Example123'}
                           type={'text'}
                           setValue={(login) => setLogin(login.target.value)}
                           value={login}/>
                <InputBase title={'Password'}
                           type={'password'}
                           setValue={(password) => setPassword(password.target.value)}
                           value={password}/>
                {data.authModel === 'sing-up' &&
                    <InputBase title={'Confirm Password'}
                               type={'password'}
                               setValue={(confirmPassword) => setConfirmPassword(confirmPassword.target.value)}
                               value={confirmPassword}/>}
                <div className={style.error}>{data.errorMessage}</div>
                <input type={'Submit'} defaultValue={data.authModel === 'sing-up' ? 'Sign Up' : 'Sing In'}
                       className={style.inputSubmit}
                       onClick={onSubmit}/>
            </form>
            {
                data.authModel === 'sing-up'
                    ? <div className={style.switch}>I have an account.
                        <span onClick={onClickHandler}>Go to Sign in</span></div>
                    : <div className={style.switch}>Don’t have account yet?
                        <span onClick={onClickHandler}>New Account</span></div>
            }
        </div>
    );
}

export default Auth;