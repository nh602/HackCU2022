const {createHash} = require('crypto');
const { json } = require('express');
const ReadWriteLock = require('rwlock');

class Block{
  constructor(timestamp = Date.now(), data=[]){
    this.timestamp = timestamp.toString();
    this.data = data;
    this.lastHash = "";
    this.hash = this.hashBlock();
  }

  hashBlock() {
    let jsonOut = {
      timestamp: this.timestamp,
      lastHash: this.lastHash,
      data: this.data
    };

    return createHash("sha256").update(JSON.stringify(jsonOut)).digest('hex');
  }
};

class Blockchain{
  constructor() {
    this.chain = [new Block()];
    //this.lock = new ReadWriteLock();
  }

  getLastBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(block){
    /*this.lock.async.writeLock((err, rel) =>{
      this.lock.async.readLock((error, release)=>{
        block.lastHash = this.getLastBlock().hash;
        block.hash = block.hashBlock();
        this.chain.push(block);
        release();
      })
      rel();
    })
    */
    block.lastHash = this.getLastBlock().hash;
    block.hash = block.hashBlock();
    this.chain.push(block);
  }

  verifyChain(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i-1];

      if(currentBlock.lastHash != prevBlock.hash){
        return false;
      }
    }
    return true;
  }
}

let chain = new Blockchain();

module.exports = {Block, Blockchain, chain};