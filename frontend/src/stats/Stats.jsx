import { useEffect, useState } from "react"

export default function Stats() {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                const d = await fetch("/api/stats").then(o => o.json())

                setData(d)
            } catch {
                console.log("Fetch failed.")
            }
            
        }

        getData()

    }, [])


    return (
        <>
            { data == null ? <p>Loading...</p> : <>
                <p>Liczba danych: {data.size}</p>
                <p>Instancja backendu: {data.id}</p>
                <p>Uptime: {data.uptime}s</p>
                <p>Liczba obsłużonych rządań: {data.reqCount}</p>
            </>
                

            }
            
        </>
    )
}