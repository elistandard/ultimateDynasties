import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Ultimate Dynasties</title>
        <meta name="description" content="Ultimate Frisbee Dynasty Analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ultimate Dynasties
        </h1>
        <p className="text-center text-lg">
          Welcome to the Ultimate Frisbee Dynasty Analysis
        </p>
      </main>
    </div>
  )
} 