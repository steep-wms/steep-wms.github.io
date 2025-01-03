interface AdmonitionProps {
  children: React.ReactNode
}

const Admonition = ({ children }: AdmonitionProps) => {
  return (
    <div className="prose my-4 border-l-4 border-primary bg-gray-100 p-4">
      {children}
    </div>
  )
}

export default Admonition
