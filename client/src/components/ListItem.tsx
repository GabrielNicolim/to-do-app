import TrashIcon from "./icons/TrashIcon";

const ListItem : React.FC = () => {
    return (
        <div className="flex w-full mb-4 drop-shadow-lg">
            <div
            className='bg-gray w-full flex justify-between items-center p-4 rounded-tl-md rounded-bl-md'
            >
                <input
                    type="checkbox" 
                    className="w-5 h-5 cursor-pointer"
                />
                
                <span>

                </span>
                
                <span>
                    Teste
                </span>
            </div>
            <div className="flex items-center justify-center bg-red rounded-tr-md rounded-br-md cursor-pointer w-12 lg:w-4 hover:bg-dark-red hover:w-14 ease-in-out duration-200 show-item">   
                <TrashIcon />
            </div>
        </div>
    )
}

export default ListItem;
