
		
	
		$("#btn-logout").click(function(){
			localStorage.removeItem("unit_id");
			localStorage.removeItem("username");			//just some logout scripts nothing special
			localStorage.removeItem("usertype");
			localStorage.removeItem("designationOffice");
			location.href = "login.html";
		});


		/* $("body").on("swiperight",function(){

		$( "#mypanel" ).panel( "open" );
		});
		*/
		
		$("#btn-home").click(function(){

			location.href = "home.html";
		});				
		$("#btn-buildingdata").click(function(){
			location.href = "buildingdata.html";
		});
				$("#btn-addbuildingdata").click(function(){
			location.href = "addbuilding.html";
		});
		$("#btn-addemployee").click(function(){
			location.href = "addemployee.html";
		});
		$("#btn-help").click(function(){
			location.href = "help.html";
		});
			$("#btn-feed").click(function(){
			location.href = "employeefeed.html";
		});
		$("#btn-changepass").click(function(){
			location.href = "updatepass.html";
		});
			$("#btn-employee").click(function(){
			location.href = "employees.html";
		});
			$("#btn-reportbugs").click(function(){
			location.href = "reportbugs.html";
		});
			$("#btn-logout").click(function(){
			location.href = "login.html";
		});
			$("#btn-about").click(function(){
			location.href = "help.html#About";
		});
			$("#btn-approveemployees").click(function(){
			location.href = "approveemployees.html";
		});
			$("#btn-approve").click(function(){
			location.href = "approvebuilding.html";
		});
	$("#btn-surveyed").click(function(){
			location.href = "buildingmap.html";
		});
