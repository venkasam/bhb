class Sling{
constructor(bodyA,bodyB){
 var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0,
lenght:800
}
this.sling=Matter.Constraint.create(options)
World.add(world,this.sling)
this.sling.bodyA=bodyA
this.sling.bodyB=bodyB



}
display(){
    pop()
this.sling.bodyA.position
this.sling.bodyB.position
push()








}

}