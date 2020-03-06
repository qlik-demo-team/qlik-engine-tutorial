import React from 'react';
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');
const SenseUtilities = require('enigma.js/sense-utilities');
import hypercube from './hypercube';

const config = {
  host: 'sense-demo-staging.qlik.com',
  secure: true,
  port: 443,
  prefix: 'windows',
  appId: '52b96c54-ca5c-4ec6-a10d-39992c733959', // ==> Consumer Sales
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
  
})

const Home = () => {
  return (
    <div>My Amazing Qlik Sense Mashup!</div>
  )
}
export default Home;