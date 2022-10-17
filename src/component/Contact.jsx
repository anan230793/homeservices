import './Contact.css';
import './Home.css';
import React from "react";
const Contact=()=>{
    return (
        <>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div id="contact" class="contact-area section-padding">
	<div class="container">										
		<div class="section-title text-center">
        <h1>.</h1>
			<h1>Get in Touch</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
		</div>					
		<div class="row">
			<div class="col-lg-7">	
				<div class="contact">
					<form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
						<div class="row">
							<div class="form-group col-md-6">
								<input type="text" name="name" class="form-control" placeholder="Name" required="required"/>
							</div>
							<div class="form-group col-md-6">
								<input type="email" name="email" class="form-control" placeholder="Email" required="required"/>
							</div>
							<div class="form-group col-md-12">
								<input type="text" name="subject" class="form-control" placeholder="Subject" required="required"/>
							</div>
							<div class="form-group col-md-12">
								<textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div class="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="single_address">
					<i class="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Melrose Place, Beverly Hills</p>
				</div>
				<div class="single_address">
					<i class="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>Info@example.com</p>
				</div>
				<div class="single_address">
					<i class="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+1) 517 397 7100</p>
				</div>
				<div class="single_address">
					<i class="fa fa-clock-o"></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div>
		</div>
	</div>	
</div>



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
<footer class="footer bg-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <p class="mt-4">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
            </div>

            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 class="text-light footer-head">Landing</h4>
                <ul class="list-unstyled footer-list mt-4">
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Agency</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Software</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Startup</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Business</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Hosting</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Studio</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 class="text-light footer-head">About</h4>
                <ul class="list-unstyled footer-list mt-4">
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> About us</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Services</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Team</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Terms Policy</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Privacy Policy</a></li>
                    <li><a href="javascript:void(0)" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Login</a></li>
                </ul>
            </div>

            <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 class="text-light footer-head">Locations</h4>
                <ul class="list-unstyled footer-list mt-4">
                    <li><a href="#" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> San Francisco</a></li>
                    <li><a href="#" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Tokio</a></li>
                    <li><a href="#" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> South Korea</a></li>
                    <li><a href="#" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Myanmar</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<footer class="footer bg-footer footer-bar">
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-sm-6">
                <div class="text-sm-left">
                    <p class="mb-0">&copy; 2020. Design with <i class="mdi mdi-heart text-danger"></i></p>
                </div>
            </div>

            <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul class="list-unstyled text-sm-right social-icon social mb-0">
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-instagram" title="Instagram"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-twitter" title="Twitter"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-google-plus" title="Google +"></i></a></li>
                    <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

        </>
    )
}
export default Contact;