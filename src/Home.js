import React from 'react';
const enigma = require('enigma.js');
const schema = require('enigma.js/schemas/12.20.0.json');
const SenseUtilities = require('enigma.js/sense-utilities');

const config = {
  host: '',
  secure: true,
  port: 443,
  prefix: 'windows',
  appId: '', // ==> Consumer Sales
};
const url = SenseUtilities.buildUrl(config);
const qDocPromise = enigma.create({ schema, url }).open().then(global => global.openDoc(config.appId));
console.log(qDocPromise);

qDocPromise.then((doc) => {
  console.log(doc);
})

const Home = () => {
  return (
    <div>My Amazing Qlik Sense Mashup!</div>
  )
}
export default Home;