import type { JSX } from 'react';

export default function Collection() {
    return (
        <div>
            <header className="flex justify-between items-center p-4 bg-black">
                <div className="flex items-center space-x-4">
                    <img src="https://placehold.co/40x40" alt="METAHARBOR logo" className="mr-2" />
                    <span className="text-xl font-bold text-white">METAHARBOR </span>
                    <span className="border-l border-gray-500 h-6 mx-2"></span> {/* Dấu gạch thẳng */}
                    <nav className="flex space-x-4">
                        <a href="#" className="hover:underline text-white">Drops</a>
                        <a href="#" className="hover:underline text-white">Stats</a>
                        <a href="#" className="hover:underline text-white">Create</a>
                    </nav>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-gray-800 p-2 rounded text-white">Login</button>
                    <button className="bg-gray-800 p-2 rounded text-white"><i className="fas fa-user"></i></button>
                    <button className="bg-gray-800 p-2 rounded text-white"><i className="fas fa-shopping-cart"></i></button>
                </div>
            </header>
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
                                    <p className="text-xl font-bold px-2">175 ETH</p>
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
                    <div className="flex justify-around p-4">
                        <a href="#" className="hover:underline">Overview</a>
                        <a href="#" className="hover:underline">Items</a>
                        <a href="#" className="hover:underline">Offers</a>
                        <a href="#" className="hover:underline">Analytics</a>
                        <a href="#" className="hover:underline">Activity</a>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                            <span>Live</span>
                            <span className="font-bold">2,750 results</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="text" placeholder="Search by name or trait" className="bg-gray-800 p-2 rounded" />
                            <select className="bg-gray-800 p-2 rounded">
                                <option>Price low to high</option>
                            </select>
                            <button className="bg-gray-800 p-2 rounded"><i className="fas fa-th"></i></button>
                            <button className="bg-gray-800 p-2 rounded"><i className="fas fa-list"></i></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
