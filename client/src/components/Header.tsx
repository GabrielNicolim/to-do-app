const Header : React.FC = ({ children }) => {
    return (
        <header className="flex justify-center items-center w-screen bg-dark-blue">
            <div className="flex justify-between items-center w-screen md:w-8/12 lg:w-6/12 py-3 px-3 drop-shadow-lg">
                <h1 className="text-xl text-white drop-shadow-lg">
                    To do List
                </h1>

                <div>
                    { children }
                </div>
            </div>
        </header>
    );  
}

export default Header;
