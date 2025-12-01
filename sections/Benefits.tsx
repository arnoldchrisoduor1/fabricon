import { CircleCheckBig } from "lucide-react"

const Benefits = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2">
        <div>
            
        </div>

        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">Key Benefits of Our System for Your Business Efficiency</h2>
            <p className="text-gray-500">Our systems boost productivity cut costs and drive business growth</p>

            <div className="flex gap-3">
                <div>
                    <CircleCheckBig size={16}/>
                </div>
                <div>
                    <p className="font-semibold">Boosting Quality with Tech</p>
                    <p className="text-sm text-gray-500">With advanced technology, we help you achieve top product qulity.<br/>
                    Discover how we can enhance your standards.
                    </p>
                </div>
            </div>
            <div className="flex gap-3">
                <div>
                    <CircleCheckBig size={16}/>
                </div>
                <div>
                    <p className="font-semibold">OptimizingProduction Process</p>
                    <p className="text-sm text-gray-500">Boost factory efficiency and production with our innovative solutions.<br/>
                    See how the latest technology can maximize your output.
                    </p>
                </div>
            </div>
            <div className="flex gap-3">
                <div>
                    <CircleCheckBig size={16}/>
                </div>
                <div>
                    <p className="font-semibold">AI-Drven Production</p>
                    <p className="text-sm text-gray-500">Levarage the power of AI to transform your manufacturing process.<br/>
                    achieving faster and more effective results.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits