function SanPham(props){
    return(
        // <div class="text-center container py-5">
        //     <div class="col-lg-4 col-md-12 mb-4">
        //     {/* <img  className="rounded float-left"/>
        //     <p>{props.data.ten}</p>
        //     <p>{props.data.gia}</p> */}
            
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={props.data.hinh_anh}
              className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
            <p>{props.data.ten}</p>
            </a>
            <h6 className="mb-3">{props.data.gia}</h6>
          </div>
          <button type="button" className="btn btn-outline-warning">Buy</button>
        </div>
        // </div>
        // </div>
    );
}
export default SanPham;