// Copyright (c) 2024, envisionx Oman and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Collection Report"] = {
	"filters": [
		{
			"fieldname":"customer",
			"label":("Customer"), 
			"fieldtype":"Link", 
			"options":"Customer", 
		},
		{
			"fieldtype": 'Select',
			"fieldname": 'status',
			"label":('Status'),
			"options": ['', 'Partly Paid', 'Unpaid', 'Unpaid and Discounted', 'Partly Paid and Discounted', 'Overdue and Discounted', 'Overdue']
		},
	]
};