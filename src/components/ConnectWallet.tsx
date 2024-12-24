import React, { useState } from "react";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { SUPPORTED_WALLETS } from "@/config/wallets";

export default function ConnectWalletModal({ onClose }: { onClose?: () => void }) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = (walletId: string) => {
    setIsConnecting(true);
    setError("");

    // Mock logic to simulate wallet connection
    setTimeout(() => {
      if (walletId === "metamask" || walletId === "walletConnect") {
        setAddress("0x1234...abcd");
        console.log(`Đã kết nối với ${walletId}`);
        onClose?.();
      } else {
        setError("Ví không được hỗ trợ");
      }
      setIsConnecting(false);
    }, 1000);
  };

  const handleDisconnect = () => {
    setAddress(null);
    onClose?.();
  };

  return (
    <Card className="w-[400px] p-6 bg-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          {address ? "Ví đã kết nối" : "Kết nối ví"}
        </h2>
       
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      {address ? (
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg break-all">
            {address}
          </div>
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={handleDisconnect}
          >
            Ngắt kết nối
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {SUPPORTED_WALLETS.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="w-full flex items-center justify-between p-4 h-auto hover:bg-gray-50 transition"
              onClick={() => handleConnect(wallet.id)}
              disabled={isConnecting}
            >
              <div className="flex items-center gap-3">
                <img src={wallet.image} alt={wallet.name} className="w-8 h-8" />
                <span className="font-medium">{wallet.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {isConnecting ? "Đang kết nối..." : "Kết nối"}
              </span>
            </Button>
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center mt-6">
        Khi kết nối ví, bạn đồng ý với Điều khoản Dịch vụ và Chính sách Bảo mật của MetaHarbor.
      </p>
    </Card>
  );
}
