"use client"

import { Navigation } from "@/components/navigation"
import { useEffect, useRef } from "react"

export default function FunPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const generateMaze = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const width = canvas.width
      const height = canvas.height
      const cellSize = 20
      const cols = Math.floor(width / cellSize)
      const rows = Math.floor(height / cellSize)

      // Clear canvas
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // Draw maze
      ctx.strokeStyle = "#3c6d00"
      ctx.lineWidth = 2

      // Initialize grid
      const grid = Array(cols)
        .fill(null)
        .map(() => Array(rows).fill(false))
      const stack: [number, number][] = []

      // Random starting position
      const startX = Math.floor(Math.random() * cols)
      const startY = Math.floor(Math.random() * rows)

      // Mark starting cell as visited
      grid[startX][startY] = true
      stack.push([startX, startY])

      // Directions: right, down, left, up
      const dx = [1, 0, -1, 0]
      const dy = [0, 1, 0, -1]

      while (stack.length > 0) {
        // Get current cell
        const [x, y] = stack[stack.length - 1]

        // Find unvisited neighbors
        const neighbors: number[] = []

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i]
          const ny = y + dy[i]

          if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && !grid[nx][ny]) {
            neighbors.push(i)
          }
        }

        if (neighbors.length > 0) {
          // Choose random neighbor
          const randomIndex = Math.floor(Math.random() * neighbors.length)
          const direction = neighbors[randomIndex]

          // Get new cell coordinates
          const nx = x + dx[direction]
          const ny = y + dy[direction]

          // Mark new cell as visited
          grid[nx][ny] = true

          // Draw path between cells
          ctx.beginPath()

          if (direction === 0) {
            // right
            ctx.moveTo(x * cellSize + cellSize, y * cellSize + cellSize / 2)
            ctx.lineTo((x + 1) * cellSize, y * cellSize + cellSize / 2)
          } else if (direction === 1) {
            // down
            ctx.moveTo(x * cellSize + cellSize / 2, y * cellSize + cellSize)
            ctx.lineTo(x * cellSize + cellSize / 2, (y + 1) * cellSize)
          } else if (direction === 2) {
            // left
            ctx.moveTo(x * cellSize, y * cellSize + cellSize / 2)
            ctx.lineTo(x * cellSize + cellSize, y * cellSize + cellSize / 2)
          } else {
            // up
            ctx.moveTo(x * cellSize + cellSize / 2, y * cellSize)
            ctx.lineTo(x * cellSize + cellSize / 2, y * cellSize + cellSize)
          }

          ctx.stroke()

          // Push new cell to stack
          stack.push([nx, ny])
        } else {
          // Backtrack
          stack.pop()
        }
      }

      // Draw grid
      ctx.strokeStyle = "#e0f5cd"
      ctx.beginPath()

      for (let x = 0; x <= cols; x++) {
        ctx.moveTo(x * cellSize, 0)
        ctx.lineTo(x * cellSize, height)
      }

      for (let y = 0; y <= rows; y++) {
        ctx.moveTo(0, y * cellSize)
        ctx.lineTo(width, y * cellSize)
      }

      ctx.stroke()
    }

    generateMaze()
  }, [])

  const handleRegenerateMaze = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const generateMazeEvent = new Event("generateMaze")
    document.dispatchEvent(generateMazeEvent)

    // Call generateMaze directly
    const generateMaze = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const width = canvas.width
      const height = canvas.height
      const cellSize = 20
      const cols = Math.floor(width / cellSize)
      const rows = Math.floor(height / cellSize)

      // Clear canvas
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // Draw maze
      ctx.strokeStyle = "#3c6d00"
      ctx.lineWidth = 2

      // Initialize grid
      const grid = Array(cols)
        .fill(null)
        .map(() => Array(rows).fill(false))
      const stack: [number, number][] = []

      // Random starting position
      const startX = Math.floor(Math.random() * cols)
      const startY = Math.floor(Math.random() * rows)

      // Mark starting cell as visited
      grid[startX][startY] = true
      stack.push([startX, startY])

      // Directions: right, down, left, up
      const dx = [1, 0, -1, 0]
      const dy = [0, 1, 0, -1]

      while (stack.length > 0) {
        // Get current cell
        const [x, y] = stack[stack.length - 1]

        // Find unvisited neighbors
        const neighbors: number[] = []

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i]
          const ny = y + dy[i]

          if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && !grid[nx][ny]) {
            neighbors.push(i)
          }
        }

        if (neighbors.length > 0) {
          // Choose random neighbor
          const randomIndex = Math.floor(Math.random() * neighbors.length)
          const direction = neighbors[randomIndex]

          // Get new cell coordinates
          const nx = x + dx[direction]
          const ny = y + dy[direction]

          // Mark new cell as visited
          grid[nx][ny] = true

          // Draw path between cells
          ctx.beginPath()

          if (direction === 0) {
            // right
            ctx.moveTo(x * cellSize + cellSize, y * cellSize + cellSize / 2)
            ctx.lineTo((x + 1) * cellSize, y * cellSize + cellSize / 2)
          } else if (direction === 1) {
            // down
            ctx.moveTo(x * cellSize + cellSize / 2, y * cellSize + cellSize)
            ctx.lineTo(x * cellSize + cellSize / 2, (y + 1) * cellSize)
          } else if (direction === 2) {
            // left
            ctx.moveTo(x * cellSize, y * cellSize + cellSize / 2)
            ctx.lineTo(x * cellSize + cellSize, y * cellSize + cellSize / 2)
          } else {
            // up
            ctx.moveTo(x * cellSize + cellSize / 2, y * cellSize)
            ctx.lineTo(x * cellSize + cellSize / 2, y * cellSize + cellSize)
          }

          ctx.stroke()

          // Push new cell to stack
          stack.push([nx, ny])
        } else {
          // Backtrack
          stack.pop()
        }
      }

      // Draw grid
      ctx.strokeStyle = "#e0f5cd"
      ctx.beginPath()

      for (let x = 0; x <= cols; x++) {
        ctx.moveTo(x * cellSize, 0)
        ctx.lineTo(x * cellSize, height)
      }

      for (let y = 0; y <= rows; y++) {
        ctx.moveTo(0, y * cellSize)
        ctx.lineTo(width, y * cellSize)
      }

      ctx.stroke()
    }

    generateMaze()
  }

  return (
    <main className="min-h-screen bg-pattern">
      <Navigation activePage="fun" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <h2 className="text-dark-green text-3xl mb-6 font-handwriting hover-float">随机迷宫生成器</h2>

          <div className="bg-lighter-yellow rounded-xl p-6 mb-6 hover-float">
            <canvas ref={canvasRef} width={600} height={400} className="bg-white rounded-lg shadow-sm hover-glow" />
          </div>

          <button
            onClick={handleRegenerateMaze}
            className="bg-light-green text-dark-green px-6 py-3 rounded-full hover:bg-medium-green hover:text-white transition-colors font-medium hover-glow"
          >
            重新生成迷宫
          </button>
        </div>
      </div>
    </main>
  )
}

