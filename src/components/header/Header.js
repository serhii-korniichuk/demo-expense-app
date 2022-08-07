import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <span className={style.title}>InCode</span>
            <span className={style.subTitle}>Finance</span>
        </div>
    );
}

export default Header;