"use client"
import Headers from "@/components/headers";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWallet";
import WalletButton from "@/components/WalletButton";
import { Button } from "@/ui/button";
export default function create(){
    
    return(
        <div className="min-h-screen flex flex-col items-center px-20 pt-10">
            <div className="w-full ">
                <div className="flex items-center mb-4">
                    <button className="text-2xl p-2 bg-gray-100 rounded-full">
                        <img className="w-4 h-4" src="/assets/svg/left-arrow.svg" alt="left-arrow" />
                    </button>
                    <div className="ml-auto flex items-center space-x-4">
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon">
                                <User className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                            <WalletButton />
                        </div>
                    </div>
                </div>
                <div className="w-full items-center pl-0 pr-0 flex flex-col justify-center">
                    <div className="w-full flex flex-col justify-start pl-56">
                        <h1 className="text-3xl font-bold mb-2">Create an NFT</h1>
                        <p className="text-gray-600 mb-6">Once your item is minted you will not be able to change any of its information.</p>
                    </div>
                    <div className="w-3/4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                            <i className="fas fa-upload text-3xl mb-4"></i>
                            <p className="text-gray-600 mb-2">Drag and drop media</p>
                            <a href="#" className="text-blue-500 mb-2">Browse files</a>
                            <p className="text-gray-500 text-sm">Max size: 50MB</p>
                            <p className="text-gray-500 text-sm">JPG, PNG, GIF, SVG, MP4</p>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Collection *</label>
                                <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
                                    <i className="fas fa-plus text-2xl"></i>
                                    <span>Create a new collection</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1">Not all collections are eligible. <a href="#" className="text-blue-500">Learn more</a></p>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Name *</label>
                                <input type="text" placeholder="Name your NFT" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Supply *</label>
                                <input type="number" value="1" className="w-full border border-gray-300 rounded-lg p-2"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Description</label>
                                <textarea placeholder="Enter a description" className="w-full border border-gray-300 rounded-lg p-2"></textarea>
                            </div>
                            <button className="w-full bg-blue-500 text-white rounded-lg p-2">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}