const US_STATES = [
	{ text: 'Alabama', key: 'AL', },
	{ text: 'Alaska', key: 'AK', },
	{ text: 'Arizona', key: 'AZ', },
	{ text: 'Arkansas', key: 'AR', },
	{ text: 'California', key: 'CA', },
	{ text: 'Colorado', key: 'CO', },
	{ text: 'Connecticut', key: 'CT', },
	{ text: 'Delaware', key: 'DE', },
	{ text: 'Florida', key: 'FL', },
	{ text: 'Georgia', key: 'GA', },
	{ text: 'Hawaii', key: 'HI', },
	{ text: 'Idaho', key: 'ID', },
	{ text: 'Illinois', key: 'IL', },
	{ text: 'Indiana', key: 'IN', },
	{ text: 'Iowa', key: 'IA', },
	{ text: 'Kansas', key: 'KS', },
	{ text: 'Kentucky', key: 'KY', },
	{ text: 'Louisiana', key: 'LA', },
	{ text: 'Maine', key: 'ME', },
	{ text: 'Maryland', key: 'MD', },
	{ text: 'Massachusetts', key: 'MA', },
	{ text: 'Michigan', key: 'MI', },
	{ text: 'Minnesota', key: 'MN', },
	{ text: 'Mississippi', key: 'MS', },
	{ text: 'Missouri', key: 'MO', },
	{ text: 'Montana', key: 'MT', },
	{ text: 'Nebraska', key: 'NE', },
	{ text: 'Nevada', key: 'NV', },
	{ text: 'New Hampshire', key: 'NH', },
	{ text: 'New Jersey', key: 'NJ', },
	{ text: 'New Mexico', key: 'NM', },
	{ text: 'New York', key: 'NY', },
	{ text: 'North Carolina', key: 'NC', },
	{ text: 'North Dakota', key: 'ND', },
	{ text: 'Ohio', key: 'OH', },
	{ text: 'Oklahoma', key: 'OK', },
	{ text: 'Oregon', key: 'OR', },
	{ text: 'Pennsylvania', key: 'PA', },
	{ text: 'Rhode Island', key: 'RI', },
	{ text: 'South Carolina', key: 'SC', },
	{ text: 'South Dakota', key: 'SD', },
	{ text: 'Tennessee', key: 'TN', },
	{ text: 'Texas', key: 'TX', },
	{ text: 'Utah', key: 'UT', },
	{ text: 'Vermont', key: 'VT', },
	{ text: 'Virginia', key: 'VA', },
	{ text: 'Washington', key: 'WA', },
	{ text: 'West Virginia', key: 'WV', },
	{ text: 'Wisconsin', key: 'WI', },
	{ text: 'Wyoming', key: 'WY', },
	{ text: 'American Samoa', key: 'AS', },
	{ text: 'District of Columbia', key: 'DC', },
	{ text: 'Federated States of Micronesia', key: 'FM', },
	{ text: 'Guam', key: 'GU', },
	{ text: 'Marshall Islands', key: 'MH', },
	{ text: 'Northern Mariana Islands', key: 'MP', },
	{ text: 'Palau', key: 'PW', },
	{ text: 'Puerto Rico', key: 'PR', },
	{ text: 'Virgin Islands', key: 'VI', },
];

