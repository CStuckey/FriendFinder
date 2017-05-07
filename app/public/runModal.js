$("#submit-btn").on("click", function() {
		
		// Validate the survey inputs
		function validateForm() {
			var isValid = true;
			$(".form-control").each(function() {
				if($(this).val() === '' )
					isValid = false;
			});

			$(".selectpicker").each(function() {
				if( $(this).val() === "")
					isValid = false;
			})
			return isValid;
		}

		// when all fields and survey responses are valid
		if (validateForm() === true) {
			// grab the survey elements
			var newFriend = {
				name: $("#input-name").val().trim(),
				photo: $("#input-photo").val().trim(),
				scores: [$("#q1"), $("#q2"), $("#q3"), $("#q4"), $("#q5"), $("#q6"), $("#q7"), $("#q8"), $("#q9"), $("#q10")]
			};

			// grab URL of website
			var currentURL = window.location.origin;

			$.post(currentURL + "/api/friends", newFriend, function(data) {

				// Grab the result from AJAX post to match the best match name and photo for display
				$("#matchName").text(newFriend.name);
				$("#matchImage").attr("src", newFriend.photo)

				// Show the modal with the best match
				$("#resultsModal").modal('show');
				alert("this worked!");
			});
		}
		else {
			alert("Please fill your shit out in da fields before submitting!");
		}

		return false;

}); // closing click function
