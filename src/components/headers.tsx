"use client"
import Image from "next/image";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Bell, Search, ShoppingCart, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWallet";
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
          <Button variant="secondary" onClick={() => setIsShow(!isShow)} className="flex items-center">
            <Image src="/assets/svg/wellet.svg" alt="Wallet" width={24} height={24} className="mr-2" />
            Login
          </Button>
          {isShow && (
            <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={toggleModal}>
              <div onClick={(e) => e.stopPropagation()}>
                <ConnectWalletModal />
              </div>
            </div>
          )}
        </div>
      </header>

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
              <img src="/assets/avt/avt.png" alt="Profile" className="w-12 h-12 rounded-full"/>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">
                  NFT Collection 
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                </h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  By Creator
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                </p>
                <p className="text-muted-foreground">Open edition {1/1000} ETH</p>
              </div>
            </CardHeader>
            <CardContent className="flex justify-between items-center p-4">
              <div className="flex space-x-2">
                {[
                  { value: "0", label: "days" },
                  { value: "12", label: "hrs" },
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
    </div>
  );
}
