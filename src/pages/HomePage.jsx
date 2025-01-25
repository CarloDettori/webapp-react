import CardComponent from "../components/CardComponent"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function HomePage() {
    const { movieList } = useContext(GlobalContext)


    return (
        <main>
            <div className="row">
                {movieList.map((el) => {
                    return <CardComponent key={el.id} data={el} />
                })}
            </div>
        </main>
    )
}