const {Pool} = require('pg');
const {hash} = require('bcrypt');
const { Blockchain } = require('./blockchain');

const pool = new Pool();

async function loadData(){
  try{
    await pool.query("DELETE FROM voterRegistration;");
    await pool.query("DELETE FROM voterAddress;");
    await pool.query("DELETE FROM ballotMeasures");
    
    for(let i = 100000000; i < 100000100; i++){
      const addressResult = await pool.query(
        'INSERT INTO voterAddress (line1, zipcode, city, state) VALUES ($1, $2, $3, $4) RETURNING id',
        [
          i,
          '80108',
          i,
          "CO",
        ]
      );

      const addressId = addressResult.rows[0].id;

      const voterResult = await pool.query(
        'INSERT INTO voterRegistration (firstName, lastName, addressId, ssn, dob) VALUES ($1, $2, $3, $4, $5)',
        [
          i.toString(),
          'Doe',
          addressId,
          await hash(i.toString(), 10),
          "10/06/2002"
        ]
      ); 
    }

    console.log("Inserted Mock Data");
  } catch (e) {
    console.log("Failed to insert mock data");
    console.log(e);

    process.exit(e);
  }
}

module.exports = {
  query: async (text, params) => {
    try{
      const result = await pool.query(text, params)
      return result
    } catch( e ){
      return Promise.reject(e);
    }
  },
  loadData
}