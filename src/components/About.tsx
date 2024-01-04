import './Header.css'

function About(){
    return(
    <div className="Desktop2" style={{width: '100%', height: 1440, opacity: 1, transition: "all 1s", position: 'relative', background: 'linear-gradient(to bottom, #5F198A, #da61ff)'}}>
        <div className="Frame4" style={{width: 619, height: 60, left: 1868, top: 33, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 100, display: 'inline-flex'}}>
            <div className="Home" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div className="Home" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
        </div>
            <div className="AboutMe" style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
            <div className="AboutMe" style={{width: 189, textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>About Me</div>
            </div>
            <div className="Work" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div className="Work" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>Work</div>
            </div>
            <div className="Contact" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div className="Contact" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div>
        <img className="HeadshotSquare1" style={{width: 740.11, height: 750, left: 160, top: 223, position: 'absolute', borderRadius: 20}} src="src\assets\headshot__square.jpg" />
        <div className="Frame5" style={{height: 855, left: 1003, top: 197, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div className="Heading" style={{alignSelf: 'stretch', color: 'white', fontSize: 145, fontFamily: 'Poppins, sans-serif', fontWeight: '600', wordWrap: 'break-word'}}>Hello</div>
            <div className="Subheading" style={{alignSelf: 'stretch', color: 'white', fontSize: 55, fontFamily: 'Poppins, sans-serif', fontWeight: '500', wordWrap: 'break-word'}}>A Bit About Me</div>
            <div className="Paragraph1" style={{alignSelf: 'stretch', height: 169, color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '500', letterSpacing: 1.89, wordWrap: 'break-word'}}>I'm Charlie Nickerson, a Seattle-based computer scientist with a passion for helping others. My expertise spans data science, machine learning, and web design. I thrive on blending logic and creativity in my work, collaborating with others to achieve common goals.<br/><br/></div>
            <div className="Paragraph2" style={{alignSelf: 'stretch', height: 361, color: 'white', fontSize: 27, fontFamily: 'Poppins, sans-serif', fontWeight: '500', letterSpacing: 1.89, wordWrap: 'break-word'}}>I'm driven by the opportunity to positively impact people's lives, whether through improving user experiences or tackling complex challenges with data. Beyond my tech endeavors, I find balance in boxing, running, and cherishing moments with loved ones. My long-term goal is to excel in my field and assume a leadership role, guiding others on their growth journeys. Let's connect and explore how we can drive positive change together.</div>
        </div>
    </div>

    )
}

export default About