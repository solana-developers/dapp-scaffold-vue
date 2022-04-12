<script setup>
import SignMessage from '../components/SignMessage';
import SendTransaction from '../components/SendTransaction';
</script>

<template>
    <div class="md:hero mx-auto p-4">
        <div class="md:hero-content flex flex-col">
            <h1 class="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
                Basics
            </h1>
            <div class="text-center">
                <sign-message></sign-message>
                <send-transaction></send-transaction>
            </div>
      </div>
    </div>
</template>