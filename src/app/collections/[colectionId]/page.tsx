import type { JSX } from 'react';
import Header from '@/components/headers';
export default function Collection() {
    return (
        <div>
            <Header />
            <main>
                <div className="relative">
                    <img src="https://placehold.co/1200x300" alt="Background image" className="w-full h-[600px] object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 space-y-4">
                        <div className="absolute bottom-0 left-0 p-4 text-white space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="bg-gray-800 px-2 py-1 rounded">Mint ended</span>
                                <h2 className="text-2xl font-bold">9dcc Black Box</h2>
                                <i className="fas fa-more-horiz"></i>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>9dccDeployer</span>
                                <i className="fas fa-check-circle text-blue-500"></i>
                            </div>
                            <p>A gateway to exclusive 9dcc products, unique digital experiences, and rewards</p>
                            <p>
                                Items <span className="font-bold px-2">2,750</span> · Created <span className="font-bold px-2">Dec 2024</span> · Creator earnings <span className="font-bold px-2">0%</span> · Chain <span className="font-bold px-2">Base</span>
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 p-4 text-white">
                            <div className="flex items-center space-x-8">
                                <div className="text-center">
                                    <p className="text-xl font-bold">175 ETH</p>
                                    <p className="text-sm px-3">Total volume</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold">0.077 ETH</p>
                                    <p className="text-sm">Floor price</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold">0.0739 WETH</p>
                                    <p className="text-sm">Best offer</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold">11%</p>
                                    <p className="text-sm">Listed</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold">1,518 (55%)</p>
                                    <p className="text-sm">Owners (Unique)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-4">
                    <div className="flex justify-start p-4">  {/* Sử dụng justify-start để căn trái */}
                        <a href="#" className="hover:underline px-10">Overview</a>
                        <a href="#" className="hover:underline px-10">Items</a>
                        <a href="#" className="hover:underline px-10">Offers</a>
                        <a href="#" className="hover:underline px-10">Analytics</a>
                        <a href="#" className="hover:underline px-10">Activity</a>
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <span className="text-green-500 font-bold">Live</span>
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
                                    <img src="https://placehold.co/300x200" alt="9dcc Black Box" className="w-full mb-4" />
                                    <h3 className="font-bold mb-2">9dcc Black Box #{1430 + index}</h3>
                                    <p className="text-gray-500 mb-2">0.078 ETH</p>
                                    {index === 1 ? (
                                        <button className="bg-blue-500 text-white rounded p-2 w-full">
                                            Buy now
                                        </button>
                                    ) : (
                                        <p className="text-gray-500">Last sale: 0.07 WETH</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                ;
                ;
            </main>
        </div>
    );
};
