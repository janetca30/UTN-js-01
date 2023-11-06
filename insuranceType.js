const insuranceType = {
  "types": [
    {
      "_id": 1,
      "name": "Essential",
      "price": "$500",
      "coverage": {
        "medical": "Basic medical coverage including doctor consultations, basic laboratory tests, and primary care services.",
        "emergencies": "Coverage for emergency room visits and emergency hospitalization.",
        "hospitalization": "Prescriptions: Coverage for certain generic medications and some brand-name drugs with a copay."
      }
    },
    {
      "_id": 2,
      "name": "Intermediate",
      "price": "$1000",
      "coverage": {
        "medical": "Includes everything in the Essential plan and adds coverage for specialists, more complex medical procedures, and specialized treatments.",
        "emergencies": "Possibly includes preventive check-ups, vaccinations, and access to wellness programs.",
        "hospitalization": "Increased coverage for hospital stays, scheduled, and emergency surgeries."
      }
    },
    {
      "_id": 3,
      "name": "Premium",
      "price": "$1500",
      "coverage": {
        "medical": "Includes everything in the previous plans and extends coverage to areas such as rehabilitation therapies, mental health, dental, and vision care.",
        "emergencies": "Additional Benefits: Possible reimbursements for gyms, weight management programs, international travel assistance, among others.",
        "hospitalization": "Personalized Care: Access to exclusive services such as 24-hour medical helplines and care coordination."
      }
    }
  ]
};
