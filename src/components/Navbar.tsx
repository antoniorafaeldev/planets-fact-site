export function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar-logo">The Planets</span>
            <ul className="navbar-links">
                <li><a className="navbar-link" href="#mercury">Mercury</a></li>
                <li><a className="navbar-link" href="#venus">Venus</a></li>
                <li><a className="navbar-link" href="#earth">Earth</a></li>
                <li><a className="navbar-link" href="#mars">Mars</a></li>
                <li><a className="navbar-link" href="#jupiter">Jupiter</a></li>
                <li><a className="navbar-link" href="#saturn">Saturn</a></li>
                <li><a className="navbar-link" href="#uranus">Uranus</a></li>
                <li><a className="navbar-link" href="#neptune">Neptune</a></li>
            </ul>
        </nav>
    )
}