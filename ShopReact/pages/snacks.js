import { Product } from "./components/Product";
import { useSnacks } from "../contexts/SnacksProvider";

//import { useEffect } from "react";

const Snacks = () => {
  const snacksState = useSnacks();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = snacksState.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return <div>{allProducts}</div>;
};

export default Snacks;
