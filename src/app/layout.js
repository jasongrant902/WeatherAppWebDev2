
export default function Layout({ children }) {
  return (
    <html>
      <body>
      {children} {/* This will include Page components rendered inside */}
    </body>
    </html>
  );
}




