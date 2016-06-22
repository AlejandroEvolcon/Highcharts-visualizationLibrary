

function singleDimension(layout,dimensionLabels,measureLabels,app) {

	var newMatrix = [];
	var singlePoint = {};

        $.each(layout.qHyperCube.qDataPages[0].qMatrix, function(key, row){
        	console.log(row);
        	singlePoint['name']=row[0].qText;
        	singlePoint['y']=row[1].qNum;
        	newMatrix.push(singlePoint);
        	singlePoint = {};

        });

		
		console.log(newMatrix);


	return newMatrix;
}


