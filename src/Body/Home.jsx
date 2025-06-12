import { useState } from "react";
import SideFilterDialog from "./BodyMain/SideFilterDialog";
import SideFilter from "./BodyMain/SideFilter";
import SelectedFilter from "./BodyMain/SlectedFilter";
import Cards from "./BodyMain/Cards";
import HealthBot from "../assets/images/HealthBot.jpeg";
import HeartImage from "../assets/images/heart.jpg";
import GreenHack from "../assets/images/GreenHack.webp";

// Define all available filters
const filterOptions2 = {
  Location: "Mumbai,Delhi,Bangalore,Hyderabad,Chennai",
  Status: "Upcoming,Open,Ended",
  Mode: "Online,InPerson",
  "Team Size": "4-Member,5-Member,6-Member",
  Length: "1-4 Weeks,1+",
  "Interested tags": "Social Good,Business friendly",
  Host: "Host01,Host02",
  "Open to": "Public,Invite",
};

const filterNames2 = Object.keys(filterOptions2);
const allOptions2 = filterNames2.map(key => filterOptions2[key].split(','));

// Sample cards
const CardsDetails = [
  {
    Title: "Heart Monitoring System",
    SubTitle: "Mic College of Technology",
    Prize: "$3000",
    Participants: "2456",
    DaysLeft: "100",
    DeadLine: "May 26, 12:30 pm, GMT+5.30",
    Mode: "Online",
    Type: "Public",
    Location: "Mumbai",
    Skills: "Html,CSS,Bootstrap",
    Description: "A hackathon is a collaborative event where developers...",
    image: HeartImage,
  },
  {
    Title: "AI Powered HealthBot",
    SubTitle: "IIT Hyderabad",
    Prize: "$5000",
    Participants: "1890",
    DaysLeft: "17",
    DeadLine: "May 30, 11:00 am, GMT+5.30",
    Mode: "InPerson",
    Type: "Invite",
    Location: "Hyderabad",
    Skills: "Python,ML,NLP",
    Description: "A health-focused hackathon on AI use in diagnosis...",
    image: HealthBot
  },
  {
    Title: "Green Hack",
    SubTitle: "Anna University",
    Prize: "$1500",
    Participants: "1600",
    DaysLeft: "14",
    DeadLine: "May 20, 10:00 am, GMT+5.30",
    Mode: "Online",
    Type: "Public",
    Location: "Chennai",
    Skills: "IoT,Embedded Systems",
    Description: "Build IoT solutions for a greener tomorrow.",
    image: GreenHack,
  }
];

function Home() {
  const [filters2, setFilters2] = useState(
    filterNames2.reduce((acc, name) => {
      acc[name] = "";
      return acc;
    }, {})
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const listOfObjectForSideFilter = filterNames2.map(name => filters2[name] || "");

  const handleFilters2Change = (newFiltersArray) => {
    const newFiltersObj = {};
    filterNames2.forEach((name, i) => {
      newFiltersObj[name] = newFiltersArray[i] || "";
    });
    setFilters2(newFiltersObj);
  };

  return (
    <>
      <SideFilterDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        data={Object.fromEntries(
          Object.entries(filterOptions2).map(([key, val]) => [key, val.split(',')])
        )}
        defaultSelected={Object.fromEntries(
          Object.entries(filters2).map(([key, val]) => [key, val ? val.split(',') : []])
        )}
        onApply={(selected) => {
          setFilters2(selected);
        }}
      />

      <div style={{ display: 'flex' }}>
        {/* Left: Side Filter */}
        <div
          style={{
            flex: '0 0 250px',
            padding: '10px',
            position: 'fixed',
            height: '100vh',
            overflowY: 'auto',
            backgroundColor: 'white',
            borderRight: '1px solid #e0e0e0',
            width: "250px",
          }}
        >
          <SideFilter
            ListOfObject={listOfObjectForSideFilter}
            ListOfObjectName={filterNames2}
            allOptionsPerCategory={allOptions2}
            onFilterChange={handleFilters2Change}
          />
        </div>

        {/* Right: Main Content */}
        <div style={{ flex: 1, marginLeft: '270px' }}>
          <div style={{ padding: '10px' }}>
            {/* Top Filter Summary */}
            <div
              style={{
                position: "sticky",
                top: 64,
                zIndex: 999,
                backgroundColor: "white",
                padding: '10px 0',
              }}
            >
              <SelectedFilter
                ListOfObject={filters2}
                onFilterChange={setFilters2}
                setDialogOpen={setDialogOpen}
              />
            </div>

            {/* Cards Section */}
            <div style={{ padding: '10px 0' }}>
              <Cards CardsDetails={CardsDetails} ListOfObject={filters2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
