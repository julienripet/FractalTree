let j = 200; 
let i = 200; 
let color = 255;
let nBranche = 1;
let childrenArray = []
let globalRotation = 0.08;

function setup(){
    createCanvas(5000,5000);
    background(200)
    strokeWeight(4);
    stroke(51);

    let tree = new Tree(1050,250,9)
        
    console.log(childrenArray)

}

function draw(){
    stroke(0);
    strokeWeight(1)
    line(0,i,5000,i)
    line(j,0,j,5000,)
    if(i<2000){
        i=i+100
    }
    if(j<2000){
        j=j+100
    }



}

class Tree {
    constructor( baseTreeX, myHeight, brancheGenerations){
        this.brancheGenerations = brancheGenerations
        this.baseTreeX = baseTreeX;
        this.baseTreeY = 0;
        this.height = myHeight;
        this.treeTopY =  this.baseTreeY + this.height;
        this.treeTopX = this.baseTreeX;
        stroke(0,0,255)
        line(this.baseTreeX,this.baseTreeY,this.treeTopX,this.treeTopY)
        let branches = new Branching(this.treeTopX,this.treeTopY,this.height*0.7,globalRotation,this.brancheGenerations,255)  
        let opposiyteBranches = new Branching(this.treeTopX,this.treeTopY,this.height*0.7,-globalRotation,this.brancheGenerations,255)

        branches.drawBranche();
        opposiyteBranches.drawBranche();
    }

    
    
}

class Branching {

    constructor(treeTopX,treeTopY,someLenght,rotation,brancheGenerations, color){
        this.color = color;
        this.brancheGenerations = brancheGenerations
        this.baseBrancheX = treeTopX;
        this.baseBrancheY = treeTopY;
        this.myLenght = someLenght ;
        this.myRotation = rotation;
        this.highEndBranchX = round(this.baseBrancheX + (1*( this.myLenght * sin(this.myRotation))));
        this.highEndBranchY = round(this.baseBrancheY + (1*( this.myLenght * cos(this.myRotation))));
    }

    drawBranche(){
        this.myLenght = this.myLenght * 0.9;
        this.myRotation = this.myRotation * 1.43;

        if(this.brancheGenerations > 0){
            //push();
        stroke(255-this.color,this.color,0)
        this.color = this.color - (255/this.brancheGenerations);
        
        //translate(this.highEndBranchX - this.baseBrancheX,this.myRotation)
        //rotate(this.myRotation);
        rect(200+this.myRotation,200+this.myRotation,50,50)
        console.log(this.baseBrancheX,this.baseBrancheY, this.highEndBranchX, this.highEndBranchY)
        line(this.baseBrancheX,this.baseBrancheY, this.highEndBranchX, this.highEndBranchY)
        //pop();


            console.log("itération numéro : "+(5-this.brancheGenerations))
            this.brancheGenerations--;
            let child = childrenArray[this.brancheGenerations] =  new Branching(this.highEndBranchX,this.highEndBranchY,this.myLenght,this.myRotation,this.brancheGenerations,this.color);
            let negchild = new Branching(this.highEndBranchX,this.highEndBranchY,this.myLenght,-this.myRotation,this.brancheGenerations,this.color);
            console.log(child)
            child.drawBranche();
            negchild.drawBranche();
        }
    }
} 