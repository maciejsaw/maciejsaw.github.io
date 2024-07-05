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

    texture = THREE.ImageUtils.loadTexture("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsQAAAGGCAMAAABL82dLAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMA3yCgYO8QgEC/cJAwz1Cvj/Th+ngAABxMSURBVHja7JvbcoMwDERtJxhCIJD//9k+dgC3oyraRKir12jC7VhehDY9t5GOcdlmXBspgn9J123KJRkE4kTLNiMr/mV57mJNrRj3abdm2rRP62orreZ93pAgcTjOVfA0Nk98h4Xghqfy3Ef5/pEQAyAu3fGOt2Lep43NtLsMh8cRB0ToqTNeEoQYCnHqZTV2ENbYTlZjb/u0PtlHOVD3aOYtspPplbtRLoQYDHHNptiN+jVhHqutSujU9ZoQIyFub+3V9hnKdMeaXojPq4TflgQhBkAsqrFOdMcLcVFe1yxbErnIJMxAiN8A8WDQUoCtCX1chTtM1tZrqYQhxG+AON2x2rH7AxWx22uEGAKxfGvH645ck2GMSupykW1DD6mEIcTmEDuSu8g2m14ljO07pK3XlRADIDbdetf2o1S+KnUlacKFSvjxPhJiBMT6rV1fY0fou51+gVTt6u2lEoYQgyD+B222WXg92q/kRShhCDEIYnnl0r/fKMeK5sBDE4QYALGuxmo/701C3fHZ9trddEnkQohhEDtusylGKCRHX9pHV6sEqYQhxDiI9Vu7XncMsgGyNezQBCHGQ5xuyonhxVZ3FPftNfEXSEKMhNjRpwxAm23SqoTJ9EKWRIjxEEd1KjkdmiDEAIiVLQW8U6mGba8RYlOIHX3KOG7X8TxJhBgFcUynkktPEiFGQezWqXSJ2l4jxKYQhx2h8OlJIsQoiCM6lZx6kggxCuKITiXf7TVCbAqx8xGKXD14korek0SI0RCHbbO59SQRYhzEeKeSfj7B4dCEXDgT4rdBLKyxp3Eq+fUkEWJziKO22fx6kggxCuJoTiXnQxOEGAFxNKeSY08SITaH+Bxttq7G8SQRYhTEsZxK7ocmCDEC4lhOJdeeJEJsDvHH22xS3RHGk0SI0RDjnUpq3RFpaIIQIyCO5FQ6R3uNEJtCHGyEojHQ68qTRIhREAdyKnn3JBFiFMRxnEpnaa8R4i/27eC0oSiGgqhN8N+EkP67TQuOeeLPiOnhLMRFcxTxrhcKfJMU4inEa0olfpMU4inEa0olzbwW4qOIPS8Uz2tBkxTi44h3zWyGJinEU4iXlEqGJinEE4gRLxQflErvXAnAJinExxGvmtkUTVKIpxCvKJU8TxMhnkC8olRyNEkhPo5YN7O9LnmTFOIpxAtKJdPTRIgnEC8olSxNUoiPIybNbO/eHe4mKcRTiP2lkuppIsQTiPWlkm5eC/FRxBteKERNUoinENtLJVGTFOIpxPJSSTivhfgo4gUvFKYmKcS3I0aWSqomKcS3I0aWSsZ5LcRHEStfKJ6XtUkK8f2IeTObrEkKMQAxrlSSNUkhJiCGlUq2JinEBMSwmW2gSfpo6AixCjGqVFI+TYT4dsSoUknXJIWYgRgys70uY5MUYgZiTqkkfZoIMQAxplQSNkkhpiCGlEpPRpP09QixEDGlVJI+TYQYgRhSKiHmte9HiJWIKS8Uk03S77tNUoiliCGlkq9JCjEH8elS6ef/pZJ6XgsxATHlhcLWJIWYhBhSKtmapBCTEFNKJee8FmIGYsgLhaxJCjEKMWtmu6dJeoT4j707Ok4rioIgKCSBQLZcdv7JOgUMptRbTA79AVtn3h1HjJRKW01SiDHESKn0bU3S10uI5xE7M9tOkxRiDTFSKi01SSHWEP/nUul0a6n0Y6dJCjGHGJnZjqeZJinEHGKnVFo6mgixhZgplVaapBCDiJFS6bLSJIUYRKyUSueho4kQa4iv/vjJo99U2miSQiwiVk4oPjaapBCTiK+eFB79ptJEkxRiErFSKr0tzWshxhArJxTnhSYpxChipFS6LDRJIUYRK6XS+868FmIOMXJCcTj5TVKIVcTWzEY3SSFmEV/9TPOj31Tim6QQu4iRUunCN0khdhE7MxveJIUYRnztSeOj31TSm6QQw4iVUumAN0khlhEjM5veJIVYRqyUSgNHEyFmESulkt0khdhGjJRKdpMUYhvxy5tRKvFHEyGGESOlEt0khRhHrJxQyE1SiHXESKkkN0kh1hErpZI/r4XYRaycULhNUoh9xEip5DZJIfYRK6WSPq+FWEbMnFCgTVKIBxC/fCIzG9okhXgBMVIq/Xk1m6QQTyB2SiWxSQrxBGJlZjuTTVKINxArpRLZJIV4A7FSKn2KTVKIRxAjM9vxBDZJIR5BrJRKv9GjiRAvIFZKpVevSQrxDGKkVLp4TVKIZxArpdKZPJoI8QZipFQ6nLQmKcQ7iJVS6UNrkkI8hBgplY4nrEkK8RBipVR6M+e1EE8gpk4onCYpxFOIkVLpYjVJIZ5CrJRK7+K8FuIRxMgJxeEkNUkh3kKslEofUpMU4jHESKl0lJqkEK8hRkolqUkK8RpiZWaDmqQQzyFGSiWoSQrxHGKlVHKapBDvIUZmNqdJCvEeYqVU0ua1EC8hVkolpUkK8SJipFRSmqQQLyJWSiXoaCLEc4iRUglpkkI8iVgplYwmKcSbiJFSyTmaCPEeYqVUkua1EK8hVk4ohCYpxKuIpVLpniYpxE+MGCqVkHktxHuIkROK4+nbm6QQzyJmSiXmX12I9xArpdIrMq+FeBExUipd7mqSQvzciJWZ7XxPkxTiJ0eMlEpfdzVJIX5uxA8olW773XFPkxTiJ0cMzmz/3iSF+LkRP7xU+nXlm0rCvBbiUcRKqfQTmNdCvIoYKZUutzZJIQ4xUyqdbz6aCPFf9u4oN2EYiKKogkhQaT/Y/2r72RJbysxAxLV8vYJAjxDzmFeLGNJUWrZyJ0nE0yOmNJVu5U6SiEUMaSqt28enOhEPi/iEplLte0cpXhOxiEkrFNdSJ0nEIgY1ldZKvCZiEZ/TVKq18kvxmohFjFqhqC1NiFjEpKZSZaoTsYhRTaVKvCZiEbOaSvlOkohFTIvZ8lOdiEX8clPp+p61IkC8JuLREVOaSvmlCRGLmBmzJeI1EYuY1lTKxmsiFjGvqZSL10QsYmBTKfcnFbGIiU2lZLwmYhHzmkrZTpKIRfx3LgtjhSIXTYhYxM0lA5Wm0uOEtaLYEbGI989LaSrFj4hFvH/VjBWKTC9JxCLeva2MptJX/LFFLOJmtYfRVAr/2iFiEXemMMQKRXy2E7GI23ht6phNxCMj/veSEU2l1aV4Eb8QrzGaStHZTsQi3ie6k8dsIh4X8fNbymgqRZuiIhZxzyOjqXSPPbuIRfz0zWD6mE3EoyJup7qzm0rl7x3tEbGIu3q+IU2ln8DDi1jE/UsGIE2lQMwmYhH3UwZMUykSs4lYxJ3f1DhNpSUy24l4esSX9uMPdqfSwRGxiB/9D8ltmbKpJOIREXfu8ITdqXRwRCziZoK7wf7Z6+FsJ+LZEbdT3YfvVLqnYzYR/7J3RsuVgkAQDSAKatz4/z+7VfuQql227hy4mcDNwLOlKA1M99COdRCX8tpwNZUeO5UmiM2DuDw61j2VUcvtJoiNg7iU1/yANZUEmW2C2DaIC1YXRqyp9NCpNEFsHMS+QJUfsqbSQ243QWwbxIV2uw0R7tbJbBPEpkFcbu+j1lR66FSaILYM4hJ5w9ZUeuRUmiA2DOICn2GYE8NVMtsEsV0Q/+fQxDg1lSqcShPEhkEcWJGB5TblVJogfiUQn6yGp3e3KafSBPErgbhCT7DkVJogfiEQV2XPDDmVbIF4fWkQe+rbsPaz1386t8rYAHfxo4IYIPQsLpGmQnz7pvZRc8rSUk0lJ8JvA1PLySC+1EP+LMhADKFJ7qfvU5fb3xVne03VVFIB8SmAQ2Hky8+cAEJfCsQBSgT2fvYqw28HMwssgl59D47Cq4DtgF1ydjgj0OLFMONUykL/QTALOZV2Oev1FsJ7MCHZ66aqURpAXhMkhZd3KglrKAxmDzBHo/Qk3sh+F0k/5d31GAXENJNs8WevwhoKglkacrwXvEB1lDOg4nsbzpciVavfvKtZB43VVArCsLJgdgGLRNAc+hKgB5hIl3ybBU1Z/RZq5DVrNZUE7QHGmicA+q7M7CJY6YskFiAJ4JuBpudJKkmauZpKYFUBmQzC2pKW9MJvfxbzEWgcYPfSb+81Yau5mkogvnOAkQHWtkbVBewAueALbAYA5xmz7+6HJpIJp9IlPI2xobcMAJpVcwSuXkTJYLGukCXL1l1e22w4lUD26QCM6QCsbdPcY9JdP40OMqlJxKHdtlbB19twKoFzXTsA6AI26gRMCV/G3hMJerhQxyMO3vQPTSxWnEoybbtAGHCSw6tRb3b6u6WTWKjjEQdv+p4kVyUpvLJTqaBtIkBWInAR7rXpbbiBiHyNKZmESUsHT1KJGws1lYC4T14ugy4ntUDJu6f7yN91x6Ojx+p4OsRETaUg71SOrLIEn1FrKd6QAgWeTpTkg4X23eW1P+CyUVMJ0LYAOo1SGZtSPtKj73qBLhKCmqF61MGTVM5RGzWVAG3bwUqwEu6xFuRBifl4chVRktEBDNX28dSf343UVAK0LRFml8nRiKwSKC1sbjgCULB4MNo9grz2OYA/3am0ymOytoQKCQo0Chsue/YOPsbVXWELrWJA/1QGiTuUyO8iX3K0pzKyQkAR2KcPNzECAscrUdi6e5L+7vn5051KQN4PoC8slZHuL8+qb+zQ7ErQcJBr0CwcRF777PQPdyoBLrOToPhA6MzMMsPbBe0LC9kpMgBo5py7myfJ+SFSGUrcrk1VOlHM2fZed3yKGfnYyHwSWK13Ba+gmiep7LihmkoefKdI4t2I3ivcJIvaPsx3QKPjyKp+ogMYei08Ja+ZqqkU5Zf7RXq8oS++RoLidgw7j/BwgIti63m9Hp6kcghN1VT6Td65LrkNwlDYgLn5Gr//y3baTDvt4uAPXLK2ot/eLDZHQkg6EqiyHRLzQz6TY35ePYonRamQGp3LCrjEBm3Kt3KSzHXcXaATTW52M8CAR5/JA6V5il2q7nSWktI7Qx4LRB9m4lldo2jii4aKZir1wIAqApUhUU7eaMnXxNawTddoY8yGKbHt73UcTThoK5mppMG+jETZHaxSW7YdWXXhqiPuq5ButCKomcnawaobc5JotbHwhkAgIUcobLxKbdzDn+orXAmwLFDlBnKOOB1yqaKJL2osmalkjl/NWaJ1jpZ8xG1PjD5nhrd4rsqN2Kn58O53CU7SC2AKZiqRhNwKi/nAY4kWl8LYPb8yDnIEplsKoEEfm71LcJL2rYbkmUrJzpCsLYNLpAFeDmPtbQbD6MTVxLk0NemQb7/V5dIhsmcq2fJJq9bhu2hhL+h1yRnh8OU/gGTQADaanjXm0FrfI7wmkKlkCCkHaVPA0Jrs9kqUWfaPucVk2qBPWF00I/3XpEOuw0n6W/wnNHvtwVICcxRi+pUAilOZH31wf32uqX8871QAw/jE5Ulzng65Cicp0U/pM5UcUBRn60zxNlBzk4pV8ZeoBO88cT2cr3Lj4fIbhdfkMZXm8mLwbYSGz2qKYi4cw9pCo4Zs2nwYjLwQJ+m3TB/S7BVYGNr6xFkeUXHr/8FwdJlbPsN7JDZNH+nxpThJ/34C+TOVQEIO1/d4FsdJH+bCrwkePhwQHoajfb1VeE0cUwkk5Fh9z1OHeZXMctqlsKHApm2KHeCGeV1NxOPsME+HfMRMJZByxfU9YSup59emmSvRaQs3TKPH9AHSL8dJ2q8jEstUQv7ECJVp3Yqi2706YYaX09wlXuU2Hhww1+Mk7QY6xDKVkoQc0k0Pfgz48fXGeHQ45nK+3LhT+W90QU7SXqBDMFMJlXBFaIoXcns4D+OoC17pfLlxOHilK3KSUjPpBDOVUDFtoH6NwSGEehjHAO5HCHaaPWey3sRNiib6511BJlOJFPhwU+wUQnE9jK0J4I4PPfOIAOG2vDdxC07SUyXEzlQiDXy4KQ41NDpNr3jRuxoCngbGD53M6VN34SRp2Q2BWIGPwvWPdWTQaTzEsfKBgIH/e3W+uOIuRRPmj0YKZSqhAp8eXzFjLaVZ96t67UUMupYIbYC61bcQugUn6QlByTOVPFouSKkn2lmueXrxa/znje1s/KIxFqhDzHML5g3eRDjBSeLOgOSZSoneOlylz7kbsy5a0hR+yVT0V24GdW7gyKUthL7/VleUDpE9U4kV+PD0YSgrmmyQtgUfa4Fe6COzl7cKr3WyZyotG2uTjf2aYRfF9eFV3pCCV+YrqJMqA4ibcJLWK6QyWpdQOFvXJjvy+1X7ttSPsn/pMycFrpm/CSfp15uJn6nERhpOyMylhwx3jOtFxzIMa5qYVq/xdbvwmuyZSo5WN/Fe72bjHavOy2BB1XdijICF7TP7eBNOktLXSGU0L6GIyWrZMmYHtgb0SGlihjdT4HssxYb4Lpykp934gJlKga12KIn/mu1NxniwpRju6bN95rvcMbwme6ZSaorpCCSA4qbBthC3UgxrRZeksjnaW3CSluukMlrf7QJTkgkRkFJ9r/cpeAUcJyTP9Ibav/4qt+Ek7b+YzIZA6quiU1zOwMq0grHz9r8QoVXVR7kJJ+nFi0lkKg1M050CbjFAMYUxh3C6ep6J0eWG+D6cpBfbIpGp5CzzV0IRYLrFtoJxMIDMzyo7fLEhvhUnKRGtpDYE8nBrR1CeQLsfxL5W5YaIe1ul64HY9Bnrd8eiiS/2WuJMJWdxi5Qiz0av2UJ3U6GK4WG3jKwuZ/rw6rXNAexOnKRdlZA5Uyk9snBnVuX4D3MccwTzr2L48yYHsFtxkr7ILLgh0I4u4ZvR7OD8z32xaz+ha9Cw2iMOU6giQqeiM2btrkUTf7kwUmcq4bRgbNFdQq1DcDnKRwbAtKmKB/4zQc7tOEkJ2OTOVFLwpHUKoLiqY5WNxvd/8zmcnpbem9mW9bbiZc5TzZXrkpykokCH3JlK2F+ZtvY9UpRSaisT40AogK1avzLEF7jVmfP2WvJMpQgODsDLB8a4gagAwln0/DAZSAgMr0liKgUcAh5riBt+ayfWO4AZ+vX6HHJuyUn6Z4dlz1QyeJtnhuJ6n6Lek+AY1gBgX23KTTlJf9tr4TOVtKUBEK0witvDOAYUecHX4scrSIgLr1mJTCWfqibCO19MiO+HcOeLsiJLRjvvy0naD3RIZCo5BVQzWTDIejSzxpE2aOMkUnWdW51tbK9lMpUCt65DNW1DG/W/rnOaWj1eNG+2jwmvaaFMpZUfu76efOT6+TyE4+Bqm1ttaz0B766cpJ1Ah1SmUqpLVheh2EKlmow6Z4QDDGWVuT3aZpBzTU7SuUCHyJlKQwEDaTzX6SfU4tiOgTqfFs41ToGTnnTCOEnPF5M5UylmspEsAbTyBYUxFnsRPpRGY7lt9Zn4vzBO0iy52au2BcbInGflu4UDeR4XV95Vha+uz9fMi+IkadENgYaSnTSAbQwkDCbarAcxm2FyZb+pSjGsbe5aK6to4qkScmcqxRIncgSz5qC40HsTo7J/F7PNq/H9pMt/7LGVdjV0Ku9MSOIkPVVZ8EwlbQtCUp1v0q9Kaw2AS+gkPB2zHljtG3OS0kDHt7u7rRsC9VXdSDgnv734irHmPtNSRFrRxNNey56pNBbtp9+AMX6nhPmVXuGrQPq4KE7Sc2dkz1TaI+ZPLBrLg21c6r1hft2cDsLJojhJ5hKpjDZhtvyW6hpCs3fdm2WwNWx+rY7aWwkrmvhPIYUrM5W6obizzjV8ihBRc6t0/Tm7LS28lrgwzWcqrd8zU8mU3exdcrVvNTeJpzd4oMHNhw6xIE6S0ldJZTSfqaRA7Rek0MWpe4doA5pbEdSkRkEUJ+lprz9ippK2hdZpURkSXOhai/a2srlVZ/L99USH12TPVOp60pmAt8BsC+PJADo/O0NS3AjjJHXXSWU0KKEAm+vhX7S/4nHmXtTnXlMaJ+mnfMpMpeQDgO1dVBbGjyycmnQr3uyAVDXv/EsOr51vfnJhptILao8/RQNd60IV9b1e5wlgOLst8jhJXXedVEbLu119e4le8YbE5y9zR1y9EUIrDxtpnKRE5DKVnodCg+aB6hH+x9qGeFhEH1DQKx+YkMhJog4P9DuuzFR61V7CnG8eqMziTq3Lz4BMypCVNxgiOUndhWysb1/E3YPUQSJ6rGXLne8Yz+vy3QpCykI5SR8VZus6D/gRqegZ0j4fiy4ifyQABrFhvMR022QVTbw4QoUzlUCTlPMNiW18DMEdwXfqH6uqbPVaO87t28NrLThJqQhnKmVQPB1XwqmtQOwcH74PQet/WErT0g8PM6utREYH+EsIw2I5SZ8VZntFBrUDiIBt1aKI11BPUu0tCch9QtHE0R9JYCpliPm+UQvM9n0yO4/YS7I5Sd3/HdN8ZaZSDsXGtWiB2R7CzkAMfzMnSbcJdHxmmO1cqx89vAvGdtQseQYwfIFb3XuKJj6DqZTxi2kPzP4dMLaQz7fYBhhu4WY24CSl8ilMpYwbie/zobVzHBdKryh6D9GcpO5CqQzgdzRDMf86+kd7Z4PkKAhEYZF/BIn3v+zupmamYpHZtCLS2v0ukNJ6aaHp79GwHGsboZZKUA8TYJL+Cg2pFBu02ZoEVsUmmzyd3QCV0kAPU2yv3ZxU+lKoD6xyB/tYe2W2x6oADEODSSI2QlHsiQCDCq19rKUy27Je4YkUNJgkKKk03oJU+sSCPsymtxTKNOKKxHh4GYYeoBNtr92cVCpcXB2R4vYbWfupGBiClmH4QN4VmKR9jQ7KIxTFEG51lGtU01YnCxmcqQgZhJ469mWS1BlMEkFS6Uf2YCY/zjYDrKyTnFQ0lSGDwNdEiEnCRCrpalKppk9Vj1ia6JSdsk9CvD6FED5LG+ZoqlMp4AeO3ZmkuSWTRH6EovhKNouHH2Guha8k2mLNwA4pRiaJYpttNQZWStgBk4zV20MGaTFJmEgl1ZZUKv+BSBKJgZNHcCK0e3vtHCaJLqn0+tXCb+Pi7g5Yd5gak0SzzfYNbeC2cbGfg3XWCA9NkCGVXqQ0Yhs7vzNk8CJMkqhjkoiTSuvbBXDa2Ki0mySlyCRRbbOVv1hKqKZugXck4GW4+66u19BEe1JpREUqva0kaK4VdQ+9H+jv3l47h0lCTSq5SlKp/ki3lFdDU5WB2/3L8LuBXtxMEkFSqWhTNE8khhdhBGX4gkwSRVJpK8wsQnP3GJuqQwa5vUaKVIJs8NbyLXd5JvgjkH7KTBLVEYqteVUpxKGBon2+aiQriasySSRJJQA6AUiIr5VxD3FYvBW318iRSoWUANNxBxn4tQTjOXe5KJNEeISitDE8Ib5C4/z4pkEwLYYvzSSdQioJvG22H1mxgCWyneMu/z4j43Fa+MpMElFS6YAMzJTtDEM/x6isTP+eDrGFr8wk0R6hOCADM3n5vO0gjuPKEuPonhce+K/oeOQWvjaTxG22tY0RaMOBd/+hCYTtNUqk0lu5vDQUuqbaXZgkuqQSinsOyqzXLWImidtsv0j5pYt82Py4PDTBpBKicqwnN+wQM0lMKv2uWS7nSe9eCTOTxG22/8movDRXGbgNV/ddHcahCZqk0gcfF3/Suzn4JkwSdVIJkBDfRmJyZuiumzBJ1EmlT4oNCrL2YRxQ6CZMEpNKn+XCcUbWObiBxeqhqKa0VCpNCkkFZtFVcdcBVCJPKuL4rLBYw2DcbDPUyyJJy/ZlYdXo5mBl9l6sRy61EMlLaYNyvHhgsVj30h836DgmuZNx4AAAAABJRU5ErkJggg==", undefined, function() {
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

