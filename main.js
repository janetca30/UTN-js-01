document.addEventListener("DOMContentLoaded", function() {
  const types = insuranceType.types;
  const container = document.getElementById('container');

  paintCards(types, container);
});

function paintCards(arrayData) {
  if (arrayData.length == 0) {
    container.innerHTML = '<h3>There is no data</h3>';
    return;
  }

  let cards = '';
  arrayData.forEach(element => {
    cards += `
    <div class="cardtype">
      <div class="content-card">
        <h3>Plan<br>${element.name}</h3>
        <p class='price'>Price:  ${element.price}</p>
        <div class='medical'>
          <img src="/assets/plan.png" alt="plan">
          <p class ='medical_text'>            
          ${element.coverage.medical}</p>
        </div>
        <div class='emergencies'>
          <img src="/assets/emergencie.png" alt="emergencie">
          <p class ='emergencies_text'>            
          ${element.coverage.emergencies}</p>
        </div>
        <div class='hospital'>
          <img src="/assets/hospital.png" alt="hospital">
          <p class ='hospital_text'>            
          ${element.coverage.hospitalization}</p>
        </div>
      </div>
    </div>
    `;
  })
  container.innerHTML = cards;
}