$( document ).ready(function(){
    //on clear click remove all pics    
    $('.clear').click(function(){
	var myNode = document.getElementById("image_container");
	myNode.innerHTML = '';
    });

    $('.submit_form_loc').click(function(){
	get_lng_and_latitude = function(){
    	    ajaxGetLoc = {
    	        url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDiZx6dDwwmQ0FaV0tRe2FjWcSoAqO9f1Y",
    	        dataType: 'json',
    	        data: address_data,
    	        success: function(resp){
    	    	for (i=0;i<resp.results.length;i++){
    	    	    console.log("location no:");console.log(i);
    	    	    console.log(resp.results[i]['formatted_address']);
    	    	    console.log(resp.results[i]['geometry']['location']);
    	    	};
		$('.lat_field').val(resp.results[0]['geometry']['location']['lat']);
		$('.lng_field').val(resp.results[0]['geometry']['location']['lng']);
		$('.submit_form').trigger('click');
		
    	        },
    	    };
    	    $.ajax(ajaxGetLoc);
    	};

        address_data=$('.get_location_form').serialize();
	get_lng_and_latitude();
    });
	
    $('.submit_form').click(function(){
	if (!$('.locations_checked').prop('checked')){
		//location api implementation	
		$('.clear').trigger('click');
        	data_vals=$('.get_pic_form').serialize();
        	ajaxGetLocation = {
		    xhrFields: {withCredentials: true}, //adds cookies, credentials
        	    url: "/get_location/",
        	    dataType: 'json',
        	    data: data_vals,
        	    crossDomain: true,
        	    success: function(resp){
			console.log(resp);
		        if(!Object.keys(resp).length==0){
			    for(i=0;i<Object.keys(resp).length;i++){
		                console.log(resp[i]);
		                var img = document.createElement('img');
		                img.src = resp[i];
		                document.getElementById('image_container').appendChild(img);
		            }
		        }else{
		            var img = document.createElement('img');
		            img.src ="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoyf0c-X0rWIdelSrI05ybUYgY8XlldVUgADKX9hCce6r5Wqcr";
		            document.getElementById('image_container').appendChild(img);
		        }
		        $('.clear').show();
        	    },
        	};
        	$.ajax(ajaxGetLocation);
	}else{
		//mdeia search implementation
		$('.clear').trigger('click');
        	data_vals=$('.get_pic_form').serialize();
        	ajaxGetAccessToken = {
		    xhrFields: {withCredentials: true}, //adds cookies, credentials
        	    url: "/get_access_token/",
        	    dataType: 'json',
        	    data: data_vals,
        	    crossDomain: true,
        	    success: function(resp){
		        //add the json feed to body
		        //console.log(resp);
		        if(!Object.keys(resp).length==0){
		        for(i=0;i<Object.keys(resp).length;i++){
		            console.log(resp[i]);
		            var img = document.createElement('img');
		            img.src = resp[i];
		            document.getElementById('image_container').appendChild(img);
		        }
		        }else{
		            var img = document.createElement('img');
		            img.src ="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoyf0c-X0rWIdelSrI05ybUYgY8XlldVUgADKX9hCce6r5Wqcr";
		            document.getElementById('image_container').appendChild(img);
		        }
		        $('.clear').show();
        	    },
        	};
        	$.ajax(ajaxGetAccessToken);
	}
    });
});
