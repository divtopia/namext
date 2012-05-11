Ext.define('AM.view.user.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.useredit',

    requires: ['Ext.form.Panel'],

    title : 'Edit User',
    layout: 'fit',
    autoShow: true,
    height: 120,
    width: 280,

	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype:'textfield',
						enableKeyEvents: true,
						name: 'name',
						fieldLabel: 'Name'
					},
					{
						xtype: 'textfield',
						enableKeyEvents: true,
						name: 'email',
						fieldLabel: 'Email'
					}
				]
			}
		];

		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];

		this.callParent(arguments);
	}
});
