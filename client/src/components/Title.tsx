interface PropsInterface {
    text: string,
}

const Title : React.FC<PropsInterface> = ({ text }) => {
    return (
        <h1 className='text-lg font-bold text-dark-blue'>{ text }</h1>
    );
}

export default Title;
