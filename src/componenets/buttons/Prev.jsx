function Prev({ onPrev }){
    return(
        <>
        <button className="iconBtn" onClick={onPrev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        </>
    )
}
export default Prev