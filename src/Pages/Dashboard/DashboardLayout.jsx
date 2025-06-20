import SemiCircleGauge from '../../Componets/DashboardComponets/SemiCircleGauge';
import ProgressList from '../../Componets/DashboardComponets/ProgressList';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CardList from '../../Componets/DashboardComponets/CardList';
import WeekCard from '../../Componets/DashboardComponets/WeekCard';
import AssignmentCard from '../../Componets/DashboardComponets/AssignmentCard';
import PendingQuizesCard from '../../Componets/DashboardComponets/PendingQuizesCard';
import TotalCourseCard from '../../Componets/DashboardComponets/TotalCourseCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OrganizerParticipantToggle from '../../Componets/DashboardComponets/OrganizerParticipantToggle';
import Code from '../../Componets/DashboardComponets/Code';
import InfiniteScrollingCarousel from '../../Componets/DashboardComponets/InfiniteScrollingCarousel';
import AccordionControlled from '../../Componets/DashboardComponets/AccordionControlled';
import { Typography } from '@mui/joy';
import OrganizerParticipantButtons from '../../Componets/DashboardComponets/OrganizerParticipantToggle';


function DashboardLayout() {
  const data = [
    { icon: HomeIcon, text: 'Home Tasks', value: 6, total: 10 },
    { icon: SchoolIcon, text: 'School Assignments', value: 4, total: 8 },
    { icon: WorkIcon, text: 'Work Projects', value: 2, total: 5 },
  ];

  const cardData = [
    {
      id: 1,
      title: "Card 1",
      subjects: ["Math", "Logic"],
      description: "This card covers basic algebra and reasoning topics.",
      datetime: "2025-06-15T15:30:00",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dea5bf5-c59e-4352-839f-4eb4e237097a.png"
    },
    {
      id: 2,
      title: "Card 2",
      subjects: ["Science", "Biology"],
      description: "This is a card on cell structure and biology overview.",
      datetime: "2025-06-20T10:00:00",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dea5bf5-c59e-4352-839f-4eb4e237097a.png"
    },
    {
      id: 3,
      title: "Card 3",
      subjects: ["History", "Politics"],
      description: "Discusses modern world history and political systems.",
      datetime: "2025-06-25T09:00:00",
      image: "https://via.placeholder.com/150"
    }
  ];
  const quizData = [
    {
      title: 'Vector Division',
      questions: 10,
      duration: 15,
      imgAlt: 'Vector division icon',
    },
    {
      title: 'Scalar Multiplication',
      questions: 8,
      duration: 10,
      imgAlt: 'Scalar multiplication icon',
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: '1200px',
        mx: 'auto',
        p: { xs: 2, sm: 3 },
        overflowX: 'hidden',
      }}
    >
      {/* Top Grid Section for Carousel */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <InfiniteScrollingCarousel />
          </Box>
        </Grid>
      </Grid>

      {/* First Grid Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <SemiCircleGauge value={80} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProgressList data={data} showPercentage={false} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProgressList data={data} />
          </Box>
        </Grid>
      </Grid>

      {/* Second Grid Section */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <CardList cardData={cardData} />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TotalCourseCard />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <WeekCard />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <AssignmentCard />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PendingQuizesCard />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%' }}>
        <AccordionControlled />
      </Box>
{/* <OrganizerParticipantButtons/> */}
      <Code />
    </Box>





  );
}

export default DashboardLayout;
