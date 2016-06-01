var containers = new Array("cal_container", "single_container", "jieqi_container", "festival_container");
var fangjiaData = {yuandan: "2014年1月1日放假1天",chunjie: "1月31日至2月6日放假调休，共7天。1月26日（星期日）、2月8日（星期六）上班",qingmingjie: "4月5日放假，4月7日（星期一）补休",laodong: "5月1日至3日放假调休，共3天。5月4日（星期日）上班",duanwu: "6月2日放假，与周末连休",zhongqiu: "9月8日放假，与周末连休",guoqing: "10月1日至7日放假调休，共7天。9月28日（星期日）、10月11日（星期六）上班"};
var jieqiData = [];
function getJieQiData(a) {
    if (jieqiData.length > 0) {
        a();
    } else {
//        $.ajax({type: "GET",url: "data/jieqi.json?v=2014",dataType: "json",success: function(b) {
  //              jieqiData = b;
    //            a();
      //      }});
    }
}
var festivalData = new Object();
festivalData.yuandan = "2014_1_1";
festivalData.chunjie = "2014_1_31";
festivalData.qingmingjie = "2014_4_5";
festivalData.laodong = "2014_5_1";
festivalData.duanwu = "2014_6_2";
festivalData.zhongqiu = "2014_9_8";
festivalData.guoqing = "2014_10_1";
var showContainers = function(a) {
    for (i = 0; i < containers.length; 
    i++) {
        if (containers[i] != a) {
            $("#" + containers[i]).hide();
        } else {
            $("#" + a).show();
        }
    }
};
var lunarInfo = new Array(19416, 19168, 42352, 21717, 53856, 55632, 21844, 22191, 39632, 21970, 19168, 42422, 42192, 53840, 53909, 46415, 54944, 44450, 38320, 18807, 18815, 42160, 46261, 27216, 27968, 43860, 11119, 38256, 21234, 18800, 25958, 54432, 59984, 27285, 23263, 11104, 34531, 37615, 51415, 51551, 54432, 55462, 46431, 22176, 42420, 9695, 37584, 53938, 43344, 46423, 27808, 46416, 21333, 19887, 42416, 17779, 21183, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 38310, 38335, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 20854, 21183, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 53430, 53855, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 45653, 27951, 44448, 19299, 37759, 18936, 18800, 25776, 26790, 59999, 27424, 42692, 43759, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 19285, 19311, 42352, 21732, 53856, 59752, 54560, 55968, 27302, 22239, 19168, 43476, 42192, 53584, 62034, 54560);
var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
var nStr1 = new Array("日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
var nStr2 = new Array("初", "十", "廿", "卅", "□");
var monthName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
var cmonthName = new Array("正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊");
var sFtv = new Array("0101*元旦", "0214 情人节", "0308 妇女节", "0312 植树节", "0401 愚人节", "0422 地球日", "0501 劳动节", "0504 青年节", "0531 无烟日", "0601 儿童节", "0606 爱眼日", "0701 建党日", "0707 抗战纪念日", "0801 建军节", "0910 教师节", "0918 九·一八事变纪念日", "1001*国庆节", "1031 万圣节", "1111 光棍节", "1201 艾滋病日", "1213 南京大屠杀纪念日", "1224 平安夜", "1225 圣诞节");
var wFtv = new Array("0520 母亲节", "0630 父亲节", "1144 感恩节"); /*var lFtv=new Array("0101*春节","0115 元宵节","0202 龙抬头","0505 端午节","0707 七夕","0715 中元节","0815 中秋节","0909 重阳节","1208 腊八节","1223 小年","0100*除夕");*/

var sFtv = new Array("0101*元旦&元旦", "0308 妇女节", "0312 植树节", "0401 愚人节", "0422 地球日", "0501 劳动节", "0601 儿童节", "0608 世界海洋日", "0928 教师节 孔子诞辰", "1001*国庆节", "1024 联合国日")
var lFtv = new Array("0101 春节，本月为斋月！弥勒菩萨圣诞，又地藏斋，天腊，玉帝校世人神气禄命，犯者削禄夺纪，又月朔，犯者夺纪，又十斋日", "0202 万神都会，犯者夺纪，福德土地正神诞，犯者得祸", "0203 文昌帝君诞辰犯者削禄夺纪，斗降犯者夺纪", "0206 东华帝君诞，雷斋日，犯者减寿", "0207 观音斋", "0208 释迦牟尼佛出家，三殿宋帝王诞，张大帝诞，犯者夺纪，四天王巡行，又十斋日", "0209 六祖慧能圣诞，又观音斋", "0211 杨公忌,六祖慧能圣诞，又观音斋", "0214 四天王巡行，又十斋日", "0215 释迦牟尼佛涅槃，太上老君诞，又月望（即月半），犯者削禄夺纪，四天王巡行，又十斋日", "0217 东方杜将军诞", "0218 地藏斋，四殿五官王诞，至圣先师孔子讳辰，犯者削禄夺纪，又十斋日", "0219 观世音菩萨圣诞，犯者夺纪，又观音斋", "0221 普贤菩萨圣诞", "0223 四天王巡行，又十斋日", "0224 地藏斋，又十斋日", "0225 月晦日犯者减寿", "0226 净宗六祖永明法师圆寂日", "0227 斗降，犯者夺纪，又若月小则本日为十斋日", "0228 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日", "0229 四天王巡行，又十斋日", "0230 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "0301 地藏斋，二殿楚江王诞，又月朔，犯者夺纪，又十斋日", "0303 观音斋，玄天上帝诞，斗降，犯者夺纪", "0306 观音斋，雷斋日，犯者减寿", "0308 六殿卞城王诞，犯者夺纪，四天王巡行，又十斋日，四天王巡行，又十斋日", "0309 牛鬼神出，犯者产恶胎，杨公忌", "0312 中央正道诞", "0313 观音斋", "0314 四天王巡行，又十斋日", "0414 净宗十一祖省庵法师圆寂日，纯阳祖师诞，犯者减寿，四天王巡行，又十斋日", "0415 月望，犯者夺纪，钟离祖师诞，四天王巡行，又十斋日", "0416 天地仓开日，犯者损寿", "0417 十殿转轮王诞，犯者夺纪", "0418 地藏斋，天地仓开日，紫微大帝诞，犯者减寿，又十斋日", "0420 眼光圣母诞", "0422 观音斋", "0423 四天王巡行，又十斋日", "0424 地藏斋，又十斋日", "0425 月晦日，犯者减寿", "0427 斗降，犯者夺纪，又若月小则本日为十斋日", "0428 药王菩萨圣诞，又地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日", "0429 四天王巡行，又十斋日", "0430 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "0530 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "0601 地藏斋，又月朔，犯者夺纪，又十斋日", "0603 韦驮菩萨圣诞，斗降，犯者夺纪，杨公忌", "0605 南赡部洲转大法轮，犯者损寿", "0606 天地仓开日，雷斋日，犯者损寿", "0608 四天王巡行，又十斋日", "0610 金粟如来诞", "0614 四天王巡行，又十斋日", "0615 月望，犯者夺纪，四天王巡行，又十斋日", "0616 观音斋", "0618 观音斋，又地藏斋，又十斋日", "0619 观世音菩萨成道，又观音斋，犯者夺纪", "0623 观音斋，南方火神诞，犯者遭回禄，四天王巡行，又十斋日", "0624 地藏斋，雷祖诞，关帝诞，犯者削禄夺纪，又十斋日", "0625 月晦日，犯者减寿", "0627 斗降，犯者夺纪，又若月小则本日为十斋日", "0628 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日", "0629 四天王巡行，又十斋日", "0630 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "0701 地藏斋，又月朔，犯者夺纪，杨公忌，又十斋日,地藏王菩萨圣诞，犯者夺纪，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "0801 地藏斋，又月朔，犯者夺纪，许真君诞，又十斋日", "0803 斗降，北斗诞，犯者夺纪，司命灶君诞，犯者遭回禄", "0805 雷声大帝诞，犯者夺纪", "0806 净宗初祖慧远法师圆寂日，雷斋日，犯者减寿", "0808 四天王巡行，又十斋日", "0810 北斗大帝诞", "0812 西方五道诞", "0814 四天王巡行，又十斋日", "0815*中秋节，记得持斋诵戒！又月望，太明朝元，犯者暴亡，宜焚香守夜，四天王巡行，又十斋日", "0816 观音斋，天曹掠刷真君降，犯者贫夭", "0818 地藏斋，天人兴福之辰，宜斋戒，存想吉事，又十斋日", "0822 燃灯古佛圣诞", "0823 汉恒候张显王诞，四天王巡行，又十斋日", "0824 地藏斋，灶君夫人诞，又十斋日", "0825 月晦日，犯者减寿", "0827 斗降，至圣先师孔子诞，犯者夺纪，杨公忌，又若月小则本日为十斋日", "0828 地藏斋，人神在阴，犯者得病，宜先一日即戒（每月同），四天会事，又十斋日", "0829 四天王巡行，又十斋日", "0830 诸神考校，犯者夺算，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "0901 本月为斋月！地藏斋，又月朔，犯者夺纪，南斗诞，犯者削禄夺纪，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒，又十斋日", "0902 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0903 斗降，犯者夺纪，五瘟神诞，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0904 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0905 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0906 雷斋日，犯者减寿，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0907 北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0908 四天王巡行，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒，又十斋日", "0909 重阳节，斗母诞，犯者削禄夺纪，酆都大帝诞，玄天上帝飞升，北斗九星降世（自初一至初九），犯者夺纪，此九日俱宜斋戒", "0910 斗母降，犯者夺纪", "0911 宜戒", "0913 孟婆尊神诞", "0914 四天王巡行，又十斋日", "0915 月望，犯者夺纪，四天王巡行，又十斋日", "0917 金龙四大王诞，犯者遭水厄", "0918 地藏斋，又十斋日", "0919 观世音菩萨出家，日宫月宫会合，犯者减寿，又观音斋", "0923 观音斋，四天王巡行，又十斋日", "0924 地藏斋，又十斋日", "0925 月晦日，犯者减寿，杨公忌", "0927 斗降，犯者夺纪，又若月小则本日为十斋日", "0928 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日", "0929 四天王巡行，又十斋日", "0930 药师佛圣诞，犯者危疾，月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "1001 地藏斋，又月朔，民岁腊，犯者夺纪，四天王降，犯者一年内死，又十斋日", "1002 观音斋", "1003 净宗五祖少康法师圆寂日，斗降，犯者夺纪，三茅诞", "1005 达摩祖师诞辰，下会日，犯者损寿", "1006 雷斋日，犯者减寿，天曹考察，犯者夺纪", "1008 大忌色欲，四天王巡行，又十斋日", "1010 四天王降，犯者一年内死", "1011 宜戒", "1014 三元降，犯者减寿，四天王巡行，又十斋日", "1015 月望，三元降，下元水府校籍，犯者夺纪，四天王巡行，又十斋日", "1016 三元降，犯者减寿", "1018 地藏斋，又十斋日", "1023 四天王巡行，杨公忌，又十斋日", "1024 地藏斋，又十斋日", "1025 月晦日，犯者减寿", "1027 斗降，犯者夺纪，北极紫微大帝降，又若月小则本日为十斋日", "1028 地藏斋，人神在阴，犯者得病，宜先一日即戒 ，又十斋日", "1029 四天王巡行，又十斋日", "1030 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "1101 地藏斋，又月朔，犯者夺纪，又十斋日", "1103 斗降，犯者夺纪", "1104 净宗十三祖印光法师圆寂日，又至圣先师孔子诞，犯者削禄夺纪", "1106 雷斋日，犯者减寿，西岳大帝诞", "1108 四天王巡行，又十斋日", "1111 天地仓开日，太乙救苦天尊诞，犯者夺纪", "1114 四天王巡行，又十斋日", "1115 月望，上半夜犯男死下半夜犯女死，四天王巡行，又十斋日", "1117 阿弥陀佛圣诞，又净宗二祖善导法师圆寂日", "1118 地藏斋，又十斋日", "1119 观音斋，太阳日宫诞，犯者得奇祸", "1121 杨公忌", "1123 张仙诞，犯者绝嗣，四天王巡行，又十斋日", "1124 观音斋，又地藏斋，又十斋日", "1125 掠刷大夫降，犯者遭大凶，月晦日，犯者减寿", "1126 北方五道诞", "1127 斗降，犯者夺纪，又若月小则本日为十斋日", "1128 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日", "1129 四天王巡行，又十斋日", "1130 月晦，司命奏事，四天王巡行，犯者减寿，如月小，即戒廿九（每月同），又十斋日", "1201 净宗四祖法照法师圆寂日，又地藏斋，又月朔，犯者夺纪，又十斋日", "1203 斗降犯者夺纪", "1206 天地仓开日，又雷斋日，犯者减寿", "1207 掠刷大夫降，犯者得恶疾", "1208 释迦牟尼佛成道，腊八节，又四天王巡行，初旬内戊日，亦名王侯腊，犯者夺纪，又十斋日", "1212 太素三元君朝真", "1214 四天王巡行，又十斋日", "1215 月望，犯者夺纪，又四天王巡行，又十斋日", "1216 南岳大帝诞", "1217 净宗十二祖彻悟法师圆寂日", "1218 地藏斋，又十斋日", "1219 杨公忌", "1220 天地交道，犯者促寿", "1221 天猷上帝诞", "1223 监斋菩萨圣诞，五岳诞降，又四天王巡行，又灶君节，又十斋日", "1224 小年，地藏斋，又司命朝天奏人善恶，犯者得大祸，又十斋日", "1225 观音斋，三清玉帝同降，考察善恶，犯者得奇祸，又月晦日，犯者减寿", "1227 斗降，犯者夺纪，又若月小则本日为十斋日", "1228 地藏斋，人神在阴，犯者得病，宜先一日即戒，又十斋日", "1229 华严菩萨圣诞，又四天王巡行，又十斋日", "0100*除夕，记得持斋诵戒！诸神下降，察访善恶，犯者男女俱亡，又十斋日")
var wFtv = new Array("0520 母亲节&国际母亲节 救助贫困母亲日")
function lYearDays(c) {
    var a, b = 348;
    for (a = 32768; a > 8; a >>= 1) {
        b += (lunarInfo[c - 1900] & a) ? 1 : 0;
    }
    return (b + leapDays(c));
}
function leapDays(a) {
    if (leapMonth(a)) {
        return ((lunarInfo[a - 1899] & 15) == 15 ? 30 : 29);
    } else {
        return (0);
    }
}
function leapMonth(b) {
    var a = lunarInfo[b - 1900] & 15;
    return (a == 15 ? 0 : a);
}
function monthDays(b, a) {
    return ((lunarInfo[b - 1900] & (65536 >> a)) ? 30 : 29);
}
function Lunar(e) {
    var c, b = 0, a = 0;
    var f = (Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (c = 1900; c < 2100 && f > 0; c++) {
        a = lYearDays(c);
        f -= a;
    }
    if (f < 0) {
        f += a;
        c--;
    }
    this.year = c;
    b = leapMonth(c);
    this.isLeap = false;
    for (c = 1; c < 13 && f > 0; c++) {
        if (b > 0 && c == (b + 1) && this.isLeap == false) {
            --c;
            this.isLeap = true;
            a = leapDays(this.year);
        } else {
            a = monthDays(this.year, c);
        }
        if (this.isLeap == true && c == (b + 1)) {
            this.isLeap = false;
        }
        f -= a;
    }
    if (f == 0 && b > 0 && c == b + 1) {
        if (this.isLeap) {
            this.isLeap = false;
        } else {
            this.isLeap = true;
            --c;
        }
    }
    if (f < 0) {
        f += a;
        --c;
    }
    this.month = c;
    this.day = f + 1;
}
function getSolarDate(f, a, h, b) {
    var j = 0;
    for (var e = 1900; e < f; e++) {
        j += lYearDays(e);
    }
    for (var e = 1; e < a; e++) {
        if (e == leapMonth(f)) {
            j += leapDays(f);
        }
        j += monthDays(f, e);
    }
    if (b) {
        j += monthDays(f, e);
    }
    j += parseInt(h) - 1;
    var g = new Date(1900, 0, 31);
    var c = new Date(g.valueOf() + j * 86400000);
    return c;
}
function solarDays(b, a) {
    if (a == 1) {
        return (((b % 4 == 0) && (b % 100 != 0) || (b % 400 == 0)) ? 29 : 28);
    } else {
        return (solarMonth[a]);
    }
}
function cyclical(a) {
    return (Gan[a % 10] + Zhi[a % 12]);
}
function calElement(a, j, m, b, h, e, g, k, c, l, n, f) {
    this.isToday = false;
    this.sYear = a;
    this.sMonth = j;
    this.sDay = m;
    this.week = b;
    this.lYear = h;
    this.lMonth = e;
    this.lDay = g;
    this.isLeap = k;
    this.cYear = c;
    this.cMonth = l;
    this.cDay = n;
    this.color = "";
    this.lunarFestival = "";
    this.solarFestival = "";
    this.solarTerms = "";
    this.aYear = f;
}
function s_Term(b, a) {
    return new Date((31556925974.7 * (b - 1900) + sTermInfo[a] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
}
function sTerm(c, b) {
    var a = s_Term(c, b);
    return (a.getUTCDate());
}
function calendar(k, t) {
    var A, l, z, c, j = 1, g, B = 0, r, p, o;
    var x, a, h;
    var f = new Array(3);
    var s = 0;
    var e = 0;
    var b = "";
    A = new Date(k, t, 1, 0, 0, 0, 0);
    this.length = solarDays(k, t);
    this.firstWeek = A.getDay();
    if (t < 2) {
        x = cyclical(k - 1900 + 36 - 1);
        b = Animals[(k - 5) % 12];
    } else {
        x = cyclical(k - 1900 + 36);
        b = Animals[(k - 4) % 12];
    }
    var v = sTerm(k, 2);
    if (lichunException[k]) {
        v = lichunException[k];
    }
    var u = sTerm(k, t * 2);
    a = cyclical((k - 1900) * 12 + t + 12);
    var q = Date.UTC(k, t, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    for (var w = 0; w < this.length; w++) {
        if (j > B) {
            A = new Date(k, t, w + 1);
            l = new Lunar(A);
            z = l.year;
            c = l.month;
            j = l.day;
            g = l.isLeap;
            B = g ? leapDays(z) : monthDays(z, c);
            if (s == 0) {
                e = c;
            }
            f[s++] = w - j + 1;
        }
        if (t == 1 && (w + 1) == v) {
            x = cyclical(k - 1900 + 36);
            b = Animals[(k - 4) % 12];
        }
        if ((w + 1) == u) {
            a = cyclical((k - 1900) * 12 + t + 13);
        }
        h = cyclical(q + w);
        this[w] = new calElement(k, t + 1, w + 1, nStr1[(w + this.firstWeek) % 7], z, c, j++, g, x, a, h, b);
    }
    r = sTerm(k, t * 2) - 1;
    p = sTerm(k, t * 2 + 1) - 1;
    this[r].solarTerms = solarTerm[t * 2];
    this[p].solarTerms = solarTerm[t * 2 + 1];
    for (w in sFtv) {
        if (sFtv[w].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
            if (Number(RegExp.$1) == (t + 1)) {
                this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + " ";
                if (RegExp.$3 == "*") {
                    this[Number(RegExp.$2) - 1].color = "red";
                }
            }
        }
    }
    for (w in wFtv) {
        if (wFtv[w].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)) {
            if (Number(RegExp.$1) == (t + 1)) {
                r = Number(RegExp.$2);
                p = Number(RegExp.$3);
                if (r < 5) {
                    this[((this.firstWeek > p) ? 7 : 0) + 7 * (r - 1) + p - this.firstWeek].solarFestival += RegExp.$5 + " ";
                } else {
                    r -= 5;
                    o = (this.firstWeek + this.length - 1) % 7;
                    this[this.length - o - 7 * r + p - (p > o ? 7 : 0) - 1].solarFestival += RegExp.$5 + " ";
                }
            }
        }
    }
    for (w in lFtv) {
        if (lFtv[w].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
            r = Number(RegExp.$1) - e;
            if (r == -11) {
                r = 1;
            }
            if (r >= 0 && r < s) {
                p = f[r] + Number(RegExp.$2) - 1;
                if (p >= 0 && p < this.length && this[p].isLeap != true) {
                    this[p].lunarFestival += RegExp.$4 + " ";
                    if (RegExp.$3 == "*") {
                        this[p].color = "red";
                    }
                }
            }
        }
    }
}
function easter(h) {
    var b = sTerm(h, 5);
    var e = new Date(Date.UTC(h, 2, b, 0, 0, 0, 0));
    var a = new Lunar(e);
    if (a.day < 15) {
        var g = 15 - a.day;
    } else {
        var g = (a.isLeap ? leapDays(h) : monthDays(h, a.month)) - a.day + 15;
    }
    var f = new Date(e.getTime() + 86400000 * g);
    var c = new Date(f.getTime() + 86400000 * (7 - f.getUTCDay()));
    this.m = c.getUTCMonth();
    this.d = c.getUTCDate();
}
function cDay(b) {
    var a;
    switch (b) {
        case 10:
            a = "初十";
            break;
        case 20:
            a = "二十";
            break;
            break;
        case 30:
            a = "三十";
            break;
            break;
        default:
            a = nStr2[Math.floor(b / 10)];
            a += nStr1[b % 10];
    }
    return (a);
}
var worktime = {};
worktime.y2012 = {d0101: {w: "放假"},d0102: {w: "放假"},d0103: {w: "放假"},d0121: {w: "上班"},d0122: {w: "放假"},d0123: {w: "放假"},d0124: {w: "放假"},d0125: {w: "放假"},d0126: {w: "放假"},d0127: {w: "放假"},d0128: {w: "放假"},d0129: {w: "上班"},d0331: {w: "上班"},d0401: {w: "上班"},d0402: {w: "放假"},d0403: {w: "放假"},d0404: {w: "放假"},d0428: {w: "上班"},d0429: {w: "放假"},d0430: {w: "放假"},d0501: {w: "放假"},d0622: {w: "放假"},d0623: {w: "放假"},d0624: {w: "放假"},d0929: {w: "上班"},d0930: {w: "放假"},d1001: {w: "放假"},d1002: {w: "放假"},d1003: {w: "放假"},d1004: {w: "放假"},d1005: {w: "放假"},d1006: {w: "放假"},d1007: {w: "放假"}};
worktime.y2013 = {d0101: {w: "放假"},d0102: {w: "放假"},d0103: {w: "放假"},d0105: {w: "上班"},d0106: {w: "上班"},d0209: {w: "放假"},d0210: {w: "放假"},d0211: {w: "放假"},d0212: {w: "放假"},d0213: {w: "放假"},d0214: {w: "放假"},d0215: {w: "放假"},d0216: {w: "上班"},d0217: {w: "上班"},d0404: {w: "放假"},d0405: {w: "放假"},d0406: {w: "放假"},d0407: {w: "上班"},d0427: {w: "上班"},d0428: {w: "上班"},d0429: {w: "放假"},d0430: {w: "放假"},d0501: {w: "放假"},d0608: {w: "上班"},d0609: {w: "上班"},d0610: {w: "放假"},d0611: {w: "放假"},d0612: {w: "放假"},d0919: {w: "放假"},d0920: {w: "放假"},d0921: {w: "放假"},d0922: {w: "上班"},d0929: {w: "上班"},d1001: {w: "放假"},d1002: {w: "放假"},d1003: {w: "放假"},d1004: {w: "放假"},d1005: {w: "放假"},d1006: {w: "放假"},d1007: {w: "放假"},d1012: {w: "上班"}};
worktime.y2014 = {d0101: {w: "放假"},d0126: {w: "上班"},d0131: {w: "放假"},d0201: {w: "放假"},d0202: {w: "放假"},d0203: {w: "放假"},d0204: {w: "放假"},d0205: {w: "放假"},d0206: {w: "放假"},d0208: {w: "上班"},d0405: {w: "放假"},d0406: {w: "放假"},d0407: {w: "放假"},d0501: {w: "放假"},d0502: {w: "放假"},d0503: {w: "放假"},d0504: {w: "上班"},d0531: {w: "放假"},d0601: {w: "放假"},d0602: {w: "放假"},d0906: {w: "放假"},d0907: {w: "放假"},d0908: {w: "放假"},d0928: {w: "上班"},d1001: {w: "放假"},d1002: {w: "放假"},d1003: {w: "放假"},d1004: {w: "放假"},d1005: {w: "放假"},d1006: {w: "放假"},d1007: {w: "放假"},d1011: {w: "上班"}};
worktime.y2015 = {d0101: {w: "放假"},d0219: {w: "放假"},d0405: {w: "放假"},d0501: {w: "放假"},d0620: {w: "放假"},d0927: {w: "放假"},d1001: {w: "放假"}};
var festival_main = {"2013_01_01": "元旦","2013_02_10": "春节","2013_04_04": "清明节","2013_05_01": "劳动节","2013_06_12": "端午节","2013_09_19": "中秋节","2013_10_01": "国庆节"};
$.dom = function(a) {
    return document.getElementById(a);
};
function StringBuffer() {
    this._strings = new Array();
}
StringBuffer.prototype.append = function(a) {
    this._strings.push(a);
    return this;
};
StringBuffer.prototype.toString = function() {
    var a = arguments.length == 0 ? "" : arguments[0];
    return this._strings.join(a);
};
String.prototype.leftpad = function(a, e) {
    if (!e) {
        e = "0";
    }
    var c = "";
    for (var b = 0; b < a - this.length; b++) {
        c += e;
    }
    return c + this;
};
String.prototype.htmlspecialchars = function() {
    return this;
};
function getMonthKey(a, b) {
    return a.toString() + (b + 1).toString().leftpad(2);
}
function getDateKey(a) {
    return a.getFullYear().toString() + "-" + (a.getMonth() + 1).toString().leftpad(2) + "-" + a.getDate().toString().leftpad(2);
}
function is_leap_year(a) {
    if (a % 400 == 0 || (a % 100 != 0 && a % 4 == 0)) {
        return 1;
    }
    return 0;
}
function getDaysByMonth(a) {
    var b = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    return b[is_leap_year(a.getFullYear())][a.getMonth()];
}
function dateDiff(b, a) {
    var c = dateDiffDays(b, a);
    if (c == 0) {
        return "今天";
    } else {
        if (c < 0) {
            return (0 - c) + "天前";
        } else {
            return c + "天后";
        }
    }
}
function dateDiffDays(b, a) {
    var f = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    var e = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    var c = parseInt((e - f) / (24 * 60 * 60 * 1000));
    return c;
}
var cacheMgr = {cldCache: {},getCld: function(c, e) {
        var a = getMonthKey(c, e);
        var b = this.cldCache[a];
        if (typeof b == "undefined") {
            b = new calendar(c, e);
            this.cldCache[a] = b;
        }
        return b;
    }};
var HuangLi = {};
var calData = new Array();
var currentDate = new Date();
var rows;
var showingToday = true;
var taskHover_inblock = false;
var taskHover_inhover = false;
var madeRiliDate = new Date();
var record = {elem_id: "",nav_date: new Date()};
var timeSelf = 0;
var timeBeijing;
function clock(a) {
    timeSelf = (new Date()).getTime();
    timeBeijing = a * 1000;
}
var calander = {init: function() {
        makeCal.pareData(new Date());
        makeCal.showCal(new Date());
        makeCal.initAction();
        makeCal.makeHuangli(currentDate);
    },pareData: function(g) {
        g = makeCal.setTimeZero(g);
        madeRiliDate = new Date(g);
        var e = makeCal.getMonthFirst(g);
        var f = makeCal.getWeekFirst(e);
        var h = makeCal.addTime(e, 1, "month");
        var b = makeCal.addTime(h, -1, "day");
        rows = 6;
        var a = new Date(f);
        var c = makeCal.setTimeZero(new Date());
        makeCal.fillCalData(a, e, b, c, g);
    },fillCalData: function(c, h, k, l, b) {
        calData = [];
        for (var f = 0; f < rows; f++) {
            var a = [];
            for (var e = 0; 
            e < 7; e++) {
                var g = makeCal.createDay();
                g.year = c.getFullYear();
                g.month = c.getMonth();
                g.date = c.getDate();
                if (c.getTime() < h.getTime()) {
                    g.before = true;
                } else {
                    if (c.getTime() > k.getTime()) {
                        g.after = true;
                    }
                }
                if (c.getTime() == l.getTime()) {
                    g.today = true;
                }
                if (e == 5 || e == 6) {
                    g.weekend = true;
                }
                g.rows = rows;
                g.inrow = f + 1;
                g.value = c;
                g.china = templates.lunar_Info(g.value);
                if (+g.value == +b) {
                    g.highLight = true;
                }
                a.push(g);
                c = makeCal.addTime(c, 1, "day");
            }
            calData.push(a);
        }
    },prepareData4Festival: function(j, b) {
        b = makeCal.setTimeZero(b);
        madeRiliDate = new Date(b);
        var f = b, m = b;
        while (true) {
            var h = worktime["y" + f.getFullYear()];
            var a = getMonthDateStr(f);
            if (h["d" + a]) {
                f = makeCal.addTime(f, -1, "day");
            } else {
                f = makeCal.addTime(f, 1, "day");
                break;
            }
        }
        while (true) {
            var h = worktime["y" + m.getFullYear()];
            var a = getMonthDateStr(m);
            if (h["d" + a]) {
                m = makeCal.addTime(m, 1, "day");
            } else {
                m = makeCal.addTime(m, -1, "day");
                break;
            }
        }
        var g = f;
        var e = makeCal.getWeekFirst(g);
        var k = m;
        rows = 6;
        var c = new Date(e);
        var l = makeCal.setTimeZero(new Date());
        makeCal.fillCalData(c, g, k, l);
    },showCal: function(c) {
        if (typeof (c) == "undefined") {
            c = date = makeCal.setTimeZero(new Date());
        }
        c = makeCal.setTimeZero(c);
        if (downAppSwitch) {
            var o = new Date();
            if (o.getFullYear() == c.getFullYear() && o.getMonth() == c.getMonth()) {
                $("#today_button").html("<a href='" + downAppLink + "' target='_blank' style='color:#493413;display:block;'>手机版</a>");
                $("#today_button").css("width", "50px");
                $("#today_button").addClass("download_app_btn");
            } else {
                $("#today_button").html("今天");
                $("#today_button").css("width", "40px");
                $("#today_button").removeClass("download_app_btn");
            }
        }
        $("#year_time").text(c.getFullYear() + "年" + (c.getMonth() + 1) + "月");
        var r = "<table id='caltable'>             <thead class='tablehead'>               <tr>                 <td class='thead" + rows + "'>一</td>                 <td class='thead" + rows + "'>二</td>                 <td class='thead" + rows + "'>三</td>                 <td class='thead" + rows + "'>四</td>                 <td class='thead" + rows + "'>五</td>                 <td class='thead" + rows + "' style='color:#bc5016;'>六</td>                 <td class='thead" + rows + "' style='color:#bc5016;'>日</td>               </tr>             </thead>             <tbody>";
        var s = "";
        var t = null;
        for (var g = 0; g < rows; g++) {
            var a = "<tr>";
            for (var f = 0; f < 7; f++) {
                t = calData[g][f];
                var s = "";
                if (t.before == true) {
                    s = "before";
                } else {
                    if (t.after == true) {
                        s = "after";
                    }
                }
                var b = getMonthDateStr(t.value);
                var l = "";
                try {
                    var m = worktime["y" + t.year];
                    if (m) {
                        l = m["d" + b];
                    }
                } catch (k) {
                }
                var n = "";
                if (l) {
                    if (l.w == "上班") {
                        s = "workBlock";
                        n = "work";
                    } else {
                        s = "restBlock";
                        n = "rest";
                    }
                }
                if (t.today == true) {
                    s = "today today" + t.rows;
                }
                if (t.highLight) {
                    s += " highLight";
                }
                var q = "number";
                if (t.weekend == true) {
                    q = "weekendNum";
                }
                if (t.before) {
                    q = "before number";
                } else {
                    if (t.after) {
                        q = "after number";
                    }
                }
                var p = "";
                if (t.today == false && t.value.getTime() == c.getTime()) {
                    p = " clickBlock" + t.rows;
                }
                var h = "<td i=" + g + " j=" + f + " class='block block" + t.rows + " " + s + p + "'>";
                h += "<div class='block_content block_content" + t.rows + "'>";
                if (n == "work") {
                    h += "<div class='workrest work'>班</div>";
                } else {
                    if (n == "rest") {
                        h += "<div class='workrest rest'>休</div>";
                    }
                }
                if (t.today == false) {
                    h += " <div class='" + q + " number" + t.rows + "'>" + t.date + "</div>                <div class='chinaday chinaday" + t.rows + " festival' style='color: " + t.china.color + "'>" + (t.china.l_day).substring(0, 4) + "</div>";
                } else {
                    h += " <div class='" + q + " number" + t.rows + "'>" + t.date + "</div>                <div class='chinaday chinaday" + t.rows + " festival' style='color: white;'>" + t.china.l_day + "</div>";
                }
                if (t.hasWork) {
                    h += "<img class='workDot workDot" + t.rows + "' src='http://s.365rili.com/wannianlibaidu/BD_images/dot.png'/>";
                }
                h += "</div></td>";
                a += h;
            }
            a += "<tr>";
            r += a;
        }
        r += "</tbody></table>";
        $("#mainCal").empty();
        $("#mainCal").append(r);
        makeCal.makeAction();
    },initAction: function() {
        $("#next_button").bind("click", function(g) {
            var f = currentDate.getMonth();
            var b = currentDate.getFullYear();
            var a = madeRiliDate.getMonth();
            f = a;
            f++;
            if (f > 11) {
                f = 0;
                b++;
            }
            var c = a;
            currentDate = makeCal.addTime(currentDate, 1, "month");
            if (currentDate.getMonth() != (c + 1) % 12) {
                currentDate.setDate(1);
                currentDate.setMonth(c + 1);
            }
            $("#year_time").text(b + "年" + (f + 1) + "月");
            $("#festival_rest").text("");
            makeCal.nextMonth(currentDate);
        });
        $("#prev_button").bind("click", function(g) {
            var f = currentDate.getMonth();
            var b = currentDate.getFullYear();
            var a = madeRiliDate.getMonth();
            f = a;
            f--;
            if (f < 0) {
                f = 11;
                b--;
            }
            var c = a;
            currentDate = makeCal.addTime(currentDate, -1, "month");
            if (currentDate.getMonth() != (c + 11) % 12) {
                currentDate.setDate(1);
                currentDate.setMonth((c + 11) % 12);
            }
            $("#year_time").text(b + "年" + (f + 1) + "月");
            $("#festival_rest").text("");
            makeCal.prevMonth(currentDate);
        });
        $("#today_button").bind("click", function(a) {
            if ($(this).hasClass("download_app_btn")) {
                return;
            }
            makeCal.showToday();
            $("#festival_rest").text("");
        });
        $("#single_today_button").bind("click", function(a) {
            makeCal.showToday();
            $("#festival_rest").text("");
        });
        $("#single_today_button1").bind("click", function(a) {
            makeCal.showToday();
            $("#festival_rest").text("");
        });
        $("#top_bar_time").text(makeCal.get365riliTime());
        $("#festival_back_button").bind("click", function() {
            showContainers("cal_container");
        });
        $("#festival").bind("click", function() {
            showContainers("festival_container");
            $("#jieri_button").click();
        });
        $("#jieri_button").bind("click", function() {
            $("#mainJieri").show();
            $("#mainNongli").hide();
            if ($("#jieri_button").hasClass("active_tab_button") == false) {
                $("#jieri_button").addClass("active_tab_button");
            }
            $("#nongli_button").removeClass("active_tab_button");
        });
        $("#nongli_button").bind("click", function() {
            $("#mainNongli").show();
            $("#mainJieri").hide();
            if ($("#nongli_button").hasClass("active_tab_button") == false) {
                $("#nongli_button").addClass("active_tab_button");
            }
            $("#jieri_button").removeClass("active_tab_button");
        });
        $("#singleArrowLeftTd").bind("click", function() {
            currentDate = makeCal.addTime(currentDate, -1, "day");
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            makeCal.makeHuangli(currentDate);
        });
        $("#singleArrowRightTd").bind("click", function() {
            currentDate = makeCal.addTime(currentDate, 1, "day");
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            makeCal.makeHuangli(currentDate);
        });
        $("#jieqiDiv").bind("click", function(a) {
            getJieQiData(function() {
                name = $("#jieqiStr").text().substring(7);
                $("#jieqi_back_button").attr({from: "single_container"});
                for (var b = 0; b < 24; b++) {
                    if (name == jieqiData[b].name) {
                        var c = b;
                        $("#jieqiName").text(jieqiData[c].name);
                        $("#jieqiTime").text(jieqiData[c].time);
                        $("#jieqiDescribe").html(jieqiData[c].des.replace(/(^|<br\/>)/g, "$1　　"));
                        break;
                    }
                }
                showContainers("jieqi_container");
            });
        });
        $("#jieqi_back_button").bind("click", function() {
            var a = $("#jieqi_back_button").attr("from");
            showContainers(a);
        });
        $(".smallJieqiTd").bind("click", function(a) {
            getJieQiData(function() {
                ele = $(a.target);
                id = ele.attr("id");
                $("#jieqi_back_button").attr({from: "festival_container"});
                $("#jieqiName").text(jieqiData[id].name);
                $("#jieqiTime").text(jieqiData[id].time);
                $("#jieqiDescribe").html(jieqiData[id].des.replace(/(^|<br\/>)/g, "$1　　"));
                showContainers("jieqi_container");
            });
        });
        $(".jieriTd").bind("click", function(b) {
            if ($(this).attr("id") == "downApp_container") {
                return;
            }
            ele = $(this);
            jieri = ele.attr("jieri");
            settoFestival(jieri);
            var a;
            if (jieri == "qingming") {
                a = fangjiaData.qingmingjie;
            } else {
                a = fangjiaData[jieri];
            }
            $("#festival_rest").text(a);
            showContainers("cal_container");
        });
        setInterval(function() {
            var a = makeCal.get365riliTime();
            $("#top_bar_time").text(makeCal.get365riliTime());
            if (a == "00:00:00" && showingToday) {
                var b = new Date();
                makeCal.pareData(b);
                makeCal.showCal(b);
                makeCal.makeHuangli(b);
                $("#year_num").text(b.getFullYear());
                $("#month_num").text(b.getMonth() + 1);
            }
        }, 1000);
    },makeAction: function() {
        $(".block").bind("click", function(b) {
            var a = madeRiliDate.getMonth();
            ele = $(this);
            makeCal.makeHuangli(calData[ele.attr("i")][ele.attr("j")].value);
            showContainers("single_container");
            $("#festival_rest").text("");
        });
        $("#single_back_button").bind("click", function() {
            showContainers("cal_container");
        });
    },makeHuangli: function(c) {
        currentDate = c;
        c = makeCal.setTimeZero(c);
        var b = c.getDate();
        lunar = templates.lunar_Info_detail(c, l);
        $("#singleNumTd").text(b);
        var m = c.getFullYear() + "年" + (c.getMonth() + 1) + "月 ";
        switch (c.getDay()) {
            case 1:
                m += "星期一";
                break;
            case 2:
                m += "星期二";
                break;
            case 3:
                m += "星期三";
                break;
            case 4:
                m += "星期四";
                break;
            case 5:
                m += "星期五";
                break;
            case 6:
                m += "星期六";
                break;
            case 0:
                m += "星期日";
                break;
        }
        m += " ";
        $("#singleDateStr").text(m);
        var f = templates.lunar_Info(c).solarTerm;
        $("#festivalStr").text(templates.lunar_Info(c).festival);
        if (f != "") {
            $("#jieqiDiv").show();
            $("#jieqiStr").text("24节气 - " + f);
        } else {
            $("#jieqiDiv").hide();
        }
        $("#popDateStr").text(getFullDateStr(c));
        $("#popChineseStr").text((lunar.lunar).substring(2));
        var k = makeCal.setTimeZero(new Date());
        var h = k.getTime();
        var e = c.getTime();
        var g = Math.ceil((e - h) / 86400000);
        var j = "";
        if (k.getDate() == c.getDate()) {
            j = "今天";
        }
        if (g < 0) {
            j = (0 - g) + "天前";
        } else {
            if (g > 0) {
                j = g + "天后";
            }
        }
        $("#dayafterorbefore").text(j);
        $("#chinaDay").text((lunar.lunar).substring(2));
        info = lunar.y_Info;
        var a = info.split(" ");
        $("#nongliStr1").text(a[0]);
        $("#nongliStr2").text(a[1]);
        function l(n) {
            Y = n.huangliY;
            Ys = Y.split(".");
            $("#YStr").empty();
            for (var o in Ys) {
                $("#YStr").append(Ys[o] + " ");
            }
            J = n.huangliJ;
            Js = J.split(".");
            $("#JStr").empty();
            for (var o in Js) {
                $("#JStr").append(Js[o] + " ");
            }
        }
    },getWeekFirst: function(b) {
        var a = b.getDay();
        if (a == 0) {
            a = 7;
        }
        return makeCal.addTime(b, 0 - a + 1, "day");
    },getMonthFirst: function(a) {
        ndate = new Date(a);
        ndate.setDate(1);
        return ndate;
    },addTime: function(a, b, c) {
        ndate = new Date(a);
        switch (c) {
            case "day":
                ndate.setDate(a.getDate() + b);
                break;
            case "week":
                ndate.setDate(a.getDate() + 7 * b);
                break;
            case "month":
                ndate.setMonth(a.getMonth() + b);
                break;
            case "year":
                ndate.setYear(a.getFullYear() + b);
                break;
            case "hour":
                ndate.setHours(a.getHours() + b);
                break;
            case "minute":
                ndate.setMinutes(a.getMinutes() + b);
                break;
            default:
                return ndate;
        }
        return ndate;
    },setTimeZero: function(a) {
        ndate = new Date(a);
        ndate.setHours(0);
        ndate.setMinutes(0);
        ndate.setSeconds(0);
        ndate.setMilliseconds(0);
        return ndate;
    },createDay: function() {
        obj = new Object();
        obj.year = 0;
        obj.month = 0;
        obj.date = 0;
        obj.day = 0;
        obj.before = false;
        obj.after = false;
        obj.weekend = false;
        obj.china = null;
        obj.rows = 0;
        obj.inrow = 0;
        obj.today = false;
        obj.value = null;
        obj.hasWork = false;
        obj.highLight = false;
        return obj;
    },nextMonth: function(a) {
        makeCal.pareData(a);
        makeCal.showCal(a);
        showingToday = false;
        makeCal.makeHuangli(a);
    },prevMonth: function(a) {
        makeCal.pareData(a);
        makeCal.showCal(a);
        showingToday = false;
        makeCal.makeHuangli(a);
    },showToday: function() {
        currentDate = new Date();
        makeCal.pareData(currentDate);
        makeCal.showCal(new Date());
        $("#year_time").text(currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月");
        showingToday = true;
        $("#festival_rest").text("");
        makeCal.makeHuangli(currentDate);
    },bind_funcbutton: function(b, c, a) {
        $("#" + b).bind("click", function(f) {
            $("#" + a).css({top: $("#" + b).offset().top + 30 + "px"});
            $("#" + a).css({left: $("#" + b).position().left - 39 + "px"});
            $("#" + a).css({display: "block"});
            if (b == "year_func") {
                var h = $("#year_num").text();
                var g = $("#yearitem" + h).position().top;
                $("#" + a).scrollTop(g);
            }
        });
    },get365riliTime: function() {
        var a = (function() {
            if (timeBeijing != null) {
                var b = new Date();
                var c = b.getTime() - timeSelf;
                b.setTime(timeBeijing + c);
                return b;
            } else {
                return new Date();
            }
        })();
        hour = a.getHours();
        minute = a.getMinutes();
        second = a.getSeconds();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        return hour + ":" + minute + ":" + second;
    }};
function StringBuffer() {
    this._strings = new Array();
}
StringBuffer.prototype.append = function(a) {
    this._strings.push(a);
    return this;
};
StringBuffer.prototype.toString = function() {
    var a = arguments.length == 0 ? "" : arguments[0];
    return this._strings.join(a);
};
var templates = {month_day: function(a) {
        var b = a || new Date();
        return b.getDate();
    },lunar_Info: function(e) {
        var g = cacheMgr.getCld(e.getFullYear(), e.getMonth());
        var b = e.getDate();
        var h = g[b - 1];
        var a = {l_day: "",l_month: "",l_day_full: "",solarTerm: "",festival: ""};
        a.l_day = cDay(h.lDay);
        a.l_month = h.lMonth;
        a.color = "";
        var j, c;
        a.solarTerm = h.solarTerms;
        if (a.solarTerm == "undefined") {
            a.solarTerm = "";
        }
        var f = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
        if (typeof SolarTermException[f] != "undefined") {
            a.solarTerm = SolarTermException[f];
            if (a.solarTerm.length == 0) {
                a.color = "";
            }
        }
        j = h.lunarFestival;
        c = h.solarFestival;
        if (j.length > 0) {
            j = j + " " + c;
        } else {
            j = c;
        }
        if (a.solarTerm.length > 0) {
            a.l_day = a.solarTerm;
        }
        if (j.length > 0) {
            a.festival = j;
            a.l_day = j;
            a.color = "#bc5016";
        }
        return a;
    },lunar_Info_detail: function(date, callback) {
        var cld = cacheMgr.getCld(date.getFullYear(), date.getMonth());
        var year = date.getFullYear();
        var day = date.getDate();
        var cld_day = cld[day - 1];
        var festival = [];
        var info = {lunar: "",y_Info: "",huangliY: "无",huangliJ: "无"};
        info.lunar = "农历" + (cld_day.isLeap ? "闰 " : "") + templates.getChinaNum(cld_day.lMonth) + "月" + cDay(cld_day.lDay);
        info.y_Info = cld_day.cYear + "年" + this.lunar_year(cld_day.aYear) + " " + cld_day.cMonth + "月" + cld_day.cDay + "日";
        try {
            if (year >= 2008 && year <= 2020) {
                var huangliYearMonth = year + "" + (cld_day.sMonth < 10 ? ("0" + cld_day.sMonth) : cld_day.sMonth);
                if (eval("HuangLi.y" + huangliYearMonth) == null) {
                    var filename = "/wannianlibaidu/js/huangli/month/" + huangliYearMonth + ".js";
                    //$.getScript(filename, function() {
                    //    var hl = eval("HuangLi.y" + huangliYearMonth + ".d" + (cld_day.sMonth < 10 ? ("0" + cld_day.sMonth) : cld_day.sMonth) + (cld_day.sDay < 10 ? ("0" + cld_day.sDay) : cld_day.sDay));
                    //    info.huangliY = hl.y;
                    //    info.huangliJ = hl.j;
                     //   if (hl.y.length > 8 && hl.j.indexOf("诸事不宜") >= 0) {
                     //       info.huangliJ = "余事勿取";
                     //   }
                     //   if (callback) {
                    //        callback(info);
                    //    }
                    //});
                } else {
                    var hl = eval("HuangLi.y" + huangliYearMonth + ".d" + (cld_day.sMonth < 10 ? ("0" + cld_day.sMonth) : cld_day.sMonth) + (cld_day.sDay < 10 ? ("0" + cld_day.sDay) : cld_day.sDay));
                    info.huangliY = hl.y;
                    info.huangliJ = hl.j;
                    if (hl.y.length > 8 && hl.j.indexOf("诸事不宜") >= 0) {
                        info.huangliJ = "余事勿取";
                    }
                    if (callback) {
                        callback(info);
                    }
                }
            } else {
                if (callback) {
                    callback(info);
                }
            }
        } catch (e) {
        }
        return info;
    },lunar_year: function(a) {
        var b = "【" + a + "年】";
        return b;
    },getChinaNum: function(b) {
        var a;
        switch (b) {
            case 1:
                a = "一";
                break;
            case 2:
                a = "二";
                break;
            case 3:
                a = "三";
                break;
            case 4:
                a = "四";
                break;
            case 5:
                a = "五";
                break;
            case 6:
                a = "六";
                break;
            case 7:
                a = "七";
                break;
            case 8:
                a = "八";
                break;
            case 9:
                a = "九";
                break;
            case 10:
                a = "十";
                break;
            case 11:
                a = "十一";
                break;
            case 12:
                a = "腊";
                break;
        }
        return a;
    },init_sel_festival: function() {
        var b = festival_main;
        if (festival_main) {
            var c = new StringBuffer();
            c.append('<div id="festival_sel_body">');
            for (var a in festival_main) {
                c.append('<div date="' + a).append('">').append(festival_main[a] + "</div>");
            }
            c.append("</div>");
        }
        $("#festival_sel_div").html(c.toString());
        $("#festival_sel_body>div").each(function() {
            $(this).click(function() {
                var e = $(this).attr("date").split("_");
                record.nav_date.setFullYear(e[0]);
                record.nav_date.setMonth(Number(e[1]) - 1);
                generic_cal(record.nav_date, record.elem_id);
                $("#festival_sel_div").hide();
            });
            $(this).hover(function() {
                $(this).addClass("year_bg");
            }, function() {
                $(this).removeClass("year_bg");
            });
        });
    },init_sel_year: function() {
        var c = new StringBuffer();
        c.append('<div id="sel_body">');
        for (var b = 1900; b < 2050; b++) {
            c.append("<div>").append(b).append("</div>");
        }
        c.append("</div>");
        var a = record.nav_date.getFullYear() - 1900;
        $("#open_sel_div").html(c.toString());
        $("#sel_body>div").each(function() {
            $(this).click(function() {
                var e = $(this).html();
                record.nav_date.setFullYear(e);
                generic_cal(record.nav_date, record.elem_id);
                $("#open_sel_div").hide();
            });
            $(this).hover(function() {
                $(this).addClass("year_bg");
            }, function() {
                $(this).removeClass("year_bg");
            });
        });
    },mousedown_hide_ele: function(a) {
        $(document).bind("mousedown." + a, function(b) {
            var e = b.target;
            var c = document.getElementById(a);
            while (true) {
                if (e == c) {
                    return true;
                } else {
                    if (e == document) {
                        $(document).unbind("mousedown." + a);
                        $("#" + a).hide();
                        return false;
                    } else {
                        e = $(e).parent()[0];
                    }
                }
            }
        });
    }};
function getMonthKey(a, b) {
    return a.toString() + (b + 1).toString().leftpad(2);
}
String.prototype.leftpad = function(a, e) {
    if (!e) {
        e = "0";
    }
    var c = "";
    for (var b = 0; b < a - this.length; 
    b++) {
        c += e;
    }
    return c + this;
};
window.makeCal = calander;
function getMonthDateStr(a) {
    month = a.getMonth() + 1;
    day = a.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return month + "" + day;
}
function getFullDateStr(a) {
    month = a.getMonth() + 1;
    day = a.getDate();
    year = a.getFullYear();
    return year + "-" + month + "-" + day;
}
var SolarTermException = {"2011-11-22": "","2011-11-23": "小雪","2012-1-1": "元旦","2012-1-20": "","2012-1-21": "大寒","2012-5-20": "小满","2012-5-21": "","2012-12-6": "","2012-12-7": "大雪","2013-2-3": "","2013-2-4": "立春","2013-7-22": "大暑","2013-7-23": "","2013-12-21": "","2013-12-22": "冬至","2014-3-5": "","2014-3-6": "惊蛰","2015-1-5": "","2015-1-6": "小寒","2016-6-6": "","2016-6-7": "大雪","2017-7-22": "大暑","2017-7-23": "","2017-12-21": "","2017-12-22": "冬至","2018-2-18": "","2018-2-19": "雨水","2018-3-20": "","2018-3-21": "春分","2019-2-4": "立春","2019-2-5": "","2019-6-21": "夏至","2019-6-22": "","2020-7-6": "小暑","2020-7-7": "","2020-8-22": "处暑","2020-8-23": "","2020-12-6": "","2020-12-7": "大雪"};
var lichunException = {"2013": "4"};
function getYearWeek(a) {
    var b = new Date(a.getFullYear(), 0, 1);
    var e = a.getDay();
    if (e == 0) {
        e = 7;
    }
    var c = b.getDay();
    if (c == 0) {
        c = 7;
    }
    d = Math.round((a.getTime() - b.getTime() + (c - e) * (24 * 60 * 60 * 1000)) / 86400000);
    return Math.ceil(d / 7) + 1;
}
var downAppSwitch = true;
var downAppLink = "http://www.365rili.com/bd/transfer/redirect_baiduwap.html";
if (false && downAppSwitch) {
    var now = new Date();
    var fromTime = new Date();
    var toTime = new Date();
    fromTime.setHours(7);
    fromTime.setMinutes(30);
    fromTime.setSeconds(0);
    toTime.setHours(21);
    toTime.setMinutes(30);
    toTime.setSeconds(0);
    if (now > fromTime && now < toTime) {
        downAppSwitch = false;
    }
}
function onReady() {
    makeCal.init();
    gotoFestival();
}
window.onload = onReady;
function gotoFestival() {
    var a = window.location.search.substring(1);
    var e = a.split("bd_param=");
    var c = "";
    var b = /^([1-2]\d{3})[\/|\-](0?[1-9]|10|11|12)[\/|\-]([1-2]?[0-9]|0[1-9]|30|31)$/;
    if (e.length > 1) {
        c = e[1];
    }
    c = c.replace("festival%3D", "");
    switch (c) {
        case "jieqi":
            showContainers("festival_container");
            $("#nongli_button").click();
            break;
        case "fangjia":
            showContainers("festival_container");
            $("#jieri_button").click();
            break;
        case "lichun":
        case "yushui":
        case "jingzhe":
        case "chunfen":
        case "qingming":
        case "guyu":
        case "lixia":
        case "xiaoman":
        case "mangzhong":
        case "xiazhi":
        case "xiaoshu":
        case "dashu":
        case "liqiu":
        case "chushu":
        case "bailu":
        case "qiufen":
        case "hanlu":
        case "shuangjiang":
        case "lidong":
        case "xiaoxue":
        case "daxue":
        case "dongzhi":
        case "xiaohan":
        case "dahan":
            getJieQiData(function() {
                for (var f = 0; 
                f < 24; f++) {
                    if (c == jieqiData[f].ename) {
                        var g = f;
                        $("#jieqiName").text(jieqiData[g].name);
                        $("#jieqiTime").text(jieqiData[g].time);
                        $("#jieqiDescribe").html(jieqiData[g].des.replace(/(^|<br\/>)/g, "$1　　"));
                        break;
                    }
                }
                showContainers("jieqi_container");
            });
            break;
        case "rili_2013":
            currentDate.setFullYear(2013);
            currentDate.setMonth(0);
            currentDate.setDate(1);
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            $("#year_time").text(currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月");
            showingToday = true;
            makeCal.makeHuangli(currentDate);
            break;
        case "rili_2014":
            currentDate.setFullYear(2014);
            currentDate.setMonth(0);
            currentDate.setDate(1);
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            $("#year_time").text(currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月");
            showingToday = true;
            makeCal.makeHuangli(currentDate);
            break;
        case "rili_2015":
            currentDate.setFullYear(2015);
            currentDate.setMonth(0);
            currentDate.setDate(1);
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            $("#year_time").text(currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月");
            showingToday = true;
            makeCal.makeHuangli(currentDate);
            break;
        case "rili_2016":
            currentDate.setFullYear(2016);
            currentDate.setMonth(0);
            currentDate.setDate(1);
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            $("#year_time").text(currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月");
            showingToday = true;
            makeCal.makeHuangli(currentDate);
            break;
        case "rili_2012":
            currentDate.setFullYear(2012);
            currentDate.setMonth(0);
            currentDate.setDate(1);
            makeCal.pareData(currentDate);
            makeCal.showCal(currentDate);
            $("#year_time").text(currentDate.getFullYear() + "年" + (currentDate.getMonth() + 1) + "月");
            showingToday = true;
            makeCal.makeHuangli(currentDate);
        case "yuandan":
        case "chunjie":
        case "qingmingjie":
        case "laodong":
        case "duanwu":
        case "zhongqiu":
        case "guoqing":
            $("#festival_rest").text(fangjiaData[c]);
            settoFestival(c);
            break;
        default:
            if (b.test(c)) {
                settoDate(c);
                return;
            }
            $("#festival_rest").text("");
            break;
    }
}
function settoFestival(a) {
    if (a == "qingming") {
        a = "qingmingjie";
    }
    var b = festivalData[a].split("_");
    currentDate.setFullYear(parseInt(b[0], 10));
    currentDate.setMonth(parseInt(b[1], 10) - 1, 1);
    currentDate.setDate(parseInt(b[2], 10));
    makeCal.prepareData4Festival((new Date()).getFullYear(), currentDate);
    makeCal.showCal(currentDate);
    makeCal.makeHuangli(currentDate);
}
function settoDate(b) {
    var c = b.split("-");
    var a = new Date();
    a.setFullYear(parseInt(c[0], 10));
    a.setMonth(parseInt(c[1], 10) - 1, 1);
    a.setDate(parseInt(c[2], 10));
    calander.pareData(a);
    makeCal.showCal(a);
    $(".highLight").click();
}

