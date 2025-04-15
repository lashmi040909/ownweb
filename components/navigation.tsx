import Link from "next/link"

interface NavigationProps {
  activePage: "home" | "about" | "fun" | "messages"
}

export function Navigation({ activePage }: NavigationProps) {
  return (
    <div className="flex items-center justify-between w-full px-6 py-3 bg-light-yellow/80 hover-float">
      <div className="text-bright-pink text-2xl font-bold handwriting">Lakshmi</div>
      <div className="flex space-x-6">
        <Link
          href="/"
          className={`${activePage === "home" ? "text-bright-pink" : "text-dark-green"} hover:text-bright-pink transition-colors hover-glow`}
        >
          主页
        </Link>
        <Link
          href="/about"
          className={`${activePage === "about" ? "text-bright-pink" : "text-dark-green"} hover:text-bright-pink transition-colors hover-glow`}
        >
          关于我的
        </Link>
        <Link
          href="/fun"
          className={`${activePage === "fun" ? "text-bright-pink" : "text-dark-green"} hover:text-bright-pink transition-colors hover-glow`}
        >
          小玩意
        </Link>
        <Link
          href="/messages"
          className={`${activePage === "messages" ? "text-bright-pink" : "text-dark-green"} hover:text-bright-pink transition-colors hover-glow`}
        >
          留言花园
        </Link>
      </div>
    </div>
  )
}

