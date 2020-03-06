const hypercube = {
  qInfo: { qId: 'Consumer Sales', qType: 'data' },
  qHyperCubeDef: {
    qDimensions: [ 
      { qDef: { qFieldDefs: ['[Product Group Desc]']}, qFieldLabels: ['Product Group'] }
    ],
    qMeasures: [
      { qDef: { qDef: '=SUM([Sales Margin Amount])/SUM([Sales Amount])', qLabel: 'Margin' }},
    ],
    qInitialDataFetch: [{
      qTop: 0, qLeft: 0, qWidth: 10, qHeight: 1000,
    }],
    qInterColumnSortOrder: [],
    qSuppressZero: true,
    qSuppressMissing: true,
  }
}

export default hypercube;