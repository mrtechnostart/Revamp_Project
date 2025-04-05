'use client'

import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

export default function ConnectWallet() {
  const [account, setAccount] = useState(null)
  const [provider, setProvider] = useState(null)
  const [network, setNetwork] = useState(null)
  const [balance, setBalance] = useState(null)
  const [error, setError] = useState(null)

  const isConnected = !!account

  const shorten = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError('MetaMask not detected')
        return
      }

      const ethProvider = new ethers.providers.Web3Provider(window.ethereum)
      setProvider(ethProvider)

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      const userAccount = accounts[0]
      setAccount(userAccount)

      const net = await ethProvider.getNetwork()
      setNetwork(net)

      const bal = await ethProvider.getBalance(userAccount)
      setBalance(ethers.utils.formatEther(bal))

      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    setBalance(null)
    setNetwork(null)
    setError(null)
  }

  useEffect(() => {
    if (!window.ethereum) {
      setError('MetaMask not found')
      return
    }

    const ethProvider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(ethProvider)

    ethProvider.listAccounts().then(async (accounts) => {
      if (accounts.length > 0) {
        const userAccount = accounts[0]
        setAccount(userAccount)

        const net = await ethProvider.getNetwork()
        setNetwork(net)

        const bal = await ethProvider.getBalance(userAccount)
        setBalance(ethers.utils.formatEther(bal))
      }
    })

    window.ethereum.on('accountsChanged', async (accounts) => {
      if (accounts.length === 0) {
        disconnectWallet()
      } else {
        const userAccount = accounts[0]
        setAccount(userAccount)

        if (ethProvider) {
          const bal = await ethProvider.getBalance(userAccount)
          setBalance(ethers.utils.formatEther(bal))
        }
      }
    })

    window.ethereum.on('chainChanged', () => {
      window.location.reload()
    })
  }, [])

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 max-w-sm mx-auto mt-10 shadow-2xl border border-gray-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
        Wallet Connection
      </h2>

      {isConnected ? (
        <div className="space-y-3">
          <div className="text-green-600 text-sm text-center font-medium">✅ Connected</div>
          <div className="text-gray-800 dark:text-gray-300 text-sm">
            <strong>Address:</strong> {shorten(account)}
          </div>
          <div className="text-gray-800 dark:text-gray-300 text-sm">
            <strong>Balance:</strong> {balance} ETH
          </div>
          <div className="text-gray-800 dark:text-gray-300 text-sm">
            <strong>Network:</strong> {network?.name} ({network?.chainId})
          </div>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full w-full transition"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full w-full transition"
        >
          Connect Wallet
        </button>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
      )}
    </div>
  )
}
