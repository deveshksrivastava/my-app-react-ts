import React from "react";
interface datatype{
    icon:string,
    title:string,
    discription:string,
    bgcolor:string
}
const EmptyView: React.FC<datatype> = ({ icon, title, discription, bgcolor }) => {
  return (
    <div 
      style={{
        padding: 40,
        
        backgroundColor: bgcolor,
        border: "1px solid #EDEDED",
      }}
      className="w-100 h-[47vh] d-flex justify-content-center align-items-center flex-column"
    >
      <i className={icon} style={{ fontSize: 50 }} />
      <div style={{ color: "#000000", fontSize: 14, fontWeight: "bold" }}>
        {" "}
        {title}{" "}
      </div>
      <div className="mb-10">{discription}</div>
    </div>
  );
};
export default EmptyView;