graphlinkegrenze = 17
graphbreiteinviertelstunden = 48//(28-graphlinkegrenze)*4
incident_toggle =true
overridedisplay9 = false
overridereport = false
overrideleadership = false
parking_list ={geo:[],tooltip:[],usage:[]}
fenster = {hoehe:window.innerHeight-30,breite:window.innerWidth-35};
existing_markers=[]
realtime = true // diese variabel zeig ob wir grade ein zeit ausgewählt haben oder in realzeit anzeigen
isZooming = false
swipes_arr =[]
eventmarkertoggle = false
locked = true
imageBounds = [[ 25.00124, 46.49093],[24.99111, 46.5245]];
currentTimestamp = new Date()
set_area=0
current = {"BAB (GA)":{"density":0,"tension":0,"usage":0,"zeit":1737832895802},"BAB (VIB)":{"density":9,"tension":4,"usage":150,"zeit":1737740607057},"OMDA (GA)":{"density":8,"tension":7,"usage":70,"zeit":1737319214206},"OMDA (VIB)":{"density":3,"tension":0,"usage":0,"zeit":1737318589426},"ROSHAN (GA)":{"density":8,"tension":8,"usage":120,"zeit":1737318583338},"ROSHAN (VIB SL)":{"density":3,"tension":0,"usage":150,"zeit":1737833143162},"ROSHAN (VIB SR)":{"density":4,"tension":0,"usage":55,"zeit":1737833147432},"ROSHAN (VIB)":{"density":0,"tension":0,"usage":0,"zeit":1737318561634},"SOUQ (GA)":{"density":7,"tension":0,"usage":145,"zeit":1737319269201},"VIB house Firwan":{"density":0,"tension":0,"usage":30,"zeit":1737833076241},"VIB house Layali Tarikhiya":{"density":0,"tension":2,"usage":0,"zeit":1737833073721},"VIB house Zait Zainal":{"density":0,"tension":0,"usage":0,"zeit":1737833070562},"VIB house visitor center":{"density":0,"tension":0,"usage":0,"zeit":1737833068529}}
swipemode = false
set_name ="wrong reporter"
//imageBounds = [[ 21.48637, 39.1847],[21.49048, 39.19108]];
set_pos=[9,9]
eventloc = [0,0]
farbskala = ["lightblue","#00B0F0","#00B0F0","#92D050","#92D050","#FFFF00","#FFFF00","#FF9201","#FF9201","#FF0000",'red',"#ee00ff","#ee00ff","#ee00ff","#ee00ff","#ee00ff"
]
list_of_reporters = [ "Conor", "Marc","Eric", "Shane","Paul","Chris","Jodie"]
//"aideen","keith","marc","dave","sascha","anto","olly","sjors","conor","jasja","dessie","neil","claire","colm","ger","ian","martin","eric","peter","demo","sandro","marcel","medical","mark"]
//list_of_credentials= ["none","s","m","none","none", "m","d","s","a","o","s","c","j","d","n","c","c","g","i","m","e","p"]
camcountarr ={x:[],y:[]}
// hier wird der integer heutag gefunden der als prefix für eintragungen in die Firebas genutzt wird
// X-1 ist der Tag vor dem Event
heutdatum = new Date().getTime()
heutag = -99
if (heutdatum > new Date("2025-01-25T12:00").getTime()){heutag=-5;start_graphdata = new Date ("2025-01-25T12:00")}
if (heutdatum > new Date("2025-01-26T12:00").getTime()){heutag=-4;start_graphdata = new Date ("2025-01-26T12:00")}
if (heutdatum > new Date("2025-01-27T12:00").getTime()){heutag=-3;start_graphdata = new Date ("2025-01-27T12:00")}
if (heutdatum > new Date("2025-01-28T12:00").getTime()){heutag=-2;start_graphdata = new Date ("2025-01-28T12:00")}
if (heutdatum > new Date("2025-01-29T12:00").getTime()){heutag=-1;start_graphdata = new Date ("2025-01-29T12:00")}
if (heutdatum > new Date("2025-01-30T12:00").getTime()){heutag=1;start_graphdata = new Date ("2025-01-30T12:00")}
if (heutdatum > new Date("2025-01-31T12:00").getTime()){heutag=2;start_graphdata = new Date ("2025-01-31T12:00")}
if (heutdatum > new Date("2025-02-01T12:00").getTime()){heutag=3;start_graphdata = new Date ("2025-02-01T12:00")}
//let asr = start_graphdata
//xranger =[asr.setHours(15).gettime(),asr.setHours(28).gettime()]

start_graphdata = start_graphdata.getTime()
console.log('Heutag = ' +heutag)

// 30 ab 12:00 ist 1


