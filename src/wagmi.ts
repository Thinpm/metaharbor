import { http } from 'wagmi'
import { ancient8Testnet } from "@/config/chains";
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const config = getDefaultConfig({
  appName: 'NeonFeed',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  chains: [ancient8Testnet],
  ssr: true,
  transports: {
    [ancient8Testnet.id]: http(),
  }
}) 