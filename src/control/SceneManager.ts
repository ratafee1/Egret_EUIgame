class SceneManager extends egret.DisplayObjectContainer{
	public gamebegin:GameBegin;
	public gameplay:GamePlay;
	public constructor() {
		super()
		this.gamebegin = new GameBegin()
		this.gameplay = new GamePlay()

		// 默认显示开始场景
		this.addChild(this.gamebegin)
	}
	private static shared:SceneManager;
	public static Shared():SceneManager{
		if(this.shared == null){
			this.shared = new SceneManager();
		}
		return this.shared;
	}

	public change(scene:String){

		this.removeChildren();
		// 点击开始按钮scene是'forward'
		if(scene == 'forward'){
			this.addChild(this.gameplay)

		}else if(scene == 'back'){
			this.addChild(this.gamebegin)
		}
	}
}