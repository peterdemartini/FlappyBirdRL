
var fs = require('fs');

/*
 * Q Data
 */

var qData = {
	resolution: 4,
	vertical_dist_range: [-350, 190],
	horizontal_dist_range: [0, 180],

	init: function() {
		var data = this.read();
		if (data) {
			this.data = data;
			console.log('Loading from backup!');
			return this.startBackup();
		}

		this.data = [];
		for (var vert_dist = 0; vert_dist < (this.vertical_dist_range[1] - this.vertical_dist_range[0])/this.resolution; vert_dist++) {
			this.data[vert_dist] = [];

			// Horizontal Distance
			for (var hori_dist = 0; hori_dist < (this.horizontal_dist_range[1] - this.horizontal_dist_range[0])/this.resolution; hori_dist++) {
				this.data[vert_dist][hori_dist] = {"click": 0, "do_nothing": 0};
			}
		}
		return this.startBackup();
	},

	save: function(data) {
		var vert = data['vert'];
		var hori = data['hori'];
		var action = data['action'];
		var val = data['val'];

		this.data[vert][hori][action] = val;
	},

	get: function() {
		return this.data;
	},

	backup: function() {
		fs.writeFile('data.txt', JSON.stringify(this.data), function(err) {
			if (err) throw err;
			console.log('Backup created');
		});
	},

	read: function() {
		var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
		return data ? JSON.parse(data) : false;
	},

	startBackup: function() {
		doBackup();
		return this;
	}
};

function doBackup() {
    setTimeout(doBackup, 15000); // backup data every 15 seconds
    qData.backup();
}

module.exports = qData.init();