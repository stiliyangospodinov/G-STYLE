import ProductPageLayout from "../../Shared/ProductPageLayout";
import { getAllFitnessProducts } from "../../../service/service";

export default function Fitness() {
  return <ProductPageLayout pageTitle="Fitness Products" fetchFunction={getAllFitnessProducts} />;
}