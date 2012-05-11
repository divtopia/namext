Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',
	stores: [
		'Users'
	],
	models: ['User'],
	views: [
		'user.List',
		'user.Edit'
	],
	init: function () {
		this.control({
			'viewport > userlist': {
				itemdblclick: this.editUser,
			},
			'useredit button[action=save]': {
				click: this.updateUser
			},
			'useredit textfield': {
				keypress: this.captureEnterKey
			}
		});
	},

	editUser: function (grid, record) {
		var view = Ext.widget('useredit');
		view.down('form').loadRecord(record);
	},

	updateUser: function (button) {
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();
		record.set(values);
		win.close();
		this.getUserStore().sync();
	},

	captureEnterKey: function (field, e){
		var btn = field.up('window').down('button[action=save]');
		if(e.keyCode !== 13){
			return false;
		}
		this.updateUser(btn);
	}

});
