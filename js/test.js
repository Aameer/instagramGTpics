$( document ).ready(function(){
    
    $('.clear').click(function(){
	var myNode = document.getElementById("image_container");
	myNode.innerHTML = '';
    });
    $('.submit_form').click(function(){
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
			for(i=0;i<Object.keys(resp).length;i++){
				console.log(resp[i]);
				var img = document.createElement('img');
				img.src = resp[i];
				document.getElementById('image_container').appendChild(img);
			}
			$('.clear').show();
        	},
        };
        $.ajax(ajaxGetAccessToken);
    });
});
