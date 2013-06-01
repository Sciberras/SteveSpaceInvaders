#pragma strict

static var shieldHealth				:int				=3;
///// VARIABLES /////


function OnTriggerEnter(other:Collider)
{
	if(other.tag=="alienlaser")
	{
		shieldHealth-=1;
		Destroy(other.gameObject);
		GameController.playerHealth++;
	}
}

function Update () 
{
	if(shieldHealth==0)
	{
		Destroy(gameObject);
	}
}