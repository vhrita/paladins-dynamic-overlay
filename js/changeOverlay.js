var acctualCharacter = getCookie("acctualCharacter");
if(acctualCharacter == "") { acctualCharacter = "Maeve" }
changeOverlay(acctualCharacter);

function changeOverlay(character) {
        $('#main').fadeOut();
        if(character=="Androxus") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#13131c');
            document.documentElement.style.setProperty('--secondary', '#00fd00');
            document.documentElement.style.setProperty('--img-height', '350px');
            document.documentElement.style.setProperty('--img-top', '29px');
            document.documentElement.style.setProperty('--img-left', '180px');
            document.documentElement.style.setProperty('--img-margin', '10px');
            setCookie('acctualCharacter', 'Androxus');
            acctualCharacter = 'Androxus';
        }else
        if(character=="Ash") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#13131c');
            document.documentElement.style.setProperty('--secondary', '#7D0000');
            document.documentElement.style.setProperty('--img-height', '175px');
            document.documentElement.style.setProperty('--img-top', '105px');
            document.documentElement.style.setProperty('--img-left', '205px');
            document.documentElement.style.setProperty('--img-margin', '188px');
            setCookie('acctualCharacter', 'Ash');
            acctualCharacter = 'Ash';
        }else
        if(character=="Atlas") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#2E2E2E');
            document.documentElement.style.setProperty('--secondary', '#FFB300');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '175px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Atlas');
            acctualCharacter = 'Atlas';
        }else
        if(character=="Barik") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#13131c');
            document.documentElement.style.setProperty('--secondary', '#B62A00');
            document.documentElement.style.setProperty('--img-height', '130px');
            document.documentElement.style.setProperty('--img-top', '147px');
            document.documentElement.style.setProperty('--img-left', '205px');
            document.documentElement.style.setProperty('--img-margin', '230px');
            setCookie('acctualCharacter', 'Barik');
            acctualCharacter = 'Barik';
        }else
        if(character=="BombKing") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#000099');
            document.documentElement.style.setProperty('--secondary', '#DABD00');
            document.documentElement.style.setProperty('--img-height', '130px');
            document.documentElement.style.setProperty('--img-top', '147px');
            document.documentElement.style.setProperty('--img-left', '186px');
            document.documentElement.style.setProperty('--img-margin', '230px');
            setCookie('acctualCharacter', 'BombKing');
            acctualCharacter = 'BombKing';
        }else
        if(character=="Buck") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#331900');
            document.documentElement.style.setProperty('--secondary', '#FF9A00');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '200px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Buck');
            acctualCharacter = 'Buck';
        }else
        if(character=="Cassie") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#660000');
            document.documentElement.style.setProperty('--secondary', '#FFC857');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '185px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Cassie');
            acctualCharacter = 'Cassie';
        }else
        if(character=="Corvus") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#202020');
            document.documentElement.style.setProperty('--secondary', '#D137FF');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '260px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Corvus');
            acctualCharacter = 'Corvus';
        }else
        if(character=="Dredge") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#5b00fd');
            document.documentElement.style.setProperty('--secondary', '#02ffff');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '164px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Dredge');
            acctualCharacter = 'Dredge';
        }else
        if(character=="Drogoz") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#140A00');
            document.documentElement.style.setProperty('--secondary', '#AC5600');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '224px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Drogoz');
            acctualCharacter = 'Drogoz';
        }else
        if(character=="Evie") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#005bfd');
            document.documentElement.style.setProperty('--secondary', '#02ffff');
            document.documentElement.style.setProperty('--img-height', '360px');
            document.documentElement.style.setProperty('--img-top', '25px');
            document.documentElement.style.setProperty('--img-left', '140px');
            document.documentElement.style.setProperty('--img-margin', '0px');
            setCookie('acctualCharacter', 'Evie');
            acctualCharacter = 'Evie';
        }else
        if(character=="Fernando") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#777777');
            document.documentElement.style.setProperty('--secondary', '#DAA520');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '174px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Fernando');
            acctualCharacter = 'Fernando';
        }else
        if(character=="Furia") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#0856F2');
            document.documentElement.style.setProperty('--secondary', '#F2EA08');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '247px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Furia');
            acctualCharacter = 'Furia';
        }else
        if(character=="Grohk") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#895C40');
            document.documentElement.style.setProperty('--secondary', '#A5F1F1');
            document.documentElement.style.setProperty('--img-height', '135px');
            document.documentElement.style.setProperty('--img-top', '143px');
            document.documentElement.style.setProperty('--img-left', '247px');
            document.documentElement.style.setProperty('--img-margin', '226px');
            setCookie('acctualCharacter', 'Grohk');
            acctualCharacter = 'Grohk';
        }else
        if(character=="Grover") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#864606');
            document.documentElement.style.setProperty('--secondary', '#007D26');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '230px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Grover');
            acctualCharacter = 'Grover';
        }else
        if(character=="Imani") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#00001C');
            document.documentElement.style.setProperty('--secondary', '#0000FF');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '295px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Imani');
            acctualCharacter = 'Imani';
        }else
        if(character=="Inara") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#D58E00');
            document.documentElement.style.setProperty('--secondary', '#087300');
            document.documentElement.style.setProperty('--img-height', '140px');
            document.documentElement.style.setProperty('--img-top', '135px');
            document.documentElement.style.setProperty('--img-left', '280px');
            document.documentElement.style.setProperty('--img-margin', '218px');
            setCookie('acctualCharacter', 'Inara');
            acctualCharacter = 'Inara';
        }
        else
        if(character=="Jenos") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#004B44');
            document.documentElement.style.setProperty('--secondary', '#0AB6FF');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '230px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Jenos');
            acctualCharacter = 'Jenos';
        }else
        if(character=="Khan") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#7F0000');
            document.documentElement.style.setProperty('--secondary', '#ce8f00');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '230px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Khan');
            acctualCharacter = 'Khan';
        }else
        if(character=="Kinessa") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#1F1D00');
            document.documentElement.style.setProperty('--secondary', '#E89F21');
            document.documentElement.style.setProperty('--img-height', '140px');
            document.documentElement.style.setProperty('--img-top', '137px');
            document.documentElement.style.setProperty('--img-left', '320px');
            document.documentElement.style.setProperty('--img-margin', '220px');
            setCookie('acctualCharacter', 'Kinessa');
            acctualCharacter = 'Kinessa';
        }else
        if(character=="Koga") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#CD4400');
            document.documentElement.style.setProperty('--secondary', '#EFDF00');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '220px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Koga');
            acctualCharacter = 'Koga';
        }
        else
        if(character=="Lex") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#174ECE');
            document.documentElement.style.setProperty('--secondary', '#FFC400');
            document.documentElement.style.setProperty('--img-height', '140px');
            document.documentElement.style.setProperty('--img-top', '137px');
            document.documentElement.style.setProperty('--img-left', '315px');
            document.documentElement.style.setProperty('--img-margin', '220px');
            setCookie('acctualCharacter', 'Lex');
            acctualCharacter = 'Lex';
        }else
        if(character=="Lian") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#202020');
            document.documentElement.style.setProperty('--secondary', '#FF006F');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '324px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Lian');
            acctualCharacter = 'Lian';
        }else
        if(character=="Maeve") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#5b00fd');
            document.documentElement.style.setProperty('--secondary', '#ff00ff');
            document.documentElement.style.setProperty('--img-height', '360px');
            document.documentElement.style.setProperty('--img-top', '68px');
            document.documentElement.style.setProperty('--img-left', '200px');
            document.documentElement.style.setProperty('--img-margin', '0px');
            setCookie('acctualCharacter', 'Maeve');
            acctualCharacter = 'Maeve';
        }else
        if(character=="Makoa") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#A29700');
            document.documentElement.style.setProperty('--secondary', '#373734');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '150px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Makoa');
            acctualCharacter = 'Makoa';
        }else
        if(character=="MalDamba") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#6E2602');
            document.documentElement.style.setProperty('--secondary', '#529100');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '280px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'MalDamba');
            acctualCharacter = 'MalDamba';
        }else
        if(character=="Moji") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#00007F');
            document.documentElement.style.setProperty('--secondary', '#006600');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '240px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Moji');
            acctualCharacter = 'Moji';
        }else
        if(character=="Pip") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#000099');
            document.documentElement.style.setProperty('--secondary', '#00CCCC');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '315px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Pip');
            acctualCharacter = 'Pip';
        }else
        if(character=="Raum") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#3A3A3A');
            document.documentElement.style.setProperty('--secondary', '#DE5227');
            document.documentElement.style.setProperty('--img-height', '90px');
            document.documentElement.style.setProperty('--img-top', '185px');
            document.documentElement.style.setProperty('--img-left', '150px');
            document.documentElement.style.setProperty('--img-margin', '268px');
            setCookie('acctualCharacter', 'Raum');
            acctualCharacter = 'Raum';
        }else
        if(character=="Ruckus") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#AE5B32');
            document.documentElement.style.setProperty('--secondary', '#393434');
            document.documentElement.style.setProperty('--img-height', '90px');
            document.documentElement.style.setProperty('--img-top', '185px');
            document.documentElement.style.setProperty('--img-left', '173px');
            document.documentElement.style.setProperty('--img-margin', '268px');
            setCookie('acctualCharacter', 'Ruckus');
            acctualCharacter = 'Ruckus';
        }else
        if(character=="Seris") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#520029');
            document.documentElement.style.setProperty('--secondary', '#8C00BF');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '280px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Seris');
            acctualCharacter = 'Seris';
        }else
        if(character=="Sha-Lin") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#FF4D00');
            document.documentElement.style.setProperty('--secondary', '#daa520');
            document.documentElement.style.setProperty('--img-height', '110px');
            document.documentElement.style.setProperty('--img-top', '167px');
            document.documentElement.style.setProperty('--img-left', '260px');
            document.documentElement.style.setProperty('--img-margin', '249px');
            setCookie('acctualCharacter', 'Sha-Lin');
            acctualCharacter = 'Sha-Lin';
        }else
        if(character=="Skye") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#202020');
            document.documentElement.style.setProperty('--secondary', '#A700DA');
            document.documentElement.style.setProperty('--img-height', '110px');
            document.documentElement.style.setProperty('--img-top', '167px');
            document.documentElement.style.setProperty('--img-left', '300px');
            document.documentElement.style.setProperty('--img-margin', '250px');
            setCookie('acctualCharacter', 'Skye');
            acctualCharacter = 'Skye';
        }else
        if(character=="Strix") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#523D2B');
            document.documentElement.style.setProperty('--secondary', '#978E58');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '295px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Strix');
            acctualCharacter = 'Strix';
        }else
        if(character=="Talus") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#2F2D23');
            document.documentElement.style.setProperty('--secondary', '#A19140');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '260px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Talus');
            acctualCharacter = 'Talus';
        }else
        if(character=="Terminus") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#1E0808');
            document.documentElement.style.setProperty('--secondary', '#A700DA');
            document.documentElement.style.setProperty('--img-height', '115px');
            document.documentElement.style.setProperty('--img-top', '162px');
            document.documentElement.style.setProperty('--img-left', '168px');
            document.documentElement.style.setProperty('--img-margin', '245px');
            setCookie('acctualCharacter', 'Terminus');
            acctualCharacter = 'Terminus';
        }else
        if(character=="Tiberius") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#C16700');
            document.documentElement.style.setProperty('--secondary', '#372914');
            document.documentElement.style.setProperty('--img-height', '115px');
            document.documentElement.style.setProperty('--img-top', '162px');
            document.documentElement.style.setProperty('--img-left', '188px');
            document.documentElement.style.setProperty('--img-margin', '245px');
            setCookie('acctualCharacter', 'Tiberius');
            acctualCharacter = 'Tiberius';
        }else
        if(character=="Torvald") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#404040');
            document.documentElement.style.setProperty('--secondary', '#0033FF');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '280px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Torvald');
            acctualCharacter = 'Torvald';
        }else
        if(character=="Tyra") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#550000');
            document.documentElement.style.setProperty('--secondary', '#BC5100');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '310px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Tyra');
            acctualCharacter = 'Tyra';
        }else
        if(character=="Viktor") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#282828');
            document.documentElement.style.setProperty('--secondary', '#00FFFF');
            document.documentElement.style.setProperty('--img-height', '135px');
            document.documentElement.style.setProperty('--img-top', '142px');
            document.documentElement.style.setProperty('--img-left', '323px');
            document.documentElement.style.setProperty('--img-margin', '225px');
            setCookie('acctualCharacter', 'Viktor');
            acctualCharacter = 'Viktor';
        }else
        if(character=="Vivian") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#370000');
            document.documentElement.style.setProperty('--secondary', '#7A3806');
            document.documentElement.style.setProperty('--img-height', '150px');
            document.documentElement.style.setProperty('--img-top', '126px');
            document.documentElement.style.setProperty('--img-left', '338px');
            document.documentElement.style.setProperty('--img-margin', '209px');
            setCookie('acctualCharacter', 'Vivian');
            acctualCharacter = 'Vivian';
        }else
        if(character=="Vora") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#312C39');
            document.documentElement.style.setProperty('--secondary', '#7D0000');
            document.documentElement.style.setProperty('--img-height', '90px');
            document.documentElement.style.setProperty('--img-top', '187px');
            document.documentElement.style.setProperty('--img-left', '228px');
            document.documentElement.style.setProperty('--img-margin', '270px');
            setCookie('acctualCharacter', 'Vora');
            acctualCharacter = 'Vora';
        }else
        if(character=="Willo") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#C906AF');
            document.documentElement.style.setProperty('--secondary', '#F7FF00');
            document.documentElement.style.setProperty('--img-height', '120px');
            document.documentElement.style.setProperty('--img-top', '157px');
            document.documentElement.style.setProperty('--img-left', '235px');
            document.documentElement.style.setProperty('--img-margin', '240px');
            setCookie('acctualCharacter', 'Willo');
            acctualCharacter = 'Willo';
        }else
        if(character=="Yagorath") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#C74A4A');
            document.documentElement.style.setProperty('--secondary', '#4C6DC7');
            document.documentElement.style.setProperty('--img-height', '110px');
            document.documentElement.style.setProperty('--img-top', '167px');
            document.documentElement.style.setProperty('--img-left', '220px');
            document.documentElement.style.setProperty('--img-margin', '250px');
            setCookie('acctualCharacter', 'Yagorath');
            acctualCharacter = 'Yagorath';
        }else
        if(character=="Ying") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#00754E');
            document.documentElement.style.setProperty('--secondary', '#22C68F');
            document.documentElement.style.setProperty('--img-height', '110px');
            document.documentElement.style.setProperty('--img-top', '167px');
            document.documentElement.style.setProperty('--img-left', '185px');
            document.documentElement.style.setProperty('--img-margin', '250px');
            setCookie('acctualCharacter', 'Ying');
            acctualCharacter = 'Ying';
        }else
        if(character=="Zhin") {
            $('#main').fadeIn('slow');
            document.documentElement.style.setProperty('--primary', '#181818');
            document.documentElement.style.setProperty('--secondary', '#287233');
            document.documentElement.style.setProperty('--img-height', '160px');
            document.documentElement.style.setProperty('--img-top', '115px');
            document.documentElement.style.setProperty('--img-left', '300px');
            document.documentElement.style.setProperty('--img-margin', '198px');
            setCookie('acctualCharacter', 'Zhin');
            acctualCharacter = 'Zhin';
        }
        else {
            changeOverlay('Maeve');
        }
}

$(document).ready(function(){
    var i = 0;
    function myLoop() {
        if(acctualCharacter=='Androxus' || acctualCharacter=='Maeve' || acctualCharacter=='Evie') {
            if(i<10) {
                setTimeout(function(){
                    document.getElementById('ch').src="./assets/"+acctualCharacter+"/png_alpha/"+acctualCharacter+"_0000"+i+".png";
                    if(i<82) {
                        i++;
                        myLoop();
                    } else {
                        i = 0;
                        myLoop();
                    }
                }, 50);
            } else {
                setTimeout(function(){
                    document.getElementById('ch').src="./assets/"+acctualCharacter+"/png_alpha/"+acctualCharacter+"_000"+i+".png";
                    if(i<82) {
                        i++;
                        myLoop();
                    } else {
                        i = 0;
                        myLoop();
                    }
                }, 50);
            }
        }
        else {
            setTimeout(function(){
                document.getElementById('ch').src="./assets/"+acctualCharacter+"/"+acctualCharacter+"_cintura.png";
                myLoop();
            }, 50);
        }
    }
    myLoop();
});