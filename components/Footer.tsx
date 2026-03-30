export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerCopy">
          © {new Date().getFullYear()} MoroccoDream. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}