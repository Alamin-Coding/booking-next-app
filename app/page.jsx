// "use client"
import Section from '@/src/components/Section'
import SectionHeading from '@/src/components/SectionHeading'
import Card from '@/src/components/special-offers/Card'
const API = 'https://jsonplaceholder.typicode.com/posts'

export default async function Home() {
  const response = await fetch(API)
  const data = await response.json();
  console.log(data);
  return (
    <main>
      <div className="container">
      <h1 className='text-3xl'>Home Page </h1>
      </div>
      <Section>
        <SectionHeading heading={"Special Offers"} subHeading={"These popular destinations have a lot to offer"} align={"text-center"} />
        <div className='grid grid-cols-3 gap-6'>
          {data.slice(0,3).map((item, i) => (
          <Card headingText={item.title} buttonText={item.title} key={i}/>
          ))}
        </div>

      </Section>
    </main>
  )
}
