import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProtectedRoute from "./components/ProtectedRoute";
import EditProductPage from "./pages/EditProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id/edit"
        element={
          <ProtectedRoute>
            <EditProductPage />
          </ProtectedRoute>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />


    </Routes>
  );
}

export default App;