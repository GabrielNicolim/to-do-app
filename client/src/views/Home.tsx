import List from '../components/List';
import Header from '../components/Header';
import ExitIcon from '../components/icons/ExitIcon';

const Home : React.FC = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className='w-screen min-h-screen bg-light-blue'>
            <Header >
                <button
                    className='bg-red rounded-full p-2 hover:bg-dark-red ease-in-out duration-200'
                    onClick={ handleLogout }
                >
                    <ExitIcon />
                </button>
            </Header>

            <div className='w-screen flex justify-center py-5 px-3 md:px-5'>
                <List />
            </div>
        </div>
    );
}

export default Home;
