// src/components/Providers.jsx
'use client'

import { DAppProvider, Sepolia } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: getDefaultProvider('sepolia'),
    1337: 'http://127.0.0.1:8545',
  },
}

export default function BlockChainProvider({ children }) {
  return <DAppProvider config={config}>{children}</DAppProvider>
}
