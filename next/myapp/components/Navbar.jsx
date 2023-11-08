import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/contact/book">Booking</Link>
                </li>
                <li>
                    <Link href="/contact/book/info">Info</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}
