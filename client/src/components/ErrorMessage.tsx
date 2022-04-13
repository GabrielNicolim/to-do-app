interface PropsInterface {
    text: string;
}

const ErrorMessage : React.FC<PropsInterface> = ({ text }) => {
    return (
        <div className="text-center text-red">
            { text }
        </div>
    );
}

export default ErrorMessage;
