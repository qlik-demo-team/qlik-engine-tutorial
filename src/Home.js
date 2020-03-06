import React from 'react';
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');
const SenseUtilities = require('enigma.js/sense-utilities');
import hypercube from './hypercube';
import listObject from './listObject';

const config = {
  host: '', // Qlik Server Domain
  secure: true,
  port: 443,
  prefix: '',
  appId: '', // ==> App ID
};
const url = SenseUtilities.buildUrl(config);
const qDocPromise = enigma.create({ schema, url }).open().then(global => global.openDoc(config.appId));
console.log(qDocPromise);

qDocPromise.then((doc) => {
  // Getting data from hypercube
  doc.createSessionObject(hypercube).then((obj) => obj.getLayout().then(layout => {
    console.log(layout);
    const dataPages = layout.qHyperCube.qDataPages[0].qMatrix
    console.log(dataPages)
  }))
  
  // Making a Selection with a List Object
  doc.createSessionObject(listObject).then((obj) => {
    obj.getListObjectData('/qListObjectDef',[ {qLeft: 0, qTop: 0, qWidth: 10, qHeight: 100}]).then(objectData => {
      console.log(objectData);
      obj.selectListObjectValues('/qListObjectDef', [2], true, false).then((res) => {
        console.log(res);
        obj.getListObjectData('/qListObjectDef',[ {qLeft: 0, qTop: 0, qWidth: 10, qHeight: 100}]).then(objectData2 => {
          console.log(objectData2)
        })
      })
    })
  })
})

const Home = () => {
  return (
    <div>My Amazing Qlik Sense Mashup!</div>
  )
}
export default Home;