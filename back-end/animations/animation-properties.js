class AnimationProperties{
    constructor(isMoving, isFading, highlighter){
        this.isMoving = isMoving;
        this.isFading = isFading;
        this.highlighter = highlighter;
        this.progress = 0;
        this.fade = "none";
        this.opacity = 1;
    }
    applyHighlighting(){
        if (this.isHighlighted){
            return 3;
        }
    }
    isBeingAnimated(){
        return this.isMoving || this.isFading;
    }
}

class MoveFadeIn extends AnimationProperties{
    constructor(){
        super(true, true);
        this.fade = "in";
    }
}

class MoveFadeOut extends AnimationProperties{
    constructor(){
        super(true, true);
        this.fade = "out";
    }
}

class MoveNoFade extends AnimationProperties{
    constructor(){
        super(true, false);
    }
}

class HighlighterObserve{
    constructor(){

    }
}

class HighlighterCompare{

}

class HighlighterSwap{

}