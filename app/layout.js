export const metadata = {
  title: "Market Ventures",
  description: "Elite Forex Trading Systems & Signals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
