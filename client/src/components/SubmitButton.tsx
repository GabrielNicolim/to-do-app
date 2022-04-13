interface PropsInterface {
    text: string;
}

const SubmitButton : React.FC<PropsInterface> = ({ text }) => {
    return (
        <button 
            type="submit"
            className="bg-blue text-white w-full rounded-sm py-2 mt-3 hover:bg-dark-blue ease-in-out duration-200"
        >
            { text }
        </button>
    );
}

export default SubmitButton;
