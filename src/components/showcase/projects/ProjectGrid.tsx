interface ProjectGridProps {
  children: React.ReactNode
}

const ProjectGrid = ({ children }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:[grid-template-columns:minmax(0,1fr)_10rem] gap-8">
      {children}
    </div>
  )
}

export default ProjectGrid
