import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const [showSocial, setShowSocial] = useState(false);

  const handleWorkClick = (index: number) => {
    setActiveWork(activeWork === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-pattern">
      <Navigation activePage="about" />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-lighter-yellow rounded-xl p-6 mb-8 max-w-3xl mx-auto hover-float transition-all duration-300">
          <p className="text-dark-green leading-relaxed">
            Hello！你好啊！我是李诗淼，是一名来自内蒙古包头市的大学生，现就读于北京交通大学建筑与艺术学院视觉传达设计专业。我性格开朗，热爱生活，喜欢自言自语，也喜欢和朋友和朋友玩抽象，本人对东玄西玄十分感兴趣，可以一起交流讨论哦！
          </p>
          <p className="text-dark-green mt-4">欢迎你来到我的小花园！期待你的浏览与留言~</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-lighter-yellow rounded-xl p-6 hover-glow transition-all duration-300 cursor-pointer" onClick={() => setShowSocial(!showSocial)}>
              <h2 className="text-bright-pink text-xl mb-4 hover-float flex items-center justify-between">
                处女座INFJ
                <span className="text-sm">{showSocial ? "点击收起" : "点击展开"}</span>
              </h2>
              <ul className="text-dark-green space-y-2">
                <li className="hover-glow transition-all duration-300 hover:translate-x-2">喜欢自驾游</li>
                <li className="hover-glow transition-all duration-300 hover:translate-x-2">喜欢猫猫狗狗</li>
                <li className="hover-glow transition-all duration-300 hover:translate-x-2">小马宝莉和狐妖小红娘</li>
                <li className="hover-glow transition-all duration-300 hover:translate-x-2">地狱少女十年粉丝</li>
              </ul>
            </div>

            <div className={`bg-lighter-yellow rounded-xl p-6 hover-glow transition-all duration-300 ${showSocial ? 'opacity-100' : 'opacity-50'}`}>
              <h2 className="text-dark-green text-xl mb-4 hover-float">我的社交</h2>
              <ul className="text-bright-pink space-y-2">
                <li className="hover-glow transition-all duration-300 hover:translate-x-2 cursor-pointer hover:text-pink-500">抖音</li>
                <li className="hover-glow transition-all duration-300 hover:translate-x-2 cursor-pointer hover:text-pink-500">小红书</li>
              </ul>
            </div>
          </div>

          <div className="bg-lighter-yellow rounded-xl p-6 mt-8 hover-float transition-all duration-300">
            <h2 className="text-dark-green text-2xl mb-6 hover-glow">我的作品</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div 
                  key={index}
                  className={`bg-white/50 aspect-square image-container hover-float transition-all duration-300 cursor-pointer ${
                    activeWork === index ? 'scale-105 shadow-lg' : ''
                  }`}
                  onClick={() => handleWorkClick(index)}
                >
                  <Image
                    src={index === 1 ? "/images/work1.jpg" : 
                         index === 2 ? "/images/work2.jpg" : 
                         "/images/work3.jpg"}
                    alt={`作品${index}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                    activeWork === index ? 'opacity-100' : 'group-hover:opacity-100'
                  }`}>
                    <span className="text-white text-lg">点击查看详情</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

