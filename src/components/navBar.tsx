	    import React from 'react';
		import {Link} from 'react-router-dom';
		import logo from '../logo.svg';

		const NavBar =  () => {
			return ( 
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="collapse navbar-collapse" id="nvbarNavAltMarkup">
						<ul className="navbar-nav m-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">Generacion 1</Link>
							</li>
							<li className="nav-item">
								<Link to="/SegundaGen" className="nav-link">Generacion 2</Link>
							</li>
							<li className="nav-item">
								<Link to="/TerceraGen" className="nav-link">Generacion 3</Link>
							</li>
							<li className="nav-item">
								<Link to="/CuartaGen" className="nav-link">Generacion 4</Link>
							</li>
							<li className="nav-item">
								<Link to="/QuintaGen" className="nav-link">Generacion 5</Link>
							</li>
							<li className="nav-item">
								<Link to="/VisualizarTrainers" className="nav-link">Visualizar Entrenadores</Link>
							</li>
							<li className="nav-item">
								<Link to="/VisualizarEquipos" className="nav-link">Visualizar Equipos</Link>
							</li>
							
						</ul>
					</div>
				</nav>
			);
		}

		export default NavBar;