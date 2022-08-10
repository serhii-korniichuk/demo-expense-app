import { useField } from "formik";

const TextInput = ({ label, isLast, clz, ...props }) => {
   const [field, meta] = useField(props);
   const clazz = `sign__fwrapper-${clz}`
   return (
      <>
         <div className={`sign__fwrapper ${JSON.parse(isLast) ? clazz : ""}`}>
            <h2 className="sign__field">{label}</h2>
            <input {...props} {...field}
               autoComplete="off" />
            {meta.touched && meta.error ? (
               <div className="sign__field-error">{meta.error}</div>
            ) : null}
         </div>
      </>
   )
}

export default TextInput; 