import styles from './styles.module.scss';

const Header = ({className}: {className: string}) => {
    return(
        <div className={className}>
            <h3 className={styles.heading}>InCode</h3>
            <span className={styles.subHeading}>Finance</span>
        </div>
    )
}

export default Header;