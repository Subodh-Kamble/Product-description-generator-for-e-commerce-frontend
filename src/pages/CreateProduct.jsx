import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductForm from "../components/ProductForm";
import PageLayout from "../layouts/PageLayout";
import BackButton from "../components/BackButton";

const CreateProduct = () => {
  return (
    <>
      <Navbar />

      {/* ✅ PageLayout used properly */}
      <PageLayout>

        <ProductForm />
      </PageLayout>

      <Footer />
    </>
  );
};

export default CreateProduct;
