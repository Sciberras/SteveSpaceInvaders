#pragma strict

var leftborder					:float			=-10.0;			//left margin in world coordinates
var rightborder					:float			=10;			//right margin in world coordinates
var touchedrightwall			:boolean		=false;
var touchedleftwall				:boolean		=false;
var alienlaser					:Rigidbody;
var bigBomb						:Rigidbody;
///// VARIABLES /////


function moveDown()											//MOVE DOWN BY ONE STEP
{
	transform.position.y--;
}
function OnTriggerEnter (other:Collider)
{
	if(other.gameObject.tag == "playerLaser")
	{
		GameController.bossHealth -= 2; 					//the player hit the boss
	}
}

function Start()
{
	var shootdelay:float=0;

	shootdelay = Random.Range(0.7,2.0);						//between 1.0 and 3.0
	InvokeRepeating("shootlaser",shootdelay,shootdelay);	//call the shoot laser function first after shootdelay seconds, and then according to shootdelay, a random value
	
	for(var counter=0;counter<5;counter++)					//MOVE DOWN
	{
		yield WaitForSeconds(5);							//wait for five seconds
		moveDown();											//move down
	}
}

function shootlaser()										//CAUSES THE BOSS TO SHOOT A LASER
{
	Instantiate(alienlaser,transform.position,transform.rotation);
}

function bomb()
{
	Instantiate(bigBomb,transform.position,transform.rotation);
	Destroy(this);
	Destroy(this.gameObject);
}

function Update ()
 {
 	if (GameController.bossHealth<=0)
 	{
 		bomb();
 	}
 	
	//MOVEMENT
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
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}

	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}

}