angular.module('myApp').directive('myDirective', function () {
	return {
		template: `<td><label class="serial"></td>
		<td><input type="text" class="item"/></td>
		<td><label class="serial"></td>
		<td><label class="serial"></td>
		<td><label class="serial"></td>
		<td><label class="serial"></td>
		<td><input type="button" class="item"/></td>`
	};
});