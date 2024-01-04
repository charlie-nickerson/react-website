 
import './Header.css'
import RadialGradient from 'react-native-radial-gradient';
import { useState } from "react";


function Header(){

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <div className="Desktop1" style={{width: '100%', height: '100%', position: 'fixed', background: '#5F198A'}}>
            <div className="Ellipse1" style={{width: '100%', height: '100%', background: 'radial-gradient(100.00% 100.00% at -Infinity% NaN%, #093A3E 0%, rgba(9, 58, 62, 0) 100%)'}}></div> 
            <img className="Circle1" style={{width: 1166, height: 1032, left: 1300, top: 600, position: 'fixed'}} src="src\assets\circle_1.png" />
            <img className="DoubleCross3" style={{width: 393, height: 309, left: 0, top: 27, position: 'fixed'}} src="src\assets\double_cross_3.png" />
            <div className="HiMyNameIsCharlieNickersonAndIMAComputerScientist" style={{width: 1000, height: 375, left: 327, top: 380, position: 'absolute', color: 'white', fontSize: 70, fontFamily: 'Poppins, sans-serif', fontWeight: '700', wordWrap: 'break-word'}}>Hi my name is Charlie Nickerson and I’m a Computer Scientist</div>
            <div className="HireMeButton" style={{width: 246, height: 69, padding: 10, left: 327, top: 721, position: 'fixed', background: isHovered ? 'rgba(255, 255, 255, 0.30)' : 'rgb(200, 200,255, 0.3)', borderRadius: 30, border: '1px white solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="HireMe" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '700', wordWrap: 'break-word'}}>Hire me</div>
            </div>
            <div className="Frame2" style={{width: 587, height: 60, left: 830, top: 61, position: 'fixed', justifyContent: 'center', alignItems: 'center', gap: 100, display: 'inline-flex'}}>
                <div className="Home" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Home" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
                </div>
                <div className="AboutMe" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="AboutMe" style={{textAlign: 'center', color: 'white', fontSize: 27, width: 189, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>About Me</div>
                </div>
                <div className="Work" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Work" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>Work</div>
                </div>
                <div className="Contact" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Contact" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
                </div>
            </div>
        </div>
    )
 }

export default Header