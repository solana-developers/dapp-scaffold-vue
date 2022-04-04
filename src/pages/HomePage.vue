<script setup>
import RequestAirdrop from '../components/RequestAirdrop';
import store from '../vuex'
import pkg from '../../package.json';
</script>

<template>
    <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col">
            <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Scaffold Lite <span className='text-sm font-normal align-top text-slate-700'>v{{pkg.version}}</span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>Simply the fastest way to get started.</p>
          Next.js, tailwind, wallet, web3.js, and more.
        </h4>
        <div className="max-w-md mx-auto mockup-code bg-neutral p-6 my-2">
          <pre data-prefix=">">
            <code className="truncate">Start building on Solana  </code>
          </pre>
        </div>
            <div className="text-center">
                <request-airdrop></request-airdrop>
                <p class="text-white">SOL Balance: {{store.state.userSOLBalance}}</p>
            </div>
      </div>
    </div>
</template>