// icons
fluchtrouten =[[[  21.4877221786164,  39.187526445068904],[  21.48767481583159,  39.18755492272191],[  21.487616085957036,  39.18759967331953],[  21.48756682862465,  39.18763221920868],[  21.487530832871183,  39.18765662862557],[  21.487502415164794,  39.18778070982803],[  21.48748347002411,  39.187829528661766],[  21.487438001676452,  39.187874279259404],[  21.4873697991283,  39.187914961620876],[  21.487305385581283,  39.187921063975104],[  21.48723718297098,  39.18792309809314],[  21.487176558401682,  39.187945473391956],[  21.4871348789956,  39.188043111059464],[  21.487096988616116,  39.18807362283058],[  21.4870136297465,  39.18809396401131],[  21.486949216041857,  39.18810210048357],[  21.48687722422056,  39.18810820283779],[  21.486799548794483,  39.188114305192045],[  21.48670861165761,  39.18813261225468]
],[[  21.487340637016263,  39.18833481436709],[  21.48713607149033,  39.18836752660025],[  21.487022907458858,  39.1882600435484],[  21.48692715320967,  39.18815723367266],[  21.486883628530087,  39.188110501910955],[  21.486713882155495,  39.18812452143946]
],[[  21.487336193177743,  39.18834891972944],[  21.487579930457702,  39.18831620749624],[  21.48761039758903,  39.188428363724306]
],[[  21.487500970873057,  39.187798855294965],[  21.487503470699192,  39.18789816458588],[  21.487528468958242,  39.18799478984187],[  21.48758346511299,  39.18807531088855],[  21.487620962479323,  39.18818804035387],[  21.487648460541838,  39.18831418999368],[  21.48761096318258,  39.188469864017236],[  21.487605963533948,  39.18866311452922],[  21.48759596423616,  39.18873021540144],[  21.487550967387698,  39.18873826750611]
],[  [    21.48950883162373,    39.1863210956446  ],  [    21.489854024653656,    39.186401233023815  ],  [    21.489908835633752,    39.186382450825576  ],  [    21.490128079347723,    39.18642878024796  ]],[  [    21.489236264494604,    39.18657819091911  ],  [    21.48950624225059,    39.18631783953486  ],  [    21.489558737867192,    39.18625342269751  ],  [    21.48958873535391,    39.186162165511305  ],  [    21.489608733674935,    39.1861165369182  ],  [    21.489666228832604,    39.18609506463908  ],  [    21.4897087252389,    39.186054804115734  ],  [    21.4897087252389,    39.18602259569708  ]],  [  [    21.489237547571797,    39.18657911892087  ],  [    21.489372056396064,    39.18673778013055  ],  [    21.489408051694152,    39.186796769554704  ],  [    21.489413735161456,    39.18685169074266  ],  [    21.489362583947724,    39.18712629668253  ],  [    21.489360689458,    39.187166979044  ]],[  [    21.48929818352155,    39.186656325463666  ],  [    21.48920914243758,    39.18712417262047  ],  [    21.489228087353656,    39.18714451380122  ],  [    21.489345545778047,    39.18717502557229  ],  [    21.489345545778047,    39.18717502557229  ]],[  [    21.488728735732632,    39.18751014535845  ],  [    21.488758422342727,    39.187665975990285  ],  [    21.489012407537114,    39.18774743291145  ],  [    21.489048691100145,    39.18757389425329  ],  [    21.489352153272986,    39.18757389425329  ],  [    21.48943131721402,    39.187662434385004  ],  [    21.48953686906841,    39.18759160227966  ],  [    21.489655614813074,    39.18751368696374  ],  [    21.489800748369426,    39.18745347967415  ],  [    21.49002504539908,    39.18747118770051  ]],[  [    21.488724842938492,    39.1874955976959  ],  [    21.488772339228397,    39.187288927009455  ]],[  [    21.48781646117258,    39.18741719387038  ],  [    21.488252995843077,    39.18742877962254  ],  [    21.4885038225624,    39.18740399636338  ],  [    21.488773114571334,    39.187291645588374  ],  [    21.488919301453215,    39.1872073825071  ],  [    21.489257838931703,    39.18720077363801  ],  [    21.489380314922865,    39.1871877031382  ],  [    21.489451099872895,    39.18720092087639  ],  [    21.48962960089836,    39.18718439870364  ],  [    21.489688075324594,    39.18719926865915  ],  [    21.48987273125321,    39.18738762142897  ],  [    21.489977369508775,    39.18746031898926  ],  [    21.490108167222413,    39.18749005890027  ],  [    21.490155869888742,    39.187499972203966  ]],[  [    21.489238190988264,    39.186575519688674  ],  [    21.48899859585577,    39.1868894560716  ],  [    21.48886255437617,    39.18690471686799  ],  [    21.48880164023957,    39.18687637538898  ],  [    21.48878742693738,    39.18659296059883  ],  [    21.488759000328795,    39.1862092605752  ],  [    21.488665598575864,    39.18617873898242  ],  [    21.488643615026216,    39.18611923092993  ],  [    21.48862947398431,    39.185929441002884  ],  [    21.488608262418882,    39.18590287041304  ],  [    21.488523416126203,    39.185887687218894  ],  [    21.488498669281515,    39.1858459334349  ],  [    21.48851634559959,    39.18553467795447  ]],[  [    21.4882987702713,    39.186262005448256  ],  [    21.488340449344058,    39.18617453837112  ],  [    21.488361288875947,    39.186166401898866  ],  [    21.488584840030455,    39.18618064072535  ],  [    21.48864167501498,    39.18615012895427  ]],[  [    21.488293244039603,    39.18626962002643  ],  [    21.488220749457504,    39.18630719651487  ],  [    21.48817825261672,    39.186379665456876  ],  [    21.48813825557878,    39.18645481843376  ],  [    21.488093258897944,    39.186473606678  ],  [    21.487990766406345,    39.18647629071288  ]],[  [    21.48780168721158,    39.18741940591524  ],  [    21.487871326253337,    39.187363327801215  ],  [    21.48788003113122,    39.18723247886849  ],  [    21.487862621374962,    39.18698012735537  ],  [    21.487901793323637,    39.18667169772821  ],  [    21.487923555512822,    39.186559541500145  ],  [    21.487993194496276,    39.18647542432912  ],  [    21.487993194496276,    39.18624176552065  ],  [    21.48802366154108,    39.18591464318879  ],  [    21.488075890745897,    39.18570435026119  ]],[  [    21.488599219289416,    39.1881444081606  ],  [    21.48852612219023,    39.18808554508884  ],  [    21.48836571453831,    39.188037582585906  ],  [    21.48813691640847,    39.18801362506353  ],  [    21.4878526488024,    39.18799182392585  ],  [    21.487751124522788,    39.187989643812024  ],  [    21.48768817943387,    39.18815969268617  ],  [    21.48761508187709,    39.18848234952418  ],  [    21.48759955943263,    39.188735018777905  ],  [    21.487532553299506,    39.18872847843659  ]],[  [    21.48728134629392,    39.18708538749369  ],  [    21.48721637050809,    39.18713989033797  ],  [    21.48716560815527,    39.18728813807433  ],  [    21.48717779112155,    39.1873404608048  ],  [    21.487476273477355,    39.18743638581074  ],  [    21.487709779655486,    39.187523590361515  ]],[  [    21.487284620341185,    39.18708513024878  ],  [    21.487309618637802,    39.18699118902766  ],  [    21.487359615218168,    39.186964348678764  ],  [    21.487539602765263,    39.18700729323699  ],  [    21.487717090267378,    39.18702608148122  ],  [    21.487794584742666,    39.18702339744636  ],  [    21.487862079897205,    39.18698850499279  ]]

]

