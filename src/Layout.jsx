import BodyLayout from "./Body/BodyLayout.jsx";
import SideFilter from "./Body/BodyMain/SideFilter.jsx";
import FootLayout from "./Foot/FootLayout.jsx";
import NavLayout from "./Nav/NavLayout.jsx";

export default function Layout(){
    return (
        <>
        
        <div style={{ 
  border: "2px solid black", 
  backgroundColor: "rgb(210, 234, 250)" 
}}>
  <NavLayout/>
</div>

        {/* <div> 
            <BodyLayout/>
        </div>
        <div> 
             <FootLayout/>
        </div> */}
        <div>
          <SideFilter/>

        </div>
        
       
        </>
    )
}