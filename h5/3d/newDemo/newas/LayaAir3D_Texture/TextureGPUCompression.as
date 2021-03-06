package OfficialExample.LayaAir3D_Texture 
{
	import common.CameraMoveScript;
	import laya.d3.core.Camera;
	import laya.d3.core.MeshSprite3D;
	import laya.d3.core.Sprite3D;
	import laya.d3.core.material.BlinnPhongMaterial;
	import laya.d3.core.scene.Scene3D;
	import laya.display.Stage;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.utils.Browser;
	
	public class TextureGPUCompression {
		public function TextureGPUCompression() {
			Laya3D.init(0, 0);
			Stat.show();
			Laya.stage.scaleMode = Stage.SCALE_FULL;
			Laya.stage.screenMode = Stage.SCREEN_NONE;
		
			
			if(Browser.onAndroid){
				Scene3D.load("res/threeDimen/scene/LayaScene_TextureGPUCompression/Android/layaScene.ls", Handler.create(null, function(scene:Scene3D):void {
				Laya.stage.addChild(scene) as Scene3D;
				var camera:Camera = scene.getChildByName("Main Camera") as Camera;
				camera.addComponent(CameraMoveScript);
				}));
			}
			else if(Browser.onIOS){
				Scene3D.load("res/threeDimen/scene/LayaScene_TextureGPUCompression/IOS/layaScene.ls", Handler.create(null, function(scene:Scene3D):void {
				Laya.stage.addChild(scene) as Scene3D;
				var camera:Camera = scene.getChildByName("Main Camera") as Camera;
				camera.addComponent(CameraMoveScript);
				}));
			}
			else{
				Scene3D.load("res/threeDimen/scene/LayaScene_TextureGPUCompression/Conventional/layaScene.ls", Handler.create(null, function(scene:Scene3D):void {
				Laya.stage.addChild(scene) as Scene3D;
				var camera:Camera = scene.getChildByName("Main Camera") as Camera;
				camera.addComponent(CameraMoveScript);
				}));
			}
		
		}
	
	}

}