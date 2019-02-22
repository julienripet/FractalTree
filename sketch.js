let j = 200; 
let i = 200; 
let color = 255;
let nBranche = 1;
let childrenArray = []


function setup(){
    createCanvas(5000,5000);
    background(128)
    strokeWeight(4);
    stroke(51);

    let tree = new Tree(1050,250,5)
        
    console.log(childrenArray)

}

function draw(){
    stroke(255);
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
        stroke(255,0,0)
        line(this.baseTreeX,this.baseTreeY,this.treeTopX,this.treeTopY)
        let branches = new Branching(this.treeTopX,this.treeTopY,this.height*0.7,10,this.brancheGenerations)
        branches.drawBranche();
    }

    
    
}

class Branching {

    constructor(treeTopX,treeTopY,someLenght,rotation,brancheGenerations){
        this.brancheGenerations = brancheGenerations
        this.baseBrancheX = treeTopX;
        this.baseBrancheY = treeTopY;
        this.myLenght = someLenght ;
        this.myRotation = rotation;
        this.highEndBranchX = this.baseBrancheX + this.myLenght;
        this.highEndBranchY = this.baseBrancheY + this.myLenght;
    }

    drawBranche(){
        this.myLenght = Math.floor(this.myLenght * 0.7);
        this.myRotation = Math.floor(this.myRotation * 2.5);

        //push();
        stroke(255-color,color,0)
        color = color - 50;
        
        //translate(this.baseBrancheX,this.baseBrancheY)
        //rotate(Math.PI/3);
        //rotate(this.myRotation);
        rect(200,200,50,50)
        console.log(this.baseBrancheX,this.baseBrancheY, this.highEndBranchX, this.highEndBranchY)
        line(this.baseBrancheX,this.baseBrancheY, this.highEndBranchX, this.highEndBranchY)
        //pop();
        if(this.brancheGenerations >= 0){
            console.log("itération numéro : "+(5-this.brancheGenerations))
            this.brancheGenerations--;
            let child = childrenArray[this.brancheGenerations] =  new Branching(this.highEndBranchX,this.highEndBranchY,this.myLenght,this.myRotation,this.brancheGenerations);
            console.log(child)
            child.drawBranche();
        }
    }
} 