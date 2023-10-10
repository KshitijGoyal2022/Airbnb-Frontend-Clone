import Image from 'next/image'
import Container from './components/Container'
import ListingCard from './components/ListingCard'


export default function Home() {
  return (
    <Container>
      <div className ="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grdi-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <ListingCard />
      </div>
    </Container>
  )
}
