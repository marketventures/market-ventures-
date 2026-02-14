export default function Home() {
  return (
    <main style={{
      backgroundColor: "#000000",
      color: "#D4AF37",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        MARKET VENTURES
      </h1>

      <p style={{ color: "#ffffff", maxWidth: "600px" }}>
        Elite trading systems engineered for precision, discipline,
        and high-probability execution in US30 & GER30.
      </p>

      <h2 style={{ marginTop: "60px" }}>Our Systems</h2>

      <div style={{ marginTop: "30px" }}>

        <div style={{ marginBottom: "40px" }}>
          <h3>PC System — $299</h3>
          <p style={{ color: "#ffffff" }}>
            Advanced desktop-based trading framework optimized for
            full chart control and execution precision.
          </p>
          <button style={buttonStyle}>Purchase</button>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h3>PC + Mobile System — $399</h3>
          <p style={{ color: "#ffffff" }}>
            Full synchronization system allowing you to trade seamlessly
            between desktop and mobile platforms.
          </p>
          <button style={buttonStyle}>Purchase</button>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h3>Mobile System — $199</h3>
          <p style={{ color: "#ffffff" }}>
            Lightweight high-performance mobile trading structure
            designed for speed and precision execution.
          </p>
          <button style={buttonStyle}>Purchase</button>
        </div>

      </div>
    </main>
  );
}

const buttonStyle = {
  backgroundColor: "#D4AF37",
  color: "#000000",
  padding: "12px 24px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold"
};
