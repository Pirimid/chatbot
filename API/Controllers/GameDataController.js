'use strict';
var mongoose = require('mongoose');
var account_info = mongoose.model('account_info');


exports.processRequest = function(req, res) {
if (req.body.result.action == "check_balance") {
    getBalance(req,res)
  }
};


function getBalance(req,res)
{
  let parameters = req.body.result.parameters.account;

//For fetching Savings account
  account_info.findOne({savings},function(err,data)
  {
    if (err)
    {
      return res.json({
        speech: 'Something went wrong!',
        displayText: 'Something went wrong!'
      });
    }

    if (data)
    { var returnsavings = data.savings; }

  });


//For fetching Current account
  account_info.findOne({current},function(err,data)
  {
    if (err)
    {
      return res.json({
        speech: 'Something went wrong!',
        displayText: 'Something went wrong!'
      });
    }

    if (data)
    { var returncurrent = data.current; }

  });


//  Print Savings
  if (parameters == "savings")
  {
    return res.json({
      speech: returnsavings,
      displayText: returnsavings
    });
  }

//  Print Current
  else if (parameters == "current")
  {
    return res.json({
      speech: returncurrent,
      displayText: returncurrent
    })
  }

}