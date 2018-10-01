const cards = [
  {
    name: 'Student Life Card',
    id: 1,
    restrictions: [
      {
        field: 'employment',
        operator: 'EQ',
        value: 'student'
      }
    ],
    apr: '18.9',
    balTransferDurationMonths: 0,
    purchaseDurationMonths: 6,
    creditAvailable: 1200
  },
  {
    name: 'Anywhere Card',
    id: 2,
    restrictions: [],
    apr: '33.9',
    balTransferDurationMonths: 0,
    purchaseDurationMonths: 0,
    creditAvailable: 300
  },
  {
    name: 'Liquid Card',
    id: 3,
    restrictions: [
      {
        field: 'annualIncome',
        operator: 'GT',
        value: '16000'
      }
    ],
    apr: '33.9',
    balTransferDurationMonths: 12,
    purchaseDurationMonths: 6,
    creditAvailable: 3000
  }
]

export default cards
