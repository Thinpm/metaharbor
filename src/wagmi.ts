import { http, createConfig } from '@wagmi/core'
import { ancient8Testnet } from "@/config/chains";
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { createStorage } from '@wagmi/core'

// Create a custom storage that properly binds methods
const storage = createStorage({
  storage: {
    getItem: (key) => {
      if (typeof window !== 'undefined') {
        return window.localStorage.getItem(key)
      }
      return null
    },
    setItem: (key, value) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, value)
      }
    },
    removeItem: (key) => {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    },
  },
})

export const config = getDefaultConfig({
  appName: 'NeonFeed',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  chains: [ancient8Testnet],
  ssr: true,
  storage,
  transports: {
    [ancient8Testnet.id]: http(),
  }
})