import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const Test = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between bg-transparent p-4">
                <div className="flex items-center space-x-4">
                    <img src="https://placehold.co/40x40" alt="A placeholder logo for MetaHarbor" className="w-10 h-10" />
                    <span className="font-bold pr-5 border-r-2">METAHARBOR</span>
                    <span className="pl-5">Drops</span>
                    <span className="pl-5">Stats</span>
                    <span className="pl-5">Create</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-200 rounded">
                        <img src="/assets/icon/search.png" alt="Search" className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                        <img src="/assets/icon/user.png" alt="User" className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                        <img src="/assets/icon/shoppingcart.png" alt="Shopping Cart" className="w-5 h-5" />
                    </button>
                    <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                        Login
                    </button>
                </div>
            </div>
            <div className="w-full h-250 bg-black flex items-center justify-center">
                <img
                    src="https://placehold.co/1200x400"
                    alt="Placeholder Image"
                    className="h-full object-contain"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold">9dcc Black Box</h1>
                        <FaCheckCircle width={4} height={4} className="text-blue-500" />
                    </div>
                    <div className="flex space-x-8">
                        <div>
                            <span className="block text-black font-bold">175 ETH</span>
                            <span className="text-gray-600">Total volume</span>
                        </div>
                        <div>
                            <span className="block text-black font-bold">0.078 ETH</span>
                            <span className="text-gray-600">Floor price</span>
                        </div>
                        <div>
                            <span className="block text-black font-bold">0.0783 WETH</span>
                            <span className="text-gray-600">Best offer</span>
                        </div>
                        <div>
                            <span className="block text-black font-bold">11%</span>
                            <span className="text-gray-600">Listed</span>
                        </div>
                        <div>
                            <span className="block text-black font-bold">1,520 (55%)</span>
                            <span className="text-gray-600">Owners (Unique)</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                    <span className="text-gray-600">9dccDeployer</span>
                    <span className="fas fa-check-circle text-blue-500"></span>
                </div>
                <p className="mt-4 text-gray-600">A gateway to exclusive 9dcc products, unique digital experiences, and rewards</p>
                <div className="mt-2 flex justify-between items-center text-gray-600">
                    <div>
                        <span>Items <strong className="text-black">2,750</strong></span>
                        <span className="mx-2">·</span>
                        <span>Created <strong className="text-black">Dec 2024</strong></span>
                        <span className="mx-2">·</span>
                        <span>Creator earnings <strong className="text-black">0%</strong></span>
                        <span className="mx-2">·</span>
                        <span>Chain <strong className="text-black">Base</strong></span>
                    </div>
                    <div className="flex space-x-4">
                        <button className="hover:text-gray-200 text-xl">
                            <TbWorld width={5} height={5}/>
                        </button>
                        <button className="hover:text-gray-200 text-xl">
                            <FaTwitter width={5} height={5}/>
                        </button>
                        <button className="hover:text-gray-200 text-xl">
                            <IoIosMore width={5} height={5}/>
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex space-x-2">
                    <button className="text-gray-500 hover:text-black font-bold">Overview</button>
                    <button className="text-gray-500 hover:text-black font-bold">Items</button>
                    <button className="text-gray-500 hover:text-black font-bold">Offers</button>
                    <button className="text-gray-500 hover:text-black font-bold">Analytics</button>
                    <button className="text-gray-500 hover:text-black font-bold">Activity</button>
                </div>
            </div>
        </div>
    );
};

export default Test;
