import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";

const PageLayout = ({ children, backLabel = "Back" }) => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Back Button */}
          <div className="mb-8">
            <BackButton label={backLabel} />
          </div>

          {/* Page Content */}
          {children}
        </div>
      </main>

      
    </>
  );
};

export default PageLayout;