// http://vpn01.unifiedcommand.com:5601/app/dashboards#/view/35dd4b60-70ff-11ed-91e1-4b96f18a57f5?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))
medstations =[

{name:"medical station 2",capacity: 0,coords:[21.488903118622463,39.18620950383289
],geo:[]},
{name:"medical tent",capacity: 0,coords:[21.48928522053004,39.18713797796531
],geo:[]}
]

restrooms=
[
   
    [
      21.489901763395288,
      39.18569986782693
    ],
    
    [
      21.487794906689405,
      39.18619658323829
    ],
    [
      21.488022035665928,
      39.18737593779283
    ],
    [
      21.48770273830797,
      39.188055926004445
    ]
  ]



/*
[[  21.488117235601838,  39.18680153548758],[  21.48848720783689,  39.185201850693765]
]
*/

count_data=[[0]]

stages_list=[   
{name:"BAB (GA)"  ,capacity: 6650,short: "bc",coords:[[  21.48945687070726,  39.1857168133733],[  21.489434183757158,  39.18585513340225],[  21.48939768496037,  39.185847519529595],[  21.48934990742264,  39.18614660280443],[  21.48934339230265,  39.18618165162571],[  21.489371624487198,  39.1862096906827],[  21.48935642254236,  39.186289134677565],[  21.489265210839967,  39.18619800774229],[  21.489230463509735,  39.186188661389956],[  21.489203317152246,  39.18642932996262],[  21.488935110867825,  39.18638026161289],[  21.48893836843698,  39.18614777109849],[  21.48894271186245,  39.18603911975253],[  21.48899157538985,  39.18569330471604],[  21.489045868178774,  39.185673443717356],[  21.48914142343816,  39.18566760224708]
]},
{name:"BAB (VIB)"  ,capacity: 1235,short: "bc","coords":[[  21.489770717182328,  39.18575415021308],[  21.489724566545807,  39.186049394050855],[  21.489450157053614,  39.18600108142287],[  21.489426458027744,  39.186156755446426],[  21.489390285822928,  39.18615138737665],[  21.489442673151135,  39.18579709477131],[  21.48948009265974,  39.18580380485851],[  21.489491318510435,  39.1857246258293],[  21.489528738006534,  39.18573536196884],[  21.48953123263926,  39.185713889689715]]},
{name:"OMDA (GA)"  ,capacity: 1836,short: "bc",coords:[[  21.488785062482584,  39.18678996144318],[  21.488744407022917,  39.18688485640671],[  21.488749709909627,  39.18698354716879],[  21.488800971137668,  39.18700252616153],[  21.488903493539546,  39.18700632196005],[  21.488905261166522,  39.18716764339806],[  21.488952987087032,  39.18717903079372],[  21.488947684207737,  39.187220784577676],[  21.488777991968693,  39.18717713289444],[  21.4887320336199,  39.18720749928276],[  21.488634813988106,  39.187017709355715],[  21.488555270604667,  39.18701581145639],[  21.488560573498262,  39.18689814170162],[  21.48864718739941,  39.186869673212534],[  21.488721427845054,  39.18678996144318],[  21.488777991968693,  39.18676528875265]]},
{name:"OMDA (VIB)"  ,capacity: 406,short: "bc",coords:[[  21.488981662159745,  39.18694006158406],[  21.488983001769785,  39.18705512867872],[  21.488964247228154,  39.187059443694736],[  21.488961568007742,  39.18713567564493],[  21.488945492684127,  39.18713855232235],[  21.488945492684127,  39.18716731909599],[  21.488910662810245,  39.187165880757334],[  21.488907983588827,  39.18699903347008],[  21.488808852361817,  39.18700047180872],[  21.48880483352686,  39.18694006158406]]},
{name:"ROSHAN (GA)"  ,capacity: 1332,short: "bc",coords:[[21.488689038185033,39.18760282053763],[21.488640694187637,39.187723570481026],[21.488624385365625,39.187737334723295],[21.488618560785877,39.18778113003954],[21.488650013513674,39.187799899460806],[21.488613318663905,39.18785996160885],[21.488592932632272,39.18795380871514],[21.48850731126819,39.187943172709744],[21.488495662099087,39.187933787999135],[21.48850148668373,39.187853705135076],[21.488482265553507,39.18778113003954],[21.488484012929078,39.18769228811225],[21.48847585850953,39.18765474926974],[21.48847644096807,39.18758717935324],[21.488488090138688,39.18758530241111],[21.488489255055693,39.187575917700464]]},
{name:"ROSHAN (VIB SL)"  ,capacity: 104,short: "bc",coords:[[  21.488623659678744,  39.18787473140093],[  21.488650182667225,  39.18787981669615],[  21.488624606928447,  39.188017119666064],[  21.488615134431456,  39.18801610260702],[  21.48862271242909,  39.18797745436362],[  21.48860424105915,  39.18797186053893]]},
{name:"ROSHAN (VIB SR)"  ,capacity: 74,short: "bc",coords:[[  21.488476505271713,  39.187854200909214],[  21.4885138351173,  39.18785882562891],[  21.488500195367106,  39.187978297554295],[  21.488482248325496,  39.18797598519448],[  21.488479735739485,  39.18799641103978],[  21.488461070813532,  39.18799332789332]]},
{name:"SOUQ (GA)"  ,capacity: 540,short: "bc",coords:[[  21.488358963177674,  39.18561826706323],[  21.48835838071865,  39.18570648334315],[  21.488282078566165,  39.185707734637894],[  21.48826343986635,  39.18570898593264],[  21.48825703281273,  39.18572149888016],[  21.488258197731604,  39.18585601306583],[  21.488262857406944,  39.18588854672935],[  21.488229657216838,  39.18588917237673],[  21.488225579999988,  39.185858515655326],[  21.48811083542184,  39.18587165425022],[  21.488108505581746,  39.185909193092726],[  21.48806016139151,  39.185916700861256],[  21.488128891681253,  39.18578281232292],[  21.488121902161765,  39.18577530455443],[  21.48812656184144,  39.18575716078055],[  21.48813762858017,  39.18575653513317],[  21.488142288259375,  39.185677703563904],[  21.488134716280584,  39.185668944500634],[  21.488138793499974,  39.185628903068626]]},
{name:"VIB house visitor center",capacity:400,  "coords":    [[  21.48921531650991,  39.18669950624433],[  21.489224377392286,  39.18670746943536],[  21.489204608193663,  39.186964945945356],[  21.489193899876614,  39.186975563533366],[  21.48900773977748,  39.18697733313139],[  21.48902833272051,  39.18670658463637]]},
{name:"VIB house Bait Zainal",capacity:250, coords:[[  21.48924100059012,  39.18567556384135],[  21.489264276380855,  39.185502767617336],[  21.489463284239825,  39.18553907986726],[  21.489456301512536,  39.18559167002242],[  21.489473758330114,  39.18559542646209],[  21.489463284239825,  39.18565552949653],[  21.489451646360823,  39.185653025203436],[  21.489442336056968,  39.18570937179822]]},
{name:"VIB house Layali Tarikhiya",capacity:105,coords:[  [    21.48717536201759,    39.18645182938023  ],  [    21.487186883110198,    39.18649255784081  ],  [    21.48717536201759,    39.186522661485576  ],  [    21.48718852898049,    39.18657667096594  ],  [    21.48699925377411,    39.18658641038046  ],  [    21.486988555602903,    39.18657844176857  ],  [    21.486975388621886,    39.18652354688689  ],  [    21.48702723360272,    39.18651203666979  ],  [    21.48702229598628,    39.186503182656594  ],  [    21.487135038186228,    39.18646333959733  ],  [    21.48713256937989,    39.1864562563868  ],  [    21.487149851023535,    39.18645005857757  ],  [    21.487152319829605,    39.18645891259074  ]]},
{name:"VIB house Bait Firwan",capacity:50,coords:[[  21.48743364403898,  39.187148752320354],[  21.48743798750932,  39.187198404817146],[  21.487430929369925,  39.187198404817146],[  21.487426585899353,  39.187272007341825],[  21.48732668604058,  39.18727434392991],[  21.487322885501086,  39.18714641573227]]},
{name:"MDL town",capacity:0, coords: [[  21.488044987945077,  39.18689353966279],[  21.48824312375734,  39.1868889149431],[  21.488261788711245,  39.18694441157938],[  21.488190000413844,  39.18694132843293],[  21.488185693114872,  39.18692899584705],[  21.488043552177327,  39.186930537420324],[  21.488004786443017,  39.18703382282679],[  21.487978942614355,  39.1870831531702],[  21.48795022724385,  39.18708931946308],[  21.487937305325268,  39.18710473519541],[  21.487911461484664,  39.18710011047572],[  21.487920076098707,  39.187055404851996],[  21.487914333022747,  39.187043072266164],[  21.4878655168678,  39.187029198107105],[  21.487831058395642,  39.187112443061594],[  21.487825315316158,  39.187146357672674],[  21.487796599915345,  39.18713864980649],[  21.487770292080132,  39.187106022461506],[  21.487666916571516,  39.18709214830244],[  21.48764910917458,  39.18714999095047],[  21.487590351145577,  39.18718971294792],[  21.48755335533736,  39.187178030007466],[  21.48753159309282,  39.18721775200496],[  21.48743366295221,  39.187175693419384],[  21.487448896533962,  39.1870097956654],[  21.48742495804764,  39.18695605413946],[  21.48741842936887,  39.186935024846676],[  21.48751853574457,  39.1869513809633],[  21.48753376931743,  39.18691866873013],[  21.48761864205138,  39.18692801508242],[  21.487622994497947,  39.18680651250203],[  21.48777533004558,  39.18679716614974],[  21.487770977603578,  39.18665229768847],[  21.48780144469488,  39.18664295133614],[  21.487784034929224,  39.18656117075319],[  21.487840616660073,  39.186549487812776],[  21.487879788614688,  39.186694356274],[  21.487858026418976,  39.18683922473523],[  21.487864555078037,  39.186867263792266],[  21.487936370308322,  39.18688595649693]
]},{name:"OMDA approach",capacity:0,coords:[    [  21.488959508365248,  39.18674198768882],[  21.488974736885286,  39.18659155983864],[  21.48891077709049,  39.18659592006622],[  21.488890472387876,  39.1866329820003],[  21.488863061034838,  39.1866329820003],[  21.48882448208477,  39.18665260302423],[  21.48878590312446,  39.18668421467388],[  21.488743263209084,  39.18672018655112],[  21.488705699463786,  39.18672999706308],[  21.488615343387995,  39.18682156184144],[  21.488588947220457,  39.18681393144321],[  21.488514834878263,  39.186835732580946],[  21.488266101399187,  39.18687497462884],[  21.488258994722123,  39.18692293713177],[  21.48845392059616,  39.186896775766485],[  21.488458996787323,  39.18688369508388],[  21.48856458152307,  39.18688805531146],[  21.488648846209163,  39.18686080388929],[  21.48873108037383,  39.18677359933848],[  21.48875950698786,  39.18676378882651],[  21.488790979304042,  39.1867430777457]
]},
{name:"ROSHAN approach",capacity:0,coords:[[  21.487722257806283,  39.18740992768433],[  21.487737225787814,  39.18751192101011],[  21.48826598853853,  39.18752385539883],[  21.488297510194528,  39.18755777000992],[  21.48847517758257,  39.187563936302794],[  21.4884938039897,  39.18752385539883],[  21.488374881503066,  39.18748377449484],[  21.488228735663533,  39.18748069134838],[  21.488228735663533,  39.187442152017574],[  21.4879550700203,  39.1873928216742],[  21.487890593746737,  39.187449859883756]
]},{name:"GA",capacity:0,coords:[[  21.487716662214183,  39.18741975969314],[  21.48772949050615,  39.187517427124156],[  21.487642024856648,  39.187883053917005],[  21.48761053720995,  39.188057102287594],[  21.487581032524037,  39.18816679511122],[  21.487315038264825,  39.18819513659023],[  21.487266306439462,  39.18782233713548],[  21.48759321545553,  39.18776347406371]
]}
]


