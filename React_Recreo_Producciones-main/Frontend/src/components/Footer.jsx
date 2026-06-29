import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
<footer className="w-100 p-0 m-0"> 
  <div className="text-center py-5">
  <h4 className="mb-4">Síguenos en nuestras redes sociales</h4>

  <div className="d-flex justify-content-center gap-4">

    <a
      href="https://wa.me/573222123141"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon whatsapp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>

    <a
      href="https://facebook.com/Recreo.producciones?mibextid=wwXIfr&rdid=1ac7bDRwuDVLFIcg&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1BZfp4HBtH%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon facebook"
    >
      <i className="bi bi-facebook"></i>
    </a>

    <a
      href="https://instagram.com/recreo.producciones?igsh=NmxnM2wyeHk5NGpv"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon instagram"
    >
      <i className="bi bi-instagram"></i>
    </a>

    <a
      href="https://tiktok.com/@recreo.produccioness?_r=1&_t=ZS-97SmfLiIDzz"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon tiktok"
    >
      <i className="bi bi-tiktok"></i>
    </a>

  </div>
</div>

      <div className="footer-bottom">
  <p className="mb-0 text-center text-white">
    Copyright © 2026 Derechos Reservados Recreo Producciones.
  </p>
</div>
    </footer>
  );
}
export default Footer;