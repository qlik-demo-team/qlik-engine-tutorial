const listObject = {
  title: "A list object",
  description: "Description of the list object",
  qInfo: { qId: 'Consumer Sales List Object', qType: 'List Object'},
  qListObjectDef: {
    qStateName: "$",
    qDef: { qFieldDefs:  ['[Product Group Desc]'], qFieldLabels: ["Product Description"], qSortCriterias: [{qSortByLoadOrder: 1}]},
    qInitialDataFetch: [{
      qTop: 0, qLeft: 0, qWidth: 10, qHeight: 1000,
    }],
  },
}

export default listObject;