export default {

	_options: {
		N_UNI_SELECT: 5,
		N_MULTI_SELECT: 6,
	},

	_: {
		type: 'block',
		items: [
			{
				type: 'header',
				text: 'Form Links',
				level: '1',
			},
			{
				type: 'para',
				items: [
					{
						type: 'link',
						text: 'Google Search',
						ref: 'googleSearch',
					},
				],
			},
			{
				type: 'para',
				items: [
					{
						type: 'link',
						text: 'Contact Form',
						ref: 'contact',
					},
				],
			},
			{
				type: 'para',
				items: [
					{
						type: 'link',
						text: 'Test Form',
						ref: 'test',
					},
				],
			},
			{
				type: 'para',
				items: [
					{
						type: 'link',
						text: 'Multi Forms',
						ref: 'multiForms',
					},
				],
			},
		],
	},

	googleSearch: {
		items: [
			{
				type: 'header',
				text: 'Google Search',
				level: '1',
			},
			{
				type: 'form',
				attr: { action: 'https://www.google.com/search', },
				items: [
					{
						type: 'input',
						text: 'Search Terms',
						attr: {
							name: 'q',
							title: "enter search terms",
						},
						required: true,
					},
					{ type: 'submit', text: 'Search Google', },
				],
			},
		],
	},

	contact: {
		items: [
			{
				type: 'header',
				text: 'Contact Form',
				level: '1',
			},
			{
				type: 'form',
				items: [
					{
						type: 'input',
						attr: { name: 'firstName', title: "alphabets, space, ' or -", },
						text: 'First Name',
						required: true,
						chkFn(val) { return val.match(/^[-' a-zA-Z]+$/); },
						errMsgFn(val, info) {
							return `The ${info.text} field must contain ` +
								`only ${info.attr.title}.`;
						},
					},
					{
						type: 'input',
						attr: { name: 'lastName', title: "alphabets, space, ' or -", },
						text: 'Last Name',
						required: true,
						chkFn(val) { return val.match(/^[-' a-zA-Z]+$/); },
						errMsgFn(val, info) {
							return `The ${info.text} field must contain ` +
								`only ${info.attr.title}.`;
						},
					},
					{
						type: 'input',
						attr: { name: 'addr1', },
						text: 'Address Line 1',
						required: true,
					},
					{
						type: 'input',
						attr: { name: 'addr2', },
						text: 'Address Line 2',
					},
					{
						type: 'uniSelect',
						text: 'State',
						attr: { name: 'state' },
						items: [{ key: '', text: 'Select' }].concat(US_STATES),
						required: true,
					},
					{
						type: 'input',
						attr: { name: 'zip' },
						text: 'Zip Code',
						required: true,
						chkFn(val) { return val.match(/^\d{5}(-\d{4})?$/); }
					},
					{
						type: 'input',
						attr: {
							name: 'tel', title: 'digits, space, (, ), or -',
							placeholder: '(ddd) ddd-dddd',
						},
						text: 'Telephone',
						subType: 'tel',
						required: true,
						chkFn(val) { return val.match(/^[ \d\(\)\-\#]+$/); }
					},
					{
						type: 'input',
						attr: { name: 'email', title: 'user@dom.tld', },
						text: 'Email',
						subType: 'email',
						required: true,
						chkFn(val) { return val.match(/^[-\w]+\@[-\w]+(\.[-\w]+)+$/); },
					},
					{ type: 'submit' },
				],
			},
		],
	},

	test: {
		items: [
			{
				type: 'header',
				text: 'Test Form',
				level: '1',
			},
			{
				type: 'form',
				items: [
					{
						type: 'uniSelect',
						attr: { name: 'uniSelect' },
						text: 'Digits',
						required: true,
						items: [
							{ key: '', text: 'Select' },
							{ key: '0', text: 'zero' },
							{ key: '1', text: 'one' },
							{ key: '2', text: 'two' },
							{ key: '3', text: 'three' },
							{ key: '4', text: 'four' },
							{ key: '5', text: 'five' },
							{ key: '6', text: 'six' },
							{ key: '7', text: 'seven' },
							{ key: '8', text: 'eight' },
							{ key: '9', text: 'nine' },
						],
					},
					{
						type: 'multiSelect',
						attr: { name: 'multiSelect' },
						text: 'Digitos',
						items: [
							{ key: '0', text: 'cero' },
							{ key: '1', text: 'uno' },
							{ key: '2', text: 'dos' },
							{ key: '3', text: 'tres' },
							{ key: '4', text: 'cuatro' },
							{ key: '5', text: 'cinco' },
							{ key: '6', text: 'seis' },
							{ key: '7', text: 'seite' },
							{ key: '8', text: 'ocho' },
							{ key: '9', text: 'nueve' },
						],
					},
					{
						type: 'input',
						attr: {
							name: 'requiredWord',
							title: 'one-or-more word characters',
						},
						text: 'Required Word',
						required: true,
						chkFn(val, info, meta) { return val.match(/^\w+$/); },
						errMsgFn(val, info, meta) {
							return `Field ${info.text} must contain ${info.attr.title}.`;
						},
					},
					{
						type: 'input',
						attr: {
							name: 'optionalWord',
							title: 'one-or-more word characters',
						},
						text: 'Optional Word',
						chkFn(val, info, meta) { return val.match(/^\w+$/); },
						errMsgFn(val, info, meta) {
							return `Field ${info.text} must contain ${info.attr.title}.`;
						},
					},
					{
						type: 'input',
						subType: 'number',
						attr: { name: 'numInput' },
						text: 'Number Input',
					},
					{
						type: 'uniSelect',
						attr: { name: 'nationalColors', },
						text: 'National Colors',
						items: [{ key: 'red', }, { key: 'white', }, { key: 'blue' },],
					},
					{
						type: 'multiSelect',
						attr: { name: 'primaryColors', },
						text: 'Primary Colors',
						required: true,
						items: [{ key: 'red', }, { key: 'blue', }, { key: 'green' },],
					},
					{ type: 'submit' },
				],
			},
		],
	},

	multiForms: {
		items: [
			{
				type: 'header',
				text: 'Multiple Forms',
				level: '1',
			},
			{
				type: 'para',
				items: [
					{
						type: 'segment',
						text: `Verify that multiple forms with widgets having same
                   names do not collide. Here is Form 1`,
					},
				],
			},
			{
				type: 'form',
				items: [
					{
						type: 'input',
						text: 'Field',
						attr: { name: 'field', },
					},
					{
						type: 'input',
						subType: 'hidden',
						attr: { name: 'hidden', value: 123, },
					},
					{
						type: 'submit',
						text: 'Submit Form 1',
					}
				],
			},
			{
				type: 'para',
				items: [
					{
						type: 'segment',
						text: `Here is Form 2`,
					},
				],
			},
			{
				type: 'form',
				items: [
					{
						type: 'input',
						text: 'Field',
						attr: { name: 'field', },
					},
					{
						type: 'input',
						subType: 'hidden',
						attr: { name: 'hidden', value: 456, },
					},
					{
						type: 'submit',
						text: 'Submit Form 2',
					}
				],
			},
		],
	},

};
