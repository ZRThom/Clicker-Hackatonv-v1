document.addEventListener('DOMContentLoaded', function() {

    // add btn (to-add)
    const buttonUISave = document.getElementById('buttonUISave');
    const buttonUINoSave = document.getElementById('buttonUINoSave');
    const buttonUISettingsNoSave = document.getElementById('buttonUISettingsNoSave');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const btnStart = document.getElementById('btnStart');
    const importFile = document.getElementById('importFile');
    const saveNoSaveBtn = document.getElementById('SaveNosave');

    const mainClickBtn = document.getElementById('mainClickBtn');
    const devClickBtn = document.getElementById('devClickBtn');
    const resetBtn = document.getElementById('resetBtn');

    const upgradeSimpleBtn1 = document.getElementById('upgradeSimpleBtn1');
    const upgradeSimpleBtn2 = document.getElementById('upgradeSimpleBtn2');

    const upgradeBtn1 = document.getElementById('upgradeBtn1');
    const upgradeBtn2 = document.getElementById('upgradeBtn2');

    const autoBtn1 = document.getElementById('autoBtn1');

    const volumeRange = document.getElementById('volumeRange');
    const speedRange = document.getElementById('speedRange');
    const volumeValue = document.getElementById('volumeValue');
    const speedValue = document.getElementById('speedValue');
    const modeSelect = document.getElementById('modeSelect');

    const panelToggles = document.querySelectorAll('.panel-toggle');

    // add btn (to-add)
    let click = 0;



    let lvlPlus = 0;
    let clickPowerPlus = 0;
    let upgradeCostPlus = 10;

    let lvlPlus2 = 0;
    let clickPowerPlus2 = 0;
    let upgradeCostPlus2 = 250;
    
    let lvlMult = 0;
    let clickPower = 1;
    let upgradeCostMult = 200;
    
    let lvlMult2 = 0;
    let clickPower2 = 1;
    let upgradeCostMult2 = 1500;

   
    
    let lvlAuto = 0;
    let autoClickPower = 0;
    let upgradeCostAuto = 100;
    let intervalAutoClick = null;

    let level = 0;
    let currentAudio = null;
    
    let settings = {
        volume: 50,
        speed: 5,
        mode: 'normal'
    };

    // change symbol for panel toggle
    function updateToggleSymbol(panel, button) {
        if (panel.classList.contains('panel-left')) {
            button.textContent = panel.classList.contains('is-collapsed') ? '>' : '<';
        }
        else if (panel.classList.contains('panel-right')) {
            button.textContent = panel.classList.contains('is-collapsed') ? '<' : '>';
        }
        else if (panel.classList.contains('panel-bottom-center')) {
            button.textContent = panel.classList.contains('is-collapsed') ? '^' : 'v';
        }
    }

    // animation toggle panel
    panelToggles.forEach(button => {
        const panel = button.closest('.panel');
        updateToggleSymbol(panel, button);
        button.addEventListener('click', function() {
            panel.classList.toggle('is-collapsed');
            updateToggleSymbol(panel, button);
        });
    });

    // UI update (be called avery time)
    // add btn (to-add)
    function updateUI()
    {
        const clicker1 = document.getElementById("clicker1");

        const clicker2 = document.getElementById("clicker2");
        const clicker3 = document.getElementById("clicker3");

        const clickerSimple2 = document.getElementById("clickerSimple2");
        const clickerSimple3 = document.getElementById("clickerSimple3");

        const ShowAll = document.getElementById("showAll");
        const showAuto = document.getElementById("showAuto");

        const upgradeSimpleBtn1 = document.getElementById("upgradeSimpleBtn1");
        const upgradeSimpleBtn2 = document.getElementById("upgradeSimpleBtn2");

        const upgradeBtn1 = document.getElementById("upgradeBtn1");
        const upgradeBtn2 = document.getElementById("upgradeBtn2");

        const autoBtn1 = document.getElementById("autoBtn1");
        const AutoClicker1 = document.getElementById("AutoClicker1");
        
        
        

        if (clicker1) clicker1.innerHTML = DisplayNbr(click);
        
        if (clicker2) clicker2.innerHTML = DisplayNbr(upgradeCostMult);
        if (clicker3) clicker3.innerHTML = DisplayNbr(upgradeCostMult2);

        if (clickerSimple2) clickerSimple2.innerHTML = DisplayNbr(upgradeCostPlus);
        if (clickerSimple3) clickerSimple3.innerHTML = DisplayNbr(upgradeCostPlus2);

        if (ShowAll) ShowAll.innerHTML = DisplayNbr(clickPower * clickPower2 + clickPowerPlus + clickPowerPlus2); // formula for all upgrade
        if (showAuto) showAuto.innerHTML = DisplayNbr(autoClickPower); // formula for all auto upgrade

        if (upgradeSimpleBtn1) upgradeSimpleBtn1.innerHTML = "Request per click lvl " + lvlPlus +" (x" + DisplayNbr(clickPowerPlus) + ")";
        if (upgradeSimpleBtn2) upgradeSimpleBtn2.innerHTML = "Request per click lvl " + lvlPlus2 +" (x" + DisplayNbr(clickPowerPlus2) + ")";

        if (upgradeBtn1) upgradeBtn1.innerHTML = "Request Multiplyer per click lvl " + lvlMult +" (x" + DisplayNbr(clickPower) + ")";
        if (upgradeBtn2) upgradeBtn2.innerHTML = "Request Multiplyer per click lvl " + lvlMult2 +" (x" + DisplayNbr(clickPower2) + ")";
        
        if (autoBtn1) autoBtn1.innerHTML = "Auto-Request lvl " + lvlAuto +" (x" + DisplayNbr(autoClickPower) + ")";
        if (AutoClicker1) AutoClicker1.innerHTML = DisplayNbr(upgradeCostAuto);
    }

  
    function updateSettingsUI() {
        if (volumeRange) volumeRange.value = settings.volume;
        if (volumeValue) volumeValue.textContent = settings.volume;
        if (speedRange) speedRange.value = settings.speed;
        if (speedValue) speedValue.textContent = settings.speed;
        if (modeSelect) modeSelect.value = settings.mode;
    }






    // display all number
    function DisplayNbr(value) // avoid 1.20000000000002 (arround to number)
    {
        if (Number.isInteger(value)) return value;
        return value.toFixed(1);
    }

    function cleanNbr(value) 
    {
        return Number(value.toFixed(1));
    }
    // end display
    
    // add btn (to-add)
    function clicking()
    {
        click += clickPower * clickPower2 + clickPowerPlus + clickPowerPlus2;
        click = cleanNbr(click);
        updateUI();
    }

    function clickingDev()
    {
        click += 99999;
        click = cleanNbr(click);
        updateUI();
    }

    // add btn (to-add)
    function clickingReset()
    {
        lvlPlus = 0;
        lvlPlus2 = 0;

        lvlMult = 0;
        lvlMult2 = 0;
        
        lvlAuto = 0;
        autoClickPower = 0;
        upgradeCostAuto = 100; 

        click = 0;

        clickPower = 1;
        clickPower2 = 1;

        clickPowerPlus = 0;
        clickPowerPlus2 = 0;

        upgradeCostPlus = 10;
        upgradeCostPlus2 = 250;
        
        upgradeCostMult = 200;
        upgradeCostMult2 = 1500;
        
        clearInterval(intervalAutoClick);
        intervalAutoClick = null;
        updateUI();
    }



    function clickingSimpleUpgrade()
    {
        if (click >= upgradeCostPlus){
            lvlPlus++;
            click -= upgradeCostPlus;
            click = cleanNbr(click);
            
            clickPowerPlus += 1;
            clickPowerPlus = cleanNbr(clickPowerPlus);
            
            upgradeCostPlus *= 1.2;
            upgradeCostPlus = cleanNbr(upgradeCostPlus);
            updateUI();
        }
    }

    function clickingSimpleUpgrade2()
    {
        if (click >= upgradeCostPlus2){
            lvlPlus2++;
            click -= upgradeCostPlus2;
            click = cleanNbr(click);

            clickPowerPlus2 += 10;
            clickPowerPlus2 = cleanNbr(clickPowerPlus2);
            
            upgradeCostPlus2 *= 1.3;
            upgradeCostPlus2 = cleanNbr(upgradeCostPlus2);
            updateUI();
        }
    }
    



    function clickingUpgrade()
    {
        if (click >= upgradeCostMult){
            lvlMult++;
            click -= upgradeCostMult;
            click = cleanNbr(click);
            clickPower *= 1.1;
            clickPower = cleanNbr(clickPower);
            upgradeCostMult *= 1.2;
            upgradeCostMult = cleanNbr(upgradeCostMult);
            updateUI();
        }
    }

    function clickingUpgrade2()
    {
        if (click >= upgradeCostMult2){
            lvlMult2++;
            click -= upgradeCostMult2;
            click = cleanNbr(click);

            if (clickPower2 === 1){
                clickPower2 = 10;
            }
            else{
                clickPower2 *= 1.1;
                clickPower2 = cleanNbr(clickPower2);
            }
            
            upgradeCostMult2 *= 1.2;
            upgradeCostMult2 = cleanNbr(upgradeCostMult2);
            updateUI();
        }
    }

    // auto click test
    function autoClick1(){
        click += autoClickPower;
        click = cleanNbr(click);
        updateUI();
    }

    function turnAutoClick()
    {
        if (click >= upgradeCostAuto) {
            click -= upgradeCostAuto;
            click = cleanNbr(click);
            lvlAuto++;
            autoClickPower++ * 1.1;

            if (intervalAutoClick === null){
                intervalAutoClick = setInterval(autoClick1, 1000);
            }

            upgradeCostAuto *= 1.1;
            upgradeCostAuto = cleanNbr(upgradeCostAuto);
            updateUI();
        }
    }






    // add btn (to-add)
    function downloadSave() {
        const gameState = {
            clicks: click,
            lvlPlus,
            lvlPlus2,

            lvlMult,
            lvlMult2,

            lvlAuto,
            autoClickPower,
            upgradeCostAuto,

            clickPowerPlus,
            clickPowerPlus2,

            clickPower,
            clickPower2,
            
            upgradeCostPlus,
            upgradeCostPlus2,
            
            upgradeCostMult,
            upgradeCostMult2,
            
            // Save Actuals Settings
            settings,
            currentLevel: level,
            date: new Date().toLocaleDateString()
        };

        const json = JSON.stringify(gameState, null, 2);
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json);
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute('href', dataStr);
        dlAnchor.setAttribute('download', 'save.json');
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        document.body.removeChild(dlAnchor);
    }

    function showLayer(name) {
        const layers = document.getElementsByClassName('layer');
        for (let i = 0; i < layers.length; i++) {
            // Si on ouvre les settings et que le layer est le jeu, on ne le cache pas
            if (name === 'LayerSettings' && layers[i].classList.contains('LayerGameUINoSave')) {
                continue;
            }
            layers[i].classList.remove('active');
        }
        const tgt = document.getElementsByClassName(name);
        if (tgt.length) {
            tgt[0].classList.add('active');
        }
        playMusicForLayer(name);
    }

    function triggerImport() {
        if (importFile) importFile.click();
    }

    function importSave(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);

                // Restauration progression
                // add btn (to-add)
                if (data.clicks !== undefined) click = data.clicks;

                // data lvlSimple 

                if (data.lvlMult !== undefined) lvlMult = data.lvlMult;
                if (data.lvlMult2 !== undefined) lvlMult2 = data.lvlMult2;

                if (data.lvlAuto !== undefined) lvlAuto = data.lvlAuto;
                if (data.autoClickPower !== undefined) autoClickPower = data.autoClickPower;
                if (data.upgradeCostAuto !== undefined) upgradeCostAuto = data.upgradeCostAuto;

                if (data.clickPower !== undefined) clickPower = data.clickPower;
                if (data.clickPower2 !== undefined) clickPower2 = data.clickPower2;

                // data upgradeCostSimple
                
                if (data.upgradeCostMult !== undefined) upgradeCostMult = data.upgradeCostMult;
                if (data.upgradeCostMult2 !== undefined) upgradeCostMult2 = data.upgradeCostMult2;
                
                if (data.currentLevel !== undefined) level = data.currentLevel;

            
                if (data.settings) {
                    settings = data.settings;
                    updateSettingsUI();
                    updateVolume();
                }


                clearInterval(intervalAutoClick);
                if (lvlAuto > 0) {
                    intervalAutoClick = setInterval(autoClick1, 1000);
                }

                updateUI(); 
                showLayer('LayerGameUINoSave'); 
                
                alert('Save imported successfully! Welcome back, Thomas.');
            } catch(err) {
                alert('Failed to parse save file');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    function playMusicForLayer(layerName) {
        var audioId = "bgMusic_" + layerName;
        var newAudio = document.getElementById(audioId);
        if (currentAudio !== newAudio) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            if (newAudio) {
                currentAudio = newAudio;
                currentAudio.volume = settings.volume / 100;
                var playPromise = currentAudio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => { console.log("Auto-play prevented"); });
                }
            } else {
                currentAudio = null;
            }
        }
    }

    function updateVolume() {
        if (currentAudio) {
            currentAudio.volume = settings.volume / 100;
        }
    }

    if (buttonUISave) {
        buttonUISave.addEventListener('click', triggerImport);
    }

    if (importFile) {
        importFile.addEventListener('change', importSave);
    }

    if(buttonUINoSave) {
        buttonUINoSave.addEventListener('click', function() {
            showLayer('LayerGameUINoSave');
        });
    }

    if(buttonUISettingsNoSave) {
        buttonUISettingsNoSave.addEventListener('click', function() {
            showLayer('LayerSettings');
        });
    }

    if(saveSettingsBtn && volumeRange && speedRange && modeSelect) {
        saveSettingsBtn.addEventListener('click', function() {
            settings.volume = volumeRange.value;
            settings.speed = speedRange.value;
            settings.mode = modeSelect.value;
        
            updateVolume();
            alert('Settings applied!');
            showLayer('LayerGameUINoSave'); 
        });
    }

    if(btnStart) {
        btnStart.addEventListener('click', function() {
            var overlay = document.getElementById('startOverlay');
            if (overlay) overlay.style.display = 'none'; 
            playMusicForLayer('LayerMenu');
        });
    }

    if (volumeRange && volumeValue) {
        volumeRange.addEventListener('input', function() {
            volumeValue.textContent = volumeRange.value;
            if (currentAudio) {
                currentAudio.volume = volumeRange.value / 100;
            }
        });
    }

    if (speedRange && speedValue) {
        speedRange.addEventListener('input', function() {
            speedValue.textContent = speedRange.value;
        });
    }

    // add btn (to-add)
    if (saveNoSaveBtn) saveNoSaveBtn.addEventListener('click', downloadSave);
    if (mainClickBtn) mainClickBtn.addEventListener('click', clicking);
    if (devClickBtn) devClickBtn.addEventListener('click', clickingDev);
    if (resetBtn) resetBtn.addEventListener('click', clickingReset);

    if (upgradeSimpleBtn1) upgradeSimpleBtn1.addEventListener('click', clickingSimpleUpgrade);
    if (upgradeSimpleBtn2) upgradeSimpleBtn2.addEventListener('click', clickingSimpleUpgrade2);

    if (upgradeBtn1) upgradeBtn1.addEventListener('click', clickingUpgrade);
    if (upgradeBtn2) upgradeBtn2.addEventListener('click', clickingUpgrade2);

    if (autoBtn1) autoBtn1.addEventListener('click', turnAutoClick);

    updateSettingsUI();
    updateUI();
});