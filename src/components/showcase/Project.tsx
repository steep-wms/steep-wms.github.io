interface ProjectProps {
  children: React.ReactNode
}

const Project = ({ children }: ProjectProps) => {
  return (
    <div className="bg-bg rounded-xl shadow hover:drop-shadow-md transition-[filter] overflow-hidden">
      {children}
    </div>
  )
}

export default Project
