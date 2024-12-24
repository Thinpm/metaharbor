"use client"
import Image from "next/image";
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
    <div className="h-auto flex flex-col items-center bg-background p-10">
      <header className="w-full bg-card p-4 flex justify-between items-center border-b">
        <div className="flex items-center space-x-4">
          <span className="font-bold pr-5 border-r-2">METAHARBOR</span>
          <span className="pl-5">Drops</span>
          <span className="pl-5">Stats</span>
          <span className="pl-5">Create</span>
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
