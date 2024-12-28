"use client"
import Headers from "@/components/headers";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWallet";
import WalletButton from "@/components/WalletButton";
import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";
export default function create(){
    const router = useRouter();
    const [traits, setTraits] = useState(false);
    const toggleTraits = () => {
        setTraits(!traits);
    }
    return(
        <div className="min-h-screen flex flex-col items-center px-20 pt-10">
            <div className="w-full ">
                <div className="flex items-center mb-4 fixed top-10 left-10 right-10 z-50">
                    <button className="text-2xl p-2 bg-gray-100 rounded-full" onClick={() => router.back()}>
                        <img className="w-4 h-4" src="/assets/svg/left-arrow.svg" alt="left-arrow" />
                    </button>
                    <div className="ml-auto flex items-center space-x-4">
                        <div className="flex items-center gap-4">
                            <WalletButton />
                        </div>
                    </div>
                </div>
                <div className="w-full items-center  pl-0 pr-0 flex flex-col justify-center">
                    <div className="w-full flex flex-col justify-start pl-44">
                        <h1 className="text-3xl font-bold mb-2">Create an NFT</h1>
                        <p className="text-gray-600 mb-6">Once your item is minted you will not be able to change any of its information.</p>
                    </div>
                    <div className="w-3/4  flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-[550px] w-[550px]">
                            <i className="fas fa-upload text-3xl mb-4"></i>
                            <p className="text-gray-600 mb-2">Drag and drop media</p>
                            <a href="#" className="text-blue-500 mb-2">Browse files</a>
                            <p className="text-gray-500 text-sm">Max size: 50MB</p>
                            <p className="text-gray-500 text-sm">JPG, PNG, GIF, SVG, MP4</p>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Collection *</label>
                                <div className="border border-gray-300 bg-gray-100 font-bold rounded-lg flex items-center">
                                    <div className="flex items-center justify-center p-5 mx-4 border border-gray-300 bg-gray-200 rounded-lg">
                                        <img src="/assets/svg/add.svg" alt="add" className="w-5 h-5" />
                                    </div>
                                    <span className=" py-10">Create a new collection</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1">Not all collections are eligible. <a href="#" className="text-blue-500">Learn more</a></p>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Name *</label>
                                <input type="text" placeholder="Name your NFT" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Supply *</label>
                                <input type="number" placeholder="1" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Description</label>
                                <textarea placeholder="Enter a description" className="w-full border border-gray-300 rounded-lg p-2"></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">External Link</label>
                                <input type="text" placeholder="https://collection.io/item/123" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1 font-bold">Traits</label>
                                <span className=" text-sm">Traits describe attributes of your item. They appear as filters inside your collection page and are also listed out inside your item page.</span>
                                <div className="flex items-center justify-center border border-gray-300 bg-gray-100 font-bold rounded-lg p-2 w-1/3" onClick={() => setTraits(!traits)}>
                                    <img src="/assets/svg/add.svg" alt="add" className="w-5 h-5" />
                                    <span>Add trait</span>
                                </div>
                                {traits && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={toggleTraits}>
                                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-xl font-semibold">Add trait</h2>
                                                <button className="text-gray-500 hover:text-gray-700" onClick={toggleTraits}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex space-x-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Ex. Size"
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Ex. Large"
                                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                            <button className="w-full bg-blue-500 text-white rounded-lg p-2">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}