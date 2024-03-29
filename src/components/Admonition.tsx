interface AdmonitionProps {
  children: React.ReactNode
}

const Admonition = ({ children }: AdmonitionProps) => {
  return (
    <div className="bg-gray-100 prose my-4 p-4 border-l-4 border-primary">
      {children}
    </div>
  )
}

export default Admonition
