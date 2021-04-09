    //renaming or referencing
    
    const Engine= Matter.Engine;
    const World=Matter.World;
    const Bodies= Matter.Bodies;
    
    var myEngine, world, ground, ball;

    function setup() {
      createCanvas(400,400);
    
      myEngine= Engine.create();
      world= myEngine.world;

      var options={
        isStatic:true
      }
      
      ground= Bodies.rectangle(200,370,400,30, options);
      World.add(world,ground);

      console.log(ground);
      var ball_options={
       restitution:2
     }
      ball = Bodies.circle(200,100,20,ball_options);
      World.add(world,ball);

    
    }

    function draw() {
      background(0); 
      Engine.update(myEngine); 
      rectMode(CENTER);
      ellipseMode(RADIUS)




      rect(ground.position.x, ground.position.y,400,30);
        ellipse(ball.position.x,ball.position.y,20,20);
    }