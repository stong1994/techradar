﻿//This is the title for your window tab, and your Radar
document.title = "2019阅读书单（持续更新中）";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'极度推荐'}
                  ,{'r':200,'name':'一般推荐'}
                  ,{'r':300,'name':'不推荐'}
                  ,{'r':400,'name':'未读/未读完'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1400;
var w = 1400;

var radar_data = [
    { "quadrant": "思想与提升",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            {"name": "原则", pc: { r: 50, t: 133 }, "movement":"c" },
            {"name":"人性的弱点", "pc":{"r":60,"t":120},"movement":"c"},
            {"name":"深度工作", "pc":{"r":70,"t":165},"movement":"c"},
			{"name": "这就是OKR", pc: { r: 75, t: 133 }, "movement":"c" },
            {"name":"思考，快与慢", "pc":{"r":80,"t":120},"movement":"c"},
            {"name":"穷查理宝典", "pc":{"r":85,"t":90},"movement":"c"},
            {"name":"见识", "pc":{"r":90,"t":120},"movement":"c"},
            {"name":"黑天鹅", "pc":{"r":95,"t":100},"movement":"c"},
            {"name":"异类", "pc":{"r":95,"t":170},"movement":"c"},
            {"name":"乔布斯传", "pc":{"r":99,"t":90},"movement":"c"},
            {"name":"穷爸爸富爸爸", "pc":{"r":100,"t":110},"movement":"c"},
            {"name":"成功的真谛", "pc":{"r":110,"t":160},"movement":"c"},
            {"name":"20岁,光阴不再来", "pc":{"r":120,"t":130},"movement":"c"},
			{"name":"鬼谷子", "pc":{"r":125,"t":140},"movement":"c"},
            {"name":"高敏感是种天赋", "pc":{"r":130,"t":150},"movement":"c"},
            {"name":"精进：如何成为一个很厉害的人", "pc":{"r":140,"t":120},"movement":"c"},
			{"name":"精进2：解锁外物的心智进化法", "pc":{"r":145,"t":125},"movement":"c"},
            {"name":"说话之道", "pc":{"r":150,"t":120},"movement":"c"},
            {"name":"如何让你爱的人爱上你", pc: { r: 160, t: 155 }, "movement":"c" },
            {"name":"副业赚钱", pc: { r: 165, t: 145 }, "movement":"c" },
            {"name":"自学是门艺术", "pc":{"r":170,"t":130},"movement":"c"},
            {"name":"读书是一辈子事", "pc":{"r":190,"t":150},"movement":"c"},
            {"name":"弱传播", "pc":{"r":260,"t":130},"movement":"c"},
            {"name":"巨人的工具", "pc":{"r":310,"t":135},"movement":"c"},
            {"name":"增长黑客", "pc":{"r":350,"t":170},"movement":"c"},
            {"name":"从0到1", "pc":{"r":370,"t":100},"movement":"c"},
            {"name":"思辨与立场", "pc":{"r":380,"t":140},"movement":"c"}
        ]
    },
    { "quadrant": "文学、哲学与世界观",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
            {"name":"瓦尔登湖", "pc":{"r":10,"t":45},"movement":"c"},
            {"name": "活着", pc: { r: 40, t: 30 }, "movement":"c" },
            {"name":"围城", "pc":{"r":40,"t":80},"movement":"c"},
            {"name": "边城", pc: { r: 40, t: 60 }, "movement":"c" },
            {"name": "树王+棋王+孩子王", pc: { r: 45, t: 45 }, "movement":"c" },
            {"name": "盖特露德+克诺尔普+悉达多", pc: { r: 50, t: 65 }, "movement":"c" },

			{"name":"活出生命的意义", "pc":{"r":55,"t":35},"movement":"c"},
	          {"name": "自私的基因", pc: { r: 45, t: 50 }, "movement":"c" },
            {"name":"流浪者之歌(即悉达多)", "pc":{"r":50,"t":80},"movement":"c"},
	          {"name":"一个叫欧维的男人决定去死", "pc":{"r":105,"t":40},"movement":"c"},
	          {"name":"摆渡人", "pc":{"r":115,"t":60},"movement":"c"},
	          {"name":"一句顶一万句", "pc":{"r":125,"t":70},"movement":"c"},
			  {"name":"世界上最神奇的24堂课", pc: { r: 130, t: 60 }, "movement":"c" },
	          {"name":"杀死一只知更鸟", "pc":{"r":135,"t":40},"movement":"c"},
	          {"name":"傲慢与偏见", "pc":{"r":145,"t":70},"movement":"c"},
            
            {"name":"我是你爸爸", "pc":{"r":160,"t":85},"movement":"c"},
            {"name":"变身", "pc":{"r":180,"t":40},"movement":"c"},
            {"name":"千面英雄", "pc":{"r":330,"t":75},"movement":"c"}
        ]
    },
    { "quadrant": "经济、法律与心理学",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
	    {"name":"乌合之众", "pc":{"r":30,"t":235},"movement":"c"},
            {"name": "西窗法雨", pc: { r: 90, t: 205 }, "movement":"c" },
            {"name":"自卑与超越", pc: { r: 110, t: 225 }, "movement":"c" },
			{"name":"演讲的力量", "pc":{"r":130,"t":235},"movement":"c"},
            {"name":"法学导论", "pc":{"r":120,"t":200},"movement":"c"},
            {"name":"国富论", "pc":{"r":360,"t":220},"movement":"c"}
		]
    },
    { "quadrant": "人文与历史",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            {"name":"人类简史", "pc":{"r":50,"t":310},"movement":"c"},
            {"name": "万历十五年", pc: { r: 80, t: 315 }, "movement":"c" },
            {"name":"美国陷阱", "pc":{"r":100,"t":330},"movement":"c"},
            {"name":"未来简史", "pc":{"r":150,"t":300},"movement":"c"},
            {"name":"乡土中国", "pc":{"r":330,"t":350},"movement":"c"},
            {"name":"历史的教训", "pc":{"r":350,"t":320},"movement":"c"}
        ]
    }
];
