import Header from "@/components/Header"
import Banner from "@/components/Banner"
import ProductFeed from "@/components/ProductFeed"

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
   
   
    if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Home() {
    const products = await getData()
    // console.log(products)
  return (
    <div className="bg-gray-100">
        <Header/>

        <main className="max-w-screen-2xl mx-auto">
            {/* banner */}
            {/* <Banner/> */}

            {/* product feed */}
            <ProductFeed products={products}/>
        </main>
        
   </div>
  )
}
