class TransformDemo{
    constructor(){
        //初始化引擎
		Laya3D.init(0, 0);
		Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
		Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
		//显示性能面板
        Laya.Stat.show();
			
		//创建场景
		this._scene = Laya.stage.addChild(new Laya.Scene3D());
            
		//添加相机
        var camera = (this._scene.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(0, 0.7, 1.2));
        camera.transform.rotate(new Laya.Vector3( -15, 0, 0), true, false);
		camera.addComponent(CameraMoveScript);
			
		//添加光照
		var directionLight = this._scene.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(1, 1, 1);
        directionLight.transform.rotate(new Laya.Vector3( -3.14 / 3, 0, 0));
			
		//灯光开启阴影
        directionLight.shadow = true;
		//可见阴影距离
		directionLight.shadowDistance = 3;
		//生成阴影贴图尺寸
		directionLight.shadowResolution = 2048;
		//生成阴影贴图数量
		directionLight.shadowPSSMCount = 1;
		//模糊等级,越大越高,更耗性能
		directionLight.shadowPCFType = 3;
			
		//批量预加载资源
		Laya.loader.create([
			"res/threeDimen/staticModel/grid/plane.lh", 
			"res/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh"
		], Laya.Handler.create(this, this.onComplete));
    }

    onComplete(){
        //加载地面
        var grid = this._scene.addChild(Laya.Loader.getRes("res/threeDimen/staticModel/grid/plane.lh"));
        //地面接收阴影
        (grid.getChildAt(0)).meshRenderer.receiveShadow = true;
        //加载静态小猴子
        var staticLayaMonkey = this._scene.addChild(new Laya.MeshSprite3D(Laya.Loader.getRes("res/threeDimen/skinModel/LayaMonkey/Assets/LayaMonkey/LayaMonkey-LayaMonkey.lm")));
        //设置材质
        staticLayaMonkey.meshRenderer.material = Laya.Loader.getRes("res/threeDimen/skinModel/LayaMonkey/Assets/LayaMonkey/Materials/T_Diffuse.lmat");
        //设置位置
        staticLayaMonkey.transform.position = new Laya.Vector3(0, 0, 0.5);
        //设置缩放
        staticLayaMonkey.transform.localScale = new Laya.Vector3(0.3, 0.3, 0.3);
        //设置旋转
        staticLayaMonkey.transform.rotation = new Laya.Quaternion(0.7071068, 0, 0, -0.7071067);
        //产生阴影
        staticLayaMonkey.meshRenderer.castShadow = true;
         
        //克隆sprite3d
        var layaMonkey_clone1 = Laya.Sprite3D.instantiate(staticLayaMonkey, this._scene, false, new Laya.Vector3(0.0, 0, 0.5));
        var layaMonkey_clone2 = Laya.Sprite3D.instantiate(staticLayaMonkey, this._scene, false, new Laya.Vector3(0.0, 0, 0.5));
        var layaMonkey_clone3 = Laya.Sprite3D.instantiate(staticLayaMonkey, this._scene, false, new Laya.Vector3(0.0, 0, 0.5));
        //平移
        layaMonkey_clone1.transform.translate(new Laya.Vector3(1.5, 0, 0.0));
        layaMonkey_clone2.transform.translate(new Laya.Vector3( -1.5, 0, 0.0));
        layaMonkey_clone3.transform.translate(new Laya.Vector3( 2.5, 0, 0.0));
        //旋转
        layaMonkey_clone2.transform.rotate(new Laya.Vector3(0, 60, 0), false, false);
        //缩放
        var scale = new Laya.Vector3(0.1, 0.1, 0.1);
        layaMonkey_clone3.transform.localScale = scale;
         
         //!!!!!!
         //Quaternion.createFromYawPitchRoll(0.025, 0, 0, _temp_quaternion);
         //Vector3.transformQuat(pointLight.transform.position, _temp_quaternion, _temp_position);
         //pointLight.transform.position = _temp_position;
    }
}
//激活启动类
new TransformDemo();