// Copyright (c) 2024, envisionx Oman and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Sur Available Stock"] = {
	"filters": [
	{
		"fieldname": "warehouse",
		"label": __("Warehouse"),
		"fieldtype": "Select",
		"options":['3-Sur - A','1-Muscat Store 1 - A','2-Muscat Store 2 - A'],
		"default": '3-Sur - A'
	},
	{
		"fieldname": "zero",
		"label": __("Zero"),
		"fieldtype": "Select",
		"options":['0','1'],
		"default": '0'
	},

	]
};
