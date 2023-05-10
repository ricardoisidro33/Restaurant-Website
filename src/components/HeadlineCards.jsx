import React from 'react'


const HeadlineCards = () => {

    const cards = [
    {
        id:1 ,
        img: "https://images.pexels.com/photos/2796841/pexels-photo-2796841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sun's Out, BOGO'S Out",
        subtitle: "Through 8/26",
    },

    {
        id:2 ,
        img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "New Restaurants",
        subtitle: "Added Daily",
    },
    {
        id:3 ,
        img: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "We Deliver Deserts Too",
        subtitle: "Tasty Treats",
    },

    
]

  return (
    <div className='mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        

        {
            cards.map(({img,title,subtitle,id}) => (

/* Card */
<div key={id} className='rounded-xl relative'>
        {/* Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>{title}</p>
                <p className='px-2'>{subtitle}</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img} alt="" />
        </div>

            ))

        }
        
    </div>
  )
}

export default HeadlineCards