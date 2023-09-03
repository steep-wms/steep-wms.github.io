interface ProjectGridProps {
  children: React.ReactNode
}

const ProjectGrid = ({ children }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,1fr)_16rem] gap-8 lg:gap-12 xl:gap-16">
      {children}
    </div>
  )
}

export default ProjectGrid
