// "use client"
import axios from 'axios'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import Card from './Card'

const SpecialOffers = () => {




  return (
   <Section>
     <SectionHeading align="text-center" heading={'Special Offers'} subHeading={'These popular destinations have a lot to offer'}/>
     <div className='grid grid-cols-3 gap-6'>
      <Card/>
     </div>
   </Section>
  )
}

// export const getData = async () => {
//  const {data} = await axios.get('https://fakestoreapi.com/products');
//  console.log(data);
//  return data
// }


export default SpecialOffers
