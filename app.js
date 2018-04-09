// BUDGET CONTROLLER
var budgetController = (function() {

	//

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
		// 1. Get the field input data
		var input = UICtrl.getInput();
		console.log(input);

		// 2. Add the item to the budget controller

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