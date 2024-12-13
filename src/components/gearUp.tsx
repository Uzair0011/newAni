import Gear2Products from "./gear2Products";
import Gear1Products from "./gear1Products";

export default function GearUp() {
  return (
    <div className="">
      {/* gear name  */}
      <div>
        <h3
         data-aos="flip-down"
          className="text-[23px] font-medium pl-4">Gear Up</h3>
      </div>

      <div className=" lg:flex ">
        {" "}
        {/* card  */}
        <Gear1Products/>
        <Gear2Products/>
        
      </div>
    </div>
  );
}
