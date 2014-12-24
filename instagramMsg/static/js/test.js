$( document ).ready(function(){
    
    $('.clear').click(function(){
	var myNode = document.getElementById("image_container");
	myNode.innerHTML = '';
    });

    $('.submit_form').click(function(){
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
    });
});
