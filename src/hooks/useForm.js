import { useState } from "react";
export default function useForm(submitHandler, initialValues){

    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state =>({
            ...state,
           [e.target.name] : e.target.value
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with values:", values);
        submitHandler(values);
    }
return {
    values,
    onChange,
    onSubmit,
    setValues

}
} 