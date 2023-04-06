import './globals.css'
import Header from '@/components/Header'
import Providers from "./Providers";
export const metadata = {
  title: 'IMDB clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body>
      <Providers>
      <Header />
      {children}
      </Providers>
      </body>
    </html>
  )
}
