import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Inscreva-se</h2>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Digite seu e-mail"
                  aria-label="Digite seu e-mail"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Se inscrever
                </span>
              </div>

            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contato</h4>
              <div>
                <address className="text-white fs-6">
                  Rua: 00  <br /> Taquaritinga / SP <br />
                  PinCode: 00000
                </address>
                <a
                  href="tel:+55 16994575967"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +55 16994575967
                </a>
                <a
                  href="mailto:teste@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  teste@gmail.com
                </a>
               
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Informação</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Política de Privacidade
                </Link>

                <Link to="/refund-policy" className="text-white py-2 mb-1">
                 Política de Reembolso
                </Link>

                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Política de envio
                </Link>

                <Link to="/term-conditions" className="text-white py-2 mb-1">
                 Termos & Condições
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Minha Conta</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre Nós</Link>
                <Link className="text-white py-2 mb-1">Perguntas Frenquentes</Link>
                <Link className="text-white py-2 mb-1">Contato</Link>
              </div>
            </div>
            
            <div className="col-2">
              <h4 className="text-white mb-4">Links Rápidos</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Camisetas</Link>
                <Link className="text-white py-2 mb-1">Canecas</Link>
                <Link className="text-white py-2 mb-1">Camisetas Personalizadas</Link>
                <Link className="text-white py-2 mb-1">Canecas Personalizadas</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Cammaleão Store
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
