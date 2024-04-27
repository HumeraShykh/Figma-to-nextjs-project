import React from 'react';

const Clients2 = () => {
  return (
    <div className="max-container">
      <div className="flex flex-col items-center flexCenter md:flex-row">
        <a href="#" className="flex flex-col mt-3 max-w-md p-6 bg-light border-white rounded-lg shadow hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white mb-4 md:mb-0 md:mr-4">
          <p className="font-normal text-black dark:text-black">
          <span className="text-4xl">“</span> Edge tracker has transformed how our team approaches trading. The ability to view overall trading details, analyze performance, and share strategies has greatly enhanced our results. It's a must-have tool for any trading team.
          </p>
          <div className="flex flex-row mt-4 items-center">
            <img src="sarah.jpeg" alt="Sarah Thompson" className="w-9 h-9 rounded-full mt-3"/>
            <div className="flex flex-col ml-2">
              <span className="regular-18 bold-16">Sarah Thompson</span>
              <span className="regular-14">Financial analyst and team member</span>
            </div>
          </div>
        </a>
        <a href="#" className="flex flex-col mt-3 flex-start max-w-md p-6 bg-light border-white rounded-lg shadow hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white">
          <p className="font-normal text-black dark:text-black">
          <span className="text-4xl">“</span> Build and manage trading teams effortlessly. Create teams, track team members' trading details, and gain insights into overall performance. Stay competitive with the leaderboard and foster collaboration for trading success.
          </p>
          <div className="flex flex-row mt-4 items-center">
            <img src="miche.jpeg" alt="Jane Smith" className="w-9 h-9 rounded-full mt-3"/>
            <div className="flex flex-col ml-2">
              <span className="regular-18 bold-16">Michael Johnson</span>
              <span className="regular-14">Fund Manager And Team Leader</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Clients2;
