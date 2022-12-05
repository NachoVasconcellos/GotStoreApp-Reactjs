import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList";
import "./styles.css";
import Loader from "../../Loader";
import useFirebase from "../../../hooks/useFirebase";

export default function ItemListContainer() {
  const { categoryId } = useParams();

  const [data] = useFirebase(categoryId);

  return <>{data.length ? <ItemList products={data} /> : <Loader />}</>;
}
