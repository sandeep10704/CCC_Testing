
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';

const data = [
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night view',
        description: '4.21M views',
        value: false
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake view',
        description: '4.74M views',
        value: true
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mountain view',
        description: '3.98M views',
        value: true
    },
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night view',
        description: '4.21M views',
        value: false
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake view',
        description: '4.74M views',
        value: true
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mountain view',
        description: '3.98M views',
        value: true
    },
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night view',
        description: '4.21M views',
        value: false
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake view',
        description: '4.74M views',
        value: true
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mountain view',
        description: '3.98M views',
        value: true
    },
];
const count = 2 * (data.length);
function InfiniteScrollingCarousel() {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;
        const scrollAmount = direction === 'left' ? -320 : 320;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '95%',
                py: 4,
                '&:hover .scroll-track': {
                    animationPlayState: 'paused',
                },
            }}
        >
            {/* Scroll Buttons */}
            <Button
                variant="outlined"
                onClick={() => handleScroll('left')}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                }}
            >
                <ArrowBack />
            </Button>

            <Button
                variant="outlined"
                onClick={() => handleScroll('right')}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                }}
            >
                <ArrowForward />
            </Button>

            {/* Carousel Viewport */}
            <Box
                ref={scrollRef}
                sx={{
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <Box
                    className="scroll-track"
                    sx={{
                        display: 'flex',
                        width: 'max-content',
                        animation: `scrollLeft ${count}s linear infinite`,
                        '@keyframes scrollLeft': {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' },
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            variant="outlined"
                            sx={{
                                width: 300,
                                height: 300,
                                flex: '0 0 auto',
                                mx: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                padding: 0,
                                border: `2px solid ${item.value ? '#4caf50' : '#f44336'}`,
                                backgroundColor: item.value ? '#e8f5e9' : '#ffebee',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: '50%',
                                    width: '100%',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <img
                                    src={`${item.src}?h=300&fit=crop&auto=format`}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />

                                {/* Status Badge Overlaid */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        left: 8,
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: '8px',
                                        backgroundColor: item.value ? '#4caf50' : '#f44336',
                                        color: 'white',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {item.value ? 'Upcoming' : 'Expired'}
                                </Box>
                            </Box>



                            {/* Bottom - Text and Status */}
                            <Box
                                sx={{
                                    height: '50%',
                                    px: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography level="title-md" noWrap>
                                    {item.title}
                                </Typography>
                                <Typography level="body-sm" noWrap>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Card>


                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default InfiniteScrollingCarousel;
