import Header from "../compodents/header";
import LoaiSanPham  from "../compodents/loai_san_pham/loaisp";
import dsLoaiSanPham from "../compodents/loai_san_pham/dsloaisp";
import Main from "../compodents/main";
function Trangchu(){
    const listLoaiSanPham=dsLoaiSanPham.map(function(item){
        return(
                <LoaiSanPham data={item}/>
        );
    });
        return(
            <>
               
                <Header/>
                <Main/>
                <></>
                {listLoaiSanPham}
            </>
        );
}


export default Trangchu;
