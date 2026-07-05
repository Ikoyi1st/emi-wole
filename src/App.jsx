import couple1 from "./assets/couple1.jpg";
import couple2 from "./assets/couple2.jpg";

const WINE = "#350D27";
const WINE_DEEP = "#22071A";
const CREAM = "#FBF3E7";
const GOLD = "#C9A15A";
const GOLD_SOFT = "#E7D3A6";

const PROGRAM_ITEMS = [
  "Introduction of MC",
  "Couple's Entrance",
  "Opening Prayer",
  "Couple's First Dance",
  "Cutting of the Cake",
  "Couple on the Dance Floor",
  "Presentation of Gifts",
  "Vote of Thanks",
  "Dance, Dance, Dance!!!",
];

function Ornament({ color = GOLD, style }) {
  return (
    <svg
      width="120"
      height="18"
      viewBox="0 0 120 18"
      fill="none"
      style={{ display: "block", ...style }}
    >
      <line x1="0" y1="9" x2="42" y2="9" stroke={color} strokeWidth="1" />
      <circle cx="60" cy="9" r="4.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="60" cy="9" r="1.4" fill={color} />
      <line x1="78" y1="9" x2="120" y2="9" stroke={color} strokeWidth="1" />
    </svg>
  );
}



export default function App() {
  return (
    <div
      style={{
        width: "100%",
        background: CREAM,
        fontFamily: "'Jost', sans-serif",
        color: WINE_DEEP,
      }}
    >
      {/* HERO — blended with photo 1 */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          padding: "72px 24px 64px",
          textAlign: "center",
        }}
      >
        <img
          src={couple1}
          alt="Emilola and Oluwole"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right center",
          
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${WINE_DEEP}cc 0%, ${WINE}55 32%, ${WINE}66 62%, ${WINE_DEEP}f2 100%)`,
          }}
        />
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'Marcellus', serif",
              letterSpacing: "0.35em",
              fontSize: "11px",
              color: GOLD_SOFT,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            The Wedding Of
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 10vw, 72px)",
              color: CREAM,
              lineHeight: 1.05,
              fontWeight: 500,
              margin: 0,
              textShadow: `0 2px 24px ${WINE_DEEP}`,
            }}
          >
            Emilola
          </h1>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: GOLD,
              fontSize: "clamp(24px, 6vw, 34px)",
              margin: "4px 0",
            }}
          >
            &amp;
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 10vw, 72px)",
              color: CREAM,
              lineHeight: 1.05,
              fontWeight: 500,
              margin: 0,
              marginBottom: "26px",
              textShadow: `0 2px 24px ${WINE_DEEP}`,
            }}
          >
            Oluwole
          </h1>

          <Ornament style={{ margin: "0 auto" }} />

          <div
            style={{
              fontFamily: "'Marcellus', serif",
              letterSpacing: "0.3em",
              fontSize: "13px",
              color: GOLD_SOFT,
              marginTop: "22px",
            }}
          >
            JULY 11TH · 2026
          </div>
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: `${CREAM}99`,
              marginTop: "10px",
              textTransform: "uppercase",
            }}
          >
            Reception Program
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section
        style={{
          padding: "72px 24px 76px",
          maxWidth: "540px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Marcellus', serif",
            letterSpacing: "0.28em",
            fontSize: "clamp(11px, 2.2vw, 13px)",
            color: WINE,
            textTransform: "uppercase",
          }}
        >
          Order of Events
        </div>
        <Ornament color={WINE} style={{ margin: "16px auto 30px" }} />

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto",
            maxWidth: "380px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "left",
          }}
        >
          {PROGRAM_ITEMS.map((item, i) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px, 2.6vw, 16px)",
                color: WINE_DEEP,
                borderBottom: `1px solid ${GOLD}33`,
                paddingBottom: "12px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: GOLD,
                  fontSize: "clamp(16px, 3vw, 19px)",
                  minWidth: "22px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* THANK YOU — blended with photo 2 */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "64px 24px 76px",
          textAlign: "center",
        }}
      >
        <img
          src={couple2}
          alt="Emilola and Oluwole dancing"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${WINE_DEEP}f2 0%, ${WINE}66 30%, ${WINE}55 55%, ${WINE_DEEP}e6 100%)`,
          }}
        />
    

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 8vw, 52px)",
              color: CREAM,
              fontStyle: "italic",
              marginBottom: "16px",
              textShadow: `0 2px 24px ${WINE_DEEP}`,
            }}
          >
            Thank You
          </div>
          <Ornament style={{ margin: "0 auto" }} />
          <div
            style={{
              fontFamily: "'Marcellus', serif",
              letterSpacing: "0.3em",
              fontSize: "13px",
              color: GOLD_SOFT,
              marginTop: "22px",
              textTransform: "uppercase",
            }}
          >
            for coming
          </div>
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "12px",
              color: `${CREAM}dd`,
              marginTop: "36px",
              letterSpacing: "0.05em",
            }}
          >
            Emilola &amp; Oluwole · 11.07.2026
          </div>
        </div>
      </section>
    </div>
  );
}
