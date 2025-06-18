import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';
import useFetch from '../../hooks/useFetch';


function InfiniteScrollingCarousel() {
  const scrollRef = useRef(null);
  const { data, error } = useFetch('/jsondata/carouselData.json');
  const count = 2 * data.length;

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  if (error) return <Typography>Error: {error}</Typography>;
  if (data.length === 0) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ position: 'relative', width: '95%', py: 4, '&:hover .scroll-track': { animationPlayState: 'paused' } }}>
      <Button variant="outlined" onClick={() => handleScroll('left')} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
        <ArrowBack />
      </Button>

      <Button variant="outlined" onClick={() => handleScroll('right')} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
        <ArrowForward />
      </Button>

      <Box ref={scrollRef} sx={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
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
          {data.concat(data).map(({ src, title, description, value }, index) => (
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
                border: `2px solid ${value ? '#4caf50' : '#f44336'}`,
                backgroundColor: value ? '#e8f5e9' : '#ffebee',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Box sx={{ position: 'relative', height: '50%', width: '100%', borderRadius: 2, overflow: 'hidden' }}>
                <img
                  src={`${src}?h=300&fit=crop&auto=format`}
                  alt={title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <Box sx={{ position: 'absolute', top: 8, left: 8, px: 1.5, py: 0.5, borderRadius: '8px', backgroundColor: value ? '#4caf50' : '#f44336', color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                  {value ? 'Upcoming' : 'Expired'}
                </Box>
              </Box>

              <Box sx={{ height: '50%', px: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <Typography level="title-md" noWrap>{title}</Typography>
                <Typography level="body-sm" noWrap>{description}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default InfiniteScrollingCarousel;
