// اللهم صل وسلم على عبدك ورسولك وحبيبك وخليلك
// وجليسك على العرش يوم القيامة
// محمد صلى الله عليه وسلم



function createPopupContainerReturnsPopupContainerAndCloseButton() {
    
    // html
    let popupContainer = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let closeButton = document.createElement("button");
    
    
    popupContainer.className = "popup-container";
    h1.textContent = "Welcome";
    p.textContent = "Welcome To Elzero Web School";
    closeButton.className = "close-button";
    closeButton.textContent = "X";
    
    
    popupContainer.appendChild(h1);
    popupContainer.appendChild(p);
    popupContainer.appendChild(closeButton);


    // css
    document.body.style.cssText = `

        margin: 0px;
        padding: 0px;
    `;

    popupContainer.style.cssText = `

        font-family: Arial;
        background-color: #F6F3F4;
        width: 700px;
        margin: 40px auto;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 25px;
        position: relative;
        border: 2px solid #DEDCDD;
        box-sizing: border-box;
    `;

    closeButton.style.cssText = `

        background-color: red;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        width: 35px;
        height: 35px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, -50%);
        border-width: 0px;
        border-radius: 50%;
        box-sizing: border-box;
        cursor: pointer;
    `;


    return [popupContainer, closeButton];
}


let [popupContainer, closeButton] = createPopupContainerReturnsPopupContainerAndCloseButton();


setTimeout(_ => document.body.appendChild(popupContainer), 5000);


closeButton.addEventListener("click", _ => {

    popupContainer.remove();
});