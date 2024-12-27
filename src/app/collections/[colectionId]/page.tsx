"use client";

import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaCheckCircle, FaTwitter } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const Test = () => {
  const [activePage, setActivePage] = useState("overview");
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const showPage = (page) => {
    setActivePage(page);
    setMenuVisible(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-transparent p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/40x40"
            alt="A placeholder logo for MetaHarbor"
            className="w-10 h-10"
          />
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

      {/* Banner */}
      <div className="w-full h-250 bg-black flex items-center justify-center">
        <img
          src="https://placehold.co/1200x400"
          alt="Placeholder Image"
          className="h-full object-contain"
        />
      </div>

      {/* Collection Info */}
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
        <p className="mt-4 text-gray-600">
          A gateway to exclusive 9dcc products, unique digital experiences, and rewards
        </p>
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
              <TbWorld />
            </button>
            <button className="hover:text-gray-200 text-xl">
              <FaTwitter />
            </button>
            <button className="hover:text-gray-200 text-xl">
              <IoIosMore />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <div className="mt-4 flex space-x-2">
          <button
            className={`text-gray-500 hover:text-black font-bold ${
              activePage === "overview" ? "text-black" : ""
            }`}
            onClick={() => showPage("overview")}
          >
            Overview
          </button>
          <button
            className={`text-gray-500 hover:text-black font-bold ${
              activePage === "items" ? "text-black" : ""
            }`}
            onClick={() => showPage("items")}
          >
            Items
          </button>
          <button
            className={`text-gray-500 hover:text-black font-bold ${
              activePage === "offers" ? "text-black" : ""
            }`}
            onClick={() => showPage("offers")}
          >
            Offers
          </button>
          <button
            className={`text-gray-500 hover:text-black font-bold ${
              activePage === "analytics" ? "text-black" : ""
            }`}
            onClick={() => showPage("analytics")}
          >
            Analytics
          </button>
          <button
            className={`text-gray-500 hover:text-black font-bold ${
              activePage === "activity" ? "text-black" : ""
            }`}
            onClick={() => showPage("activity")}
          >
            Activity
          </button>
        </div>
      </div>
      {activePage === "items" && (
        <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <span className="text-red-500 font-bold">Live</span>
                            <span className="ml-2 text-gray-500">2,750 results</span>
                        </div>
                        <div className="flex items-center">
                            <input type="text" placeholder="Search by name or trait" className="border rounded p-2 mr-4" />
                            <select className="border rounded p-2">
                                <option>Price low to high</option>
                                <option>Price high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4 p-4">
                            <div className="mb-4">
                                <h2 className="font-bold mb-2">Status</h2>
                                <div className="flex items-center mb-2">
                                    <span className="bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                                    <span>Listed</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="bg-gray-300 rounded-full w-2 h-2 mr-2"></span>
                                    <span>On auction</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="bg-gray-300 rounded-full w-2 h-2 mr-2"></span>
                                    <span>New</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="bg-gray-300 rounded-full w-2 h-2 mr-2"></span>
                                    <span>Has offers</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h2 className="font-bold mb-2">Price</h2>
                                <div className="flex items-center mb-2">
                                    <span className="bg-gray-300 rounded-full w-2 h-2 mr-2"></span>
                                    <span>Currency</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h2 className="font-bold mb-2">Traits</h2>
                            </div>
                            <div className="mb-4">
                                <h2 className="font-bold mb-2">Status</h2>
                                <div className="flex items-center mb-2">
                                    <span className="bg-gray-300 rounded-full w-2 h-2 mr-2"></span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/4 grid grid-cols-3 gap-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                <img src="https://placehold.co/300x200" alt={`9dcc Black Box #${1430 + index}`} className="w-full mb-4" />
                                <h3 className="font-bold mb-2">9dcc Black Box #{1430 + index}</h3>
                                <p className="text-gray-500 mb-2">0.078 ETH</p>
                                <button className="bg-blue-500 text-white rounded p-2 w-full, hover: bg-blue-700">
                                  Buy now
                                </button>
                                <p className="text-gray-500 mt-2">Last sale: 0.07 WETH</p>
                              </div>                               
                            ))}
                        </div>
                    </div>
        </div>
      )}
        {activePage === "offers" && (
          <div>
            <h1 className="text-2xl font-bold">Offers Page</h1>
            <p>This is the content of the Offers page.</p>
          </div>
        )}
        {activePage === "analytics" && (
          <div>
            <h1 className="text-2xl font-bold">Analytics Page</h1>
            <p>This is the content of the Analytics page.</p>
          </div>
        )}
        {activePage === "activity" && (
          <div>
            <h1 className="text-2xl font-bold">Activity Page</h1>
            <p>This is the content of the Activity page.</p>
          </div>
        )}
    </div>
  );
};

export default Test;
