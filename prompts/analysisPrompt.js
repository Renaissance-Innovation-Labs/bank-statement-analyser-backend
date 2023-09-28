const prompt = (bankStatement) => {
  return `analyse this bank statement ${bankStatement} and give me an accumulation of the amounts of each type transaction 
    i.e POS withdrawals, ATM withdrawals, Transfers etc. Also give me a summation of all my credits and debits return the result as a javascript
    Array in this format  {
        "totalWithdrawals": 1500000,
        "totalLodgements": 3000000,
        "bankName": Access Bank,
        "accountNumber": 1983839300,
        "period": June 13th, 2023 - September 25th, 2023
        "summary": {
          "transfers": total sum of all debit transactions that are transfers e.g 15,000,
          "pos": total sum of the amount of all debit transactions from POS e.g 15,000,
          "atm": total sum of the amount of all debit transactions from ATMs e.g 15,000,
          "others": total sum of the amount of every other debit transactions e.g 15,000
        }
         
    }`;
};

module.exports = prompt;
