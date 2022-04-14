import ListItem from './ListItem';

const List : React.FC = () => {
    return (
        <div className='w-screen md:w-8/12 lg:w-6/12'>
            <div className='flex items-center justify-between'>
                <h3 className='mt-3 mb-5 font-bold'>
                    Atividades pendentes: 2
                </h3>

                <button className='bg-blue w-8 h-8 font-bold text-white text-xl rounded-md hover:bg-dark-blue ease-in-out duration-200'>
                    +
                </button>
            </div>
            <div>
                <ListItem />
                <ListItem />
            </div>
        </div>
    );
}

export default List;
