import React from 'react';

const Detailcards2 = () => {
  return (
    <div className="max-container flex flex-col md:flex-row items-center justify-center">
      <div className="align-vertically3">
      <a href="#"
  className="flex flex-col flexStart max-w-sm m-6 p-8 bg-light border-blue-500 rounded-3xl shadow hover:bg-white dark:bg-blue-500 dark:border-gray-700 dark:hover:bg-white-700">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Daily Insights</h5>
  <p className="font-normal text-black dark:text-black">
    Gain valuable trading insights based on your daily trades. Unlock powerful analysis and personalized recommendations to enhance your trading strategies and capitalize on market opportunities.
  </p>
  <img
    src="card3.png"
    alt="image"
    className="w-48 mx-auto mt-8 rounded-lg mr-2 pr-1"/>
</a>

      </div>
      <div className="align-vertically4">
      <a href="#"
  className="flex flex-col flexStart max-w-sm m-12 p-14 bg-black text-white border border-white rounded-3xl shadow-lg hover:bg-gray-700 dark:bg-black dark:border-gray-800 dark:hover:bg-gray-700">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Traders LeaderBoard</h5>
  <p className="font-normal text-white">
    Rise to the top of the ranks based on your daily trades. Compete with fellow traders, track your performance, and see how you stack up on the dynamic Leaderboard.
  </p>
  <img src="card4.png" alt="image" className="w-36 mx-auto mt-8 rounded-lg mr-0 pr-0 ml-auto" />

 
</a>


      </div>
    </div>
  );
};

export default Detailcards2;
