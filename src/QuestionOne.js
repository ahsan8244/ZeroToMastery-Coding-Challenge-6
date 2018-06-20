let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const CleanTheRoom = (arr) => {
	let isSorted = false;

	while(isSorted === false){
		isSorted = true;
		for(var i=0; i<arr.length; i++){
			if(arr[i] > arr[i+1]){
				isSorted = false;
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}
	}

	let cleaned = [];
	let j = 0;
	while(j<arr.length){
		if(arr[j+1] === arr[j] && j<arr.length){
			hasMore = true;
			let mini = [];
			while (hasMore) {
				mini.push(arr[j]);
				j++;
				if (!(arr[j+1] === arr[j]) && j<arr.length) {
					mini.push(arr[j]);
					j++;
					hasMore = false;
				}
			}
			cleaned.push(mini);
		}else{
			cleaned.push(arr[j]);
			j++;
		}
	}
	return cleaned;
}

CleanTheRoom(input);
