import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

interface TabButton {
  active: boolean
  selectTab: () => void
  children: ReactNode
}

export function TabButton({ 
  active,
  selectTab,
  children 
}: TabButton) {
  const buttonClasses = active ? "text-white border-b border-purple-500" : "text-[#ADB7BE]"

  return (
    <button onClick={selectTab} >
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>

      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      />
    </button>
  )
}