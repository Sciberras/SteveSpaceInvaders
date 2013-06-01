#pragma strict
var speed: float=0.0;
var bg:Material[];
//// VARIABLES ////


function Start ()
{
	if (GameController.levelsPlayed==1) 
	{
	renderer.sharedMaterial=bg[0];
	}
	
	if (GameController.levelsPlayed==2) 
	{
	renderer.sharedMaterial=bg[1];
	}
	
	if (GameController.levelsPlayed==3)
	{
	renderer.sharedMaterial=bg[2];
	}
	
	if (GameController.levelsPlayed==4)
	{
	renderer.sharedMaterial=bg[3];
	}
	
	if (GameController.levelsPlayed==5)
	{
	renderer.sharedMaterial=bg[4];
	}
	
	if (GameController.levelsPlayed==6)
	{
	renderer.sharedMaterial=bg[5];
	}
}

function Update () 
{
	var	bgmove : float;
	bgmove = speed * Time.deltaTime;
	transform.Translate(Vector3.down * bgmove, Space.World);
	
	if (transform.position.y <-19.3)
	{
	transform.position = Vector3(transform.position.x, 1f, transform.position.z);
	}	
}