 var mainIngredients = [
 	"", "chocolate", "maple", "coconut", "fruit", "peanut butter", "nuts"
 ];
 
 var desserts = [
 	{
 		"name": "Chocolate Chip Cookie",
 		"image": "http://sallysbakingaddiction.com/wp-content/uploads/2012/08/Soft-Baked-Chocolate-Chip-Cookies.jpg",
 		"ingredients": ["chocolate"],
 		"likes": 0
 	},
 	
 	{
 		"name": "Cherry Pie",
 		"image": "http://s3.amazonaws.com/gmi-digital-library/63a270b6-8c04-4ab1-bc3c-fa7a91fc9605.jpg",
 		"ingredients": ["fruit"],
 		"likes": 0
 	},
 	
 	{
 		"name": "Apple Pie",
 		"image": "http://schema.openspring.net/sites/default/files/apple-pie-ck-709820-l_0.jpg",
 		"ingredients": ["fruit"],
 		"likes": 0
 	},
 	
 	
 ];
 
 for (var i=0; i<mainIngredients.length; i++) {
 	var newOption = '<option value = "' + mainIngredients[i] + '">' + mainIngredients[i]  + '</option>';
 	$("#main-ingredients").append(newOption);
 }
 
 $( "#main-ingredients" ).change(function() {
 	$('table').addClass('outlined');
 	$("#selected-desserts").children().remove();
	for (var j=0; j<desserts.length; j++) {
		var ingredients = desserts[j]["ingredients"];
		for (k=0; k<ingredients.length; k++) {
			if (ingredients[k] == $("#main-ingredients option:selected").text()) {
				var dessertRow = makeRow(desserts[j]["name"], desserts[j]["image"], desserts[j]["likes"]);
				$("#selected-desserts").append(dessertRow);	
			}
		}
	}
});

function makeRow(name, photo, likes) {
	var row = '<tr>';
	row += '<td>' + name + '</td>';
	row += '<td><img src="' + photo + '" /></td>';
	row += '<td>' + likes + ' likes</td>';
	row += '<td><button data-name="' + name + '">Like</button></td>';
	row += '</tr>';
	return row;
}

$('table').on('click', 'button', function() {
	var dessert = $(this).data("name");
	for (var j=0; j<desserts.length; j++) {
		if (dessert == desserts[j]["name"]) {
			desserts[j]["likes"]++;
			$(this).parent().prev().html (desserts[j]["likes"] + ' likes');
			break;
		}
	}
});











