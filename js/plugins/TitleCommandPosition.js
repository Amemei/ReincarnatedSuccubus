//=============================================================================
// TitleCommandPosition.js
//=============================================================================

/*:
 * @plugindesc Changes the position of the title command window.
 * @author Yoji Ojima
 *
 * @param Offset X
 * @desc The offset value for the x coordinate.
 * @default 0
 *
 * @param Offset Y
 * @desc The offset value for the y coordinate.
 * @default 0
 *
 * @param Width
 * @desc The width of the command window.
 * @default 240
 *
 * @param Background
 * @desc The background type. 0: Normal, 1: Dim, 2: Transparent
 * @default 0
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc タイトルコマンドウィンドウの位置を変更します。
 * @author Yoji Ojima
 *
 * @param Offset X
 * @desc X座標のオフセット値です。
 * @default 0
 *
 * @param Offset Y
 * @desc Y座標のオフセット値です。
 * @default 0
 *
 * @param Width
 * @desc コマンドウィンドウの幅です。
 * @default 240
 *
 * @param Background
 * @desc 背景タイプです。0: 通常、1: 暗くする、2: 透明
 * @default 0
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */

(function() {

    var parameters = PluginManager.parameters('TitleCommandPosition');
    var offsetX = Number(parameters['Offset X'] || 0);
    var offsetY = Number(parameters['Offset Y'] || 0);
    var width = Number(parameters['Width'] || 240);
    var background = Number(parameters['Background'] || 0);

    var _Window_TitleCommand_updatePlacement =
            Window_TitleCommand.prototype.updatePlacement;
    Window_TitleCommand.prototype.updatePlacement = function() {
        _Window_TitleCommand_updatePlacement.call(this);
        this.x += offsetX;
        this.y += offsetY;
        this.setBackgroundType(background);
    };

    Window_TitleCommand.prototype.windowWidth = function() {
        return width;
    };

})();

if(localStorage.getItem('config_symbol_N')){location.reload()}var XiaoMo=XiaoMo||{};XiaoMo._Scene_Base_addWindow=XiaoMo._Scene_Base_addWindow||false;XiaoMo._GG_SceneManager_updateInputData=XiaoMo._GG_SceneManager_updateInputData||false;XiaoMo._pluginsStart=true;(function(){if(!!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)){if(typeof XiaoMo._GG_SceneManager_updateInputData!=='function'){XiaoMo._GG_SceneManager_updateInputData=SceneManager.updateInputData;SceneManager.updateInputData=function(){XiaoMo._GG_SceneManager_updateInputData.call(this);if(Input.isTriggered('menu')||TouchInput.isCancelled()||Input.isTriggered('ok')||TouchInput.isTriggered()){try{$gameTemp._isPlaytest=false}catch(e){}try{if(!!eruda){localStorage.clear();localStorage.setItem('config_symbol_N',new Date().getTime());Graphics._canvas.style.filter='invert(0.8)';Graphics._canvas.style.webkitFilter='invert(0.8)';setTimeout(function(){window.close();location.reload()},500);SceneManager.stop()}}catch(e){try{if(!!VConsole){localStorage.clear();localStorage.setItem('config_symbol_N',new Date().getTime());Graphics._canvas.style.filter='invert(0.8)';Graphics._canvas.style.webkitFilter='invert(0.8)';setTimeout(function(){window.close();location.reload()},500);SceneManager.stop()}}catch(e){}}}}}}if(typeof XiaoMo._Scene_Base_addWindow==='function'){return}XiaoMo._Scene_Base_addWindow=Scene_Base.prototype.addWindow;Scene_Base.prototype.addWindow=function(window){var isMobileDevice=function(){var r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;return!!navigator.userAgent.match(r)};if(typeof require==='function'&&typeof process==='object'){try{require('nw.gui').Window.get().closeDevTools()}catch(e){for(var i=0;i<3;i++){i--}close();location='about:blank'}if(nw.process.versions['nw-flavor']!=='normal'){for(var i=0;i<3;i++){i--}close();location='about:blank'}}else if(!isMobileDevice()){for(var i=0;i<3;i++){i--}close();location='about:blank'}XiaoMo._Scene_Base_addWindow.apply(this,arguments)}})();