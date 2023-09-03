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
    <div className="w-full border border-gray-400 rounded-md p-6 text-sm flex flex-col gap-4">
      <div>
        <div className="font-normal">Facts and figures</div>
        <div className="text-gray-600">(from the year 2022)</div>
      </div>
      <Fact fact="1,300" description="planning areas" />
      <Fact
        fact="> 58,000&thinsp;km"
        description={
          <>
            distance recorded by{" "}
            <span className="whitespace-nowrap">T-Car</span>
          </>
        }
      />
      <Fact fact="201&thinsp;TB" description="data collected and processed" />
      <Fact fact="58.4 M" description="images taken and processed" />
    </div>
  )
}

export default Facts
