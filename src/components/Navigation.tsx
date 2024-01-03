
function Navigation(){
    return(
        <div className="Navigation" style={{width: 2560, height: 78, paddingLeft: 42, paddingRight: 42, paddingTop: 24, paddingBottom: 24, background: 'white', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Logo" style={{color: '#2D2D2D', fontSize: 20, fontFamily: 'Epilogue', fontWeight: '600', lineHeight: 30, wordWrap: 'break-word'}}>Logo</div>
            <div className="MenuItems" style={{justifyContent: 'flex-end', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div className="About" style={{color: '#2D2D2D', fontSize: 17, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 27, wordWrap: 'break-word'}}>About</div>
                <div className="Work" style={{color: '#2D2D2D', fontSize: 17, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 27, wordWrap: 'break-word'}}>Work</div>
                <div className="Contact" style={{color: '#2D2D2D', fontSize: 17, fontFamily: 'Epilogue', fontWeight: '400', lineHeight: 27, wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div>
    )
}

export default Navigation