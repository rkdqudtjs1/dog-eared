import { useMemo } from "react";

type Props = {
  size?: "small" | "medium" | "large";
};
const Loading = ({ size = "medium" }: Props) => {
  const { width, height } = useMemo(() => {
    if (size === "small") return { width: 100, height: 100 };
    if (size === "large") return { width: 400, height: 400 };
    return { width: 200, height: 200 };
  }, [size]);

  return (
    <div className="py-11">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          display: "block",
          shapeRendering: "auto",
        }}
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50 50)">
          <g transform="scale(0.7)">
            <g transform="translate(-50 -50)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="0.7575757575757576s"
                ></animateTransform>
                <path
                  fill-opacity="0.8"
                  fill="#121212"
                  d="M50 50L50 0A50 50 0 0 1 100 50Z"
                ></path>
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1.0101010101010102s"
                ></animateTransform>
                <path
                  fill-opacity="0.8"
                  fill="#333333"
                  d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  transform="rotate(90 50 50)"
                ></path>
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="1.5151515151515151s"
                ></animateTransform>
                <path
                  fill-opacity="0.8"
                  fill="#555555"
                  d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  transform="rotate(180 50 50)"
                ></path>
              </g>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                  dur="3.0303030303030303s"
                ></animateTransform>
                <path
                  fill-opacity="0.8"
                  fill="#777777"
                  d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  transform="rotate(270 50 50)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
