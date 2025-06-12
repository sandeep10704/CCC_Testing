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
import { Box, Grid } from '@mui/material';

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
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "Card 2",
            subjects: ["Science", "Biology"],
            description: "This is a card on cell structure and biology overview.",
            datetime: "2025-06-20T10:00:00",
            image: "https://via.placeholder.com/150"
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

    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: '1400px',
                mx: 'auto',
                p: { xs: 2, sm: 3 },
                overflowX: 'hidden',
            }}
        >
            {/* First Grid Section */}
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <SemiCircleGauge value={80} />
                    </Box>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgressList data={data} showPercentage={false} />
                    </Box>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgressList data={data} />
                    </Box>
                </Grid>
            </Grid>

            {/* Second Grid Section with margin-top */}
            <Grid container spacing={2} mt={3}>
                <Grid item md={8} xs={12}>
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

                <Grid item md={4} xs={12}>
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
        </Box>


    );
}

export default DashboardLayout;
