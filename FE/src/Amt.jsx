import React from 'react';

const Amt= () => {
  const Data = {
    currency: 'INR',
    invBasicAmt: '13000',
    invTaxAmt: '3000',
    totalInvAmtInclTax: '19000',
    advancePaid: '0.56',
    tcsApplicables: 'No',
    netPayableAmtExclTds: '88000',
  };

  return (
    <form>
      <h2 style={{ color: 'black',  padding: '15px', borderRadius: '10px' }}>INVOICE DETAILS</h2>
      <label >
        Currency :
        <input type="text" value={Data.currency} readOnly />
      </label>
      <label >
        Inv Basic Amt :
        <input type="text" value={Data.invBasicAmt} readOnly />
      </label>
      <label >
        Inv Tax Amt :
        <input type="text" value={Data.invTaxAmt} readOnly />
      </label>
      <label >
        Total Inv Amt [Incl. of tax] :
        <input type="text" value={Data.totalInvAmtInclTax} readOnly />
      </label>
      <label >
        Advance Paid :
        <input type="text" value={Data.advancePaid} readOnly />
      </label>
      <label>
        TCS Applicable :
        <input type="text" value={Data.tcsApplicables} readOnly />
      </label>
      <label>
        Net Payable Amount[Excl. of TDS] :
        <input type="text" value={Data.netPayableAmtExclTds} readOnly style={{flex: 1}}/>
      </label>
    </form>
  );
};

export default Amt;