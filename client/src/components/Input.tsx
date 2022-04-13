interface PropsInterface {
    type: string;
    handleChange: (e : any) => void;
    placeholder: string;
    name: string;
    isRequired: boolean;
}

const Input : React.FC<PropsInterface> = ({ type, handleChange, placeholder, name, isRequired }) => {
    return (
        <input  
            type={ type }
            onChange={ handleChange }
            placeholder={ placeholder }
            name={ name }
            required={ isRequired }
            className='w-full h-10 p-2 my-2 border border-blue rounded-md focus:border-light-blue'
        />
    );
}

export default Input;