totalCapacity = stages_list.reduce((sum, stage) => sum + (stage.capacity || 0), 0);

vib_arr=[] 
inert_arr=[]
parking_arr=[ ]
greening_arr=[
{name:"Bab Jadid",coords:[[  21.48923584167627,  39.18623687883871],[  21.489288086367246,  39.186245508870805],[  21.48928607695642,  39.18625270056424],[  21.489300142831755,  39.18624838554822],[  21.489318897330083,  39.18625701558031],[  21.489325595364598,  39.18626852228973],[  21.48932827457834,  39.18628722069264],[  21.489325595364598,  39.18630088491012],[  21.489315548312693,  39.18631167245025],[  21.48930349184948,  39.186317425804965],[  21.489293444796047,  39.18631814497433],[  21.48928272793828,  39.186382151045734],[  21.489296124010362,  39.18638790440049],[  21.489306840867123,  39.1864044452953],[  21.489310859688224,  39.18642242452884],[  21.489299473028186,  39.186441842101075],[  21.489288086367246,  39.18644903379447],[  21.489268662061253,  39.186450472133195],[  21.489258615005415,  39.186443999609125],[  21.489251247164024,  39.186446876286496],[  21.489205030695874,  39.18643680791569]]},
{name:"green room",coords:[[  21.488875076962902,  39.18601801813683],[  21.488876165065186,  39.18630191358909],[  21.488748857045646,  39.18629840870695],[  21.488752121355247,  39.186015681548746]]}]

