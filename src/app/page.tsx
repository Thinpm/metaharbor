import type { JSX } from 'react';
import Image from "next/image";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import Headers from "@/components/headers";
import Link from "next/link";
import { FaCheckCircle, FaTwitter } from "react-icons/fa";
const collections = [
    { rank: 1, name: "Bored Ape", img: "https://placehold.co/40", price: "0.1 ETH", volume: "12.8 ETH", verified: true },
    { rank: 2, name: "CryptoPunks", img: "https://placehold.co/40", price: "0.08 ETH", volume: "10.2 ETH", verified: true },
    { rank: 3, name: "Doodles", img: "https://placehold.co/40", price: "0.15 ETH", volume: "8.5 ETH", verified: true },
    { rank: 4, name: "Azuki", img: "https://placehold.co/40", price: "0.12 ETH", volume: "7.9 ETH", verified: true },
    { rank: 5, name: "CloneX", img: "https://placehold.co/40", price: "0.09 ETH", volume: "6.4 ETH", verified: true },
    { rank: 6, name: "Moonbirds", img: "https://placehold.co/40", price: "0.11 ETH", volume: "5.8 ETH", verified: true },
    { rank: 7, name: "DeGods", img: "https://placehold.co/40", price: "0.13 ETH", volume: "5.2 ETH", verified: true },
    { rank: 8, name: "Pudgy", img: "https://placehold.co/40", price: "0.07 ETH", volume: "4.9 ETH", verified: true },
    { rank: 9, name: "Meebits", img: "https://placehold.co/40", price: "0.14 ETH", volume: "4.5 ETH", verified: true },
    { rank: 10, name: "Otherside", img: "https://placehold.co/40", price: "0.10 ETH", volume: "4.1 ETH", verified: true },
];
const collection = [
    {
        image: "https://placehold.co/600x500?text=9dcc+Black+Box",
        title: "9dcc Black Box",
        floor: "0.08 ETH",
        volume: "172 ETH"
    },
    {
        image: "https://placehold.co/600x500?text=Froggy+Friends",
        title: "Froggy Friends",
        floor: "0.09 ETH",
        volume: "2,626 ETH"
    },
    {
        image: "https://placehold.co/600x500?text=Koin+Games+Dev+Squad",
        title: "Koin Games Dev Squad",
        floor: "0.12 ETH",
        volume: "2,076 ETH"
    },
    {
        image: "https://placehold.co/600x500?text=Parallel+Planetfall",
        title: "Parallel Planetfall",
        floor: "< 0.01 ETH",
        volume: "920 ETH"
    },
    {
        image: "https://placehold.co/600x500?text=BasePunks",
        title: "BasePunks",
        floor: "0.02 ETH",
        volume: "346 ETH"
    },
    {
        image: "https://placehold.co/600x500?text=Dreamloops",
        title: "Dreamloops",
        floor: "< 0.01 ETH",
        volume: "757 ETH"
    }
];
export default function Home() {
    return (
        <div className="px-10">
            <Headers />
            <div className="w-full bg-card p-4 flex space-x-4 border-b">
                {["All", "Art", "Gaming", "Memberships", "PFPs", "Photography", "Music"].map((item) => (
                    <Button key={item} variant="outline" size="sm">
                        {item}
                    </Button>
                ))}
            </div>

            <main className="w-full py-8">
                <Card className="overflow-hidden w-full h-[450px]"
                    style={{
                        backgroundImage: "url('https://i.seadn.io/s/primary-drops/0x1f7983637c800e616cb48833b103311dfbb7fade/34007139:about:media:9af445a7-8833-41ef-ac35-4bdd938aec9a.gif?auto=format&dpr=1&w=3840')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    <div className="w-full h-[200px] bg-cover bg-center" />
                    <CardHeader className="flex flex-row items-center space-x-4">
                        <img src="/assets/avt/avt.png" alt="Profile" className="w-12 h-12 rounded-full" />
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2">
                                NFT Collection
                                <CheckCircle2 className="h-5 w-5 text-blue-500" />
                            </h1>
                            <p className="text-muted-foreground flex items-center gap-2">
                                By Creator
                                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            </p>
                            <p className="text-muted-foreground">Open edition {1 / 1000} ETH</p>
                        </div>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center p-4">
                        <div className="flex space-x-2">
                            {[
                                { value: "0", label: "days" },
                                { value: "13", label: "hrs" },
                                { value: "6", label: "mins" },
                                { value: "35", label: "secs" }
                            ].map((item) => (
                                <Card key={item.label} className="p-2 text-center">
                                    <p className="text-xl font-bold">{item.value}</p>
                                    <p className="text-muted-foreground text-sm">{item.label}</p>
                                </Card>
                            ))}
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="icon">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button>View drop</Button>
                        </div>
                    </CardContent>
                </Card>

            </main>
            {/* Body: Trending */}
            <div className="px-10">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                        <Button variant="ghost" className="bg-slate-200 rounded-xl px-4 py-2 hover:bg-gray-300">
                            Trending
                        </Button>
                        <Button variant="ghost" className="bg-slate-200 rounded-xl px-4 py-2 hover:bg-gray-300">
                            Top
                        </Button>
                    </div>
                    <div className="flex gap-5">
                        <div className="bg-slate-200 rounded-xl">
                            <div className="flex gap-2">
                                <Button variant="ghost" className="bg-slate-200 rounded-xl px-4 py-2 hover:bg-gray-300">1h</Button>
                                <Button variant="ghost" className="bg-slate-200 rounded-xl px-4 py-2 hover:bg-gray-300">6h</Button>
                                <Button variant="ghost" className="bg-slate-200 rounded-xl px-4 py-2 hover:bg-gray-300">24h</Button>
                                <Button variant="ghost" className="bg-slate-200 rounded-xl px-4 py-2 hover:bg-gray-300">7d</Button>
                            </div>
                        </div>
                        <Button variant="ghost" className="bg-slate-200 rounded-xl">All chains</Button>
                        <Button variant="ghost" className="bg-slate-200 rounded-xl">View all</Button>
                    </div>
                </div>
                {/* Table: Collections */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div>
                        <div className="flex items-center border-b border-gray-300 pb-2 mb-3">
                            <span className="w-1/12 font-medium text-gray-600">Rank</span>
                            <span className="w-5/12 font-medium text-gray-600">Collection</span>
                            <span className="w-3/12 font-medium text-gray-600 text-right">Floor Price</span>
                            <span className="w-3/12 font-medium text-gray-600 text-right">Volume</span>
                        </div>
                        {collections.slice(0, 5).map((collection, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-2 rounded-lg ${index === 3 ? "bg-gray-100" : ""
                                    }`}
                            >
                                <span className="w-1/12">{collection.rank}</span>
                                <div className="w-5/12 flex items-center">
                                    <img
                                        src={collection.img}
                                        alt={`Collection ${collection.name}`}
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <span className="flex items-center">
                                        {collection.name}
                                        {collection.verified && (
                                            <CheckCircle2 className="text-blue-500 ml-1" size={16} />
                                        )}
                                    </span>
                                </div>
                                <span className="w-3/12 text-right">{collection.price}</span>
                                <span className="w-3/12 text-right">{collection.volume}</span>
                            </div>
                        ))}
                    </div>
                    {/* Right Column */}
                    <div>
                        <div className="flex items-center border-b border-gray-300 pb-2 mb-3">
                            <span className="w-1/12 font-medium text-gray-600">Rank</span>
                            <span className="w-5/12 font-medium text-gray-600">Collection</span>
                            <span className="w-3/12 font-medium text-gray-600 text-right">Floor Price</span>
                            <span className="w-3/12 font-medium text-gray-600 text-right">Volume</span>
                        </div>
                        {collections.slice(5).map((collection, index) => (
                            <div key={index} className="flex items-center p-2 rounded-lg">
                                <span className="w-1/12">{collection.rank}</span>
                                <div className="w-5/12 flex items-center">
                                    <img
                                        src={collection.img}
                                        alt={`Collection ${collection.name}`}
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <span className="flex items-center">
                                        {collection.name}
                                        {collection.verified && (
                                            <CheckCircle2 className="text-blue-500 ml-1" size={16} />
                                        )}
                                    </span>
                                </div>
                                <span className="w-3/12 text-right">{collection.price}</span>
                                <span className="w-3/12 text-right">{collection.volume}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notable collections */}
            <h2 className="text-2xl font-bold mt-8 mb-4 px-10">Notable collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link href="/collections/froggy-friends">
                    <div className="bg-white shadow rounded-lg p-4">
                        <img src="https://placehold.co/200x200" alt="Froggy Friends" className="w-full h-40 object-cover rounded-lg mb-4" />
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">9dcc Black Box</span>
                            <FaCheckCircle width={4} height={4} className="text-blue-500" />
                        </div>
                        <div className="text-sm">Floor</div>
                        <div className="text-lg">0.09 ETH</div>
                        <div className="text-sm">Total volume</div>
                        <div className="text-lg">2,626 ETH</div>
                    </div>
                </Link>
                <div className="bg-white shadow rounded-lg p-4">
                    <img src="https://placehold.co/200x200" alt="Koin Games Dev Squad" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Koin Games Dev Squad</span>
                        <i className="fas fa-check-circle text-blue-500 ml-2"></i>
                    </div>
                    <div className="text-sm">Floor</div>
                    <div className="text-lg">0.12 ETH</div>
                    <div className="text-sm">Total volume</div>
                    <div className="text-lg">2,076 ETH</div>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <img src="https://placehold.co/200x200" alt="Parallel Planetfall" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Parallel Planetfall</span>
                        <i className="fas fa-check-circle text-blue-500 ml-2"></i>
                    </div>
                    <div className="text-sm">Floor</div>
                    <div className="text-lg">&lt; 0.01 ETH</div>
                    <div className="text-sm">Total volume</div>
                    <div className="text-lg">920 ETH</div>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <img src="https://placehold.co/200x200" alt="BasePunks" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">BasePunks</span>
                        <i className="fas fa-check-circle text-blue-500 ml-2"></i>
                    </div>
                    <div className="text-sm">Floor</div>
                    <div className="text-lg">0.02 ETH</div>
                    <div className="text-sm">Total volume</div>
                    <div className="text-lg">346 ETH</div>
                </div>

                <div className="bg-white shadow rounded-lg p-4">
                    <img src="https://placehold.co/200x200" alt="Dreamloops" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Dreamloops</span>
                        <i className="fas fa-check-circle text-blue-500 ml-2"></i>
                    </div>
                    <div className="text-sm">Floor</div>
                    <div className="text-lg">&lt; 0.01 ETH</div>
                    <div className="text-sm">Total volume</div>
                    <div className="text-lg">757 ETH</div>
                </div>
            </div>
        </div>
    );
};
