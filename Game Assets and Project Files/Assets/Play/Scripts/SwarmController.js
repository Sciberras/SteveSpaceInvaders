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


function createAliens(rows:int,cols:int)
{
	//Don't Create Swarm after lvl5
	if(GameController.levelsPlayed<6)
	{
		//for all the rows of aliens
		for(var row=0;row<rows;row++)
		{
			//creates the aliens as required
			for(var counter=0;counter<cols;counter++)
			{
				var tempAlien:Rigidbody;
				//create instances of the alien in these positions
				tempAlien = Instantiate(alien,Vector3(counter*2,transform.position.y-row,1),Quaternion.identity);
				//the parent of the alien is the swarm
				tempAlien.transform.parent = this.transform;
			}
		}
	}
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