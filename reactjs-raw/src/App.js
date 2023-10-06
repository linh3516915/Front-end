
import './App.css';
import Trangchu from './pages/trang_chu';
import ProductType from './pages/producttype';
import LoaiSanPham from './compodents/loai_san_pham/loaisp';
import Giohang from './compodents/gio_hang/gio_hang';
import "./bootstrap-5.2.3-dist/css/bootstrap.min.css";
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Trangchu />} />
          <Route path="/loai-san-pham" element={<ProductType />} />
          <Route path="/gio-hang" element={<Giohang />} />
      </Routes>
      </>
  );
}

export default App;