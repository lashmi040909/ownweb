"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function MessagesPage() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the message to a backend
    alert("留言已发送！")
    setMessage("")
  }

  return (
    <main className="min-h-screen bg-pattern">
      <Navigation activePage="messages" />

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-dark-green text-center mt-12 mb-8 hover-float">
          <h2 className="text-2xl">悄悄地</h2>
          <h2 className="text-2xl">写下</h2>
          <h1 className="text-4xl mt-8">你想对我说的话吧</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="bg-white rounded-xl p-4 shadow-sm hover-float">
            <textarea
              className="w-full h-40 p-4 border-none outline-none resize-none hover-glow"
              placeholder="我想说..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-white text-dark-green px-6 py-2 rounded-full hover:bg-light-yellow transition-colors hover-glow"
            >
              立即发送
            </button>
          </div>
        </form>

        <div className="mt-16 relative">
          <div className="flower-container">
            <div className="flower flower-1">
              <div className="flower-center"></div>
              <div className="petal petal-1"></div>
              <div className="petal petal-2"></div>
              <div className="petal petal-3"></div>
              <div className="petal petal-4"></div>
              <div className="petal petal-5"></div>
              <div className="stem"></div>
              <div className="leaf leaf-1"></div>
            </div>

            <div className="flower flower-2">
              <div className="flower-center"></div>
              <div className="petal petal-1"></div>
              <div className="petal petal-2"></div>
              <div className="petal petal-3"></div>
              <div className="petal petal-4"></div>
              <div className="petal petal-5"></div>
              <div className="stem"></div>
              <div className="leaf leaf-1"></div>
            </div>

            <div className="flower flower-3">
              <div className="flower-center"></div>
              <div className="petal petal-1"></div>
              <div className="petal petal-2"></div>
              <div className="petal petal-3"></div>
              <div className="petal petal-4"></div>
              <div className="petal petal-5"></div>
              <div className="stem"></div>
              <div className="leaf leaf-1"></div>
            </div>

            <div className="flower flower-4">
              <div className="tulip">
                <div className="tulip-top"></div>
                <div className="tulip-stem"></div>
                <div className="tulip-leaf"></div>
              </div>
            </div>

            <div className="flower flower-5">
              <div className="daisy">
                <div className="daisy-center"></div>
                <div className="daisy-petals"></div>
                <div className="daisy-stem"></div>
                <div className="daisy-leaf"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

