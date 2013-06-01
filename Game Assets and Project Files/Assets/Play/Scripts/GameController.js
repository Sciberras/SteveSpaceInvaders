#pragma strict

var boss						:Rigidbody;
static var gameOver				:boolean		=false;
static var score				:int			=0;
static var rows					:int			=3;
static var cols					:int			=5;
static var levelsPlayed			:int			=1;
static var playerHealth			:int			=100;
static var bossHealth			:int			=100;
static var shotsMissed			:int			=0;
static var shotsFired			:int			=0;
///// VARIABLES /////


function Awake()
{
	if(GameObject.FindGameObjectsWithTag("GameController").Length > 1)
	{
		Destroy(this);
	}
}

function resetHud()
{
	playerHealth=100;
	ShieldController.shieldHealth=3;
	score=0;
	shotsFired=0;
	shotsMissed=0;
	levelsPlayed=1;
	rows=3;
	cols=5;
}

function BossIn()
{
	//LEVEL 6 = BOSS Lvl
	if(levelsPlayed==6)
	{
		Instantiate(boss);											//Boss enter
	}
}
function Start() 
{	
	gameOver=false;
	
	MyUpdate();
	
	//LEVEL 6
	BossIn();
	
	//GAME STATE = Player Health = 0
	if (playerHealth<=0)
	{
		Destroy(this.gameObject);
		gameOver=true;
		Application.LoadLevel("GameOverorWin");
	}
	
	//DontDestroyOnLoad(this);
}

function MyUpdate ()
{
while(true)
	{
	//SHOTS MISSED
		shotsMissed = shotsFired-score;
		
		//LEVELS 1 - 5
		if (levelsPlayed<6)
		{	
			var numberOfAliens:int;
			numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;			//total number of aliens in the scene
		
			if (numberOfAliens==0)
			{
				levelsPlayed++;
				rows++;
				Application.LoadLevel("Load");
			}
		}
		else
		
		//PLAYER HEALTH = 0
		if (playerHealth<=0)
		{
			gameOver=true;
			resetHud();
			Application.LoadLevel("GameOverorWin");
		}
		
		if (bossHealth<=0)
		{
			yield WaitForSeconds(5);
			resetHud();
			Application.LoadLevel("GameOverorWin");
		}
	yield;
	}
}

//HUD DISPLAY
/*function OnGUI() 
{
	    GUI.Label(Rect(10,10,100,50),"Health: "+playerHealth);
		GUI.Label(Rect(10,30,100,50),"Score: "+score);
		GUI.Label(Rect(10,50,100,50),"Shield: "+ShieldController.shieldHealth);
		GUI.Label(Rect(10,70,100,50),"Shots: "+shotsFired);
		GUI.Label(Rect(10,90,100,50),"Missed: "+shotsMissed);
		GUI.Label(Rect(10,110,100,50),"Level: "+levelsPlayed);
		GUI.Label(Rect(10,130,100,50),"Pilot: "+Load.pilotName);
		
		if (levelsPlayed==6)
		{
			GUI.Label(Rect(10,150,100,50),"Boss Health: "+bossHealth);
		}
}		