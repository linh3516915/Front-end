import Header from "../compodents/header";
import LoaiSanPham  from "../compodents/loai_san_pham/loaisp";
import dsLoaiSanPham from "../compodents/loai_san_pham/dsloaisp";
function ProductType(){
    const listLoaiSanPham=dsLoaiSanPham.map(function(item){
        return(
                <LoaiSanPham data={item}/>
        );
    });
        return(
            <>
               
                <Header/>
                {listLoaiSanPham}
            </>
        );
}


export default ProductType;