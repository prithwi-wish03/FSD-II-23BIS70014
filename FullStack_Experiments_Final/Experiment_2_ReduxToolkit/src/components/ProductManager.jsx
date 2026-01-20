
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/productsSlice";
import { useState } from "react";

const ProductManager = () => {
  const products = useSelector(s => s.products);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={() => dispatch(addProduct({id:Date.now(), name}))}>
        Add
      </button>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name}
            <button onClick={()=>dispatch(removeProduct(p.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;
