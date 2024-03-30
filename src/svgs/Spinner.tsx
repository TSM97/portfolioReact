const SpinnerSvg = (props: object) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={33}
      fill="none"
      stroke="#0a0a0a"
      strokeDasharray="51.83627878423159 51.83627878423159"
      strokeLinecap="round"
      strokeWidth={7}
    >
      <animateTransform
        attributeName="transform"
        dur="5.545454545454546s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={25}
      fill="none"
      stroke="#28292f"
      strokeDasharray="39.269908169872416 39.269908169872416"
      strokeDashoffset={39.27}
      strokeLinecap="round"
      strokeWidth={7}
    >
      <animateTransform
        attributeName="transform"
        dur="2.545454545454546s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;-360 50 50"
      />
    </circle>
  </svg>
);
export default SpinnerSvg;
