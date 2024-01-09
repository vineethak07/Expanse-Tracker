import React from 'react'
import firstpic from '../Assets/Images/1.png'
import secondpic from '../Assets/Images/2.png'
import thirdpic from '../Assets/Images/3.jpg'
import bluecolor from '../Assets/Images/bluecolor.avif'
import { Link } from 'react-router-dom'
import fourth from '../Assets/Images/fourth.avif'
import fifth from '../Assets/Images/fifth.jpg'
import green from '../Assets/Images/green.jpg'
import team1 from '../Assets/Images/team-1.jpg'
import team2 from '../Assets/Images/team-2.jpg'
import team3 from '../Assets/Images/team-3.jpg'
import team4 from '../Assets/Images/team-4.jpg'
import goldmoney from '../Assets/Images/goldmoney.jpg'
import gold from '../Assets/Images/gold.webp'
import goldfix from '../Assets/Images/goldfix.webp'





const Front = () => {
	return (
		<>

			<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
				<div class="container">
					<a class="navbar-brand" href="#"><span class="text-warning">Fix</span>Finance</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#about">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#services">Services</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#portfolio">Portfolio</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#team">Team</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#contact">Contact</a>
							</li>
							
							
						</ul>
						<button className="btn btn-primary text-white ml-2"><Link to="/login" className="text-white">Login</Link></button>
						<button className="btn btn-warning text-white ms-2"><Link to="/admin" className="text-white my-2">Admin</Link></button>
					</div>
				</div>
			</nav>
			<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
				<div class="carousel-indicators">
					<button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img alt='' class="d-block w-100" src={firstpic} />
						<div class="carousel-caption">
							<h5>Fix your Finance Here</h5>
							<p >This website provides you to Fixing your Finance and helps in tracking your Finance.</p>
							<p><a class="btn btn-warning mt-3" href="#">Learn More</a></p>
						</div>
					</div>
					<div class="carousel-item active">
						<img alt=".." class="d-block w-100" src="" />
						<div class="carousel-caption">
							<h5>Always Dedicated</h5>
							<p>A service that is not shared by other users or organizations.FixFinance always dedicated to Customers benefit.</p>
							<p><a class="btn btn-warning mt-3" href="#">Learn More</a></p>
						</div>
					</div>
					<div class="carousel-item active">
						<img alt="..." class="d-block w-100" src='' />
						<div class="carousel-caption">
							<h5>TrustWorthy Website</h5>
							<p>FixFinance makes sure to operates in a clean, transparent and accountable way.Customers Trust is the highest Priority.</p>
							<p><a class="btn btn-warning mt-3" href="#">Learn More</a></p>
						</div>
					</div>
				</div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>
			</div>
			<section class="about section-padding" id="about">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-12 col-12">
							<div class="about-img"><img alt="" class="img-fluid" src='' /></div>
						</div>

					</div>
				</div>
			</section>

			<section class="services section-padding" id="services">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-header text-center pb-5">
								<h2>Our Services</h2>
								<p>Below indicates our Services.</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-md-12 col-lg-4">
							<div class="card text-white text-center bg-dark pb-2">
								<div class="card-body">
									<i class="bi bi-laptop"></i>
									<h3 class="card-title">Data Protection</h3>
									<p class="lead">Data protection signifies the strategic and procedural steps undertaken to safeguard the privacy, availability, and integrity of sensitive data, and is often interchangeably used with the term 'data security.</p><button class="btn bg-warning text-dark">Read More</button>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-12 col-lg-4">
							<div class="card text-white text-center bg-dark pb-2">
								<div class="card-body">
									<i class="bi bi-journal"></i>
									<h3 class="card-title">Financial Tracking</h3>
									<p class="lead">Financial tracking, also known as expense tracking, is the process of keeping tabs on your income and spending, ideally on a daily basis. It's achieved by recording receipts, invoices and business expenses on an accounting ledger.</p><button class="btn bg-warning text-dark">Read More</button>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-12 col-lg-4">
							<div class="card text-white text-center bg-dark pb-2">
								<div class="card-body">
									<i class="bi bi-intersect"></i>
									<h3 class="card-title">Integrity</h3>
									<p class="lead">The quality of being honest and having strong moral principles that you refuse to change.Given its role and importance to any functioning modern economy, ‘trust’ is an essential ingredient between providers of financial services, its clients and even wider society.</p><button class="btn bg-warning text-dark">Read More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="portfolio section-padding" id="portfolio">
				<div class="container">
					<div class="row">
						<div class="col-md-12 mt-5">
							<div class="section-header text-center pb-5">
								<h2>Our Mission</h2>
								<p>FixFinance Website aims certain Missions and Visions</p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-md-12 col-lg-4">
							<div class="card text-light text-center bg-white pb-2">
								<div class="card-body text-dark">
									<div class="img-area mb-4"><img alt="" class="img-fluid" src={green} /></div>
									<h3 class="card-title">Financial Stability</h3>
									<p class="lead">Financial stability is defined as the ability to maintain a steady income while avoiding debt.

										It may also involve both management of recurring household expenses and ensuring that there is adequate insurance against financial disruptions.

										Financial stability allows people to make reasonable plans for future expenses, save money for retirement or major purchases, invest in other things such as education, and meet emergency expenses without incurring debt.</p><button class="btn bg-warning text-dark">Learn More</button>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-12 col-lg-4">
							<div class="card text-light text-center bg-white pb-2">
								<div class="card-body text-dark">
									<div class="img-area mb-4"><img alt="" class="img-fluid" src={goldfix} /></div>
									<h3 class="card-title">Financial Literacy</h3>
									<p class="lead">Financial literacy is the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing. When you are financially literate, you have the foundation of a relationship with money, and it is a lifelong journey of learning. The earlier you start, the better off you will be, because education is the key to success when it comes to money.</p><button class="btn bg-warning text-dark">learn More</button>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-12 col-lg-4">
							<div class="card text-light text-center bg-white pb-2">
								<div class="card-body text-dark">
									<div class="img-area mb-4"><img alt="" class="img-fluid" src={fifth} /></div>
									<h3 class="card-title">Tracking of Finance</h3>
									<p class="lead">Expense management involves planning for, paying, tracking, reporting, and reimbursing business expenses. These may include recurring expenses necessary to keep facilities running and teams operating effectively. They may also include discretionary spending on things like employee perks, engagement activities, and travel.

										In most cases, an employee incurs an expense that is eligible for reimbursement according to company policy.</p><button class="btn bg-warning text-dark">Learn More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="team section-padding" id="team">
				<div class="container">
					<div class="row">
						<div class="col-md-12 mt-2">
							<div class="section-header text-center pb-5">
								<h2>Reviews</h2>
								<p>Here are some reviews given by Users </p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-md-6 col-lg-3">
							<div class="card text-center">
								<div class="card-body">
									<img alt="" class="img-fluid rounded-circle" src={team1} />
									<h3 class="card-title py-2">Sam Harris</h3>
									<p class="card-text">Financial management is all about monitoring, controlling, protecting, and reporting on a company's financial resources.All of these are achieved by using FixFinance website.</p>
									<p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3">
							<div class="card text-center">
								<div class="card-body">
									<img alt="" class="img-fluid rounded-circle" src={team2} />
									<h3 class="card-title py-2">Jack Wilson</h3>
									<p class="card-text">I have being using FixFinance from the past Five years and I have seen a positive change in my Financial Stability.It helped me in controlling my Income and Expenses from day to day.</p>
									<p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3">
							<div class="card text-center">
								<div class="card-body">
									<img alt="" class="img-fluid rounded-circle" src={team3} />
									<h3 class="card-title py-2">Sam Jose</h3>
									<p class="card-text">Many people won't have the control over Money.But for me FixFinance website helped in controlling and tracking my money from time to time.Now I am enough confident to handle my money.</p>
									<p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3">
							<div class="card text-center">
								<div class="card-body">
									<img alt="" class="img-fluid rounded-circle" src={team4} />
									<h3 class="card-title py-2">Alice Klara</h3>
									<p class="card-text">Previously I don't know how to manage Money. There is lack of Financial Stability and Financial Tracking but now I had more Financial Stability than previous. All thanks to FixFinance.</p>
									<p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="contact section-padding" id="contact">
				<div class="container mt-5 mb-5">
					<div class="row">
						<div class="col-md-12">
							<div class="section-header text-center pb-5">
								<h2>Contact Us</h2>
								<p>Regarding any Issue with the Website Contact Us</p>
							</div>
						</div>
					</div>
					<div className="row m-0">
						<div className="col-md-12 p-0 pb-4">
							<div className="col-md-12">
								<div className="mb-3">
									<input type="text" className="form-control" required placeholder='Your Fullname' />
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">
									<input type="email" className="form-control" required placeholder='Your Email Id' />
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">
									<textarea rows="3" required className="form-control" placeholder='Your Query Here'></textarea>
								</div>
							</div>
							<button className="btn btn-warning btn-lg btn-block mt-3">Send Now</button>

						</div>
					</div>

				</div>
			</section >

			<footer class="bg-dark p-2 text-center">
				<div className="bg-dark text-light p-4">
					<h6 className="text-center">All rights reserved <span className="text-warning">@FixFinance</span> </h6><br></br>



				</div>
				
			</footer>












		</>
	)
}

export default Front
