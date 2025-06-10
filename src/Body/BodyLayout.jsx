
import Cards from "./BodyMain/Cards.jsx";
import SideFilter from "./BodyMain/SideFilter.jsx";
import { useState } from "react";
import SelectedFilter from "./BodyMain/SlectedFilter.jsx";


export default function BodyLayout(){

  const filterOptions = {
  "Location": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
  "Status": ["Upcoming", "Open", "Ended"],
  "Mode": ["Online", "InPerson"],
  "Team Size": ["4-Member", "5-Member", "6-Member"],
  "Lenght": ["1-4 Weeks", "1+"],
  "Interested tags": ["Social Good", "Business friendly"],
  "Host": ["Host01", "Host02"],
  "Open to": ["Public", "Invite"]
};

  const filterNames = Object.keys(filterOptions);

const [filters, setFilters] = useState(
  filterNames.map(name => {
    const values = filterOptions[name];
    const obj = {};
    values.forEach(val => obj[val] = false);
    return obj;
  })
);


  const CardsDetails =[
    {
      "Title":"Heart Monitoring System",
      "SubTitle":"Mic College of Technology",
      "Prize":"$3000",
      "Participants":"2456",
      "DaysLeft":"14",
      "DeadLine":"Mays 26,12:30 pm,GMT+5.30",
      "Mode":"Online",
      "Type":"Public",
      "Location":"location",
      "Skills":"Html,CSS,Bootstrap"

    }
  ]
    return (

    <div>
    
      <div style={{marginLeft:0,position:"fixed" }}>
        <SideFilter
        ListOfObject={filters}
        ListOfObjectName={filterNames}
        onFilterChange={setFilters}
        />
    </div>
      <div style={{marginLeft:"13%",marginTop:0}}> 
        <SelectedFilter
            ListOfObject={filters}
            onFilterChange={setFilters}
          />
      </div>
      <div style={{marginLeft:"13%"}}> 
        <Cards CardsDetails={CardsDetails} ></Cards>
      </div>
  



          </div>
  );
}