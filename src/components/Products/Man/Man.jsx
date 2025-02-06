import ProductPageLayout from "../../Shared/ProductPageLayout";
import { getAllManProducts } from "../../../service/service";

export default function Man() {
  return <ProductPageLayout pageTitle="Man Products" fetchFunction={getAllManProducts} />;
}