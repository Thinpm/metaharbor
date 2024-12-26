export const ancient8Testnet = {
  id: 28122024,
  name: 'Ancient8 Testnet',
  network: 'ancient8',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://rpcv2-testnet.ancient8.gg'] },
    default: { http: ['https://rpcv2-testnet.ancient8.gg'] },
  },
  blockExplorers: {
    default: { name: 'Ancient8 Explorer', url: 'https://scanv2-testnet.ancient8.gg' },
  },
} as const 