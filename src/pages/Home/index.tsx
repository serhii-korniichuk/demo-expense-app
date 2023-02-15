import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SiteLogo } from '../../components';
import img from '../../assets/img/image.png'
import { resetToken } from "../../features/currentUser/userSlice";
import { logOut } from '../../api';
import { useAppSelector } from '../../app/hooks';

import './index.scss';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useAppSelector(state => state.user.accessToken)

    const logout = async () => {
        try {
            await logOut(token);
            dispatch(resetToken())
            navigate('/auth', { replace: true })
        } catch (e: any) {
            toast.error("Server error!")
        }
    }
    return (
        <div className='dashboard'>
            <div className='dashboard__content'>
                <SiteLogo />
                <div className='dashboard__title'>
                    Congratulations
                </div>
                <div className='dashboard__subtitle'>
                    Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
                </div>
                <div className='dashboard__button'>
                    <button className='dashboard__button--logout' onClick={logout}>
                        Log Out
                    </button>
                </div>
                <div className='dashboard__image--wrapper'>
                    <img src={img} alt='people' className='image'/>
                </div>
            </div>
        </div>
    )
}

export default Home;
