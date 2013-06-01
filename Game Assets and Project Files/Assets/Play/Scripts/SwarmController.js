#pragma strict

var leftborder:float=-17.0;

var rightborder:float=17;

var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

var alien:Rigidbody;



function moveDown()
{
	//move down by one on y axis
	transform.position.y--;
}




function Start () {

	
	//loop will run 5 times
	//1 row 5 aliens
	createAliens(GameController.rows,GameController.cols);
	
	for(var counter=0;counter<5;counter++)
	{
		//wait for 10 seconds
		yield WaitForSeconds(10);
		//move the aliens down
		moveDown();
	}
	

	
}

function Update () {

	if (GameController.levelsPlayed==6)
	{
		Destroy(gameObject.FindWithTag("enemy"));
	}

	
	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		//move to the right
		touchedleftwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
	//
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 5 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 5 * Time.deltaTime);
	}
		

	
	
}