function Next({ onNext }){
    return(
        <>
          <button className="iconBtn" onClick={onNext} aria-label="Urmatoarea">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
    )
}
export default Next