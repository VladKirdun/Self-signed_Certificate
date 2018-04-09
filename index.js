const fs = require('fs');
const pem = require('pem');

var keyBitSize = 2048;
var optionsForPrivateKey = {
	cipher: 'rsa',
	password: '1111'
}

var optionsForCSR = {
	country: 'BY',
	locality: 'Minsk',
	organization: 'University',
	organizationUnit: 'POIBMS',
	emailAddress: 'kirdun.vlad@mail.ru'
}

var optionsForCertificate = {
	selfSigned: true,
	days: 100
}

// module.exports = {

// 	cert: function(callback){
		var privateKey = pem.createPrivateKey(keyBitSize, optionsForPrivateKey, function(err, key){
			optionsForCSR.clientKey = key.key;
			optionsForCSR.keyBitsize = keyBitSize;
			var fileCSR = pem.createCSR(optionsForCSR, function(err, keys) {
				optionsForCertificate.serviceKey = optionsForCSR.clientKey;
				optionsForCertificate.csr = keys.csr;
				var certificate = pem.createCertificate(optionsForCertificate, function(err, keys) {
					fs.writeFileSync("cert.key", keys.serviceKey);
					fs.writeFileSync("cert.csr", keys.csr);
					fs.writeFileSync("cert.crt", keys.certificate);

					var data = {
						keyBitSize: keyBitSize,
						optionsForPrivateKey: optionsForPrivateKey,
						optionsForCSR: optionsForCSR,
						optionsForCertificate: optionsForCertificate
					}
					console.log(data);
					// callback(data);
				});
			});
		});

// 	}

// }
