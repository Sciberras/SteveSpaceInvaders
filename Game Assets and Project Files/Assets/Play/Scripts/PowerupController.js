#pragma strict


var 		powerup 			:Rigidbody;
var			rand:int;
var			speed:int;
var leftborder:float=-17.0;
var rightborder:float=17;
var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

function Start () 
{
	PowerupDrop();
}

function PowerupDrop()
{
	for(var counter=0;counter<=5;counter++)
	{
		rand = Random.Range(1,10);
		yield WaitForSeconds(rand);
		Instantiate(powerup,transform.position,transform.rotation);
	} 
}

function Update()
{
		
	
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