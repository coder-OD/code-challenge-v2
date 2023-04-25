const Clock = ({ fill, width, height, style }) => (
  <svg
    fill={fill || "#000000"}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Layer_1"
    width={width || "14px"}
    height={height || "14px"}
    viewBox="0 0 512 512"
  >
    <g>
      <polygon points="272.5,84.8 238.4,84.8 238.4,274.8 361.7,333.4 376.4,302.6 272.5,253.2  " />
      <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M256,477.9   c-122.5,0-221.9-99.3-221.9-221.9S133.5,34.1,256,34.1S477.9,133.5,477.9,256S378.5,477.9,256,477.9z" />
    </g>
  </svg>
);

export default Clock;
