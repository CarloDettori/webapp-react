import CardComponent from "../components/CardComponent"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function HomePage() {
    const { moviesList } = useContext(GlobalContext)


    return (
        <main>
            <div className="row">
                {moviesList.map((el) => {
                    return <CardComponent key={el.id} data={el} />
                })}
            </div>
        </main>
    )
}