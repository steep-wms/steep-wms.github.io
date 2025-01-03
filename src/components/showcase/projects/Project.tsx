interface ProjectProps {
  children: React.ReactNode
}

const Project = ({ children }: ProjectProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-bg shadow transition-[filter] hover:drop-shadow-md">
      {children}
    </div>
  )
}

export default Project
