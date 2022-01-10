import React from "react";
import styles from "./FormsControls.module.css"


const FormControl = ({input, meta, child, element, ...props}) => {
    // {...props} - все пропсы передаем внутрь конечному потребителю
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "") }>
            <div>
               {props.children}     
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>    
    )
}

//деструктуризация {input, meta, child, ...restProps}  ---- {...props}><textarea {...input} {...restProps}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

//export const CreateField = () => 