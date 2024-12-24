"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <div className="flex items-center justify-center h-1/5 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Connect Your Wallet
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Securely connect your wallet to access the application.
        </p>
        <div className="flex justify-center">
          <ConnectButton
            accountStatus="address"
            showBalance={false}
            chainStatus="icon"
          />
        </div>
      </div>
    </div>
  );
}
