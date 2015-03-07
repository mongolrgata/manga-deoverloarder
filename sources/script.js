/**
 * Created by mongolrgata on 05.03.2015.
 */

(function () {
    function detach(element) {
        element.parentNode.removeChild(element);
    }

    var
        body = document.body,
        prevButton = document.getElementsByClassName('prev postload')[0].getElementsByClassName('btn')[0],
        nextButton = document.getElementsByClassName('next postload')[0].getElementsByClassName('btn')[0];

    var image = document.getElementById('image');
    detach(image);

    body.innerHTML = '';
    body.appendChild(image);

    var divRight = document.createElement('div');
    divRight.className = 'test-div test-animation to-right';
    body.appendChild(divRight);
    divRight.addEventListener("click", function () {
        nextButton.click();
    });
    var arrowRight = document.createElement('div');
    arrowRight.className = 'arrow-base arrow-right';
    divRight.appendChild(arrowRight);

    var divLeft = document.createElement('div');
    divLeft.className = 'test-div test-animation to-left';
    body.appendChild(divLeft);
    divLeft.addEventListener("click", function () {
        prevButton.click();
    });
    var arrowLeft = document.createElement('div');
    arrowLeft.className = 'arrow-base arrow-left';
    divLeft.appendChild(arrowLeft);
})();
