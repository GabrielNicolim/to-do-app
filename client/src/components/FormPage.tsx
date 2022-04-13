const FormPage : React.FC = ({ children }) => {
  return (
    <div className='w-screen min-h-screen flex items-center justify-center bg-light-blue'>
        <div className='h-screen flex flex-col justify-center md:h-auto bg-gray p-5 rounded-md drop-shadow-lg w-full md:w-6/12 lg:w-3/12'>
            { children }
        </div>
    </div>
  );
};

export default FormPage;