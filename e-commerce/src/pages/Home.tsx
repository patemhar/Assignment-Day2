import { products } from "../constants/products"
import Card from "../components/Card"

const Home = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 p-5">
        {products.map((product) => {
          return (
            <Card {...product}/>
          )
        })}
      </div>
    </div>    
  )
}

export default Home