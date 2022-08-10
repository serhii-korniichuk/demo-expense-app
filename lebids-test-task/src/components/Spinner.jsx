const Spinner = ({ top, left }) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto", background: "none", display: "block", position: "absolute", top: `${top}`, left: `${left}` }} width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         <circle cx="50" cy="50" fill="none" stroke="#ffffff" strokeWidth="12" r="34" strokeDasharray="160.22122533307947 55.40707511102649">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.970873786407767s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
         </circle>
      </svg>
   )
}

export default Spinner;