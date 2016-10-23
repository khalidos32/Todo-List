	document.getElementById("add").addEventListener('click', function(){
		var value = document.getElementById("item").value;
		if (value) {
			additemtodo(value);
		}
	});

	function removeItem(){
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		parent.removeChild(item);
	};	

	function completeItem(){
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		var target = (parent.id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

		target.insertBefore(item, target.firstChild);
	}

	function additemtodo(text){
		var list = document.getElementById('todo');
		var item = document.createElement('li');
		item.innerText = text;
		var buttons = document.createElement('div');
		buttons.classList.add('buttons');

		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.id= 'remove';
		var iconremove = document.createElement('i');
		iconremove.classList.add('fa');
		iconremove.classList.add('fa-trash-o');
		remove.appendChild(iconremove);
		
		// remove item event
		remove.addEventListener('click', removeItem);
		
		var done = document.createElement('button');
		done.classList.add('done');
		done.id= 'done'
		var icondone = document.createElement('i');
		icondone.classList.add('fa');
		icondone.classList.add('fa-check-circle-o');
		done.appendChild(icondone);

		// remove item event
		done.addEventListener('click', completeItem);


		buttons.appendChild(remove);
		buttons.appendChild(done);
		item.appendChild(buttons);

		list.insertBefore(item, list.firstChild);

	};	
