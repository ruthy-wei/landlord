/**
 * 卡牌规则
 */
var CardUI = qc.defineBehaviour('qc.engine.CardUI', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    this.isSelected = false;
    this.info = null;
}, {
    // fields need to be serialized
});

/**
  *显示纸牌，
  *@property info 卡牌信息，
  *@property isSelect 是否选中
  */
CardUI.prototype.show = function (info, isSelect){
    var self = this,
        o =self.gameObject;
    if(info){
        o.frame = info.icon;
        o.resetNativeSize();
        o.visible = true;
        self.info = info;
    }
    //if(isSelect){
        //o.anchoredY = -28;
        //self.isSelected = true;
    //}
};

/**
  * 选中纸牌，纸牌上移
  */
CardUI.prototype.onClick = function (){
    var self = this;
    if(self.isSelected){
        this.gameObject.anchoredY = 0;
    } else {
        this.gameObject.anchoredY = -28;
    }
    self.isSelected = !self.isSelected;
    var ui = window.landlordUI ? window.landlordUI : window.olLandlordUI;
    if(ui.getReadyCardsKind()){
        ui.playBtn.state = qc.UIState.NORMAL;
    } else {
        ui.playBtn.state = qc.UIState.DISABLED;
    }
};

// Called when the script instance is being loaded.
//CardUI.prototype.awake = function() {
//
//};

// Called every frame, if the behaviour is enabled.
//CardUI.prototype.update = function() {
//
//};
