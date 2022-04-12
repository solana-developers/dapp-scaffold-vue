<script setup>
import store from '../vuex';
import { useWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

const { publicKey, connected } = useWallet();

function setBalance (balance) {
    store.commit('setBalance', { balance });
}

async function requestAirdrop () {
    if (!publicKey) {
        console.error('[requestAirdrop] public key not found');
        return;
    }

    const connection = new Connection(clusterApiUrl('devnet'));
    const signature = await connection.requestAirdrop(publicKey.value, LAMPORTS_PER_SOL);

    await connection.confirmTransaction(signature, 'confirmed');

    const lamports = await connection.getBalance(publicKey.value, 'confirmed');
    const balance = lamports / LAMPORTS_PER_SOL;

    setBalance(balance);

    console.log(`[requestAirdrop] success, balance is now ${balance} sol`);
}
</script>

<template>
    <div>
        <button
            class="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
            @click="requestAirdrop"
        >
            <span>
                Airdrop 1
            </span>
        </button>
    </div>
</template>
