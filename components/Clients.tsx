import React from 'react';

const Clients = () => {
  return (
    <div className="max-container flex flex-col items-center">
      <h4 className="mb-4 text-2xl mt-4 font-bold leading-none tracking-tight text-gray-900 dark:text-black">What Our Clients Say About Us</h4>
      <h4 className="font-normal">Our Customer Feedback</h4>
      <div className="mt-4 flex flex-col md:flex-row justify-center">
        <a href="#" className="flex flex-col flex-start max-w-md p-6 bg-light border-white rounded-lg shadow hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white mb-4 md:mb-0 md:mr-4">
       
  <p className="font-normal text-black dark:text-black">
  <span className="text-4xl">“</span> Edge Tracker has revolutionized my trading game. With its powerful analytics and collaborative features, I've seen a significant improvement in my performance. It's an essential tool for both individual traders and teams. Highly recommended!
  </p>




          <div className="flex flex-row mt-4 items-center">
            <img src="john.jpeg" alt="John Doe" className="w-9 h-9 rounded-full mt-3"/>
            <div className="flex flex-col ml-2">
              <span className="regular-18 bold-16">John Doe</span>
              <span className="regular-14">Professional trader and fund manager</span>
            </div>
          </div>
        </a>
        <a href="#" className="flex flex-col flex-start max-w-md p-6 bg-light border-white rounded-lg shadow hover:bg-white dark:bg-white dark:border-gray-100 dark:hover:bg-white">
        <p className="font-normal text-black dark:text-black">
  <span className="text-4xl">“</span> 
  As a novice trader, Edge Tracker is a game changer for me. The daily insights and personalized recommendations have helped me make smarter trading decisions. It's user-friendly and packed with valuable features.
</p>

          <div className="flex flex-row mt-4 items-center">
            <img src="jane.jpeg" alt="Jane Smith" className="w-9 h-9 rounded-full mt-3"/>
            <div className="flex flex-col ml-2">
              <span className="regular-18 bold-16">Jane Smith</span>
              <span className="regular-14">Beginner Trader and Student</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Clients;
