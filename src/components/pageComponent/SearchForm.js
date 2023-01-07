import { useContext, useState } from 'react';
import ServiceContext from '../../context/serviceContext';

export default function SearchForm() {
  const { findServices } = useContext(ServiceContext);
  const [param, setParam] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    findServices(param);
  };

  return (
    <>
      <div className="my-8 md:my-24">
        <div className="flex items-center justify-center ">
          <form onSubmit={handleSearch} className="flex border-0 shadow w-4/5">
            <input
              type="text"
              className="px-4 py-2 gray-bg md:bg-transparent text-slate-700 w-full border-0 focus:outline-accent-400 hover:outline-accent-400 focus:border-accent-400 ring-accent-400"
              placeholder="Search..."
              value={param}
              onChange={(e) => setParam(e.target.value)}
            />
            <button
              type="submit"
              className="hidden md:block px-4 text-white bg-accent-400 border-l rounded-none"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
