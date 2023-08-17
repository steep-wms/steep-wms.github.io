"use client"

import Link from "../LinkFix"
import SimpleIcon from "../SimpleIcon"
import { Tooltip } from "../Tooltip"
import type { SimpleIcon as SI } from "simple-icons"

interface SocialButtonProps {
  icon: SI
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
        <SimpleIcon icon={icon} size={42} title="" />
      </Link>
    </Tooltip>
  )
}

export default SocialButton
