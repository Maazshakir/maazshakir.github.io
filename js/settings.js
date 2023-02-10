let getSettingsBar = document.getElementById("settings-bar");

function changeView(viewID){
    let getView = document.getElementById("setting-submenus");
    switch(viewID){
        case 1:
            getView.innerHTML= '<ul><li><h3 class="settings-header">Enable Light mode</h3><button id="enable-light-theme" class="simp-button" onclick="updateTheme()"></button></li><li><h3 class="settings-header">xx under construction xx</h3><button class="simp-button"></button></li></ul>';
            break;
        default: getView.innerHTML= '<h3 class="settings-header">Coming soon</h3>'
    }
}

function closeSettings(){
    getSettingsBar.style.visibility= "hidden";

}

