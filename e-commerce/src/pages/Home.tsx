import { products } from "../constants/products"
import Card from "../components/Card"
import type { productInt } from "../constants/products"
import { useEffect, useState } from "react"

const Home = () => {

  const [productsList, setProductsList] = useState<productInt[]>(products)
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("")
  const [addSkillDialogOpen, setAddSkillDialog] = useState(false);

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

  useEffect(() => {
    if (!filter.trim()) {
      setProductsList(products);
      return;
    }
    setProductsList(products.filter((p) => p.category === filter));
  }, [filter]);

  return (
    <div className="p-4 flex flex-col justify-center">
      <input
        value={searchTerm}
        placeholder="Search"
        type="text"
        className="p-2 rounded-2xl border"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <label >
        Filter:
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-2 rounded-lg bg-white/80"
        >
          <option value="" >All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jwellery">Jwellery</option>
        </select>
      </label>

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