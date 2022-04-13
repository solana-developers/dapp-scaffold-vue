# DApp Scaffold Vue

## Getting Started

This is a [Vue 3](https://vuejs.org/) project bootstrapped with [`vue create app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses [solana-wallets-vue](https://github.com/lorisleiva/solana-wallets-vue) to integrate wallets, and [tailwindcss](https://tailwindcss.com/) and [daisyui](https://daisyui.com/) for styling. 

The responsive version for wallets and wallet adapter may not function or work as expected for mobile based on plugin and wallet compatibility. For more code examples and implementations please visit the [Solana Cookbook](https://solanacookbook.com/)

## Installation

```bash
npm install
# or
yarn install
```

## Build and Run

Next, run the development server:

```bash
npm run serve
# or
yarn serve
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Features

- [x] Wallet Integration with Auto Connec / Refresh

- [x] State Management

- [x] Components: One or more components demonstrating state management

- [x] Web3 Js: Examples of one or more uses of web3 js including a transaction with a connection provider

- [x] Sample navigation and page changing to demonstate state

- [x] Clean Simple Styling 

### Structure
 
```
├── public : publically hosted files
├── src : primary code folders and files 
│   ├── components : should house anything considered a resuable UI component
│   ├── pages` : the pages that host meta data and the intended `View` for the page
│   ├── vuex` : stores used in state management
|   main App, css, and routing files
style, package, configuration, and other project files

```
## References

This scaffold references features and styling from the original [Next.js scaffold](https://github.com/solana-labs/dapp-scaffold) 
