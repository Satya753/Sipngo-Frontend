const https = require('https');



var PaytmCheckSum = require('./PaytmChecksum')

//* You can get this utility from https://developer.paytm.com/docs/checksum/

export default handleTransaction = async (orderId , amount , user_id)=>{
paytmparam.body = {"requestType":"Payment" , 
        "mid":"",
        "websiteName":"",
        "orderId":orderId,
        "callbackUrl":"https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID="+orderId ,
        "txnAmount": {
            "value":amount,
            "currency":"INR",
        },
        "userInfo":{
            "custId":user_id
        }

}
 PaytmCheckSum.generateSignature(paytm.body , "MERCHANT_KEY").then(function(checksum){
    paytmparam.head = {
        "signauture":checksum
    };

    var post_data = JSON.stringify(paytmparam);

    var options = {
        hostname : "securegw-stage.paytm.in",
        port:443,
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'Content-Length':post_data.length,
        }
    };

    var response = ""
    var post_request = https.request(options , function (postres){
        post_res.on('data' , function(chunk){
            response+=chunk;
        });

        post_res.on('end' , function(){
            console.log('Response' , response)
        })
    });

    post_request.write(post_data);
    post_request.end();

    return Promise.resolve("success")
})
}