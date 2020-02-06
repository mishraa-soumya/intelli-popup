(function(){
    const LicenseKey = document.currentScript.getAttribute('lkey');
    console.log(`${LicenseKey}`);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        const htmlString = `<div>This is API Result ${JSON.stringify(json)}</div>`;
        var modalDiv = document.createElement('div');
        modalDiv.setAttribute('id', 'intellipopup');
        const modal = `
            <style>
                #intellipopup {
                    position: fixed;
                    display: block;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0,0,0,0.5);
                    z-index: 2;
                    cursor: pointer;
                    transform:scaleY(.01) scaleX(0);
                    animation:unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
                }
                .modal-header {
                    display: flex;
                    padding: 2px 16px;
                    color: #fff;
                    justify-content: flex-end;
                    position: absolute;
                    right: -31px;
                    top: -42px;
                }
                .modal-header img {
                    width: 40px;
                }
                .modal-body {padding: 2px 16px;}
                .modal-footer {
                    padding: 2px 16px;
                    // background-color: #5cb85c;
                    color: #fff;
                }
                .modal-content {
                    position: relative;
                    background-color: #fefefe;
                    margin: auto;
                    margin-top: 5%;
                    padding: 0;
                    border: 1px solid #888;
                    width: 80%;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
                    animation-name: animatetop;
                    animation-duration: 0.4s
                    transform:scale(0);
                    animation: zoomIn .4s .4s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
                }
                @keyframes animatetop {
                    from {top: -300px; opacity: 0}
                    to {top: 0; opacity: 1}
                }
                @keyframes unfoldIn {
                    0% {
                      transform:scaleY(.005) scaleX(0);
                    }
                    50% {
                      transform:scaleY(.005) scaleX(1);
                    }
                    100% {
                      transform:scaleY(1) scaleX(1);
                    }
                }
                  
                @keyframes unfoldOut {
                    0% {
                      transform:scaleY(1) scaleX(1);
                    }
                    50% {
                      transform:scaleY(.005) scaleX(1);
                    }
                    100% {
                      transform:scaleY(.005) scaleX(0);
                    }
                }
                @keyframes zoomIn {
                    0% {
                      transform:scale(0);
                    }
                    100% {
                      transform:scale(1);
                    }
                }
                  
                @keyframes zoomOut {
                    0% {
                      transform:scale(1);
                    }
                    100% {
                      transform:scale(0);
                    }
                }
            </style>
            <div class="modal-content">
                <div class="modal-header">
                    <div id="closeIcon"><img src="./images/close.png" /></div>
                </div>
                <div class="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                    <p>Some text in the Modal Body</p>
                    <p>${htmlString}</p>
                </div>
            </div>`;
        modalDiv.innerHTML = modal;
        document.body.appendChild(modalDiv);
        // Close Icon Functionality
        document.getElementById("closeIcon").addEventListener("click", () => {
            console.log("Close Icon");
            const modalElem = document.getElementById("intellipopup");
            modalElem.innerHTML = "";
        });
    });
    const getQueryParams = ( params, url ) => {
        let href = url;
        //this expression is to get the query strings
        let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
        let queryString = reg.exec(href);
        return queryString ? queryString[1] : null;
    };
})();
