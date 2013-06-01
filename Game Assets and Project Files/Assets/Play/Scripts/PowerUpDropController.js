#pragma strict

static var ShieldTrigger:boolean;
var percentDrop : float=50f;
////////////////////////////////////////////////////////////////////////////

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "player")
	{
		var rand : float = Random.Range (0f, 100f);
		
		Destroy(this.gameObject);

	    if (rand < percentDrop)
	    {	
	    	ShieldController.shieldHealth +=3;
			print("+3 SHIELD POWER UP");
		}
		else
		{
			GameController.playerHealth +=10;
			print("+10 HEALTH POWER UP");
		}
	}

}	

function Update () 
{
	transform.Translate(Vector3.up * -10 * Time.deltaTime); 
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}

