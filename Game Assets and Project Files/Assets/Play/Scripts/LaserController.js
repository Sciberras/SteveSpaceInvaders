#pragma strict

var shootingup					:boolean;
var bomb						:Rigidbody;
///// VARIABLES /////


function Update ()
{
	if(shootingup) //Shoot Upwards
	{
		transform.Translate(Vector3.up * 30 * Time.deltaTime);
	}
	else	//Shoot Downwards
	{
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
	
	//GameController.shotsMissed = GameController.shotsFired-GameController.score;
}


function OnTriggerEnter(other:Collider)
{
	if(shootingup)  //HITS = Score++ and Bombs
	{
		if (other.gameObject.tag == "enemy")   //enemy hit = bomb
		{	
			GameController.score++;
			Instantiate(bomb,transform.position,transform.rotation);
			Destroy(other.gameObject);
			Destroy(this.gameObject);
		}
		if(other.gameObject.tag == "boss")   //boss hit = bomb
		{
			GameController.score++;
			Instantiate(bomb,transform.position,transform.rotation);
		}
	}
	else
	{
		if (other.gameObject.tag == "player")   //player hit = bomb
		{	
			Instantiate(bomb,transform.position,transform.rotation);
			Destroy(this.gameObject);
		}
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
