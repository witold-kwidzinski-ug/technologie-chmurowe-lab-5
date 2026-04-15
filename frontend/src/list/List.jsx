import { useEffect, useState } from "react";
import ItemAdder from "./ItemAdder";

export default function List() {

    const [items, setItems] = useState([])


    useEffect(() => {
        async function getItems() {
            try {
                const d = await fetch("api/items").then(o => o.json())
                setItems(d)
            } catch {
                console.log("Fetch failed.")
            }
            
        }

        getItems()
    }, [])

    return (
        <>
            <div id="itemgrid">
            {items.map((n, i) => <div key={`${n.id}${i}`} className="item">{n.nazwa}</div>)}

            </div>

            <ItemAdder setItems={setItems} />
        </>
    )

}