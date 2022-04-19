import { useState } from 'react';
import Input from './Input';
import ListItem from './ListItem';
import Modal from './Modal';

const List : React.FC = () => {
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [createActiviryModalIsOpen, setCreateActiviryModalIsOpen] = useState(false);

    return (
        <div className='w-screen md:w-8/12 lg:w-6/12'>
            <div className='flex items-center justify-between'>
                <h3 className='mt-3 mb-5 font-bold'>
                    Atividades pendentes: 2
                </h3>

                <button 
                    onClick={ () => setCreateActiviryModalIsOpen(true) }
                    className='bg-blue w-8 h-8 font-bold text-white text-xl rounded-md hover:bg-dark-blue ease-in-out duration-200'
                >
                    +
                </button>
            </div>
            <div>
                <ListItem handleClick={ () => setDeleteModalIsOpen(true) } />
                <ListItem handleClick={ () => setDeleteModalIsOpen(true) } />
            </div>

            {
                createActiviryModalIsOpen && (
                    <Modal>
                        <div className="bg-white pt-5 pb-4 sm:p-6 sm:pb-4">
                        
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:text-left w-full">
                                <div className="flex items-center" id="modal-title">
                                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-dark-blue sm:h-10 sm:w-10">
                                        <svg width="16" height="16" fill="currentColor" className="bi bi-bookmarks-fill text-white" viewBox="0 0 16 16">
                                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
                                            <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/>
                                        </svg>
                                    </div>
                                    <h3 className='ml-3 text-lg leading-6 font-medium'>Create activity</h3>
                                </div>
                                <div className="mt-2">
                                    <form>
                                        <Input
                                            type='text'
                                            handleChange={ () => {} }
                                            placeholder='Description'
                                            name='description'
                                            isRequired
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="py-3 sm:px-6 flex justify-between">
                            <button
                                onClick={ () => setCreateActiviryModalIsOpen(false) }
                                type="button"
                                className="w-5/12 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="w-5/12 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm hover:bg-dark-blue ease-in-out duration-200"
                            >
                                Create
                            </button>
                        </div>
                    </Modal>
                )
            }

            {
                deleteModalIsOpen && (
                    <Modal>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="ml-3 text-lg leading-6 font-medium" id="modal-title">Delete activity</h3>
                                </div>

                                <div className="mt-4">
                                    <p className="text-sm">Are you sure you want to delete this activity</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 sm:px-6 flex justify-between">
                            <button
                                onClick={ () => setDeleteModalIsOpen(false) }
                                type="button"
                                className="w-5/12 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="w-5/12 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm hover:bg-dark-red ease-in-out duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </Modal>
                )
            }
            
        </div>
    );
}

export default List;
