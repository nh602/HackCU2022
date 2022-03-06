const {Pool} = require('pg');
const {hash} = require('bcrypt');
const { Blockchain } = require('./blockchain');
const format = require('pg-format')

const pool = new Pool();

const {processVote} = require('./Controllers/VoteController');

async function loadData(){
  try{
    await pool.query("DELETE FROM voterRegistration;");
    await pool.query("DELETE FROM voterAddress;");
    await pool.query("DELETE FROM ballotMeasures");

    const values = [
      ["Presidential Election", ["John Doe", "Joe Mama"]],
      ["Proposition: Do we really need taxes?", ["Yes", "No"]],
      ["Proposition: Would having a purge day solve world peace?", ["Yes", "No"]],
    ]

    for(let i = 0; i < values.length; i++){
      values[i][1] = format("{%L}", values[i][1])
    }

    const sql = format(`INSERT INTO ballotMeasures (measureText, measureOptions) VALUES %L`, values);
    
    await pool.query(sql, []);
    
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

      const vote = {
        ballot:{
          
        }
      }
      

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