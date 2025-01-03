"use client"

import { Tooltip } from "../Tooltip"
import Link from "next/link"
import { ReactNode } from "react"

interface SocialButtonProps {
  icon: ReactNode
  title: string
  href: string
}

const SocialButton = ({ icon, title, href }: SocialButtonProps) => {
  return (
    <Tooltip content={<span className="text-base">{title}</span>} delay={0}>
      <Link
        href={href}
        className="text-gray-700 transition-colors hover:text-gray-800 group-hover:[&:not(:hover)]:text-opacity-50"
        aria-label={title}
      >
        {icon}
      </Link>
    </Tooltip>
  )
}

export default SocialButton
