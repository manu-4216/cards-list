const cards = [
  {
    name: 'Student Life Card',
    restrictions: [
      {
        type: 'employement',
        operation: 'EQ',
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
    restrictions: [],
    apr: '33.9',
    balTransferDurationMonths: 0,
    purchaseDurationMonths: 0,
    creditAvailable: 300
  },
  {
    name: 'Liquid Card',
    restrictions: [
      {
        type: 'income',
        operation: 'GT',
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
