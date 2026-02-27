import React, { useState, useEffect } from "react";

const ScrollingColumns = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsTablet(window.innerWidth <= 991);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const items = [
    "School Education",
    "Higher Education Support",
    "Scholarships & Fellowships",
    "Digital Education",
    "STEM Education",
    "Special Education",
    "Vocational Training",
    "Skill Development",
    "Employability & Livelihood",
    "Primary Healthcare",
    "Maternal & Child Health",
    "Nutrition & Malnutrition",
    "Mental Health",
    "Disability Rehabilitation",
    "Public Health & Sanitation",
    "Preventive Healthcare",
    "Communicable Diseases",
    "Women Empowerment",
    "Gender Equality",
    "Domestic Violence",
    "Girl Child Development",
    "Child Protection & Child Rights",
    "Rural Livelihoods",
    "Urban Livelihoods",
    "Self-Help Groups (SHGs)",

    "FinTech",
    "EdTech",
    "HealthTech",
    "AgriTech",
    "SaaS",
    "AI & Machine Learning",
    "DeepTech",
    "Blockchain & Web3",
    "Cybersecurity",
    "Cloud & DevOps",
    "E-commerce",
    "D2C Brands",
    "RetailTech",
    "FoodTech",
    "Q-Commerce",
    "Consumer Internet",
    "FashionTech",
    "Beauty & Personal Care",
    "CleanTech",
    "ClimateTech",
    "Renewable Energy",
    "EV & Mobility",
    "Logistics & Supply Chain",
    "ManufacturingTech",

    "Financial Inclusion",
    "Entrepreneurship",
    "Environmental Conservation",
    "Climate Action",
    "Afforestation",
    "Water Conservation",
    "Waste Management",
    "Renewable Energy Access",
    "Biodiversity Protection",
    "Rural Development",
    "Drinking Water Projects",
    "Sanitation & Hygiene",
    "Human Rights",
    "Legal Aid & Access to Justice",
    "Governance & Civic Participation",
    "Transparency & Accountability",
    "Senior Citizens Welfare",
    "Persons with Disabilities",
    "Tribal Development",
    "Minority Welfare",
    "Migrant Workers Support",
    "Disaster Relief & Rehabilitation",

    "SpaceTech",
    "DefenceTech",
    "PropTech",
    "InsurTech",
    "WealthTech",
    "RegTech",
    "HRTech",
    "LegalTech",
    "GovTech",
    "EnterpriseTech",
    "Social Impact",
    "Circular Economy",
    "Waste Management",
    "WaterTech",
    "RuralTech",
    "Skill Development",
    "Gaming & Esports",
    "Media & ContentTech",
    "Creator Economy",
    "TravelTech",
    "SportsTech",
    "AR/VR & Metaverse",
    "Robotics & Automation",
    "Biotechnology",
  ];

  // ✅ FIXED slicing (no skipped indexes)
  const col1 = items.slice(0, 24);
  const col2 = items.slice(24, 49);
  const col3 = items.slice(49, 71);
  const col4 = items.slice(71, 95);

  // ✅ Merge only on tablet
  const columnItems = isTablet
    ? [
        [...col1, ...col3], // 1st + 3rd
        [...col2, ...col4], // 2nd + 4th
      ]
    : [col1, col2, col3, col4];

  const boxHeight = 70;

  return (
    <div className="scrolling-container">
      <style>{`
        /* YOUR ORIGINAL CSS — UNCHANGED */

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
          height: 120px;
          pointer-events: none;
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
          height: ${boxHeight * 8}px !important;
        }

        .scroll-content {
          display: flex;
          flex-direction: column;
          animation-duration: 100s;
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
          box-shadow: 0 4px 44px 0 rgba(0, 0, 0, 0.02);
          padding: 30px;
          text-align: center;
          color: #0160D6;
          font-family: "Inter";
          font-size: 18px;
          font-weight: 500;
          height: 95px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 45px;
        }

        .box:hover {
          background: #0160D6;
          border-color: #0160D6;
          box-shadow: 0 8px 8px rgba(1, 96, 214, 0.25);
          color: #fff;
          z-index: 1;
        }

        .scroll-up { animation-name: scrollUp; }
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .scroll-down { animation-name: scrollDown; }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {columnItems.map((col, colIndex) => {
        const duplicated = [...col, ...col];

        return (
          <div key={colIndex} className="column-wrapper">
            <div
              className={`scroll-content ${
                colIndex % 2 === 0 ? "scroll-up" : "scroll-down"
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