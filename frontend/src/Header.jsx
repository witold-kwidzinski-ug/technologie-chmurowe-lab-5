import { Link } from "react-router";

export default function Header() {

    return (
        <header>
            <div style={{justifySelf: "start"}}>
                <Link to='/'>Main</Link>
                <Link to='/list'>List</Link>
                <Link to='/stats'>Stats</Link>
            </div>
            
        </header>
    )
}