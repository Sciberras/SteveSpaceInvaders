#pragma strict

///// VARIABLES /////


function OnGUI()
{
	GUI.BeginGroup (Rect(Screen.width/2-50,Screen.height/2-50,100,150));
	
	if(GameController.gameOver)
	{
		GUI.Box(Rect(0,0,100,120),"You Lost");
	}
	else
	{
		GUI.Box(Rect(0,0,100,120),"You WIN!");
	}
	
	if(GUI.Button(Rect(10,75,80,30), "Main Menu"))
	{
		Application.LoadLevel("MainMenu");
	 
	}
	
	if(GUI.Button(Rect(10,30,80,30), "Retry"))
	{
		Application.LoadLevel("Play");
	 
	}
		
	GUI.EndGroup();
}