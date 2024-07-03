function drawTheHeroBackground() {
  var renderer, scene, camera, ww, wh, particles;

  ww = window.innerWidth,
  wh = window.innerHeight;

  var centerVector = new THREE.Vector3(0, 0, 0);
  var previousTime = 0;

  var getImageData = function(image) {

    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return ctx.getImageData(0, 0, image.width, image.height);
  }

  var drawTheMap = function() {

    var geometry = new THREE.Geometry();
    var material = new THREE.PointsMaterial({
      size: 3,
      color: 0x43454b,
      sizeAttenuation: false
    });
    for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
      for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
        if (imagedata.data[(x * 4 + y * 4 * imagedata.width) + 3] > 128) {

          var vertex = new THREE.Vector3();
          vertex.x = Math.random() * 1000 - 500;
          vertex.y = Math.random() * 1000 - 500;
          vertex.z = -Math.random() * 500;

          vertex.destination = {
            x: x - imagedata.width / 2,
            y: -y + imagedata.height / 2,
            z: 0
          };

          vertex.speed = Math.random() / 200 + 0.015;

          geometry.vertices.push(vertex);
        }
      }
    }
    particles = new THREE.Points(geometry, material);

    scene.add(particles);

    requestAnimationFrame(render);
  };

  var init = function() {
    THREE.ImageUtils.crossOrigin = '';
    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("map"),
      antialias: true
    });
    renderer.setSize(ww, wh);
    renderer.setClearColor(0x000000, 0);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
    camera.position.set(-100, 0, 220);
    camera.lookAt(centerVector);
    scene.add(camera);

    texture = THREE.ImageUtils.loadTexture("data:image/png;base64,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", undefined, function() {
      imagedata = getImageData(texture.image);
      drawTheMap();
    });
    window.addEventListener('resize', onResize, false);

  };



  var onResize = function(){
    ww = window.innerWidth;
    wh = window.innerHeight;
    renderer.setSize(ww, wh);
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
  };

  var render = function(a) {

    requestAnimationFrame(render);

    for (var i = 0, j = particles.geometry.vertices.length; i < j; i++) {
      var particle = particles.geometry.vertices[i];
      particle.x += (particle.destination.x - particle.x) * particle.speed;
      particle.y += (particle.destination.y - particle.y) * particle.speed;
      particle.z += (particle.destination.z - particle.z) * particle.speed;
    }

    if(a-previousTime>100){
      var index = Math.floor(Math.random()*particles.geometry.vertices.length);
      var particle1 = particles.geometry.vertices[index];
      var particle2 = particles.geometry.vertices[particles.geometry.vertices.length-index];
      TweenMax.to(particle, Math.random()*2+1,{x:particle2.x, y:particle2.y, ease:Power2.easeInOut});
      TweenMax.to(particle2, Math.random()*2+1,{x:particle1.x, y:particle1.y, ease:Power2.easeInOut});
      previousTime = a;
    }

    particles.geometry.verticesNeedUpdate = true;
    camera.position.x = Math.sin(a / 5000) * 100;
    camera.lookAt(centerVector);

    renderer.render(scene, camera);
  };

  init();   
}

drawTheHeroBackground();

