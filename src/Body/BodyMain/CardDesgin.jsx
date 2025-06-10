import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SegmentedColorBar from "./GetSegmentColors";

function CardDesgin({ obj }) {
    const [clicked, setClicked] = useState(false);
    const [Show, SetShow] = useState(false);

    const value = obj.DaysLeft;
    let color = 'red';
    if (value > 30) {
        color = 'green';
    } else if (value > 15) {
        color = 'rgb(244, 187, 68)';
    }

    return (
        <Box
            sx={{
                border: '1px solid',
                borderColor: '#e0e0e0',
                borderRadius: 2,
                p: 1,
                width: '100%',
                boxSizing: 'border-box',
                bgcolor: '#ffffff',
                transition: '0.3s',
                '&:hover': {
                    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                    borderColor: '#cfcfcf'
                }
            }}
        >
            <Stack direction="row" spacing={2} onClick={() => setClicked(prev => !prev)}>
                {!clicked && (
                    <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
                        <Box
                            sx={{
                                flex: 2,
                                backgroundImage: `url(${obj.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderTopLeftRadius: 8,
                                borderBottomLeftRadius: 8,
                                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                            }}
                        />
                        <Card
                            sx={{
                                flex: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: 'none',
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 8,
                                bgcolor: '#f7f9fc',
                                overflow: 'hidden',
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="body2" color={color} gutterBottom sx={{ textAlign: "right" }}>
                                    Days Left: {obj.DaysLeft}
                                </Typography>
                                <Typography variant="h6">{obj.Title}</Typography>
                                <Typography variant="body2" color="text.secondary">{obj.SubTitle}</Typography>
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="body1"><strong>Prize:</strong> {obj.Prize}</Typography>
                                    <Typography variant="body1"><strong>Participants:</strong> {obj.Participants}</Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#1976d2',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            bgcolor: '#115293'
                                        }
                                    }}
                                >
                                    Join Now
                                </Button>
                            </CardContent>
                            <Box sx={{ px: 2, pb: 2 }}>
                                <SegmentedColorBar value={obj.DaysLeft} />
                            </Box>
                        </Card>
                    </Stack>
                )}

                {clicked && (
                    <>
                        <Card
                            sx={{
                                flex: 1,
                                pr: 2,
                                borderRight: '1px solid',
                                borderColor: 'divider',
                                boxShadow: "none",
                                bgcolor: '#f5f5f5'
                            }}
                        >
                            <CardContent>
                                <Typography variant="body2" color={color} gutterBottom sx={{ textAlign: "right" }}>
                                    Days Left: {obj.DaysLeft}
                                </Typography>
                                <Typography variant="h6">{obj.Title}</Typography>
                                <Typography variant="body2" color="text.secondary">{obj.SubTitle}</Typography>
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="body1"><strong>Prize:</strong> {obj.Prize}</Typography>
                                    <Typography variant="body1"><strong>Participants:</strong> {obj.Participants}</Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: '#1976d2',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            bgcolor: '#115293'
                                        }
                                    }}
                                >
                                    Join Now
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            sx={{
                                flex: 3,
                                pl: 2,
                                boxShadow: "none",
                                bgcolor: '#fafafa',
                                borderLeft: '1px solid #e0e0e0'
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Details</Typography>
                                <Typography variant="body2"><strong>Deadline:</strong> {obj.DeadLine}</Typography>
                                <Typography variant="body2"><strong>Mode:</strong> {obj.Mode}</Typography>
                                <Typography variant="body2"><strong>Type:</strong> {obj.Type}</Typography>
                                <Typography variant="body2"><strong>Location:</strong> {obj.Location}</Typography>
                                <Typography variant="body2"><strong>Skills:</strong> {obj.Skills}</Typography>

                                {Show && (
                                    <>
                                        <Typography variant="body2">
                                            <strong>Description:</strong> {obj.Description}
                                        </Typography>
                                        <Button
                                            sx={{
                                                color: '#1976d2',
                                                fontWeight: 'bold',
                                                textTransform: 'none',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                    bgcolor: 'transparent'
                                                }
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                SetShow(false);
                                            }}
                                        >
                                            Show Less
                                        </Button>
                                    </>
                                )}

                                {!Show && (
                                    <Button
                                        sx={{
                                            color: '#1976d2',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                bgcolor: 'transparent'
                                            }
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            SetShow(true);
                                        }}
                                    >
                                        Show More
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </>
                )}
            </Stack>
        </Box>
    );
}

export default CardDesgin;
