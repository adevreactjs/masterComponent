import ReactSelect from "react-select";
import './Select.scss'
import { useState } from "react";

const options = [
    {value: 'in-procces', label: 'В процесі'},
    {value: 'date', label: 'Датою'},
    {value: 'delivered', label: 'Доставлено'},
    {value: 'cancel', label: 'Скасовано'},
    {value: 'drive', label: 'Їде до Вас'},
]
const Select = ({...rest}: any) => {    
    const [value, setValue] = useState('date')

    const getValue = () => {
        return value ? options.find(opt => opt.value === value) : '';        
    }

    const onChange = (newValue: any) => {
        setValue(newValue.value)
    }

    return ( 
            <ReactSelect 
                classNamePrefix="react-select" 
                unstyled 
                options={options} 
                value={getValue()} 
                onChange={onChange} 
            />
   
    );
}
 
export default Select;