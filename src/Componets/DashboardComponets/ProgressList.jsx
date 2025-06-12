import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    CircularProgress,
} from '@mui/material';

const AnimatedProgress = ({ percentage, value, total, showPercentage }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const step = () => {
            if (start < percentage) {
                start += 1;
                setProgress(start);
                requestAnimationFrame(step);
            } else {
                setProgress(percentage);
            }
        };
        requestAnimationFrame(step);
    }, [percentage]);

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                value={progress}
                size={40}
                thickness={4}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {showPercentage ? `${progress}%` : `${value}/${total}`}
                </Typography>
            </Box>
        </Box>
    );
};

const ProgressList = ({ data, showPercentage = true }) => {
    return (
        <Box
            sx={{
                width: 340,
                p: 2,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                boxShadow: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                backgroundColor: '#ffffff',
            }}
        >


            {data.map((item, index) => {
                const { icon: Icon, text, value, total } = item;
                const percentage = Math.round((value / total) * 100);

                return (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: 2,
                            py: 1.5,
                            my: 1,
                            borderRadius: 2,
                            transition: 'background-color 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        {/* Icon */}
                        <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center', px: 1 }}>
                            {Icon && <Icon fontSize="medium" color="primary" />}
                        </Box>

                        {/* Centered Text */}
                        <Box sx={{ width: '60%', textAlign: 'center', px: 1 }}>
                            <Typography variant="body1">{text}</Typography>
                        </Box>

                        {/* Circular Progress */}
                        <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center', px: 1 }}>
                            <AnimatedProgress
                                percentage={percentage}
                                value={value}
                                total={total}
                                showPercentage={showPercentage}
                            />
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

export default ProgressList;
