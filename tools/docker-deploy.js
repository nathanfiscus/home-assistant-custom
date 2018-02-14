/* eslint-disable no-console */
let exec = require('child_process').exec;

console.log('Building Docker Image....');

if (process.argv[2] === 'react-slingshot-spa' || process.argv[2] === undefined || process.argv[2] === '') {
	throw new Error('Please name the service in the package.json file for this code base to be deployed as.');
}

exec("docker build -t web06.client.eqc.local:5000/" + process.argv[2] + " .", {maxBuffer: 1024 * 1000}, function (error, stdout, stderr) {
	if (error !== null) {
		console.log(stdout);
		console.error(stderr);
		throw error;
	}

	console.log('Built!');
	console.log("\n\rPushing to Docker Repository....");

	exec("docker push web06.client.eqc.local:5000/" + process.argv[2], function (error, stdout, stderr) {
		if (error !== null) {
			console.log(stdout);
			console.log(stderr);
			throw error;
		}
		console.log('Pushed!');

		console.log('To create this service:');

		console.log('\r\ndocker service create \\\n' +
			'  --name ' + process.argv[2] + ' \\\n' +
			'  --network black-hole \\\n' +
			'  --publish <PORT>:<PORT> \\\n' +
			'  --secret <SECRET FILE NAME> \\\n' +
			'  web06.client.eqc.local:5000/' + process.argv[2]);

		console.log('\r\nTo update the service:');

		console.log('docker service update ' + process.argv[2] + ' \\\n' +
			'  --image web06.client.eqc.local:5000/' + process.argv[2] + ' --force');
	});

});
