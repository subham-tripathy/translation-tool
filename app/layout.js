import NavBar from './Components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Translation Tool',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-600 dark:text-white'>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
