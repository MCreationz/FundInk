import React from "react";

const ScrollingColumns = () => {
  const items = [
    "Support",
    "School Education",
    "Sanitation",
    "Cloud & DevOps",
    "Skill Development",
    "Domestic Violence",
    "Employability &",
    "Girl Child Development",
    "Livelihood",
    "Mental Health",
    "STEM Education",
    "Disability",
    "Child Protection &",
    "Rehabilitation",
    "Child Rights",
    "Maternal & Child",
    "Women Empowerment",
    "Health",
    "Gender Equality",
    "Rural Livelihoods",
    "Scholarships &",
    "Preventive Healthcare",
    "Fallowshins",
  ];

  // Split into 4 columns (6,6,6,5 items)
  const columnItems = [
    items.slice(0, 6),
    items.slice(6, 12),
    items.slice(12, 18),
    items.slice(18, 23),
  ];

  // Fixed box height (including padding and border)
  const boxHeight = 70; // px

  return (
    <div className="scrolling-container">
      <style>{`
        .scrolling-container {
          display: flex;
          position: relative;
          gap: 65px;
          justify-content: center;
          padding: 56px 0px 0px 0px;
          flex-wrap: wrap;
          box-sizing: border-box;
          font-family: 'Segoe UI', Roboto, sans-serif;
        }

        .scrolling-container::before,
        .scrolling-container::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 120px;             /* height of blurred area – adjust as needed */
          pointer-events: none;      /* allows clicks to pass through */
          z-index: 1;
        }

        .scrolling-container::before {
          top: 0;
          background: linear-gradient(180deg, #FFF 29.17%, rgba(255, 255, 255, 0.00) 140.48%);
        }

        .scrolling-container::after {
          bottom: 0;
          background: linear-gradient(360deg, #FFF 29.17%, rgba(255, 255, 255, 0.00) 140.48%);
        }

        .column-wrapper {
          flex: 1 1 180px;
          max-width: 220px;
          overflow: hidden;
          border-radius: 12px;
          height: ${boxHeight * 8}px !important; /* Show 3 boxes at a time */
        }
        .scroll-content {
          display: flex;
          flex-direction: column;
          animation-duration: 20s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .column-wrapper:hover .scroll-content {
          animation-play-state: paused;
        }
        .box {
          background: white;
          border-radius: 10px;
          border: 1px solid #eefbfa;
          background: #FFF;
          box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.02);
          padding: 36px;
          text-align: center;
          color: #0160D6;
          text-align: center;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          transition: all 0.2s ease;
          cursor: default;
          word-break: break-word;
          height: 95px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1.2;
          box-sizing: border-box;
          margin-top: 45px;
        }
        .box:hover {
          background: #ffec9e;
          border-color: #f5b342;
          box-shadow: 0 8px 16px rgba(245, 179, 66, 0.2);
          z-index: 1;
        }
        /* Upward scroll */
        .scroll-up {
          animation-name: scrollUp;
        }
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        /* Downward scroll */
        .scroll-down {
          animation-name: scrollDown;
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {columnItems.map((col, colIndex) => {
        const itemCount = col.length;
        const containerHeight = itemCount * boxHeight;

        // Duplicate items for seamless looping
        const duplicated = [...col, ...col];

        return (
          <div
            key={colIndex}
            className="column-wrapper"
            style={{ height: containerHeight }}
          >
            <div
              className={`scroll-content ${colIndex % 2 === 0 ? "scroll-up" : "scroll-down"
                }`}
            >
              {duplicated.map((text, i) => (
                <div key={i} className="box">
                  {text}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollingColumns;