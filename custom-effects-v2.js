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

          vertex.speed = Math.random() / 200 + 0.010;

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
    camera.position.set(-100, 0, 220);
    camera.lookAt(centerVector);
    scene.add(camera);

    texture = THREE.ImageUtils.loadTexture("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAADwCAMAAADmQOfyAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMAIN/vEIBAv59gcI/PMJCvUIY7ICAAAAnxSURBVHja7J1tb9swDIRlx/K7E/v//9kN2KZpw66ycGLBrPd8DHBoYdYxj0er4WszXokYcqb0+WMAghUI+iSoobsSc8iZr0RXLxD3ihkZQRm+lg8kiEH8dUm2W9fwQIIpF1RzlP+o+i5knEjQ/xboRv5JvBJjyOge6fMp5DyvxAEEr3AHVJqQs1yJpV4gfjBkxYTVJwQQm1oOuUD8Yi1frh0JRiCYQh0d+lnxSpxAMCHBEUSxLz5RI70DwQIEZTaig8YCwTXSZYHsky9eWV8MirmZ2qgZNMTQDb2AYJR9AuC++IlupEfTG2m54YaGW22aui4A10hjgeyTL4bewkax7X2HahnLgj2IBOiLwRemiU3tevCwiLUPi01d1yeNsKtt1Cz79BH/hY1qF0DMGloXeJIhEA4wMHwAAR85ghhhEwEGMbSWfXpvG9UsgFhlnwi3ygYYGD6AyAXquojeiwswNLT2hckm0Ofbp2cQ9ZtAfICRYxNA7LJP9TZqtAkwcBswaGj9Me+6CST7RMFvAp02AUazAAL/GqLAXmik2QCDDCA0tH63EbbsEw1vozqD6psEEId2fsqgr0qDAIMNIMqPDEGMsKkAQzs/vjC0UTYBRCf7hCDMKxFgUAGEdn5C8DDCxr5LOz++MLZRfACB+jvdyIAKb0MGGDYBxCL7xPde7QIMDa19YbIJRNVSOz+twX0xH2DwAQTcyxd1jMSbyXgaVQ4gNLQu4cRGYYHsky/AhjwZYLQOICbt/BCADXkywNgaBBAaWn/H/whb9skPq4WNYgMIvJcvIFablLh69QEEXhJS1+VyhN0P2vnxhYmNuhNA6JhUe/A9xAcYV3UAoWNSbcCtFB9gaOfHGQY2qrpp0zGpEAdHq55A0CaAiOq6jHovPsDQ0NohjW0UU0vt/BiAriYfYPABxCn7xII25PkAI7HqmFRPNNwEkn3yCm6kieqv1QEE3MsXLTitv2RxAKGhdQnfI2zZJ19Q/6OgKKgPIF4aWv+Bs6NV/xVgLDom1QWglSIDDO38+MLuhYr6t5Sj7NM39s5gpYEgCKLEqJuDIv7/z3p0YOiwS3XDC7x3z0lMurp6qtrJPaLSwDhtQBiT+gTGCrs2MLz5YTEio4xJZTFTslwbEMakXoFcsvxwac1i5BLornxisc7FXQaG1cg0jvZoVZfWOPovgZRPPLpLlq1GBrJF/IQGxgkDwqnrJOwVtvIJRm/JstXITNZv0tTA+OdmTCqKiRX2j/KJxUy0amFAWI3cTlBanhoYxqSymClZdmnNYuQSyJhUFsVhT2pg7AaEMakBE9GquYHh0prFyCWQ8onF90jJstXILIqIn8zAcGnNYiZaVfnEYp2L2wwMq5FhBB0Fpe76cupiMbHCVj7RGChZthqZxvmkh+vRqh9WI0NoL1lWPvHollFWIxPZ/sUyA8OYVCTrKBUbGMonJp0yyphUKvtfIDcw7sakskheJtcGhktrFiOXQMonFsVhT2hgePPDYqRk2aU1jJFLIOUTi8+RkmVjUlkUg3RmYDh1sZiJVlU+sRgpWbYaGUbh92YGhtXILIpRKjQwlE8sJmTUw6U1i13P5gbGr/IJRvAyufqA8onGwCWQ8gnH9kI8NTCMSQWyzsUNBoZLayLNl0DKJyTBy+T9A8onJuthT2hgOHVhabwEUj5RWebl47KB4Wvkl+D21tZk/67HCGX5Jc1X2JaqIlnW173Rqj5W5XBUtSG5gSEQ/to7o9y2gSCGxi4UO7HspPe/bIMWLjax6N3JbCSu8d5nAf9EgMqZochyT9UlWpW1ph+F6urvBAILpoUrcPKAwRhlxu73AlPygEFQiBfF+DRnhDQ1X76UEUy7ftGqfH3uRLnRCkaraiGNJdeKz9tJLaRZYY9LGcFUifgRBwzGKHtuIpjmTEcBKW2O3K4sn1lhPxrl+nlBFzNGPQBlBJPSxfWOAkK8rClV1w9Eq6K9DFjSRoxRj4WIYOpYskwt9ubo+I+wkFZzF06gjdGCCSfQw3ATwVQ8MaGL4wcMnECbUW86/v6XyW84gXyQnXs4gR4GEcFUSO7vdhQccAKZIPdap+s/S2NPXUhTGeRBfXzCCTQ6xbOcxMNvMfYwRjmzL8YnobrmqLHnQqOMFS1Nx6ywx0Z+XTqVD/+VMWpkJvUm3ov2+mzJMk6gAOstrXd9nUCMUWn6j0+Xf8+GMWpU5F98LiR3JeInfMDACZSk/9L6pSqlwgcMKqJy9B+fcAKNTaGg5/pjeO1XsswYtR6n0F4qHvEz4wTanMbx6QM+qBiWo1han6Xk1hE/9QMGY9RapJZVL9oJFD5gkJCcoPf4VLLHCTQak3iWO32xKJmJVvWnPEC0Se5f0gnUesCg/X5ljuHvEnECjUZ5gFCSu2L4OjFGmTPXPT+TUl3ibR49YPBBRZr80lr9oFvJMtqrO/kPT4lWHYry766+UlY/kCNW/IBBd3aO/NJa/aBJShGtujnHTKwLTqAhODd47HYyGEjrYt1RQLRqKw5L631zxA/RqmFcxqcXnEBDUKrj6FfKh3Zjz0y06oboA0RAch+6RaviBLpiMz7hBBqChgPEJIOBYhE/jFErog4QmfepjviR/xsQrXoPq/HpyoUVtiuB/XLVJMQY5UnTASJgEop9mUzJ8h0sltZff0DJsinhXHltEqJk2ZWWA0QgGKhAGnsoWW7DaGl9ZU/JsivyWYYtHTiBXGk5QESDgRqMPZQsJ8jHpOYlt9ZeRKs24z4+HXECWRE4QASCgc6ZjgLGqA6EDxBhmZbrKNjhBPrAfHza4wSyInCACAYDaSHNGLUO+QNEXabNRKt6kFHQ+gc4gawIHCACwUCULDuROUBok1CPLcsJJ9CTm+en/AEly1aEn+VrSzAQJctOZA4QR6nRe52x3ilZtl1aP4WNPZQsf8F9fPqri4hW9SF1gKho9Lqxh5LlO1jEpFZkWsEu01FAtKr5+HRlwgm0CfkDRN2Xr3VxXUgzRiWIHCDykrse8UO06gKDjU8f0A62EfkDhNboi5wpWV6f/AGirrqkQz5qEyVa1c7zU8AKezvyBwjty1dQsrw2+QOEfuHGHaFEq37Ge2ktt1D5L5MpWV49JrXmy2eMsiB1gJAavfNX7mdKlkdYWjempVOy/B/H8WlJHTFGWZA8QGiNns+QmilZ7sRptaW1ziVp7CggWnWY8Qkn0BrkDhCHoElI80bJ8j08YlIrMk3Sv6PgiBPIbnzCCbQa+QOE1ugapYspWe5J7gCRf2HmOgqIVnX2/CxzIFpVYBGTGvH8aJ4pWf5h8geI/Dri0vBqIFrVYWkdHJ9yXyZTstxrfMo3EzBGWZA6QCiNvmoL94wTyHZpHV5h7ylZNhqfLk+L4ARakdQXEO8Bk1AV5ZDvfcD4A3KHXlLwQLLiAAAAAElFTkSuQmCC", undefined, function() {
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
    camera.position.x = Math.sin(a / 5000) * -100;
    camera.lookAt(centerVector);

    renderer.render(scene, camera);
  };

  init();   
}

drawTheHeroBackground();

