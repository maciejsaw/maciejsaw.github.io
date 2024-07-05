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
      color: 0xf0f0f0,
      sizeAttenuation: true
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
      antialias: true,
      alpha: true
    });
    renderer.setSize(ww, wh);
    renderer.setClearColor(0x000000, 0);

    scene = new THREE.Scene();
    scene.background = null;

    camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
    camera.position.set(-100, 0, 200);
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
    camera.position.x = Math.sin(a / 5000) * 60;
    camera.lookAt(centerVector);

    renderer.render(scene, camera);
  };

  init();   
}

drawTheHeroBackground();

