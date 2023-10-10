import './globals.css'
import {Nunito} from "next/font/google"
import type { Metadata } from 'next'

//Components
import Navbar from './components/navbar/Navbar'
import Home from './page'


export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets : ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <Navbar />
            {children}
      </body> 
    </html>
  )
}
