import './globals.css'
import { League_Spartan } from 'next/font/google'
import { QueryState } from '@/Contexts/QueryState'
import { NavListState } from '@/Contexts/NavListState'

// const inter = Inter({ subsets: ['latin'] })

//importing fonts from google
const league_spartan = League_Spartan({
  weight: '500',
  subsets: ['latin']
})
export const metadata = {
  title: 'CampusVoice',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
        <QueryState>
          <NavListState>
            {children}
          </NavListState>
        </QueryState>
      </body>
    </html>
  )
}
