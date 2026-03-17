document.addEventListener('DOMContentLoaded', function() {

    // add btn (to-add)
    const buttonUISave = document.getElementById('buttonUISave');
    const buttonUINoSave = document.getElementById('buttonUINoSave');
    const buttonUISettingsNoSave = document.getElementById('buttonUISettingsNoSave');
    const buttonUIMainMenu = document.getElementById('buttonUIMainMenu');
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

    const upgradeSimpleBtn1 = document.getElementById('upgradeSimpleBtn1');
    const upgradeSimpleBtn2 = document.getElementById('upgradeSimpleBtn2');
    const upgradeSimpleBtn3 = document.getElementById('upgradeSimpleBtn3');
    const upgradeSimpleBtn4 = document.getElementById('upgradeSimpleBtn4');
    const upgradeSimpleBtn5 = document.getElementById('upgradeSimpleBtn5');

    const upgradeBtn1 = document.getElementById('upgradeBtn1');
    const upgradeBtn2 = document.getElementById('upgradeBtn2');
    const upgradeBtn3 = document.getElementById('upgradeBtn3');
    const upgradeBtn4 = document.getElementById('upgradeBtn4');
    const upgradeBtn5 = document.getElementById('upgradeBtn5');

    const autoBtn1 = document.getElementById('autoBtn1');
    const superBtn1 = document.getElementById('superBtn1');

    const volumeRange = document.getElementById('volumeRange');
    const speedRange = document.getElementById('speedRange');
    const volumeValue = document.getElementById('volumeValue');
    const speedValue = document.getElementById('speedValue');
    const modeSelect = document.getElementById('modeSelect');

    const panelToggles = document.querySelectorAll('.panel-toggle');

    const floatingTexts = document.getElementById('floatingTexts');

    const bgSelect = document.getElementById('bgSelect');
    
    const adsManualBtn = document.getElementById('adsManualBtn');
    const adsAutoBtn = document.getElementById('adsAutoBtn');

    const launchBtn = document.getElementById('launchBtn');
    const projectGrid = document.getElementById('projectGrid');

    // add btn (to-add)
    let click = 0;



    let lvlPlus = 0;
    let clickPowerPlus = 0;
    let upgradeCostPlus = 10;

    let lvlPlus2 = 0;
    let clickPowerPlus2 = 0;
    let upgradeCostPlus2 = 900;

    let lvlPlus3 = 0;
    let clickPowerPlus3 = 0;
    let upgradeCostPlus3 = 25000;

    let lvlPlus4 = 0;
    let clickPowerPlus4 = 0;
    let upgradeCostPlus4 = 700000;

    let lvlPlus5 = 0;
    let clickPowerPlus5 = 0;
    let upgradeCostPlus5 = 30000000;


    
    let lvlMult = 0;
    let clickPower = 1;
    let upgradeCostMult = 40
    
    let lvlMult2 = 0;
    let clickPower2 = 1;
    let upgradeCostMult2 = 300;

    let lvlMult3 = 0;
    let clickPower3 = 1;
    let upgradeCostMult3 = 40000;

    let lvlMult4 = 0;
    let clickPower4 = 1;
    let upgradeCostMult4 = 1300000;

    let lvlMult5 = 0;
    let clickPower5 = 1;
    let upgradeCostMult5 = 70000000;

   
    
    let lvlAuto = 0;
    let autoClickPower = 0;
    let upgradeCostAuto = 100;
    let intervalAutoClick = null;

    let lvlSuper = 0;
    let superClickChance = 0;
    let superClickValue = 0;
    let upgradeCostSuper = 200;



    let money = 0;
    let lvlMoneyManual = 0;
    let moneyClickPower = 0;
    let upgradeCostMoneyManual = 1000000;

    let lvlMoneyAuto = 0;
    let autoMoneyPower = 0;
    let upgradeCostMoneyAuto = 2000000;
    let intervalAutoMoney = null;



    const projectCaseCosts = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let projectCasesBought = new Array(9).fill(false);



    let level = 0;
    let currentAudio = null;
    let msgTimeout = null;
    
    let settings = {
        volume: 50,
        speed: 5,
        mode: 'normal',
        background: 'profile1' // Default background
    };

    // change symbol for panel toggle
    function updateToggleSymbol(panel, button) {
        if (panel.classList.contains('panel-left')) {
            button.textContent = panel.classList.contains('is-collapsed') ? '>' : '<';
        }
        else if (panel.classList.contains('panel-right')) {
            button.textContent = panel.classList.contains('is-collapsed') ? '<' : '>';
        }
        else if (panel.classList.contains('panel-bottom-right')) {
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

    function showFloatingText(message) {
        if (!floatingTexts) return;
        const text = document.createElement('div');
        text.className = 'floating-text';
        text.textContent = message;
        const randomOffset = Math.floor(Math.random() * 30);
        text.style.top = randomOffset + 'px';
        floatingTexts.appendChild(text);
        setTimeout(() => {
            text.remove();
        }, 1000);
    }

    // UI update (be called avery time)
    // add btn (to-add)
    function updateUI()
    {
        const clicker1 = document.getElementById("clicker1");

        const clicker2 = document.getElementById("clicker2");
        const clicker3 = document.getElementById("clicker3");
        const clicker4 = document.getElementById("clicker4");
        const clicker5 = document.getElementById("clicker5");
        const clicker6 = document.getElementById("clicker6");

        const clickerSimple2 = document.getElementById("clickerSimple2");
        const clickerSimple3 = document.getElementById("clickerSimple3");
        const clickerSimple4 = document.getElementById("clickerSimple4");
        const clickerSimple5 = document.getElementById("clickerSimple5");
        const clickerSimple6 = document.getElementById("clickerSimple6");

        const ShowAll = document.getElementById("showAll");
        const showAuto = document.getElementById("showAuto");

        const upgradeSimpleBtn1 = document.getElementById("upgradeSimpleBtn1");
        const upgradeSimpleBtn2 = document.getElementById("upgradeSimpleBtn2");
        const upgradeSimpleBtn3 = document.getElementById("upgradeSimpleBtn3");
        const upgradeSimpleBtn4 = document.getElementById("upgradeSimpleBtn4");
        const upgradeSimpleBtn5 = document.getElementById("upgradeSimpleBtn5");

        const upgradeBtn1 = document.getElementById("upgradeBtn1");
        const upgradeBtn2 = document.getElementById("upgradeBtn2");
        const upgradeBtn3 = document.getElementById("upgradeBtn3");
        const upgradeBtn4 = document.getElementById("upgradeBtn4");
        const upgradeBtn5 = document.getElementById("upgradeBtn5");

        const autoBtn1 = document.getElementById("autoBtn1");
        const AutoClicker1 = document.getElementById("AutoClicker1");

        const superBtn1 = document.getElementById("superBtn1");
        const superChanceValue = document.getElementById("superChanceValue");
        const superPowerValue = document.getElementById("superPowerValue");
        const superCostValue = document.getElementById("superCostValue");

        const moneyValue = document.getElementById("moneyValue");
        const showMoney = document.getElementById("showMoney");
        const showAutoMoney = document.getElementById("showAutoMoney");

        const adsManualBtnUI = document.getElementById("adsManualBtn");
        const adsAutoBtnUI = document.getElementById("adsAutoBtn");
        const adsManualCost = document.getElementById("adsManualCost");
        const adsAutoCost = document.getElementById("adsAutoCost");
        
        
        

        if (clicker1) clicker1.innerHTML = DisplayNbr(click);
        
        if (clicker2) clicker2.innerHTML = DisplayNbr(upgradeCostMult);
        if (clicker3) clicker3.innerHTML = DisplayNbr(upgradeCostMult2);
        if (clicker4) clicker4.innerHTML = DisplayNbr(upgradeCostMult3);
        if (clicker5) clicker5.innerHTML = DisplayNbr(upgradeCostMult4);
        if (clicker6) clicker6.innerHTML = DisplayNbr(upgradeCostMult5);

        if (clickerSimple2) clickerSimple2.innerHTML = DisplayNbr(upgradeCostPlus);
        if (clickerSimple3) clickerSimple3.innerHTML = DisplayNbr(upgradeCostPlus2);
        if (clickerSimple4) clickerSimple4.innerHTML = DisplayNbr(upgradeCostPlus3);
        if (clickerSimple5) clickerSimple5.innerHTML = DisplayNbr(upgradeCostPlus4);
        if (clickerSimple6) clickerSimple6.innerHTML = DisplayNbr(upgradeCostPlus5);

        if (ShowAll) ShowAll.innerHTML = DisplayNbr(clickPower * clickPower2 * clickPower3 * clickPower4 * clickPower5 + clickPowerPlus + clickPowerPlus2 + clickPowerPlus3 + clickPowerPlus4 + clickPowerPlus5); // formula for all upgrade
        if (showAuto) showAuto.innerHTML = DisplayNbr(autoClickPower); // formula for all auto upgrade

        if (upgradeSimpleBtn1) upgradeSimpleBtn1.innerHTML = "Request per click lvl " + lvlPlus +" (+ " + DisplayNbr(clickPowerPlus) + ")";
        if (upgradeSimpleBtn2) upgradeSimpleBtn2.innerHTML = "Request per click lvl " + lvlPlus2 +" (+ " + DisplayNbr(clickPowerPlus2) + ")";
        if (upgradeSimpleBtn3) upgradeSimpleBtn3.innerHTML = "Request per click lvl " + lvlPlus3 +" (+ " + DisplayNbr(clickPowerPlus3) + ")";
        if (upgradeSimpleBtn4) upgradeSimpleBtn4.innerHTML = "Request per click lvl " + lvlPlus4 +" (+ " + DisplayNbr(clickPowerPlus4) + ")";
        if (upgradeSimpleBtn5) upgradeSimpleBtn5.innerHTML = "Request per click lvl " + lvlPlus5 +" (+ " + DisplayNbr(clickPowerPlus5) + ")";

        if (upgradeBtn1) upgradeBtn1.innerHTML = "Request Multiplyer per click lvl " + lvlMult +" (x " + DisplayNbr(clickPower) + ")";
        if (upgradeBtn2) upgradeBtn2.innerHTML = "Request Multiplyer per click lvl " + lvlMult2 +" (x " + DisplayNbr(clickPower2) + ")";
        if (upgradeBtn3) upgradeBtn3.innerHTML = "Request Multiplyer per click lvl " + lvlMult3 +" (x " + DisplayNbr(clickPower3) + ")";
        if (upgradeBtn4) upgradeBtn4.innerHTML = "Request Multiplyer per click lvl " + lvlMult4 +" (x " + DisplayNbr(clickPower4) + ")";
        if (upgradeBtn5) upgradeBtn5.innerHTML = "Request Multiplyer per click lvl " + lvlMult5 +" (x " + DisplayNbr(clickPower5) + ")";

        if (autoBtn1) autoBtn1.innerHTML = "Auto-Request lvl " + lvlAuto +" (+ " + DisplayNbr(autoClickPower) + ")";
        if (AutoClicker1) AutoClicker1.innerHTML = DisplayNbr(upgradeCostAuto);

        if (superBtn1) superBtn1.innerHTML = "Super Request " + lvlSuper +" (+ " + DisplayNbr(superClickChance) + "%)";
        if (superChanceValue) superChanceValue.innerHTML = DisplayNbr(superClickChance);
        if (superPowerValue) superPowerValue.innerHTML = DisplayNbr(superClickValue);
        if (superCostValue) superCostValue.innerHTML = DisplayNbr(upgradeCostSuper);

        if (moneyValue) moneyValue.innerHTML = DisplayNbr(money);
        if (showMoney) showMoney.innerHTML = DisplayNbr(moneyClickPower);
        if (showAutoMoney) showAutoMoney.innerHTML = DisplayNbr(autoMoneyPower);

        if (adsManualBtnUI) adsManualBtnUI.innerHTML = "Ads (manual) lvl " + lvlMoneyManual + " (x " + DisplayNbr(moneyClickPower) + ")";
        if (adsAutoBtnUI) adsAutoBtnUI.innerHTML = "Ads (auto) lvl " + lvlMoneyAuto + " (x " + DisplayNbr(autoMoneyPower) + ")";

        if (adsManualCost) adsManualCost.innerHTML = DisplayNbr(upgradeCostMoneyManual);
        if (adsAutoCost) adsAutoCost.innerHTML = DisplayNbr(upgradeCostMoneyAuto);
        
        updateLaunchBtnState();
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
    
    // add btn (to-add)
    function clicking()
    {
        let gain = clickPower * clickPower2 * clickPower3 * clickPower4 * clickPower5 + clickPowerPlus + clickPowerPlus2 + clickPowerPlus3 + clickPowerPlus4 + clickPowerPlus5;
        
        gain = trySuperClick(gain);
        click += gain;
        click = cleanNbr(click);

        money += moneyClickPower;
        money = cleanNbr(money);

        updateUI();
    }

    function clickingDev()
    {
        click += 99995559;
        click = cleanNbr(click);
        updateUI();
    }

    // add btn (to-add)
    function clickingReset()
    {
        lvlPlus = 0;
        lvlPlus2 = 0;
        lvlPlus3 = 0;
        lvlPlus4 = 0;
        lvlPlus5 = 0;

        lvlMult = 0;
        lvlMult2 = 0;
        lvlMult3 = 0;
        lvlMult4 = 0;
        lvlMult5 = 0;
        
        lvlAuto = 0;
        autoClickPower = 0;
        upgradeCostAuto = 100; 

        lvlSuper = 0;
        superClickChance = 0;
        superClickValue = 0
        upgradeCostSuper = 200;

        money = 0;

        lvlMoneyManual = 0;
        moneyClickPower = 0;
        upgradeCostMoneyManual = 1000000;

        lvlMoneyAuto = 0;
        autoMoneyPower = 0;
        upgradeCostMoneyAuto = 2000000;

        projectCasesBought = new Array(9).fill(false);

        click = 0;

        clickPower = 1;
        clickPower2 = 1;
        clickPower3 = 1;
        clickPower4 = 1;
        clickPower5 = 1;

        clickPowerPlus = 0;
        clickPowerPlus2 = 0;
        clickPowerPlus3 = 0;
        clickPowerPlus4 = 0;
        clickPowerPlus5 = 0;

        upgradeCostPlus = 10;
        upgradeCostPlus2 = 900;
        upgradeCostPlus3 = 25000;
        upgradeCostPlus4 = 700000;
        upgradeCostPlus5 = 30000000;
        
        upgradeCostMult = 40;
        upgradeCostMult2 = 300;
        upgradeCostMult3 = 40000;
        upgradeCostMult4 = 1300000;
        upgradeCostMult5 = 70000000;
        
        clearInterval(intervalAutoClick);
        intervalAutoClick = null;

        clearInterval(intervalAutoMoney);
        intervalAutoMoney = null;

        updateUI();
        renderProjectGrid();
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

            clickPowerPlus2 += 150;
            clickPowerPlus2 = cleanNbr(clickPowerPlus2);
            
            upgradeCostPlus2 *= 1.25;
            upgradeCostPlus2 = cleanNbr(upgradeCostPlus2);
            updateUI();
        }
    }

    function clickingSimpleUpgrade3()
    {
        if (click >= upgradeCostPlus3){
            lvlPlus3++;
            click -= upgradeCostPlus3;
            click = cleanNbr(click);

            clickPowerPlus3 += 8000;
            clickPowerPlus3 = cleanNbr(clickPowerPlus3);
            
            upgradeCostPlus3 *= 1.3;
            upgradeCostPlus3 = cleanNbr(upgradeCostPlus3);
            updateUI();
        }
    }

    function clickingSimpleUpgrade4()
    {
        if (click >= upgradeCostPlus4){
            lvlPlus4++;
            click -= upgradeCostPlus4;
            click = cleanNbr(click);

            clickPowerPlus4 += 90000;
            clickPowerPlus4 = cleanNbr(clickPowerPlus4);
            
            upgradeCostPlus4 *= 1.35;
            upgradeCostPlus4 = cleanNbr(upgradeCostPlus4);
            updateUI();
        }
    }

    function clickingSimpleUpgrade5()
    {
        if (click >= upgradeCostPlus5){
            lvlPlus5++;
            click -= upgradeCostPlus5;
            click = cleanNbr(click);

            clickPowerPlus5 += 3000000;
            clickPowerPlus5 = cleanNbr(clickPowerPlus5);
            
            upgradeCostPlus5 *= 1.4;
            upgradeCostPlus5 = cleanNbr(upgradeCostPlus5);
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
                clickPower2 *= 1.15;
                clickPower2 = cleanNbr(clickPower2);
            }
            
            upgradeCostMult2 *= 1.25;
            upgradeCostMult2 = cleanNbr(upgradeCostMult2);
            updateUI();
        }
    }

    function clickingUpgrade3()
    {
        if (click >= upgradeCostMult3){
            lvlMult3++;
            click -= upgradeCostMult3;
            click = cleanNbr(click);

            if (clickPower3 === 1){
                clickPower3 = 90;
            }
            else{
                clickPower3 *= 1.20;
                clickPower3 = cleanNbr(clickPower3);
            }
            
            upgradeCostMult3 *= 1.3;
            upgradeCostMult3 = cleanNbr(upgradeCostMult3);
            updateUI();
        }
    }

    function clickingUpgrade4()
    {
        if (click >= upgradeCostMult4){
            lvlMult4++;
            click -= upgradeCostMult4;
            click = cleanNbr(click);

            if (clickPower4 === 1){
                clickPower4 = 800;
            }
            else{
                clickPower4 *= 1.25;
                clickPower4 = cleanNbr(clickPower4);
            }
            
            upgradeCostMult4 *= 1.35;
            upgradeCostMult4 = cleanNbr(upgradeCostMult4);
            updateUI();
        }
    }

    function clickingUpgrade5()
    {
        if (click >= upgradeCostMult5){
            lvlMult5++;
            click -= upgradeCostMult5;
            click = cleanNbr(click);

            if (clickPower5 === 1){
                clickPower5 = 10;
            }
            else{
                clickPower5 *= 1.3;
                clickPower5 = cleanNbr(clickPower5);
            }
            
            upgradeCostMult5 *= 1.4;
            upgradeCostMult5 = cleanNbr(upgradeCostMult5);
            updateUI();
        }
    }

    

    // auto click test
    function autoClick1(){
        click += autoClickPower;
        click = cleanNbr(click);
        updateUI();
    }

    function fibonacci(n) {
        if (n <= 1) return 1;
        let a = 1;
        let b = 1;

        for (let i = 2; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    function turnAutoClick()
    {
        if (click >= upgradeCostAuto) {
            click -= upgradeCostAuto;
            click = cleanNbr(click);
            lvlAuto++;
            autoClickPower = fibonacci(lvlAuto - 1);

            if (intervalAutoClick === null){
                intervalAutoClick = setInterval(autoClick1, 5000 / Number(settings.speed));
            }

            upgradeCostAuto = 100 + fibonacci(lvlAuto - 1) * 5;
            upgradeCostAuto = cleanNbr(upgradeCostAuto);
            updateUI();
        }
    }
    // end auto click

    // special click
    function trySuperClick(baseGain) {
        let finalGain = baseGain;
        if (lvlSuper > 0) {
            const roll = Math.random() * 100;

            if (roll < superClickChance) {
                finalGain += superClickValue;
                showFloatingText("Super Request ! (+ " + DisplayNbr(superClickValue)) + ")";
            }
        }
        return finalGain;
    }

    function turnSuperClick() {
        if (click >= upgradeCostSuper) {
            click -=upgradeCostSuper;
            click = cleanNbr(click);
            lvlSuper++;
            superClickChance += 5;
            superClickValue += 10; 
            upgradeCostSuper *= 5;
            upgradeCostSuper = cleanNbr(upgradeCostSuper);
            updateUI();
        }
    }
    // end special slick





    // money 
    function buyAdsManual() {
        if (click >= upgradeCostMoneyManual) {
            click -= upgradeCostMoneyManual;
            click = cleanNbr(click);

            lvlMoneyManual++;

            if (moneyClickPower === 0) {
                moneyClickPower = 1;
            } else {
                moneyClickPower *= 1.1;
                moneyClickPower = cleanNbr(moneyClickPower);
            }

            upgradeCostMoneyManual *= 1.2;
            upgradeCostMoneyManual = cleanNbr(upgradeCostMoneyManual);
            updateUI();
        }
    }

    function autoMoneyTick() {
        money += autoMoneyPower;
        money = cleanNbr(money);
        updateUI();
    }

    function buyAdsAuto() {
        if (click >= upgradeCostMoneyAuto) {
            click -= upgradeCostMoneyAuto;
            click = cleanNbr(click);

            lvlMoneyAuto++;
            
            if (autoMoneyPower === 0) {
                autoMoneyPower = 1;
            } else {
                autoMoneyPower *= 1.1;
                autoMoneyPower = cleanNbr(autoMoneyPower);
            }

            if (intervalAutoMoney === null) {
                intervalAutoMoney = setInterval(autoMoneyTick, 5000 / Number(settings.speed));
            }

            upgradeCostMoneyAuto *= 1.2;
            upgradeCostMoneyAuto = cleanNbr(upgradeCostMoneyAuto);
            updateUI();
        }
    }

    function updateLaunchBtnState() {
        if (!launchBtn) return;
        launchBtn.disabled = !projectCasesBought.every(Boolean);
    }

    function buyProjectCase(index) {
        const cost = projectCaseCosts[index];

        if (projectCasesBought[index]) return;
        if (money < cost) return;

        money -= cost;
        money = cleanNbr(money);
        projectCasesBought[index] = true;
        
        updateUI();
        renderProjectGrid();
    }

    // check for launching btn while 9 case are occupied (pressed)
    function renderProjectGrid() {
        if (!projectGrid) return;

        projectGrid.innerHTML = '';

        projectCaseCosts.forEach((cost, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'project-case';

            if (projectCasesBought[index]) {
                btn.textContent = 'case' + (index + 1) + ' - bought';
                btn.disabled = true;
                btn.classList.add('is-brought');
            } else {
                btn.innerHTML = 'Case ' + (index + 1) + '<br><small>Cost : ' + DisplayNbr(cost) + ' money</small>';
                btn.addEventListener('click', function() {
                    buyProjectCase(index);
                });
            }
            projectGrid.appendChild(btn);
        });
    }

    function launchProjectReset() {
        if (!projectCasesBought.every(Boolean)) return;
        clickingReset();
        // test
    }





    // add btn (to-add)
    function downloadSave() {
        const gameState = {
            clicks: click,
            lvlPlus,
            lvlPlus2,
            lvlPlus3,
            lvlPlus4,
            lvlPlus5,

            lvlMult,
            lvlMult2,
            lvlMult3,
            lvlMult4,
            lvlMult5,

            lvlAuto,
            autoClickPower,
            upgradeCostAuto,

            lvlSuper,
            superClickChance,
            superClickValue,
            upgradeCostSuper,

            money,
            lvlMoneyManual,
            moneyClickPower,
            upgradeCostMoneyManual,

            lvlMoneyAuto,
            autoMoneyPower,
            upgradeCostMoneyAuto,

            projectCasesBought,

            clickPowerPlus,
            clickPowerPlus2,
            clickPowerPlus3,
            clickPowerPlus4,
            clickPowerPlus5,

            clickPower,
            clickPower2,
            clickPower3,
            clickPower4,
            clickPower5,
            
            upgradeCostPlus,
            upgradeCostPlus2,
            upgradeCostPlus3,
            upgradeCostPlus4,
            upgradeCostPlus5,
            
            upgradeCostMult,
            upgradeCostMult2,
            upgradeCostMult3,
            upgradeCostMult4,
            upgradeCostMult5,
            
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
            // Do not hide the game layer when opening settings or credits
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

                // Restore progression
                // add btn (to-add)
                if (data.clicks !== undefined) click = data.clicks;

                if (data.lvlPlus !== undefined) lvlPlus = data.lvlPlus;
                if (data.lvlPlus2 !== undefined) lvlPlus2 = data.lvlPlus2;
                if (data.lvlPlus3 !== undefined) lvlPlus3 = data.lvlPlus3;
                if (data.lvlPlus4 !== undefined) lvlPlus4 = data.lvlPlus4;
                if (data.lvlPlus5 !== undefined) lvlPlus5 = data.lvlPlus5;

                if (data.lvlMult !== undefined) lvlMult = data.lvlMult;
                if (data.lvlMult2 !== undefined) lvlMult2 = data.lvlMult2;
                if (data.lvlMult3 !== undefined) lvlMult3 = data.lvlMult3;
                if (data.lvlMult4 !== undefined) lvlMult4 = data.lvlMult4;
                if (data.lvlMult5 !== undefined) lvlMult5 = data.lvlMult5;

                if (data.lvlAuto !== undefined) lvlAuto = data.lvlAuto;
                if (data.autoClickPower !== undefined) autoClickPower = data.autoClickPower;
                if (data.upgradeCostAuto !== undefined) upgradeCostAuto = data.upgradeCostAuto;

                if (data.lvlSuper !== undefined) lvlSuper = data.lvlSuper;
                if (data.superClickChance !== undefined) superClickChance = data.superClickChance;
                if (data.superClickValue !== undefined) superClickValue = data.superClickValue;
                if (data.upgradeCostSuper !== undefined) upgradeCostSuper = data.upgradeCostSuper;

                if (data.money !== undefined) money = data.money;

                if (data.lvlMoneyManual !== undefined) lvlMoneyManual = data.lvlMoneyManual;
                if (data.moneyClickPower !== undefined) moneyClickPower = data.moneyClickPower;
                if (data.upgradeCostMoneyManual !== undefined) upgradeCostMoneyManual = data.upgradeCostMoneyManual;

                if (data.lvlMoneyAuto !== undefined) lvlMoneyAuto = data.lvlMoneyAuto;
                if (data.autoMoneyPower !== undefined) autoMoneyPower = data.autoMoneyPower;
                if (data.upgradeCostMoneyAuto !== undefined) upgradeCostMoneyAuto = data.upgradeCostMoneyAuto;

                if (Array.isArray(data.projectCasesBought) && data.projectCasesBought.length === 9) {
                    projectCasesBought = data.projectCasesBought;
                }

                if (data.clickPowerPlus !== undefined) clickPowerPlus = data.clickPowerPlus;
                if (data.clickPowerPlus2 !== undefined) clickPowerPlus2 = data.clickPowerPlus2;
                if (data.clickPowerPlus3 !== undefined) clickPowerPlus3 = data.clickPowerPlus3;
                if (data.clickPowerPlus4 !== undefined) clickPowerPlus4 = data.clickPowerPlus4;
                if (data.clickPowerPlus5 !== undefined) clickPowerPlus5 = data.clickPowerPlus5;

                if (data.clickPower !== undefined) clickPower = data.clickPower;
                if (data.clickPower2 !== undefined) clickPower2 = data.clickPower2;
                if (data.clickPower3 !== undefined) clickPower3 = data.clickPower3;
                if (data.clickPower4 !== undefined) clickPower4 = data.clickPower4;
                if (data.clickPower5 !== undefined) clickPower5 = data.clickPower5;

                if (data.upgradeCostPlus !== undefined) upgradeCostPlus = data.upgradeCostPlus;
                if (data.upgradeCostPlus2 !== undefined) upgradeCostPlus2 = data.upgradeCostPlus2;
                if (data.upgradeCostPlus3 !== undefined) upgradeCostPlus3 = data.upgradeCostPlus3;
                if (data.upgradeCostPlus4 !== undefined) upgradeCostPlus4 = data.upgradeCostPlus4;
                if (data.upgradeCostPlus5 !== undefined) upgradeCostPlus5 = data.upgradeCostPlus5;
                
                if (data.upgradeCostMult !== undefined) upgradeCostMult = data.upgradeCostMult;
                if (data.upgradeCostMult2 !== undefined) upgradeCostMult2 = data.upgradeCostMult2;
                if (data.upgradeCostMult3 !== undefined) upgradeCostMult3 = data.upgradeCostMult3;
                if (data.upgradeCostMult4 !== undefined) upgradeCostMult4 = data.upgradeCostMult4;
                if (data.upgradeCostMult5 !== undefined) upgradeCostMult5 = data.upgradeCostMult5;
                
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

                clearInterval(intervalAutoMoney);
                if (lvlMoneyAuto > 0) {
                    intervalAutoMoney = setInterval(autoMoneyTick, 5000 / Number(settings.speed));
                } else {
                    intervalAutoMoney = null;
                }

                updateUI(); 
                showLayer('LayerGameUINoSave'); 
                
                alert('Save imported successfully! Welcome back, Thomas.');
            } catch(err) {
                alert('Failed to parse save file');
            }
        };
        renderProjectGrid();
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

    if(buttonUIMainMenu) {
        buttonUIMainMenu.addEventListener('click', function() {
            showLayer('LayerMenu');
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

            if (intervalAutoMoney) {
                clearInterval(intervalAutoMoney);
                intervalAutoMoney = setInterval(autoMoneyTick, 5000 / Number(settings.speed));
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

    // add btn (to-add)
    if (saveNoSaveBtn) saveNoSaveBtn.addEventListener('click', downloadSave);
    if (mainClickBtn) mainClickBtn.addEventListener('click', clicking);
    if (devClickBtn) devClickBtn.addEventListener('click', clickingDev);
    if (resetBtn) resetBtn.addEventListener('click', clickingReset);

    if (upgradeSimpleBtn1) upgradeSimpleBtn1.addEventListener('click', clickingSimpleUpgrade);
    if (upgradeSimpleBtn2) upgradeSimpleBtn2.addEventListener('click', clickingSimpleUpgrade2);
    if (upgradeSimpleBtn3) upgradeSimpleBtn3.addEventListener('click', clickingSimpleUpgrade3);
    if (upgradeSimpleBtn4) upgradeSimpleBtn4.addEventListener('click', clickingSimpleUpgrade4);
    if (upgradeSimpleBtn5) upgradeSimpleBtn5.addEventListener('click', clickingSimpleUpgrade5);

    if (upgradeBtn1) upgradeBtn1.addEventListener('click', clickingUpgrade);
    if (upgradeBtn2) upgradeBtn2.addEventListener('click', clickingUpgrade2);
    if (upgradeBtn3) upgradeBtn3.addEventListener('click', clickingUpgrade3);
    if (upgradeBtn4) upgradeBtn4.addEventListener('click', clickingUpgrade4);
    if (upgradeBtn5) upgradeBtn5.addEventListener('click', clickingUpgrade5);

    if (autoBtn1) autoBtn1.addEventListener('click', turnAutoClick);
    if (superBtn1) superBtn1.addEventListener('click', turnSuperClick);

    if (adsManualBtn) adsManualBtn.addEventListener('click', buyAdsManual);
    if (adsAutoBtn) adsAutoBtn.addEventListener('click', buyAdsAuto);
    if (launchBtn) launchBtn.addEventListener('click', launchProjectReset);

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

    renderProjectGrid();
    updateSettingsUI();
    applyBackground(); 
    updateUI();
});