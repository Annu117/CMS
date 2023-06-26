document.getElementById('member-claim-request').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Retrieve form values
  var memberId = document.getElementById('MemberID').value;
  var firstName = document.getElementById('FirstName').value;
  var lastName = document.getElementById('LastName').value;
  var nomineeCount = document.querySelector('select[name="NomineeCount"]').value;
  var maxClaimAmount = document.getElementById('MaximumClaimAmount').value;
  var insuranceType = document.querySelector('select[name="InsuranceType"]').value;
  var requestDate = document.getElementById('RequestDate').value;
  var claimReason = document.querySelector('select[name="ClaimReason"]').value;
  
  // Perform validation (ensure all fields are filled)
  if (memberId === '' || firstName === '' || lastName === '' || nomineeCount === '' ||
      maxClaimAmount === '' || insuranceType === '' || requestDate === '' ||
      claimReason === '') {
      alert('Please fill in all fields.');
      return; // Stop further processing
  }
  
  // Calculate final claim amount based on claim reason and insurance type
  //var finalClaimAmount = calculateFinalClaimAmount(claimReason, insuranceType, maxClaimAmount);
  
  // Calculate claim process date (45 days from the current date)
  var claimProcessDate = new Date(requestDate);
  claimProcessDate.setDate(claimProcessDate.getDate() + 45);
  
  // Display success message
  var successMessage = 'Dear Admin,\nThe claim request for ' + memberId + ' has been posted. Your claim will be processed before ' + claimProcessDate.toDateString();
  alert(successMessage);
  
  // Reset the form
  document.getElementById('member-claim-request').reset();
});

function displayFinalClaimAmount() {
  var claimReason = document.getElementById('ClaimReason').value;
  var maxClaimAmount = document.getElementById('MaximumClaimAmount').value;
  var insuranceType = document.getElementById('InsuranceType').value;
  
  // Calculate the final claim amount based on the claim reason, insurance type, and max claim amount
  var finalClaimAmount = calculateFinalClaimAmount(claimReason, insuranceType, maxClaimAmount);
  
  // Display the final claim amount in the corresponding HTML element
  document.getElementById('finalClaimAmount').value = finalClaimAmount;
}