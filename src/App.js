import Header from "./components/home/layout/Header";
import { Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/users.scss";

import Home from "./components/home/Home";
import Footer from "./components/home/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/MyOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";

function App() {
  return (
    <div className="App">
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
