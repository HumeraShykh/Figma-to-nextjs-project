import React from 'react';

const BeforeFooter = () => {
  return (
    <div className="flex flex-col container mt-12 max-w-full p-6 bg-dark">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-black">
          <div className="flex items-center">
            <img src="logo.png" className="w-9 h-9" alt="" />
            <span className="font-extrabold text-black">Edge</span><span className="font-extrabold text-blue-500" style={{color:"#3892F3"}}>tracker</span>
          </div>
          <p className="regular-14 mt-4">
            The information provided on this trading journal website is for educational and informational purposes only. It is not intended as financial or investment advice. Trading in financial markets involves risk, and you should carefully consider your own risk tolerance before making any trading decisions.
          </p>
          <p className="regular-14 mt-4">
            Trading involves a high level of risk, and you should be aware of the risks and be willing to accept them before participating. If you do not fully understand the risks involved in trading, you should not use this website or engage in any trading activities based on its content.
          </p>
          <p className="regular-14 mt-4">
            By accessing and using this website, you agree to the terms of this disclaimer. If you do not agree with these terms, you should not use this website. This disclaimer is subject to change without notice, and it is your responsibility to review and understand the current version of the disclaimer before using this website. Always conduct your own research and due diligence before making any trading decisions. If you have any questions or concerns about the content presented on this website, please seek advice from a qualified financial professional.
          </p>
        </div>
        <div className="text-black">
          <h1 className="font-extrabold">Company</h1>
          <ul className="mt-6">
            <li className="mt-3">
              <a href="#" className="me-4 hover:underline">Home</a>
            </li>
            <li className="mt-3">
              <a href="#" className="me-4 hover:underline">Why us</a>
            </li>
            <li className="mt-3">
              <a href="#" className="me-4 hover:underline">Pricing</a>
            </li>
            <li className="mt-3">
              <a href="#" className="me-4 hover:underline">Help</a>
            </li>
            <li className="mt-3">
              <a href="#" className="me-4 hover:underline">Contact</a>
            </li>
            <li className="mt-3">
              <a href="#" className="me-4 hover:underline">About</a>
            </li>
          </ul>
        </div>
        <div className="text-black">
          <h1 className="font-extrabold">Social</h1>
          <ul className="mt-6">
            <li className="mt-3 flex items-center">
              <img src="x.png" className="w-6 h-6" alt="" />
              <a href="#" className="me-4 hover:underline ml-1">X (formally twitter)</a>
            </li>
            <li className="mt-3 flex items-center">
              <img src="insta.jpeg" className="w-6 h-6" alt="" />
              <a href="#" className="me-4 hover:underline ml-1">Instagram</a>
            </li>
            <li className="mt-3 flex items-center">
              <img src="discord.png" className="w-6 h-6" alt="" />
              <a href="#" className="me-4 hover:underline ml-1">Discord</a>
            </li>
            <li className="mt-3 flex items-center">
              <img src="youtube.png" className="w-6 h-6" alt="" />
              <a href="#" className="me-4 hover:underline ml-1">Youtube</a>
            </li>
            <li className="mt-3 flex items-center">
              <img src="tiktok.png" className="w-6 h-6" alt="" />
              <a href="#" className="me-4 hover:underline ml-1">Tiktok</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
