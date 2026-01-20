import { products } from "../constants/products"
import Card from "../components/Card"
import type { productInt } from "../constants/products"
import { useEffect, useState } from "react"

const Home = () => {

  const [productsList, setProductsList] = useState<productInt[]>(products)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm.trim()) {
      setProductsList(products);
      return;
    }
    const term = searchTerm.toLowerCase();
    setProductsList(
      products.filter((p) =>
        (p.title && p.title.toLowerCase().includes(term)) ||
        (p.description && p.description.toLowerCase().includes(term))
      )
    );
  }, [searchTerm])

  return (
    <div className="p-4 flex flex-col justify-center">
      <input
        value={searchTerm}
        placeholder="Search"
        type="text"
        className="p-2 rounded-2xl border"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid sm:grid-cols-3 gap-4 p-5">
        {productsList.map((product) => {
          return (
            <Card key={product.id} {...product}/>
          )
        })}
      </div>
    </div>    
  )
}

export default Home