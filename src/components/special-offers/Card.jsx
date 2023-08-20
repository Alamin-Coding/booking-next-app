import Image from "next/image"

const image1 = '/images/SpecialOffers-1.png'

const Card = ({headingText, buttonText}) => {
  return (
    <div className='relative'>
      <div>
       <Image src={image1} alt={"image"} width={1000} height={1000} />
      </div>
      <div className='absolute top-12 left-12 z-10'>
       <h3 className="pb-4">{headingText}</h3>
       <button className="rounded py-3 px-6 text-heading bg-white">{buttonText.slice(0,10)}</button>
      </div>
    </div>
  )
}


export default Card
