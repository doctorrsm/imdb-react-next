import './globals.css';
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import SearchBox from '../components/SearchBox'
import Providers from "./Providers";
export const metadata = {
  title: 'IMDB clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">      
      <body>
      <Providers>
      <Header />
      <Navbar />
      <SearchBox />
      {children}
      </Providers>
      </body>
    </html>
  )
}
