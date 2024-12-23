import Image from "next/image";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import Headers from "@/components/headers"

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

export default function Home() {
  return (
    <div className="">
      <Headers/>
      //body Trending
      <div className="px-10">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <Button variant="secondary" className="rounded-l-md font-semibold text-xl">Trending</Button>
                        <Button variant="ghost" className="rounded-r-md font-semibold text-xl">Top</Button>
                    </div>
                    <div className="flex gap-5">
                      <div className="bg-slate-200 rounded-xl">
                          <Button variant="ghost">1h</Button>
                          <Button variant="ghost">6h</Button>
                          <Button variant="ghost">24h</Button>
                          <Button variant="ghost">7d</Button>
                      </div>
                          <Button variant="ghost" className="bg-slate-200 rounded-xl">All chains</Button>
                          <Button variant="ghost"className="bg-slate-200 rounded-xl">View all</Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span>Rank</span>
                            <span>Collection</span>
                            <span>Floor Price</span>
                            <span>Volume</span>
                        </div>
                        {collections.slice(0, 5).map((collection, index) => (
                            <div key={index} className={`flex items-center justify-between p-2 ${index === 3 ? 'bg-gray-100' : ''}`}>
                                <span>{collection.rank}</span>
                                <div className="flex items-center">
                                    <img src={collection.img} alt={`Collection ${collection.name}`} className="w-10 h-10 rounded-full mr-2" />
                                    <span>{collection.name}</span>
                                    {collection.verified && <i className="fas fa-check-circle text-blue-500 ml-1"></i>}
                                </div>
                                <span>{collection.price}</span>
                                <span>{collection.volume}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span>Rank</span>
                            <span>Collection</span>
                            <span>Floor Price</span>
                            <span>Volume</span>
                        </div>
                        {collections.slice(5).map((collection, index) => (
                            <div key={index} className="flex items-center justify-between p-2">
                                <span>{collection.rank}</span>
                                <div className="flex items-center">
                                    <img src={collection.img} alt={`Collection ${collection.name}`} className="w-10 h-10 rounded-full mr-2" />
                                    <span>{collection.name}</span>
                                    {collection.verified && <i className="fas fa-check-circle text-blue-500 ml-1"></i>}
                                </div>
                                <span>{collection.price}</span>
                                <span>{collection.volume}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </div>

  );
}