hinter=[
{name:"Bab Jadid",coords:[[21.488447577176952, 39.1856608576795], [21.48846139791826, 39.185677379852294], [21.48847137956397, 39.18576164293352], [21.488466772650625, 39.185942560725636], [21.488475218658273, 39.18594338683425], [21.48849287849081, 39.186073085890705], [21.488694978610482, 39.1860416645395], [21.48872185222723, 39.18630106265234], [21.488711870598735, 39.1863043670869], [21.48870496024012, 39.1863142803906], [21.48862357154752, 39.1863241936943], [21.488612054276032, 39.18631510649922], [21.488603608276346, 39.18631510649922], [21.48860207263998, 39.186302714869655], [21.488506863154154, 39.18631758482516], [21.488503791879374, 39.1863043670869], [21.488376333919135, 39.1863266720202], [21.48837710208361, 39.18635641642706], [21.488180540192204, 39.18637376470847], [21.48806613490661, 39.18636550362209], [21.488036189884134, 39.18631924153826], [21.488055385412064, 39.186350633666585], [21.48801315524727, 39.18637872136032], [21.487970925070183, 39.18637706914304], [21.48796247903332, 39.18643985339967], [21.488007012676793, 39.18644811448604], [21.48798858496391, 39.18660342291032], [21.487860358730384, 39.186591857389345], [21.487888768145133, 39.18630189325684], [21.487901821117653, 39.186281240540865], [21.48791794537617, 39.186124279899296], [21.487918713197963, 39.18603175573165], [21.488053849769937, 39.18598797197375], [21.4880699740116, 39.18598714586509], [21.488106061593673, 39.18593179658625], [21.48810759723529, 39.18591527441346], [21.488115275442983, 39.185912796087514], [21.488110668518416, 39.18587644730737], [21.488225073768987, 39.185858272917294], [21.48823198415036, 39.18588883893697], [21.488265768232395, 39.185890491154254], [21.488258857852614, 39.18585579459139], [21.488265000412436, 39.185723617209035], [21.488320283439148, 39.18565835462653]]},
{coords:[[21.48743719412727, 39.187398510023954], [21.487485321072214, 39.187497755393075], [21.48746794189951, 39.18750926210258], [21.487536121719078, 39.18763008255194], [21.487554837742387, 39.18762432919719], [21.487594943498546, 39.18774946466266], [21.48752943742446, 39.187766724726885], [21.487522753129518, 39.18777535475897], [21.48737703542369, 39.187796929839216], [21.48737168798217, 39.1877710397429], [21.48706688349074, 39.187812751564735], [21.48704549367788, 39.187750903001316], [21.48698667167635, 39.18774802632397], [21.486971966172256, 39.18773076625979], [21.486965281851706, 39.18764158926141], [21.487119021146356, 39.18761282248777], [21.487141747810913, 39.187575425682], [21.48713372663559, 39.187506385425166], [21.487148432123334, 39.187490563699676], [21.487311529251528, 39.18746898861943], [21.487350298214118, 39.18746035858731], [21.48734361391096, 39.187441660184476]]
},{coords:[[21.487781173070776, 39.186545185371855], [21.48779704900618, 39.186645774033174], [21.48776000515424, 39.18664387613394], [21.487774117098954, 39.18678811647848], [21.487615357642163, 39.18679950387415], [21.48761006565727, 39.18692096942748], [21.4875271578691, 39.18691527572965], [21.487514809896602, 39.1869437442187], [21.487142606234073, 39.18683935975883], [21.487177886242932, 39.186727383701836], [21.487207874243733, 39.186731179500356], [21.48727667022221, 39.18652051268133], [21.487558909793545, 39.18654898117037], [21.487562437784742, 39.18657934755869], [21.487742365221443, 39.186545185371855]]
},
{coords:[[21.487796591045313, 39.187139697122525], [21.48777515710854, 39.187171340573535], [21.48777247786621, 39.187190038976446], [21.48778051559304, 39.18719579233117], [21.487669326999498, 39.18756400703409], [21.487626459085323, 39.187555377001964], [21.487584930781427, 39.18756832205012], [21.48751794962113, 39.18750072013201], [21.48751794962113, 39.187283530990854], [21.487560817567275, 39.18718572396035], [21.487595647764227, 39.18720010734718], [21.487651911910888, 39.18715120383199], [21.487662628888728, 39.18709942363942], [21.48776845900264, 39.18711524536491]]
},
{coords:[[21.487291690937848, 39.188042258645446], [21.487305832109747, 39.18820927378129], [21.487245732119717, 39.18820927378129], [21.4872174497629, 39.188220661176906], [21.487173258569353, 39.188285189752115], [21.487017705461326, 39.18834971832736], [21.486865687490592, 39.1883971658091], [21.486844475668097, 39.18824153806889], [21.48686215218707, 39.18790371199869], [21.486886899309994, 39.18789991620013], [21.48689220226437, 39.18778604224387], [21.486922252335454, 39.187757573754816], [21.48694876709892, 39.187757573754816], [21.486985887759666, 39.187806919135845], [21.48707957319463, 39.187956853178264], [21.48720507623006, 39.18792269099135], [21.487236893883786, 39.18803846284693]]
},
{coords:[[21.489007940663225, 39.18639341567524], [21.48901604577774, 39.186587445800804], [21.488907639833894, 39.18658962591458], [21.48889649529306, 39.186620147507355], [21.488816457201796, 39.18665066910016], [21.488761747595138, 39.186700811716904], [21.488698932836133, 39.18672915319591], [21.488606736931157, 39.186811997519186], [21.488595592367282, 39.186805457177876], [21.488389924353008, 39.186852329623925], [21.48838485863469, 39.186830528486226], [21.488246057884552, 39.186857779908344], [21.488244031595226, 39.18688612138739], [21.488046468252655, 39.18689157167177], [21.488033297353613, 39.186882851216744], [21.487879299061028, 39.18687304070477], [21.487858022968314, 39.18684469922574], [21.487874904485647, 39.18670283536671], [21.487894154281715, 39.18667994417213], [21.487973179733654, 39.18667449388771], [21.48804815255859, 39.18662980155543], [21.488082599519313, 39.18661018053147], [21.488095770413878, 39.18640197966639], [21.48827914966842, 39.1864085200077], [21.48830650456503, 39.18640415978017], [21.48830853085347, 39.186388898983786], [21.48858613210223, 39.18637472824428], [21.488588158386765, 39.186388898983786], [21.48884448315368, 39.18637472824428], [21.48886170654078, 39.186391079097554]]
},{coords:[[  21.490373677387332,  39.18617671791154],[  21.49031004344442,  39.18635132464446],[  21.49024994469497,  39.186639805333634],[  21.490161564136013,  39.186822003663664],[  21.490083789199744,  39.18684098265636],[  21.48992116874413,  39.186776454081155],[  21.48986212957674,  39.18671125624155],[  21.489736241197694,  39.18664367271466],[  21.489648931451526,  39.186536847139905],[  21.4895920785654,  39.186414760768734],[  21.489575834879545,  39.18626215280483],[  21.48958598718341,  39.18614660677496],[  21.4896083222494,  39.18603760108645],[  21.489736241197694,  39.18604632154153],[  21.489740302114846,  39.18599399881106],[  21.48986212957674,  39.186009259607445],[  21.48986822094715,  39.18605940222418],[  21.490000200576908,  39.18608556358942],[  21.4900672055739,  39.185651720949096],[  21.489722027986762,  39.185592857877275],[  21.48973014982177,  39.18545769082352],[  21.489482433650817,  39.18540972832059],[  21.489464159490367,  39.18553399480545],[  21.489257052178132,  39.185501293098916],[  21.489232686592615,  39.185671341973055],[  21.489047967249142,  39.18566521602134],[  21.48908955959316,  39.18472241579917],[  21.490323329711607,  39.184706920305565]
]
},{coords:[[  21.48826366598954,  39.18694504282632],[  21.488259001173343,  39.18702267591244],[  21.4882170178209,  39.187207993601994],[  21.488254336357006,  39.18724555799855],[  21.488149377949785,  39.187405832757015],[  21.487972114690173,  39.187323191084666],[  21.487923134014586,  39.187308165326066],[  21.48788581539352,  39.18743838856738],[  21.48777152705707,  39.1874083370501],[  21.48786482366499,  39.18704521455036],[  21.487920801601042,  39.18705022313658],[  21.487904474705275,  39.1871003089986],[  21.48793946090827,  39.18711533475724],[  21.48795345538712,  39.18709029182619],[  21.487986109165885,  39.187087787533095],[  21.488014098113275,  39.187042710257266],[  21.488039754643637,  39.187042710257266],[  21.48804441946687,  39.186937529946995]
]},{coords:[[  21.488552382630445,  39.186894203810404],[  21.488283363342525,  39.186922681463436],[  21.488296624868365,  39.187225765056304],[  21.488266312807514,  39.18732543684189],[  21.488241684253417,  39.187392562738324],[  21.488236000740365,  39.187475961579324],[  21.488374565693437,  39.18747804689628],[  21.488654951806897,  39.18758992339031],[  21.48869094728232,  39.187504490431245],[  21.48884440157772,  39.18754517279268],[  21.488895552973595,  39.18738651158299],[  21.488910708939265,  39.18721767978289],[  21.48877998868333,  39.18718513389375],[  21.488732626242754,  39.18721564566486],[  21.488632217817816,  39.187030540920205],[  21.488550754327793,  39.18702647268406]
]},{coords:[[  21.49001488358578,  39.18699697398277],[  21.489757601651693,  39.186919058666895],[  21.489704825814115,  39.186812810508826],[  21.489688333360935,  39.18677385285085],[  21.489569587642972,  39.18663927185066],[  21.48938487188911,  39.186656979876986],[  21.48934199141271,  39.1869828075617],[  21.489388170386764,  39.18705718127237],[  21.489246334919844,  39.18726967758847],[  21.489233140915882,  39.18727321919377],[  21.489183663390413,  39.18726259437798],[  21.489186961892646,  39.18710322214084],[  21.48902863370169,  39.18706072287762],[  21.4888999919197,  39.1876415461417],[  21.488698782750642,  39.18760613008901],[  21.48860312583503,  39.18812320445826],[  21.488510767374066,  39.18810549643193],[  21.488487677749674,  39.18810195482664],[  21.488451394046777,  39.18800987308965],[  21.488467886640116,  39.18756717243104],[  21.48829636357804,  39.187563630825785],[  21.488264832712336,  39.187527889523665],[  21.487740366597137,  39.18752080631309],[  21.487648007588675,  39.18788559165578],[  21.487723873921357,  39.18789267486632],[  21.48773047099186,  39.18810871278771],[  21.487862412339823,  39.18810871278771],[  21.48786571087199,  39.188285793051165],[  21.488504247779865,  39.18831179647338],[  21.48854444914398,  39.18844128862474],[  21.489003892516596,  39.18853994931152],[  21.489773456916303,  39.18863860999834],[  21.489853858932253,  39.18784315821118]
]},{coords:[[  21.489047034830378,  39.185663219858306],[  21.48898204002613,  39.185698112311876],[  21.488969541021977,  39.18581620984698],[  21.4889320440031,  39.18613829403367],[  21.488882047962885,  39.18614097806854],[  21.488874548555366,  39.18601751246365],[  21.488747058568535,  39.18601214439386],[  21.488652065956714,  39.185971883870536],[  21.488742058958934,  39.185971883870536],[  21.488922044796432,  39.186006776324106],[  21.488952042414365,  39.1858108417772],[  21.488857049936332,  39.18579473756788],[  21.48882705229882,  39.185786685463206],[  21.48882205269197,  39.185805473707404],[  21.488747058568535,  39.18578936949809],[  21.488739559154084,  39.18586989054476],[  21.488724560323984,  39.18596919983567],[  21.488654565763092,  39.185971883870536],[  21.488527184592158,  39.18598529674148],[  21.488519685166356,  39.18586988324128],[  21.4885046863136,  39.185851094997034],[  21.48849968669568,  39.18558805957792],[  21.48835955224042,  39.185591243392444],[  21.488122481108594,  39.185606356618074],[  21.48811611312049,  39.18576269187773],[  21.488052939357416,  39.18591530762753],[  21.487942385206026,  39.18592455706694],[  21.487899723222586,  39.18592095659086],[  21.487882224486345,  39.18600147763754],[  21.48779473077361,  39.186022949916655],[  21.487677738080624,  39.184770137838576],[  21.48911839019879,  39.18472340607691]
]},{coords:[[  21.48779521661414,  39.186020938228516],[  21.487736906213314,  39.185948313728545],[  21.48771824688012,  39.186000903883695],[  21.487762562792565,  39.18608604984917],[  21.4877578979603,  39.18624632460764],[  21.487708917212604,  39.18644917234892],[  21.487690257875823,  39.18648423245234],[  21.487596961156,  39.18648924103857],[  21.487596961156,  39.18646169381443],[  21.4873217354841,  39.1864291380041],[  21.48718645487833,  39.18645167664201],[  21.486975842675697,  39.1865170335812],[  21.48695251838686,  39.18652955504666],[  21.486975842675697,  39.186609692425954],[  21.48700149938909,  39.186659778287975],[  21.487094796490595,  39.186659778287975],[  21.487085466783153,  39.18686763461544],[  21.487426000718003,  39.18696279775333],[  21.487446992509813,  39.187012883615346],[  21.487435330403624,  39.187148115442845],[  21.487318709290236,  39.18714310685666],[  21.48732104171341,  39.18727583439102],[  21.48734903078871,  39.18728334727034],[  21.48735836047927,  39.1873860232875],[  21.487125118035706,  39.187411066218516],[  21.487125118035706,  39.18746365637367],[  21.48707613707509,  39.187496212183994],[  21.48706680736643,  39.18753878516674],[  21.487048147947323,  39.18758636673566],[  21.486845226610086,  39.18760890537358],[  21.486831232024684,  39.18758636673566],[  21.4867696715638,  39.187597258579366],[  21.4867142736287,  39.187640216228644],[  21.486406506938597,  39.18770960935437],[  21.486369574892045,  39.18482153355002],[  21.487680656805736,  39.18477196703165]
]},{coords:[[  21.486697381191927,  39.18764284713645],[  21.486714880070608,  39.18767773959002],[  21.486824872974182,  39.18765358327603],[  21.4868473715124,  39.18774484046224],[  21.486824872974182,  39.18778510098559],[  21.486807374108707,  39.187897830450915],[  21.486857370861596,  39.187908566590494],[  21.486844871675004,  39.18823870288184],[  21.486869870047144,  39.18839706094027],[  21.486427398225555,  39.1884668458474],[  21.486409899312306,  39.18770457993893]
]},{coords:[[  21.48756518636576,  39.18806330955022],[  21.487585287178888,  39.18830687812069],[  21.487855212114937,  39.188288379241904],[  21.487599644900865,  39.18829146238836]
]}
]
blocking_arr=[{name:"Stage BAB",coords:[[21.488737847715864, 39.185870490301845], [21.488749214702594, 39.185791159697], [21.488824047343098, 39.18580539852347], [21.488826889088184, 39.18578505734277], [21.488954767559456, 39.18580743264159], [21.48892256114025, 39.18600270797661], [21.48886951525775, 39.18599762268138], [21.488741636711534, 39.1859721962055], [21.488759634439635, 39.185872524419906]] },{name:"Stage OMDA",coords:[[21.488613769727486, 39.18705939334466], [21.488638085135506, 39.18706702374285], [21.488700899920733, 39.18719020017087], [21.488694314500957, 39.1872163615361], [21.488644670557814, 39.18724579307203], [21.48862086172194, 39.18723816267383], [21.488556020617196, 39.187116076302665], [21.488564125756888, 39.187088279852084]]},
{name:"Stage ROSHAN",coords:[[21.488519184630977, 39.18800944567662], [21.488479893887288, 39.18804098308654], [21.48849985109177, 39.18807050747032], [21.488514818993327, 39.18806044233951], [21.48855473338995, 39.188066481417984], [21.488565335649735, 39.18808392764477], [21.48860961566747, 39.18804836418247], [21.48858342185578, 39.1880067616417], [21.488568453961282, 39.18802018181616]]},
{name:"GA entrance", coords:[[  21.487559372962572,  39.18801043371367],[  21.487568845528276,  39.18805721842937],[  21.487297929905793,  39.188081627846266],[  21.487296035389186,  39.188038911366704]
]},{name:"VIB entrance",coords:[[  21.490068901257864,  39.18685251388977],[  21.490008599839197,  39.186972756601754],[  21.489908097419224,  39.1869265094048],[  21.489773136917478,  39.1869018442331],[  21.489741550399014,  39.18682476557156],[  21.489770265416098,  39.186775435228235],[  21.48980185192834,  39.18674768691003],[  21.48983918143399,  39.186729188031286],[  21.489893739924987,  39.186790850960485]
]}
]


