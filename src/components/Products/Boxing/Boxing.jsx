import ProductPageLayout from "../../Shared/ProductPageLayout";
import { getAllBoxingProducts } from "../../../service/service";

export default function Boxing() {
  return <ProductPageLayout pageTitle="Boxing Products" fetchFunction={getAllBoxingProducts} />;
}