function Random({ onRandom }){
    return(
        <>
          <button className="iconBtn" onClick={onRandom} aria-label="Imagine aleatoare">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="9" r="1.4" fill="currentColor" />
              <circle cx="15" cy="15" r="1.4" fill="currentColor" />
              <circle cx="15" cy="9" r="1.4" fill="currentColor" />
              <circle cx="9" cy="15" r="1.4" fill="currentColor" />
              <circle cx="12" cy="12" r="1.4" fill="currentColor" />
            </svg>
          </button>
        </>
    )
}
export default Random