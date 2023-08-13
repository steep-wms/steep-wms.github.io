"use client"

import { Balancer } from "react-wrap-balancer"
import Link from "@/components/LinkFix"
import { Tooltip } from "@/components/Tooltip"
import SimpleIcon from "@/components/SimpleIcon"
import { siGithub } from "simple-icons"
import { Home, Mail } from "lucide-react"
import { Url } from "next/dist/shared/lib/router/router"

interface ProfileProps {
  name: string
  imageUrl: string
  role: string
  mail: string
  githubUser?: string
  website?: Url
}

const Profile = ({
  imageUrl,
  name,
  role,
  mail,
  githubUser,
  website,
}: ProfileProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        className="w-36 rounded-full"
      />
      <h4 className="mb-2 mt-5 text-xl font-normal">{name}</h4>
      <Balancer>{role}</Balancer>
      <div className="mt-3 flex gap-3">
        <Tooltip content="Email">
          <Link href={`mailto:${mail}`}>
            <Mail className="transition-colors hover:stroke-gray-600" />
          </Link>
        </Tooltip>
        {githubUser !== undefined ? (
          <Tooltip content="GitHub">
            <Link href={`https://github.com/${githubUser}`}>
              <SimpleIcon
                icon={siGithub}
                className="transition-colors hover:fill-gray-600"
                title=""
              />
            </Link>
          </Tooltip>
        ) : undefined}
        {website !== undefined ? (
          <Tooltip content="Website">
            <Link href={website}>
              <Home className="transition-colors hover:stroke-gray-600" />
            </Link>
          </Tooltip>
        ) : undefined}
      </div>
    </div>
  )
}

export default Profile
