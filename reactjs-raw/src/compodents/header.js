import { NavLink } from "react-router-dom";
function Header(){
    return (
    
        <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg> 
            </a>
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>

                <NavLink to="/" className="nav-link px-2 text-white">
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                
                <NavLink to="/loai-san-pham" className="nav-link px-2 text-white">
                  Loai San Pham
                </NavLink>
              </li>
              <li><a href="#" className="nav-link px-2 text-white">Sản Phẩm</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Tin tức</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Liên Hệ</a></li>
              <li>
                
                <NavLink to="/gio-hang" className="nav-link px-2 text-white">
                  gio hang
                </NavLink>
              </li>
            </ul>
    
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
            </form>
    
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Đăng Nhập</button>
              <button type="button" className="btn btn-warning">Đăng Kí</button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;