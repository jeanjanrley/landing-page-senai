import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Logo from "../public/logo_icon.svg";
import LogoWhite from "../public/logo_icon_white.svg";
import Swords from "../public/swords.svg";
import { FaSearch } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiShoppingBag, FiTwitter } from "react-icons/fi";
import Rectangle1 from "../public/rectangle1.png"
import Rectangle2 from "../public/rectangle2.png"
import Rectangle3 from "../public/rectangle3.png"
import { CardItem } from './components/CardItem';
import ThirdImage1 from "../public/third-section1.png";
import ThirdImage2 from "../public/third-section2.png";
import ThirdImage3 from "../public/third-section3.png";
import ThirdImage4 from "../public/third-section4.png";
import firstGroupImage1 from "../public/first-group1.png";
import firstGroupImage2 from "../public/first-group2.png";
import firstGroupImage3 from "../public/first-group3.png";
import firstGroupImage4 from "../public/first-group4.png";
import SecondGroupImage1 from "../public/second-group1.png";
import SecondGroupImage2 from "../public/second-group2.png";
import SecondGroupImage3 from "../public/second-group3.png";
import SecondGroupImage4 from "../public/second-group4.png";
import ImageRound1 from "../public/image-round1.png";
import ImageRound2 from "../public/image-round2.png";
import ImageRound3 from "../public/image-round3.png";
import ImageRound4 from "../public/image-round4.png";
import ImageRound5 from "../public/image-round5.png";
import ImageRound6 from "../public/image-round6.png";
import { CardLocal } from './components/CardLocal';
import { ImageRound } from './components/ImageRound';


function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<header>
				<nav className="container">
					<div className="logo-box">
						<img src={Logo} alt="" />
						<h2>Me serve</h2>
					</div>
					<div className="menu-area">
						<div className="input-box">
							<input type="text" placeholder="Digite o item ou restaurante que você está procurando" />
							<FaSearch size={19} color="#808080" />
						</div>
						<FiShoppingBag size={30} color="#202020" />
						<button>Entrar</button>
					</div>
				</nav>
			</header>
			<main>
				<div className="container">
					<section className='first-section'>
						<div className="first-group">
							<h1>
								Alimentos de <span className='strong-orange'>qualidade</span> premium para sua  <span className='strong-orange'>vida</span> saudável & <span className='strong-orange'>diária</span>
							</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.
							</p>
							<div className="input-box">
								<input type="text" placeholder='Insira seu local de entrega' />
								<button>
									Get Started
								</button>
							</div>
							<p>Cidades populares em Índia</p>
							<div className="locations-group">
								<p>Hyderabad</p>
								<p className="orange">Chennai</p>
								<p>Mumbai</p>
								<p className="orange">Bangalore</p>
								<p>Delhi</p>
								<p className="orange">Kolkata</p>
							</div>
						</div>
						<div className="carousel">
							<img src={Rectangle1} alt="" className="main-images first-image" />
							<img src={Rectangle2} alt="" className="main-images second-image" />
							<img src={Rectangle3} alt="" className="main-images third-image" />
						</div>
					</section>
					<section id="products">
						<div className="products-group">
							<h3>
								Nearby Restaurants
							</h3>
							<div className="group-section">
								<CardLocal
									title='Ramachandra Salão'
									description='South Indian'
									image={firstGroupImage1}
									peoples={209}
									avaliation={4.4}
									time={35}
								/>
								<CardLocal
									title='Uma Parlour - Puro Vegetariano'
									description='South Indian'
									image={firstGroupImage2}
									peoples={289}
									avaliation={3.2}
									time={25}
								/>
								<CardLocal
									title='Swap - Diet Meal Box'
									description='Healthy Food, Salads'
									image={firstGroupImage3}
									peoples={273}
									avaliation={4.5}
									time={32}
								/>
								<CardLocal
									title='The Good Bowl - Traditional Bowls'
									description='North Indian, Punjabi'
									image={firstGroupImage4}
									peoples={220}
									avaliation={4.8}
									time={41}
								/>
							</div>
						</div>
						<div className="products-group">
							<h3>
								Nearby Restaurants
							</h3>
							<div className="group-section">
								<CardItem
									title='Arroz Paneer Tikka Tigela'
									description='A Boa Tigela'
									image={SecondGroupImage1}
									value={220}
									time={20}
								/>
								<CardItem
									title='Refeição de Coalhada Aloo Paratha (2 unid.)'
									description='Lancheira'
									image={SecondGroupImage2}
									value={169}
									time={25}
								/>
								<CardItem
									title='Wrap de Pizza Assada - Vegetariana'
									description='Faasos - Wraps & Rolls'
									image={SecondGroupImage3}
									value={209}
									time={35}
								/>
								<CardItem
									title='Mixed Veg Fried Rice with dry fruits'
									description='MFC Restaurant'
									image={SecondGroupImage4}
									value={180}
									time={45}
								/>
							</div>
						</div>
					</section>
				</div>
				<div className="division-area">
					<div className="container">
						<div className="span-and-icon">
							<span>Pesquisar por restaurante</span>
							<img src={Swords} alt="" className='swords-icon' />
						</div>
						<input type="text" placeholder='Digite o item ou restaurante que você está procurando' />
						<button>Buscar Agora</button>
					</div>
				</div>
				<section className='sub-content-area'>
					<div className="container">
						<div className="group-section">
							<h3>O que está em sua mente?</h3>
							<div className="content-area content-area-row">
								<ImageRound
									image={ImageRound1}
									title="Sanduíche"
								/>
								<ImageRound
									image={ImageRound2}
									title="Norte da Índia Thali"
								/>
								<ImageRound
									image={ImageRound3}
									title="Egg BreakRápido"
								/>
								<ImageRound
									image={ImageRound4}
									title="Rolinhos e Folhados"
								/>
								<ImageRound
									image={ImageRound5}
									title="Saladas"
								/>
								<ImageRound
									image={ImageRound6}
									title="Biriyani Box"
								/>
							</div>

						</div>
						<div className="group-section">
							<h3>Recomendações personalizadas</h3>
							<div className="content-area">
								<CardItem
									title='Wrap de Pizza Assada - Vegetariana'
									description='Faasos - Wraps & Rolls'
									image={ThirdImage1}
									value={209}
									time={35}
								/>
								<CardItem
									title='Pizza de frango com manteiga - 8 porções'
									description='Pastelaria Suren'
									image={ThirdImage2}
									value={289}
									time={25}
								/>
								<CardItem
									title='Embalagens de Hambúrguer Mexicano'
									description='Faasos - Wraps & Rolls'
									image={ThirdImage3}
									value={273}
									time={32}
								/>
								<CardItem
									title='Salada de Frango do Sudoeste'
									description='Burguerito'
									image={ThirdImage4}
									value={220}
									time={41}
								/>
							</div>

						</div>
					</div>
				</section>
			</main>
			<footer>
				<div className="container">
					<div className="logo-box footer-logo">
						<img src={LogoWhite} alt="" />
						<h2>Me serve</h2>
					</div>
					<div className="footer-menu">
						<div className="footer-options">
							<a>About us</a>
							<a>Delivery</a>
							<a>Help & Support</a>
							<a>T&C</a>
						</div>
						<div className="footer-options">
							<FiFacebook color="#fff" size={24} />
							<FiInstagram color="#fff" size={24} />
							<FiTwitter color="#fff" size={24} />
						</div>
					</div>
					<div className="footer-options">
						<span>Contact: +91 1234567899</span>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
