import moment from 'moment'
// import lodash from 'lodash'
// import randomName from 'sillyname'

module.exports = {

	/**
	 * Formats a datestamp to a given format
	 *
	 * @requires moment.js - http://momentjs.com/docs/
	 * @param {string} value
	 * @param {string} format - optional
	 * @return {string}
	 */
	formatDateTime: (value, format) => {
		if(typeof format == 'undefined')
			format = 'D MMM YYYY'
		let date = moment(value)
		return date.format(format)
	},

	/**
	 * Captilizes the first charatcer of a string
	 *
	 * @param string $value
	 * @return boolean
	 */
	capitalizeFirstLetter: value => {
		if(typeof value != 'string')
			throw new Error("The provided value is not a string")

	    return value.charAt(0).toUpperCase()
	},

	/**
	 * Tests whether or not the value passed is an empty string
	 *
	 * @param mixed $value
	 * @return boolean
	 */
	isEmptyString: value => {
	 	return (value === '')? true : false
	},

	/**
	 * Tests whether or not the value passed is 'undefined' or 'null'
	 * Source - http://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null
	 * 
	 * @param mixed $value
	 * @return boolean
	 */
	isNullOrUndefined: value => {
		return value == null
	},

	/**
	 * Tests whether a value is numeric or not
	 *
	 * @param mixed $value
	 * @return bool
	 */
	isNumeric: value => {
	  	return !isNaN(parseFloat(value)) && isFinite(value)
	},

	/**
	 * Determines if an object is empty or not
	 *
	 * @param object $obj
	 * @return bool
	 */
	isEmptyObject: obj => {
		if(typeof obj != 'object')
			return false

	    for(let prop in obj) {
	        if(obj.hasOwnProperty(prop))
	            return false
	    }
	    return true
	},

	/**
	 * Converts a http string to a clickable external link
	 *
	 * @param string $text
	 * @return string
	 */
	linkify: text => {
	    let urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
	    return text.replace(urlRegex, function(url) {
	        return '<a class="channel-event-link" target="_blank" href="' + url + '">' + url + '</a>'
	    })
	},

	/**
	 * Updates the text displayed in the document title
	 *
	 * @param string $text
	 * @return void
	 */
	updateTitleText: text => {
		document.title = text
	},

	/**
	 * Focus the element that has the specified element_id
	 *
	 * @param string $element_id
	 * @return void
	 */
	focusOnElement: element_id => {
		document.getElementById(element_id).focus()
	},

	/**
	 * Update an elements value
	 *
	 * @param {string} $elemet_id
	 * @param {string} $value
	 * @return void
	 */
	 updateElementsValue: (element_id, value) => {
	 	document.getElementById(element_id).value = value
	 },

	/**
	 * Make an elements scrollTop the same its scrollHeight
	 *
	 * @param string $element_id
	 * @return void
	 */
	letScrollTopEqualScrollHeight: element_id => {
		let elemenet = document.getElementById(element_id)
		let height = elemenet.scrollHeight
		elemenet.scrollTop = height
	},

	/**
	 * Creates and emits a new notification
	 *
	 * @param string $title
	 * @param object $options
	 * @return void
	 */
	notification: (title, options) => {
		let n = new Notification(title, {
		  body: options.body
		})
		
		// close the notification after 5 secs
		setTimeout(n.close.bind(n), 5000)
	}

};

