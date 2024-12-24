"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWallet";
import WalletButton from "@/components/WalletButton";

export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const toggleModal = () => {
    setIsShow(!isShow);
  }
  return (
    <div className="h-auto flex flex-col items-center bg-background pt-20">
      <header className="w-full bg-card p-4 flex justify-between items-center border-b fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="font-bold pr-5 border-r-2 cursor-pointer">METAHARBOR</span>
          </Link>
          <Link href="/drops">
            <span className=" cursor-pointer hover:text-primary hover:bg-slate-300 rounded-lg px-2 py-1">Drops</span>
          </Link>
          <Link href="/stats">
            <span className=" cursor-pointer hover:text-primary  hover:bg-slate-300 rounded-lg px-2 py-1">Stats</span>
          </Link>
          <Link href="/create">
            <span className=" cursor-pointer hover:text-primary hover:bg-slate-300 rounded-lg px-2 py-1">Create</span>
          </Link>
        </div>
        <div className="flex justify-center flex-1 mx-4">
            <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search items, collections and accounts"
                className="bg-transparent border-none outline-non e min-w-[500px] h-[25px] text-sm placeholder:text-muted-foreground"
              />
            </div>
        </div>
        <div className="flex items-center gap-4">
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">  
            <ShoppingCart className="h-5 w-5" />
          </Button>
          {/* <Button variant="secondary" onClick={() => setIsShow(!isShow)} className="flex items-center">
            <Image src="/assets/svg/wellet.svg" alt="Wallet" width={24} height={24} className="mr-2" />
            Login
          </Button> */}
          <WalletButton />
        </div>
      </header>

      
    </div>
  );
}
