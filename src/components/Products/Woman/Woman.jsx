import ProductPageLayout from "../../Shared/ProductPageLayout";
import { getAllWomenProducts } from "../../../service/service";

export default function Woman() {
  return <ProductPageLayout pageTitle="Woman Products" fetchFunction={getAllWomenProducts} />;
}