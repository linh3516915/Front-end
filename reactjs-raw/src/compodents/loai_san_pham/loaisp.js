import SanPham from "./san_pham/san_pham";

function LoaiSanPham(props){
    const listSanPhams=props.data.ds_san_pham.map(function(item){
        return(
                <SanPham data={item}/> 
        );
    });
    return(
        <>
        <div className="productypes">
            <h1 className="ten_loai_san_pham">{props.data.ten}</h1>
            <div className="loai_san_pham">{listSanPhams}</div>
        </div>
        
        </>
    );
}
export default LoaiSanPham;