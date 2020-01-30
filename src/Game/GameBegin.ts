class GameBegin extends eui.Component implements  eui.UIComponent {
	public begin_btn:eui.Button;
	public group:eui.Group;
	public text:eui.Label;
	public forward_btn:eui.Button;


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
		this.init()
		this.forward_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.handler,this)

	}

	// 初始化操作
	private  init():void{
		this.begin_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHandler,this);
		this.text.text = 'hello egret'

		// 自定义eui控件
		var Label:eui.Label = new eui.Label()
		Label.text = 'hello world'
		this.group.addChild(Label)
	}
	// 绑定函数
	private tapHandler(e:egret.TouchEvent){
		alert('Button click')
	}
	private handler(){
		SceneManager.Shared().change('forward')
	}
}