import style from './InputBase.module.scss'
import eyeOff from '../../../assets/eye-off.svg'

const InputBase = ({title, placeholder, type, setValue, value}) => {

    return (
        <div className={style.inputBase}>
            <label>{title}</label>
            <input placeholder={placeholder} type={type} onChange={setValue} value={value}/>
            {type === 'password' && <img src={eyeOff} alt=""/>}
        </div>
    );
}

export default InputBase;