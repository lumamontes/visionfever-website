import { zines } from "@/data/zines"
import ZineSection from "./ZineSection"

const Zines: React.FC = () => {
    return (
        <div id="features">
            <h2 className="sr-only">Zines</h2>
            {zines.map((item, index) => {
                return <ZineSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Zines