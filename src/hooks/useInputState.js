import {useState} from "react"
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handlerChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value,handlerChange,reset];
}