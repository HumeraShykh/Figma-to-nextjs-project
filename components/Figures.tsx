import React from 'react';

const Figures = () => {
  return (
    <div className="max-container mx-auto flex flex-wrap justify-center">
      <div className="m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
        <div className="bg-light-400 shadow rounded-lg px-4 py-3 flex items-center">
          <img src="img1.png" className="w-6 h-6 me-3" alt="" />
          <div>
            <p className="text-gray-800 text-lg font-medium">Users</p>
            <p className="text-gray-800 text-lg font-bold">72k+</p>
          </div>
        </div>
      </div>
      <div className="m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
        <div className="bg-light-400 shadow rounded-lg px-4 py-3 flex items-center">
          <img src="Doller.png" className="w-6 h-6 me-3" alt="" />
          <div>
            <p className="text-gray-800 text-lg font-medium">Transaction 24h</p>
            <p className="text-gray-800 text-lg font-bold">$24.32k</p>
          </div>
        </div>
      </div>
      <div className="m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
        <div className="bg-light-400 shadow rounded-lg px-4 py-3 flex items-center">
          <img src="img2.png" className="w-6 h-6 me-3" alt="" />
          <div>
            <p className="text-gray-800 text-lg font-medium">Total Transaction</p>
            <p className="text-gray-800 text-lg font-bold">$32.25M</p>
          </div>
        </div>
      </div>
      <div className="m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
        <div className="bg-light-400 shadow rounded-lg px-4 py-3 flex items-center">
          <img src="img3.png" className="w-6 h-6 me-3" alt="" />
          <div>
            <p className="text-gray-800 text-lg font-medium">Total Profit</p>
            <p className="text-gray-800 text-lg font-bold">$18.20M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
