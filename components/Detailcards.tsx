import React from 'react';

const Detailcards = () => {
  return (
    <div className="max-container flex flex-col md:flex-row items-center justify-center">
      <div className="">
         <a
    href="#"
    className="flex flex-col flexStart max-w-sm m-6 p-8 bg-blue-600 border-blue-700 rounded-3xl shadow-lg hover:bg-blue-700 dark:bg-blue-700 dark:border-gray-700 dark:hover:bg-blue-800"
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Trades Details</h5>
    <p className="font-normal text-white dark:text-white">
      View and analyze your trade details effortlessly. Explore comprehensive information about your trade, including entry/exit prices, position sizes, and durations. Capture a snapshot for a detailed trade overview.
    </p>
    <img src="card1.png" alt="image" className="w-48 mx-auto mt-4 rounded-lg mr-2 pr-2" />

  </a>
      </div>
      <div className="align-vertically2">
      <a href="#"
  className="flex flex-col flexStart max-w-sm m-6 p-8 bg-[#DBE4FD] border-gray-400 rounded-3xl shadow-lg hover:bg-gray-300 dark:bg-gray-300 dark:border-gray-400 dark:hover:bg-gray-400 md:mt-0 md:ml-10">
  <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: "#182853" }}>
    Create Your Team
  </h5>
  <p className="font-normal" style={{ color: "#454647" }}>
    Build and manage trading teams effortlessly. Create teams, track team members' trading details, and gain insights into overall performance. Stay competitive with the leaderboard and foster collaboration for trading success.
  </p>
  <img src="card2.png" alt="image" className="w-48 mx-auto mt-4 rounded-lg mr-2 pr-2" />



</a>


      </div>
    </div>
  );
};

export default Detailcards;
