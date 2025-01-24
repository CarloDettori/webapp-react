import CardComponent from "../components/CardComponent"

export default function HomePage() {

    const [moviesList, setMovieList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => {
                //console.log(res.data.items)
                setMovieList(res.data.items)
            })
    }

    return (
        <main>
            <CardComponent data={moviesList} />
        </main>
    )
}