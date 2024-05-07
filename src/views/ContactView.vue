<template>
	<headerView></headerView>
	<div class="container" id="content">
		<div class="wrapper">
<section class="top-container">
<LeftContentView></LeftContentView>
<div class="wrapper main-content">
<div class="row">
        <div class="col">
            <div class="panel panel-default">
                <div class="panel-heading"> <h5>Please fill out the following form to contact us. Thank you. </h5></div>
                <div class="panel-body">
                    <form class="form form-horizontal" id="form" role="form">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type="text" id="contact-name" class="form-control" name="fullname" placeholder="Full  Name" required="true">
                            <span class="glyphicon glyphicon-user form-control-feedback"></span>                    
                        </div>                   
                    </div>                        
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type="email" id="contact-name" class="form-control" name="email" placeholder="Email Address" required="true">
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>                    
                        </div>                   
                    </div>                        
                </div>  
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type="text" id="contact-name" class="form-control" name="phone" placeholder="Contact Number" required="true">
                            <span class="glyphicon glyphicon-phone form-control-feedback"></span>                    
                        </div>                   
                    </div>                        
                </div>  
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Message"></textarea>               
                        </div>                   
                    </div>                        
                </div>  

				
                <button class="btn btn-primary">Submit</button>
            </form>
                    
                </div>
            </div>                                 
        </div>
    </div>
		<div class="row" style="margin-top: 20px;">
				<div class="col">
					<div class="panel panel-default">
						<div class="panel-heading"> <h5>Find Us at </h5></div>
						<div class="panel-body">
							
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.6228049306994!2d85.31844510960832!3d27.67273683241204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bdfc6b07e7%3A0x465f76e1a734eb99!2sConnection%20Publication%20House%20Pvt.%20Ltd.%20(Globalbiz%20Yellow%20Pages)!5e0!3m2!1sen!2snp!4v1668583924490!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
							<!--<div id="map" style="width:100%;height:400px;"></div>-->
						</div>
					</div>
				</div>
			</div>
</div>		
<RightContentView></RightContentView>
</section>
</div>
		</div>			
	<FooterView></FooterView>			
</template>

<script>
import HeaderView from './pages/HeaderView.vue'
import LeftContentView from './pages/LeftContentView.vue'
import MiddleContentView from './pages/MiddleContentView.vue'
import RightContentView from './pages/RightContentView.vue'
import FooterView from './pages/FooterView.vue'
export default {
components:{HeaderView,FooterView,LeftContentView,MiddleContentView,RightContentView},
name:'Master',
}
</script>

<style>
    form{
        border: 1px solid #CCC;
        padding: 0px;
    }
</style>