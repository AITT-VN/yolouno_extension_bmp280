Blockly.Blocks['bmp280_read'] = {
	init: function () {
		this.jsonInit({
			colour: "#4838f5",
			tooltip: "",
			message0: "đọc %1 BMP280",
			args0: [
				{
					"type": "field_dropdown",
					"name": "bmp280_data_type",
					"options": [
						["áp suất", "pressure"],
						["nhiệt độ", "temperature"],
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python['bmp280_read'] = function (block) {
	var data_type = block.getFieldValue('bmp280_data_type');
	var code = 'bmp280.' + data_type;
	Blockly.Python.definitions_['import_bmp280'] = 'from bmp280 import *';
	return [code, Blockly.Python.ORDER_ATOMIC];
};
