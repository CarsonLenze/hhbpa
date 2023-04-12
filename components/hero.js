import { styled, Image } from '@nextui-org/react';

export function Hero() {
    const Box = styled('div', {
        height: '91vh',
        background: "#000"
    });
    return (
        <>
            <Box>
                <div className="bg">
                <Image
                     css={{ position: 'relative' }}
                    src="https://cdn.discordapp.com/attachments/820004127962431528/1095416464967745627/IMG_5261.jpg"
                    height='91vh'
                    alt="Default Image"
                />
                </div>
            </Box>
        </>
    )
}