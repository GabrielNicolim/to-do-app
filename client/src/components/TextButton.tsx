import { Link } from 'react-router-dom';

interface PropsInterface {
    to: string,
    text: string,
}

const TextButton : React.FC<PropsInterface> = ({ to, text }) => {
    return (
        <Link to={ to }>
            <button className='w-full text-center cursor-pointer mt-3 text-blue hover:text-dark-blue ease-in-out duration-200'>
                { text }
            </button>
        </Link>
    );
};

export default TextButton;