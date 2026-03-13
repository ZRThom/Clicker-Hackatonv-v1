document.addEventListener('DOMContentLoaded', function() {

    const buttonUISave = document.getElementById('buttonUISave');
    const buttonUINoSave = document.getElementById('buttonUINoSave');
    const buttonUISettingsNoSave = document.getElementById('buttonUISettingsNoSave');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const buttonUICredits = document.getElementById('buttonUICredits');
    const closeCreditsBtn = document.getElementById('closeCreditsBtn');
    const btnStart = document.getElementById('btnStart');
    const importFile = document.getElementById('importFile');
    const saveNoSaveBtn = document.getElementById('SaveNosave');

    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');
    const circle3 = document.getElementById('circle3');
    const headerMsg = document.getElementById('headerMsg');

    const mainClickBtn = document.getElementById('mainClickBtn');
    const devClickBtn = document.getElementById('devClickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const upgradeBtn1 = document.getElementById('upgradeBtn1');
    const upgradeBtn2 = document.getElementById('upgradeBtn2');
    const autoBtn1 = document.getElementById('autoBtn1');

    const volumeRange = document.getElementById('volumeRange');
    const speedRange = document.getElementById('speedRange');
    const volumeValue = document.getElementById('volumeValue');
    const speedValue = document.getElementById('speedValue');
    const modeSelect = document.getElementById('modeSelect');
    const bgSelect = document.getElementById('bgSelect');

    let click = 0;
    let clickPower = 1;
    let clickPower2 = 1;
    let autoClickPower = 0;
    let upgradeCostMult = 20;
    let upgradeCostMult2 = 1000;
    let upgradeCostAuto = 100;
    let lvlMult = 0;
    let lvlMult2 = 0;
    let lvlAuto = 0;
    let intervalAutoClick = null;
    let level = 0;
    let currentAudio = null;
    let msgTimeout = null;
    
    let settings = {
        volume: 50,
        speed: 5,
        mode: 'normal',
        background: 'profile1' // Default background
    };

    // UI update (be called avery time)
    function updateUI()
    {
        const clicker1 = document.getElementById("clicker1");
        const clicker2 = document.getElementById("clicker2");
        const clicker3 = document.getElementById("clicker3");
        const AutoClicker1 = document.getElementById("AutoClicker1");
        const upgradeBtn1 = document.getElementById("upgradeBtn1");
        const upgradeBtn2 = document.getElementById("upgradeBtn2");
        const autoBtn1 = document.getElementById("autoBtn1");
        const ShowMult = document.getElementById("showMult");
        const showAuto = document.getElementById("showAuto");

        if (clicker1) clicker1.innerHTML = DisplayNbr(click);
        if (clicker2) clicker2.innerHTML = DisplayNbr(upgradeCostMult);
        if (clicker3) clicker3.innerHTML = DisplayNbr(upgradeCostMult2);
        if (AutoClicker1) AutoClicker1.innerHTML = DisplayNbr(upgradeCostAuto);
        if (upgradeBtn1) upgradeBtn1.innerHTML = "Multiplyer per click lvl " + lvlMult +" (x" + DisplayNbr(clickPower) + ")";
        if (upgradeBtn2) upgradeBtn2.innerHTML = "Multiplyer per click lvl " + lvlMult2 +" (x" + DisplayNbr(clickPower2) + ")";
        if (autoBtn1) autoBtn1.innerHTML = "Auto-Request lvl " + lvlAuto +" (x" + DisplayNbr(autoClickPower) + ")";
        if (ShowMult) ShowMult.innerHTML = DisplayNbr(clickPower * clickPower2);
        if (showAuto) showAuto.innerHTML = DisplayNbr(autoClickPower);
    }

  
    function updateSettingsUI() {
        if (volumeRange) volumeRange.value = settings.volume;
        if (volumeValue) volumeValue.textContent = settings.volume;
        if (speedRange) speedRange.value = settings.speed;
        if (speedValue) speedValue.textContent = settings.speed;
        if (modeSelect) modeSelect.value = settings.mode;
        if (bgSelect) bgSelect.value = settings.background || 'profile1';
    }

    function applyBackground() {
        const gameLayer = document.querySelector('.LayerGameUINoSave');
        const settingsLayer = document.querySelector('.LayerSettings');
        const creditsLayer = document.querySelector('.LayerCredits');

        if (!gameLayer) return;

        // Remove existing profile classes
        gameLayer.classList.remove('bg-profile1', 'bg-profile2', 'bg-profile3');
        if (settingsLayer) settingsLayer.classList.remove('bg-profile1', 'bg-profile2', 'bg-profile3');
        if (creditsLayer) creditsLayer.classList.remove('bg-profile1', 'bg-profile2', 'bg-profile3');
        
        // Add selected profile
        if (settings.background) {
            gameLayer.classList.add('bg-' + settings.background);
            if (settingsLayer) settingsLayer.classList.add('bg-' + settings.background);
            if (creditsLayer) creditsLayer.classList.add('bg-' + settings.background);
        } else {
            gameLayer.classList.add('bg-profile1');
            if (settingsLayer) settingsLayer.classList.add('bg-profile1');
            if (creditsLayer) creditsLayer.classList.add('bg-profile1');
        }
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
    
    function clicking()
    {
        click += clickPower * clickPower2;
        click = cleanNbr(click);
        updateUI();
    }

    function clickingDev()
    {
        click += clickPower * 10000;
        click = cleanNbr(click);
        updateUI();
    }

    function clickingReset()
    {
        lvlMult = 0;
        lvlMult2 = 0;
        lvlAuto = 0;
        click = 0;
        clickPower = 1;
        clickPower2 = 1;
        autoClickPower = 0;

        upgradeCostMult = 20;
        upgradeCostMult2 = 1000;
        upgradeCostAuto = 100; 
        clearInterval(intervalAutoClick);
        intervalAutoClick = null;
        updateUI();
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
            autoClickPower++;

            if (intervalAutoClick === null){
                intervalAutoClick = setInterval(autoClick1, 5000 / Number(settings.speed));
            }

            upgradeCostAuto *= 1.2;
            upgradeCostAuto = cleanNbr(upgradeCostAuto);
            updateUI();
        }
    }

    function downloadSave() {
        const gameState = {
            clicks: click,
            lvlMult,
            lvlMult2,
            lvlAuto,
            clickPower,
            clickPower2,
            autoClickPower,
            upgradeCostMult,
            upgradeCostMult2,
            upgradeCostAuto,
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
            // Si on ouvre les settings ou credits et que le layer est le jeu, on ne le cache pas
            if ((name === 'LayerSettings' || name === 'LayerCredits') && layers[i].classList.contains('LayerGameUINoSave')) {
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

                // Restauration of game state with checks
                if (data.clicks !== undefined) click = data.clicks;
                if (data.lvlMult !== undefined) lvlMult = data.lvlMult;
                if (data.lvlMult2 !== undefined) lvlMult2 = data.lvlMult2;
                if (data.lvlAuto !== undefined) lvlAuto = data.lvlAuto;
                if (data.clickPower !== undefined) clickPower = data.clickPower;
                if (data.clickPower2 !== undefined) clickPower2 = data.clickPower2;
                if (data.autoClickPower !== undefined) autoClickPower = data.autoClickPower;
                if (data.upgradeCostMult !== undefined) upgradeCostMult = data.upgradeCostMult;
                if (data.upgradeCostMult2 !== undefined) upgradeCostMult2 = data.upgradeCostMult2;
                if (data.upgradeCostAuto !== undefined) upgradeCostAuto = data.upgradeCostAuto;
                if (data.currentLevel !== undefined) level = data.currentLevel;

            
                if (data.settings) {
                    settings = data.settings;
                    updateSettingsUI();
                    updateVolume();
                    applyBackground();
                }


                clearInterval(intervalAutoClick);
                if (lvlAuto > 0) {
                    intervalAutoClick = setInterval(autoClick1, 5000 / Number(settings.speed));
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

    if(buttonUICredits) {
        buttonUICredits.addEventListener('click', function() {
            showLayer('LayerCredits');
        });
    }

    if(closeCreditsBtn) {
        closeCreditsBtn.addEventListener('click', function() {
            showLayer('LayerSettings');
        });
    }

    if(saveSettingsBtn && volumeRange && speedRange && modeSelect && bgSelect) {
        saveSettingsBtn.addEventListener('click', function() {
            settings.volume = volumeRange.value;
            settings.speed = speedRange.value;
            settings.mode = modeSelect.value;
            settings.background = bgSelect.value;
            
            applyBackground();
        
            updateVolume();
            
            // Update AutoClick Speed if active
            if (intervalAutoClick) {
                clearInterval(intervalAutoClick);
                intervalAutoClick = setInterval(autoClick1, 5000 / Number(settings.speed));
            }

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

    if (saveNoSaveBtn) saveNoSaveBtn.addEventListener('click', downloadSave);
    if (mainClickBtn) mainClickBtn.addEventListener('click', clicking);
    if (devClickBtn) devClickBtn.addEventListener('click', clickingDev);
    if (resetBtn) resetBtn.addEventListener('click', clickingReset);
    if (upgradeBtn1) upgradeBtn1.addEventListener('click', clickingUpgrade);
    if (upgradeBtn2) upgradeBtn2.addEventListener('click', clickingUpgrade2);
    if (autoBtn1) autoBtn1.addEventListener('click', turnAutoClick);

    // Header Circles Logic
    function showHeaderMsg(text) {
        if (!headerMsg) return;
        headerMsg.textContent = text;
        headerMsg.classList.add('visible');
        if (msgTimeout) clearTimeout(msgTimeout);
        msgTimeout = setTimeout(() => {
            headerMsg.classList.remove('visible');
        }, 2000);
    }
    if(circle1) circle1.addEventListener('click', () => showHeaderMsg("Don't you love me?"));
    if(circle2) circle2.addEventListener('click', () => showHeaderMsg("Why, Thomas?"));
    if(circle3) circle3.addEventListener('click', () => showHeaderMsg("Professor Oak said it's not the time "));

    updateSettingsUI();
    applyBackground(); 
    updateUI();
});