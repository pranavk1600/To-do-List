import { BsBarChartLineFill } from "react-icons/bs";

function Heading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "yellowgreen",
      }}
    >
      <h1 style={{justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
        <BsBarChartLineFill 
        style={{ marginRight: "10px",marginBottom:"10px"}} /> Pranav To-Do-List
      </h1>
    </div>
  );
}

export default Heading;
