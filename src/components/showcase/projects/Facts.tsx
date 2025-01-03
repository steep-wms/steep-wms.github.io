interface FactProps {
  fact: string
  description: React.ReactNode
}

const Fact = ({ fact, description }: FactProps) => {
  return (
    <div>
      <div className="text-xl font-normal">{fact}</div>
      <div>{description}</div>
    </div>
  )
}

const Facts = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-md border border-gray-200 px-6 pb-7 pt-6 text-sm shadow-sm">
      <div className="mb-2">
        <div className="text-base font-normal">Facts and figures</div>
        <div className="text-xs text-gray-600">
          from the years 2017&ndash;2023
        </div>
      </div>
      <Fact fact="1,731" description="planning areas" />
      <Fact
        fact="> 191,000&thinsp;km"
        description={
          <>
            distance recorded by{" "}
            <span className="whitespace-nowrap">T-Car</span>
          </>
        }
      />
      <Fact fact="622&thinsp;TB" description="data collected and processed" />
      <Fact fact="> 184 M" description="images taken and processed" />
    </div>
  )
}

export default Facts
