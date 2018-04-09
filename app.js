// BUDGET CONTROLLER
var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// create a new id by incrementing the last item's id
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1; 
			} else {
				ID = 0;
			}

			// create a new item based on the 'inc' or 'exp' type
			if (type === 'exp'){
				newItem = new Expense(ID, des, val);
			} else {
				newItem = new Income(ID, des, val);
			}

			// push the new item into the data structure
			data.allItems[type].push(newItem);
			// return the new item
			return newItem;
		},

		testing: function() {
			console.log(data);
		}
	};

})();


// UI CONTROLLER
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // 'inc' or 'exp'
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(e) {
			if (e.keyCode === 13 || e.which === 13) {
				e.preventDefault(); // prevents the enter key from also triggering a click event
				e.stopPropagation();
				ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function() {
		var input, newItem;

		// 1. Get the field input data
		input = UICtrl.getInput();

		// 2. Add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		//3. Add the item to the UI

		//4. Calculate the budget

		//5. Display the budget on the UI

	};

	return {
		init: function() {
			setupEventListeners();
		}
	}

})(budgetController, UIController);

controller.init();