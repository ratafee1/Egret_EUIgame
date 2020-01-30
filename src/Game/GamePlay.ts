class GamePlay extends eui.Component implements  eui.UIComponent {
	public back_btn:eui.Button;


	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.handler,this)
	}
	private handler(){
		SceneManager.Shared().change('back')
	}
	
}