#pragma strict
static var pilotName				="";
//// VARIABLES ////

//BOX With Info and Input
//Start BTN to Start PLAY
function OnGUI()
{
	GUI.BeginGroup (Rect(Screen.width/2-50,Screen.height/2-50,300,300));
	GUI.Box(Rect(0,0,200,150),"Controls");
	GUI.Label(Rect(40,20,200,120),"Space		:	Shoot");
	GUI.Label(Rect(40,40,200,120),"S				:	Shield");
	
	if(GameController.levelsPlayed==1)
	{
		GUI.Label (Rect (30,60,200,120), "Pilot:");
		pilotName = GUI.TextField (Rect (110,60,60,20),pilotName,8);
	}
	else
	{
		GUI.Label (Rect (30,60,200,120), "Pilot:" +pilotName);
		GUI.Label (Rect (30,80,200,120), "Level: " +GameController.levelsPlayed);
	}
		if ((GUI.Button(Rect(50,100,100,30),"Start")) || (Input.GetKeyDown('space')))
		{
			Application.LoadLevel('Play');
		}

	GUI.EndGroup();
}