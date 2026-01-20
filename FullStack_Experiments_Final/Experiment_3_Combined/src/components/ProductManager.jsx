
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/productsSlice";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProductManager = () => {
  const { role } = useContext(AuthContext);
  const products = useSelector(s => s.products);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div>
      {role === "admin" && (
        <>
          <input value={name} onChange={e=>setName(e.target.value)} />
          <button onClick={()=>dispatch(addProduct({id:Date.now(), name}))}>
            Add Product
          </button>
        </>
      )}

      <ul>
        {products.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
};

export default ProductManager;
