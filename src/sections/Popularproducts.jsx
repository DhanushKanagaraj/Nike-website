import {products} from '../constants'
import PopularProductscard from '../componenets/PopularProductscard'
const Popularproducts = () => {
  return (
   <section id="products" className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>
       Our  <span className='text-coral-red'>Popular</span> Products
      </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Experience Nike shoes combine style and performance, offering comfort and durability for both sports and everyday wear.
      </p>
    </div>
  <div className='mt-16 grid lg:grid-cols-4 md:gris-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap6 gap-14'>
   {products.map((product)=>(
    <PopularProductscard   key={product.name}  {...product} />
   ))}

  </div>
   </section>
  )
}

export default Popularproducts