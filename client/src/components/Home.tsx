
const Home : React.FC = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={ handleLogout }>Logout</button>
        </div>
    );
}

export default Home;
