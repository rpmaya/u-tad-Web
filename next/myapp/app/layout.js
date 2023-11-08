//Borramos todos y empezamos de nuevo

/*Ejemplo <a href="/about">About</a> -> <Link href="/about">About</Link> */
/*
import Link from 'next/link'
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
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
          </ul>
        </nav>

        {children}
      </body>
    </html>
  )
}
*/
/*Me llevo todo el código de Navbar al componente Navbar.jsx y lo importo para utilizarlo como un componente*/
//import Navbar from '../components/Navbar';
import Navbar from '@/components/Navbar';
import { Roboto } from 'next/font/google'

//Después de CSS
import "./globals.css"

export const metadata = {
  title: "Mi tienda",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}