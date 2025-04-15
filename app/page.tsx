import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function HomePage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleImageClick = (alt: string) => {
    setActiveImage(activeImage === alt ? null : alt);
  };

  return (
    <main className="min-h-screen bg-pattern">
      <Navigation activePage="home" />

      <div className="container mx-auto px-4 py-8">
        <div className="text-dark-green font-handwriting text-5xl leading-relaxed mt-8 mb-16 hover-float">
          <h1 className="transition-transform duration-300 hover:scale-105 cursor-pointer">Life is like</h1>
          <h1 className="transition-transform duration-300 hover:scale-105 cursor-pointer">a box</h1>
          <h1 className="transition-transform duration-300 hover:scale-105 cursor-pointer">collecting happiness</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <div 
              className={`w-64 h-64 rounded-full bg-white/50 overflow-hidden relative hover-float image-container transition-all duration-300 cursor-pointer ${
                activeImage === "生活" ? "scale-110 shadow-lg" : ""
              }`}
              onClick={() => handleImageClick("生活")}
            >
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="生活"
                width={256}
                height={256}
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <span className="text-dark-green text-xl mt-4 hover-glow cursor-pointer transition-colors duration-300 hover:text-green-600">
              {activeImage === "生活" ? "✨ 生活 ✨" : "生活"}
            </span>
          </div>

          <div className="flex flex-col items-center mt-16 md:mt-0">
            <div 
              className={`w-64 h-64 rounded-full bg-white/50 overflow-hidden relative hover-float image-container transition-all duration-300 cursor-pointer ${
                activeImage === "自我" ? "scale-110 shadow-lg" : ""
              }`}
              onClick={() => handleImageClick("自我")}
            >
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="自我"
                width={256}
                height={256}
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <span className="text-dark-green text-xl mt-4 hover-glow cursor-pointer transition-colors duration-300 hover:text-green-600">
              {activeImage === "自我" ? "✨ 自我 ✨" : "自我"}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div 
              className={`w-64 h-64 rounded-full bg-white/50 overflow-hidden relative hover-float image-container transition-all duration-300 cursor-pointer ${
                activeImage === "旅行" ? "scale-110 shadow-lg" : ""
              }`}
              onClick={() => handleImageClick("旅行")}
            >
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="旅行"
                width={256}
                height={256}
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <span className="text-dark-green text-xl mt-4 hover-glow cursor-pointer transition-colors duration-300 hover:text-green-600">
              {activeImage === "旅行" ? "✨ 旅行 ✨" : "旅行"}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

