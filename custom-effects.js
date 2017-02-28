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
    renderer.setClearColor(0x0a0906);

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


function drawArrow() {
  var color1 = 0x0a0906;
  var color2 = 0xffffff;

  var renderer, scene, camera, ww, wh, particles;

  ww = window.innerWidth,
  wh = window.innerHeight;

  var centerVector = new THREE.Vector3(0, 0, 0);
  var previousTime = 0
    speed = 10
    isMouseDown = false;

  var getImageData = function(image) {

    var canvas = document.createElement("canvas");
    var image = document.createElement("img");
    image.src = imgData;
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
      color: color1,
      sizeAttenuation: false
    });
    for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
      for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
        if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

          var vertex = new THREE.Vector3();
          vertex.x = x - imagedata.width / 2;
          vertex.y = -y + imagedata.height / 2;
          vertex.z = -Math.random()*10;

          vertex.speed = Math.random() / speed + 0.015;

          geometry.vertices.push(vertex);
        }
      }
    }
    particles = new THREE.Points(geometry, material);

    scene.add(particles);

    requestAnimationFrame(render);
  };

  var init = function() {
    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("arrow"),
      antialias: true
    });
    renderer.setSize(ww, wh);
    renderer.setClearColor(color2);

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera( ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000 );
    camera.position.set(7, 0, 4);
    camera.lookAt(centerVector);
    scene.add(camera);
    camera.zoom = 4;
    camera.updateProjectionMatrix();

    imagedata = getImageData();
    drawTheMap();

      window.addEventListener('mousemove', onMousemove, false);
      window.addEventListener('mousedown', onMousedown, false);
      window.addEventListener('mouseup', onMouseup, false);
      window.addEventListener('resize', onResize, false);

  };
  var onResize = function(){
    ww = window.innerWidth;
    wh = window.innerHeight;
    renderer.setSize(ww, wh);
      camera.left    = ww / - 2;
      camera.right   = ww / 2;
      camera.top     = wh / 2;
      camera.bottom  = wh / - 2;
      camera.updateProjectionMatrix();
  };

  var onMouseup = function(){
    isMouseDown = false;
  }
  var onMousedown = function(e){
    isMouseDown = true;
    lastMousePos = {x:e.clientX, y:e.clientY};
  };
  var onMousemove = function(e){
    if(isMouseDown){
      camera.position.x += (e.clientX-lastMousePos.x)/100;
      camera.position.y -= (e.clientY-lastMousePos.y)/100;
      camera.lookAt(centerVector);
      lastMousePos = {x:e.clientX, y:e.clientY};
    }
  };

  var render = function(a) {

    requestAnimationFrame(render);


    particles.geometry.verticesNeedUpdate = true;
    if(!isMouseDown){
      camera.position.x += (0-camera.position.x)*0.06;
      camera.position.y += (0-camera.position.y)*0.06;
      camera.lookAt(centerVector);
    }

    renderer.render(scene, camera);
  };

  var imgData ="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN/aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDg3ZGI1NzgtNmUwYi1hMzQ1LWIyYjQtZWZmZjE4OTNhNTFlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM2Q0Q1NjQ3RkRGMzExRTZBNzE0Q0Q0NDZGOTg2NkI0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2Q0Q1NjQ2RkRGMzExRTZBNzE0Q0Q0NDZGOTg2NkI0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRjZmQ3MTUyLWQ4ZDAtMmM0NC1iOTAwLTc0Y2IyYjZkYjIxYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODdkYjU3OC02ZTBiLWEzNDUtYjJiNC1lZmZmMTg5M2E1MWUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCABIAEgDAREAAhEBAxEB/8QAfQAAAgMBAQEBAAAAAAAAAAAABwgABgkCBQMEAQEAAAAAAAAAAAAAAAAAAAAAEAABAwIFAQQGBA0FAAAAAAABAgMEAAURIRIGBzFBIhMIYXEyUhQVUaGiJIHBQnLCI1Njc6O0FxiCsjOFNxEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AamglBy44222pxxQQ2gFS1qIAAGZJJ6CgGm5/Mlw7t51bD9+RPlIOCmbchUrMdf1jY8H7dBUf80eKfF0fAXrT+1+Hjaf6nV9VBbtseZLh3cLqGGL8iBKWcEs3FCouZ6frHB4P26AltuNuNpcbUFtrAUhaSCCDmCCOooOqCUEoKzyFyFtzYW3Hr7fXtDKO5HjowL0h4jFLTSThio4eoDM5UCL8qc7b35DluNzZCoFi1Yx7LGUQyAOhdOReX6VZfQBQD1cd9DTbq21JaexLThBCV6TgrSTkcDkaD50EoCNxXztvfjyW23CkKn2LVjIsslRLJBPeLRzLK/SnL6QaB6OPeQtub924zfbE9rZX3JEdeAejvAYqadSMcFDH1EZjKgs1By44202pxxQQ2gFS1qOACQMSST2Cgzz515Ul8h73kTUOK+RQFKjWWPmEhkHAuke+8RqPowHZQDmgbThLi3b3Ivl5+UXVPhSW7jMXbbihILsZ4hHeT01JV0WjooenAgFs31sXcOyNxybBfWPBlsHU24nEtPNEnQ80o4akKw/B0OBBFBXqCUBG4J5Ul8eb3jzVuK+RT1JjXqOMSksk4B0J99knUPRiO2g0MbcbcbS42oLbWApC0nEEEYggjsNAM/MluZ3b/Dt+eYWUSZ6EW5lQyP3pYQ5n/B10GfNBKB5fJ6rHh9I925Sh9SDQXXl3iSwckbcVbp4Ee5RwpdruaU4uMOkdD7za8MFp7fWAaBAN47Ov+z9wyrDfYxjT4pz7UOIPsutK/KQsdD+Og8SglBoN5bdzO7g4dsLz6yuTAQu3PKOZ+6rKG8/4OigqXnR8X+1EDR7PzqP4v5vw0n9LCgSaglA8nk7/APIP+ylf7W6A4UA95m4csfJW3jFf0xb3EClWq6YYqbWc/DcwzU0v8odnUZ0CB7p2vfNrX2XY75FVEuMNel1pXQjqlaFdFIUM0qHUUHk0Ds+S/wAX+1E/X7PzmR4f5vw0b9LGgtvmS2w7uHh2/MMIK5UBCLiykZn7qoLc/k66DPmglA5vln3ZYdp8BSb5fZSYlui3GUVrVmpSilvS22nqpajklIoPQ4h50jctXvdW1rrFTChSY6lWiOlWDqoah4L6VrB/5e+lfd6YnD2caBSd82rce092XXbc+ZIU/bZCmdZcWA437TTgGPRxspUPXQVt1555Wp1xTisMNSyVHD8NBxQaDeW3bDu3uHbCw+golT0LuLyTkfvSytv+TooCY42262ptxIW2sFK0KGIKSMCCD2Ggzz524rl8eb3kQkNq+RT1Kk2WQcSksk5tFXvsk6T6MD20A5oP3P3y7P2iLZnZTirXDccfjQ8cG0uvYa3NI6qISBieyg9XjveUvZm9bRuSNiTb30rfbTkXGFdx5v8A1tqUKAx+b5/Yt1vViv8AYrrGlXaXFCJ8VhWtRjlIdjPL04pSopWRgo6iNOWAoF5oCPwTxXL5D3vHhrbV8igKTJvUgZAMg4hoH33iNI9GJ7KDQttttptLbaQhtACUISMAEgYAADsFB1QVnkLj3bm/duPWK+s62V9+NJRgHo7wGCXWlHHBQx9RGRoEX5U4K3vx5LcXNjmdYirCPeoySWSCe6HRmWV+hWX0E0A5oJQSgI3FfBW9+Q5ba4UcwbEFYSL1JSQyAD3g0Mi8v0Jy+kigejj3j3bmwtuM2KxM6GUd+TJXgXpDxACnXVDDFRw9QGQoLNQSglBy42262pt1IW2sFK0KAKSDkQQeooBnufy28O7hdW+9YkQJSzip+3LVFzP7pB8H7FBUv8LuKfF1/ML1p/Z/ERtP9Nq+ugtu2PLbw7t51D7NiRPlIOKX7itUrMfulnwfsUBMbbbabS20kIbQAlCEgBIAyAAHQUHVBKD/2Q=="
  init();var color1 = 0x000000;
  var color2 = 0xffffff;

  var renderer, scene, camera, ww, wh, particles;

  ww = window.innerWidth,
  wh = window.innerHeight;

  var centerVector = new THREE.Vector3(0, 0, 0);
  var previousTime = 0
    speed = 10
    isMouseDown = false;

  var getImageData = function(image) {

    var canvas = document.createElement("canvas");
    var image = document.createElement("img");
    image.src = imgData;
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
      color: color1,
      sizeAttenuation: false
    });
    for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
      for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
        if (imagedata.data[(x * 4 + y * 4 * imagedata.width)] < 128) {

          var vertex = new THREE.Vector3();
          vertex.x = x - imagedata.width / 2;
          vertex.y = -y + imagedata.height / 2;
          vertex.z = -Math.random()*10;

          vertex.speed = Math.random() / speed + 0.015;

          geometry.vertices.push(vertex);
        }
      }
    }
    particles = new THREE.Points(geometry, material);

    scene.add(particles);

    requestAnimationFrame(render);
  };

  var init = function() {
    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("map"),
      antialias: true
    });
    renderer.setSize(ww, wh);
    renderer.setClearColor(color2);

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera( ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000 );
    camera.position.set(7, 0, 4);
    camera.lookAt(centerVector);
    scene.add(camera);
    camera.zoom = 4;
    camera.updateProjectionMatrix();

    imagedata = getImageData();
    drawTheMap();

      window.addEventListener('mousemove', onMousemove, false);
      window.addEventListener('mousedown', onMousedown, false);
      window.addEventListener('mouseup', onMouseup, false);
      window.addEventListener('resize', onResize, false);

  };
  var onResize = function(){
    ww = window.innerWidth;
    wh = window.innerHeight;
    renderer.setSize(ww, wh);
      camera.left    = ww / - 2;
      camera.right   = ww / 2;
      camera.top     = wh / 2;
      camera.bottom  = wh / - 2;
      camera.updateProjectionMatrix();
  };

  var onMouseup = function(){
    isMouseDown = false;
  }
  var onMousedown = function(e){
    isMouseDown = true;
    lastMousePos = {x:e.clientX, y:e.clientY};
  };
  var onMousemove = function(e){
    if(isMouseDown){
      camera.position.x += (e.clientX-lastMousePos.x)/100;
      camera.position.y -= (e.clientY-lastMousePos.y)/100;
      camera.lookAt(centerVector);
      lastMousePos = {x:e.clientX, y:e.clientY};
    }
  };

  var render = function(a) {

    requestAnimationFrame(render);


    particles.geometry.verticesNeedUpdate = true;
    if(!isMouseDown){
      camera.position.x += (0-camera.position.x)*0.06;
      camera.position.y += (0-camera.position.y)*0.06;
      camera.lookAt(centerVector);
    }

    renderer.render(scene, camera);
  };

  var imgData ="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN/aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDg3ZGI1NzgtNmUwYi1hMzQ1LWIyYjQtZWZmZjE4OTNhNTFlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM2Q0Q1NjQ3RkRGMzExRTZBNzE0Q0Q0NDZGOTg2NkI0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2Q0Q1NjQ2RkRGMzExRTZBNzE0Q0Q0NDZGOTg2NkI0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRjZmQ3MTUyLWQ4ZDAtMmM0NC1iOTAwLTc0Y2IyYjZkYjIxYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0ODdkYjU3OC02ZTBiLWEzNDUtYjJiNC1lZmZmMTg5M2E1MWUiLz4gPC9yZGY6RGVzY3JpcHRpb24+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"
  init();
}
drawArrow();





