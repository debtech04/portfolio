import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    Arrowforward,
    ArrowRight

} from './HeroElements'

const HeroSection = () => {

    const[hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual banking made easy
                </HeroH1>
                <HeroP>
                    Maecenas facilisis nisi ut tortor mattis, vitae bibendum dui bibendum. 
                    Fusce congue nulla ante, id fringilla 
                    massa porttitor sit amet. Nullam pellentesque velit quis magna condimentum euismod.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover ? <Arrowforward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
