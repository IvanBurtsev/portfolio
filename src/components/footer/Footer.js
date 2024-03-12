import "./style.css";


import vk from './../../img/icons/vk.svg';
import gitHub from './../../img/icons/gitHub.svg';
// import vk from "./img/icons/vk.svg";
// import vk from "./img/icons/vk.svg";
// import vk from "./img/icons/vk.svg";

const Footer = () => {    
    return (
        <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item">
                                <a
                                    href="https://vk.com/id332326089"
                                    target="_blank"
                                >
                                    <img src={vk} alt="Link" />
                                </a>
                            </li>
                            {/* <li className="social__item"><a href="#!"><img src="./img/icons/instagram.svg" alt="Link" /></a></li> */}
                            {/* <li className="social__item"><a href="#!"><img src="./img/icons/twitter.svg" alt="Link" /></a></li> */}
                            <li className="social__item">
                                <a
                                    href="https://github.com/IvanBurtsev"
                                    target="_blank"
                                >
                                    <img src={gitHub} alt="Link" />
                                </a>
                            </li>
                            {/* <li className="social__item"><a href="#!"><img src="./img/icons/linkedIn.svg" alt="Link" /></a></li> */}
                        </ul>
                        <div className="copyright">
                            <p>
                                © 2024{' '} все права защищены
                                {' '}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    );
}
    export default Footer;