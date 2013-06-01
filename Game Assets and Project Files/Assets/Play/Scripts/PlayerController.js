#pragma strict

var playerLaser					:Rigidbody;
var	ShieldMesh					:Transform;
var	ShieldKeyInput				:KeyCode;
var	time						:int			=20;
var	rand						:int			=0;
private var ShieldOn			:boolean		=false;
///// VARIABLES /////



//SHIP HIT by ALIEN LASER = -5
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		GameController.playerHealth -= 1;
	}
}

function Update()
{	
	//KEYCODE: SPACEBAR = Shoot PlayerLaser
	if (Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(playerLaser,transform.position,transform.rotation);
	}
	
	//SHIELD ACTIVE and FOLLOWS PLAYERSHIP
	if(ShieldController.shieldHealth>1)
	{
		ShieldOn=true;
	}
	
	if(Input.GetKeyDown(ShieldKeyInput))
	{
		if(ShieldOn)
		{
			var clone = Instantiate(ShieldMesh,transform.position,transform.rotation);
			clone.transform.parent=gameObject.transform;
			ShieldOn = false;
		}
	}
		
	//SHOTS FIRED
	if(Input.GetKeyDown(KeyCode.Space))
	{
		GameController.shotsFired++;
	}
	
	//BORDER	
	var border:float=1.0;
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	
	//transform.Translate(Vector3.right * playerSpeed * Time.deltaTime * Input.GetAxis("Horizontal"));
	var transH : float = Input.GetAxis("Horizontal") * 10 * Time.deltaTime;
		transform.Translate(transH,0,0);
}


