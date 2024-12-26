import { walletIds } from "@thirdweb-dev/wallets";

export interface WalletConfig {
  id: keyof typeof walletIds;
  name: string;
  image: string;
}

export const SUPPORTED_WALLETS: WalletConfig[] = [
  {
    id: "metamask",
    name: "MetaMask",
    image: "/assets/wallets/metamask.png"
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    image: "/assets/wallets/coinbase.png"
  },
  {
    id: "walletConnect",
    name: "Rainbow",
    image: "/assets/wallets/rainbow.png"
  }
]; 