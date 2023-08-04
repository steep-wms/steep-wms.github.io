interface SidebarProps {
  children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="sticky top-0 flex max-h-screen w-full pt-24">
      <div className="max-h-full w-full overflow-y-auto text-sm">
        {children}
      </div>
    </div>
  )
}

export default Sidebar
