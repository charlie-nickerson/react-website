

function About(){
    return(
    <div className="Desktop2" style={{width: '100%', height: '100%', position: 'fixed', background: '#5F198A'}}>
        <div className="Frame3" style={{width: 100, height: 100, left: 1235, top: 1028, position: 'absolute'}} />
        <img className="Ellipse1" style={{width: 758, height: 758, left: 111, top: 365, position: 'fixed', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} src="src\assets\headshot.jpg" />
        <div className="Frame4" style={{width: 587, height: 60, left: 1869, top: 33, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 100, display: 'inline-flex'}}>
            <div className="Home" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Home" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
            </div>
            <div className="AboutMe" style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
                <div className="AboutMe" style={{width: 189, textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>About Me</div>
            </div>
            <div className="Work" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Work" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Work</div>
            </div>
            <div className="Contact" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div className="Contact" style={{textAlign: 'center', color: 'white', fontSize: 27, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div>
        <div className="Hello" style={{left: 990, top: 365, position: 'absolute', color: 'white', fontSize: 145, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Hello</div>
        <div className="ABitAboutMe" style={{left: 990, top: 525, position: 'absolute', color: 'white', fontSize: 55, fontFamily: 'Poppins', fontWeight: '500', letterSpacing: 3.85, wordWrap: 'break-word'}}>A Bit About Me</div>
        <div className="IMCharlieNickersonASeattleBasedComputerScientistWithAPassionForHelpingOthersMyExpertiseSpansDataScienceMachineLearningAndWebDesignIThriveOnBlendingLogicAndCreativityInMyWorkCollaboratingWithOthersToAchieveCommonGoalsIMDrivenByTheOpportunityToPositivelyImpactPeopleSLivesWhetherThroughImprovingUserExperiencesOrTacklingComplexChallengesWithDataBeyondMyTechEndeavorsIFindBalanceInBoxingRunningAndCherishingMomentsWithLovedOnesMyLongTermGoalIsToExcelInMyFieldAndAssumeALeadershipRoleGuidingOthersOnTheirGrowthJourneysLetSConnectAndExploreHowWeCanDrivePositiveChangeTogether" style={{width: 1380, height: 167, left: 993, top: 610, position: 'absolute', color: 'white', fontSize: 27, fontFamily: 'Poppins', fontWeight: '500', letterSpacing: 1.89, wordWrap: 'break-word'}}>I'm Charlie Nickerson, a Seattle-based computer scientist with a passion for helping others. My expertise spans data science, machine learning, and web design. I thrive on blending logic and creativity in my work, collaborating with others to achieve common goals.<br/><br/>I'm driven by the opportunity to positively impact people's lives, whether through improving user experiences or tackling complex challenges with data. Beyond my tech endeavors, I find balance in boxing, running, and cherishing moments with loved ones.<br/>My long-term goal is to excel in my field and assume a leadership role, guiding others on their growth journeys. Let's connect and explore how we can drive positive change together.</div>
    </div>
    )
}

export default About