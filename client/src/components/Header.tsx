const Header : React.FC = ({ children }) => {
    return (
        <header className="bg-dark-blue flex justify-between items-center py-3 px-3 md:px-5 drop-shadow-lg">
            <h1 className="text-xl text-white drop-shadow-lg">
                To do List
            </h1>

            <div>
                { children }
            </div>
        </header>
    );  
}

export default Header;
